<?php

namespace App\Domain\Application\Events;

use App\Models\Document;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use App\Domain\Application\Models\Application;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use App\Domain\Application\Events\ApplicationEvent;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class DocumentAdded extends ApplicationEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(
        public Application $application, 
        public Document $document
    )
    {
        //
    }

    public function getLogEntry():string
    {
        return 'Added version '.$this->document->version.' of '.$this->document->category->long_name.'.';
    }
    

    public function getProperties(): array
    {
        return $this->document->toArray();
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
