<?php

namespace Tests\Feature\Integration\Modules\Application\Jobs;

use Tests\TestCase;
use App\Models\NextAction;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Modules\ExpertPanel\Actions\NextActionCreate;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Modules\ExpertPanel\Events\NextActionCompleted;
use App\Modules\ExpertPanel\Jobs\CompleteNextAction;

class CompleteNextActionTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();
        $this->expertPanel = ExpertPanel::factory()->create();
    }

    /**
     * @test
     */
    public function raises_NextActionCompleted_event()
    {
        $nextAction = NextAction::factory()->make();
        (new NextActionCreate)->handle(
            expertPanelUuid: $this->expertPanel->uuid,
            uuid: $nextAction->uuid,
            dateCreated: $nextAction->date_created,
            entry: $nextAction->entry,
            dateCompleted: $nextAction->dateCompleted,
            targetDate: $nextAction->targetDate,
            step: $nextAction->step
        );

        Event::fake();

        Bus::dispatch(
            new CompleteNextAction(
                expertPanelUuid: $this->expertPanel->uuid,
                nextActionUuid: $nextAction->uuid,
                dateCompleted: '2021-02-01'
            )
        );

        Event::assertDispatched(NextActionCompleted::class);
    }
    
    /**
     * @test
     */
    public function NextActionCompleted_logged()
    {
        $nextAction = NextAction::factory()->make();
        (new NextActionCreate)->handle(
            expertPanelUuid: $this->expertPanel->uuid,
            uuid: $nextAction->uuid,
            dateCreated: $nextAction->date_created,
            entry: $nextAction->entry,
            dateCompleted: $nextAction->dateCompleted,
            targetDate: $nextAction->targetDate,
            step: $nextAction->step
        );

        Bus::dispatch(
            new CompleteNextAction(
                expertPanelUuid: $this->expertPanel->uuid,
                nextActionUuid: $nextAction->uuid,
                dateCompleted: '2021-02-01'
            )
        );

        $this->assertDatabaseHas('activity_log', [
            'subject_id' => $this->expertPanel->id,
            'description' => 'Next action completed: '.$nextAction->entry
        ]);
    }
}
