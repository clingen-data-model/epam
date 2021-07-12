<?php

namespace Tests\Feature\End2End\Applications\NextActions;

use Tests\TestCase;
use Ramsey\Uuid\Uuid;
use Laravel\Sanctum\Sanctum;
use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Bus;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\Application\Models\Application;
use App\Modules\Application\Jobs\CreateNextAction;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * @group next-actions
 * @group next_actions
 * @group nextactions
 */
class DeleteNextActionTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();

        $this->user = User::factory()->create();
        Sanctum::actingAs($this->user);
        $this->application = Application::factory()->create();
        $this->baseUrl = '/api/applications/'.$this->application->uuid.'/next-actions';

        Bus::dispatch(new CreateNextAction(
            applicationUuid: $this->application->uuid,
            uuid: Uuid::uuid4(),
            dateCreated: '2020-01-01',
            entry: 'This is a next action',
            targetDate: '2020-02-01',
            assignedTo: 1,
            step: 1
        ));
        $this->nextAction = $this->application->refresh()->nextActions->first();
    }

    /**
     * @test
     */
    public function deletes_next_action()
    {
        $this->json('DELETE', $this->baseUrl.'/'.$this->nextAction->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('next_actions', [
            'id' => $this->nextAction->id,
            'deleted_at' => null
        ]);
    }
}
