<?php
namespace App\Modules\Group\Events;

use App\Modules\ExpertPanel\Models\EvidenceSummary;
use App\Modules\Group\Models\Group;
use Illuminate\Queue\SerializesModels;
use App\Modules\Group\Events\GroupEvent;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class EvidenceSummaryDeleted extends GroupEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(public Group $group, public EvidenceSummary $evidenceSummary){}

    public function getLogEntry(): string
    {
        return 'Evidence summary '.$this->evidenceSummary->id.' on '.$this->group->name.' deleted.';
    }
    
    public function getProperties(): ?array
    {
        return ['evidence_summary_id' => $this->evidenceSummary->id];
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
