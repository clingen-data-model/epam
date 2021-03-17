<?php

namespace Tests\Feature\End2End\Applications;

use Tests\TestCase;
use App\Modules\User\Models\User;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Bus;
use App\Modules\Application\Jobs\AddContact;
use App\Modules\Application\Jobs\AddLogEntry;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\Application\Models\Application;
use App\Modules\Application\Jobs\CreateNextAction;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Modules\Application\Jobs\InitiateApplication;
use App\Modules\Application\Jobs\AddApplicationDocument;
use App\Modules\Person\Models\Person;

class AppliclicationDetailTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();
        $this->user = User::factory()->create();
        $this->uuid = Uuid::uuid4()->toString();
        Bus::dispatch(new InitiateApplication(
                        uuid: $this->uuid, 
                        working_name: 'test name', 
                        cdwg_id: 1, 
                        ep_type_id: 2,
                        date_initiated: Carbon::parse('2020-01-01')
                    ));
        Bus::dispatch(
            new AddApplicationDocument(
                applicationUuid: $this->uuid,
                uuid: Uuid::uuid4()->toString(),
                filename: uniqid().'test.tst', 
                storage_path: '/tmp/'.uniqid().'.tst',
                document_type_id: 1,
                step: 1,
                date_received: '2020-01-01'
            )
        );
        Bus::dispatch(
            new CreateNextAction(
                applicationUuid: $this->uuid,
                uuid: Uuid::uuid4()->toString(),
                entry: 'TEst me',
                dateCreated: '2020-01-01'
            )
        );
        Bus::dispatch(
            new AddLogEntry(
                applicationUuid: $this->uuid,
                entry: 'TEst me',
                logDate: Carbon::now()->addDays(1)->toJson()
            )
        );

        $person = Person::factory()->create();

        Bus::dispatch(
            new AddContact(
                applicationUuid: $this->uuid,
                uuid: $person->uuid,
            )
        );

        $this->application = Application::findByUuidOrFail($this->uuid);
    }

    /**
     * @test
     */
    public function gets_application_with_uuid()
    {
        \Laravel\Sanctum\Sanctum::actingAs($this->user);
            $this->json('get', '/api/applications/'.$this->uuid)
            ->assertStatus(200)
            ->assertJsonFragment(['working_name' => $this->application->working_name, 'uuid' => $this->uuid]);
    }

    /**
     * @test
     */
    public function loads_latestLogEntry_by_default()
    {
        \Laravel\Sanctum\Sanctum::actingAs($this->user);
            $this->json('get', '/api/applications/'.$this->uuid)
            ->assertStatus(200)
            ->assertJsonFragment(['description' => 'TEst me', 'uuid' => $this->uuid]);
    }

    /**
     * @test
     */
    public function loads_latestPendingNextAction_by_default()
    {
        \Laravel\Sanctum\Sanctum::actingAs($this->user);
            $this->json('get', '/api/applications/'.$this->uuid)
            ->assertStatus(200)
            ->assertJsonFragment(['entry' => 'TEst me']);
    }
    
    
    
    
}
