<?php

namespace App\DataExchange\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use App\DataExchange\Models\StreamMessage;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class Created
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $streamMessage;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(StreamMessage $streamMessage)
    {
        $this->streamMessage = $streamMessage;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
