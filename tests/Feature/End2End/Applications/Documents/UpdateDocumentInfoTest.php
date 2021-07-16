<?php

namespace Tests\Feature\End2End\Applications\Documents;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\Document;
use App\Modules\User\Models\User;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\Application\Models\Application;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;

/**
 * @group documents
 */
class UpdateDocumentInfoTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();
        $this->user = User::factory()->create();
        Sanctum::actingAs($this->user);
        $this->application = Application::factory()->create();
        $this->document = Document::factory()->make();
        $this->application->documents()->save($this->document);
        $this->docUrl = '/api/applications/'.$this->application->uuid.'/documents/'.$this->document->uuid;
        Carbon::setTestNow('2021-02-01');
    }

    /**
     * @test
     */
    public function it_updates_info_for_a_document()
    {
        $this->json('PUT', $this->docUrl, [
            'date_received' => Carbon::now(),
            'date_reviewed' => Carbon::now()->addDays(7),
            'notes' => 'This is a note!'
        ])
        ->assertStatus(200)
        ->assertJsonFragment([
            'date_received' => Carbon::now()->toISOString(),
            'date_reviewed' => Carbon::now()->addDays(7)->toISOString(),
            'notes' => 'This is a note!'
        ]);
    }

    /**
     * @test
     */
    public function it_validates_required_data()
    {
        $this->json('PUT', $this->docUrl, [])
            ->assertStatus(422)
            ->assertJsonFragment([
                'date_received' => ['The date received field is required.']
            ]);
    }
}
