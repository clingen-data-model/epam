<?php

namespace Tests\Feature\End2End\ExpertPanels\NextActions;

use Tests\TestCase;
use Ramsey\Uuid\Uuid;
use Laravel\Sanctum\Sanctum;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Bus;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Modules\ExpertPanel\Actions\NextActionCreate;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group next-actions
 * @group next_actions
 * @group nextactions
 */
class UpdateNextActionTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();

        $this->user = User::factory()->create();
        Sanctum::actingAs($this->user);
        $this->expertPanel = ExpertPanel::factory()->create();
        $this->baseUrl = '/api/applications/'.$this->expertPanel->uuid.'/next-actions';

        (new NextActionCreate)->handle(
            expertPanelUuid: $this->expertPanel->uuid,
            uuid: Uuid::uuid4(),
            dateCreated: '2020-01-01',
            entry: 'This is a next action',
            targetDate: '2020-02-01',
            assignedTo: 1,
            step: 1
        );
        $this->nextAction = $this->expertPanel->refresh()->nextActions->first();
    }

    /**
     * @test
     */
    public function updates_next_action()
    {
        $this->json(
            'PUT',
            $this->baseUrl.'/'.$this->nextAction->id,
            [
                'date_created' => '2020-02-01',
                'target_date' => '2020-03-01',
                'assigned_to' => 2,
                'assigned_to_name' => 'Early Dog',
                'entry' => 'This is the edited next action',
                'step' => 1
            ]
        )->assertStatus(200);

        $this->assertDatabaseHas('next_actions', [
            'id' => $this->nextAction->id,
            'date_created' => '2020-02-01 00:00:00',
            'target_date' => '2020-03-01 00:00:00',
            'assignee_id' => 2,
            'assignee_name' => 'Early Dog',
            'entry' => 'This is the edited next action',
            'application_step' => 1
        ]);
    }

    /**
     * @test
     */
    public function logs_next_action_updated()
    {
        $this->json(
            'PUT',
            $this->baseUrl.'/'.$this->nextAction->id,
            [
                'date_created' => '2020-02-01',
                'target_date' => '2020-03-01',
                'assigned_to' => 2,
                'assigned_to_name' => 'Early Dog',
                'entry' => 'This is the edited next action',
                'step' => 1
            ]
        )->assertStatus(200);
        
        $this->assertDatabaseHas('activity_log', [
            'subject_type' => get_class($this->expertPanel),
            'subject_id' => $this->expertPanel->id,
            'description' => 'Updated next action '.$this->nextAction->id,
            'properties->previous_data->date_created' => '2020-01-01T00:00:00.000000Z'
        ]);
    }
}
