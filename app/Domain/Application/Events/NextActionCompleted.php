<?php

namespace App\Domain\Application\Events;

use App\Models\NextAction;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use App\Domain\Application\Models\Application;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Support\Carbon;

class NextActionCompleted extends ApplicationEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(public Application $application, public NextAction $nextAction)
    {
        //
    }

    public function getLogEntry():string
    {
        return 'Next action completed: '.$this->nextAction->entry;
    }

    public function getProperties():array
    {
        return [
            'next_action' => $this->nextAction->toArray(),
        ];
    }
    

    public function getLogDate():Carbon
    {
        return $this->nextAction->date_completed;
    }
    
    

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    // public function broadcastOn()
    // {
    //     return new PrivateChannel('channel-name');
    // }
}
