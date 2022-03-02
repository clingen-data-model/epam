<?php

namespace App\DataExchange\Kafka;

use App\DataExchange\Contracts\MessagePusher;
use App\DataExchange\Exceptions\StreamingServiceException;
use Ramsey\Uuid\Uuid;

class KafkaProducer implements MessagePusher
{
    protected $rdKafkaProducer;
    protected $topic;
    protected $kafkaConfig;
 
    public function __construct(\RdKafka\Producer $phpRdProducer)
    {
        $this->rdKafkaProducer = $phpRdProducer;
        // $this->rdKafkaProducer->setLogLevel(LOG_DEBUG);
    }

    private function produceOnTopic($message, \RdKafka\ProducerTopic $topic, $uuid = null)
    {
        try {
            $uuid = $uuid ?? Uuid::uuid4()->toString();
            $topic->produce(RD_KAFKA_PARTITION_UA, 0, $message, $uuid);
            $this->rdKafkaProducer->poll(0);
            
            for ($flushRetries = 0; $flushRetries < 10; $flushRetries++) {
                $result = $this->rdKafkaProducer->flush(1000);
                if (RD_KAFKA_RESP_ERR_NO_ERROR === $result) {
                    break;
                }
            }
        } catch (\Throwable $e) {
            report($e);
        }
    }

    public function topic(string $topic)
    {
        if ($this->topic) {
            return $this->topic;
        }
        $this->topic = $this->rdKafkaProducer->newTopic($topic);
        return $this;
    }

    public function push(string $message, $uuid = null)
    {
        dump(__METHOD__);
        dump([
            'topic' => $this->topic,
            'message' => $message,
            'uuid' => $uuid
        ]);
        if (!$this->topic) {
            throw new StreamingServiceException('You must set a topic on the Producer before you can use KafkaProducer::produce');
        }
        $uuid = $uuid ?? Uuid::uuid4()->toString();
        $this->produceOnTopic($message, $this->topic, $uuid);
    }
}
