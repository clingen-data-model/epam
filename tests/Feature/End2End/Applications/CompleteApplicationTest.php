<?php

namespace Tests\Feature\End2End\Applications;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Foundation\Testing\WithFaker;
use App\Domain\Application\Models\Application;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CompleteApplicationTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();
        $this->user = User::factory()->create();
    }

    /**
     * @test
     */
    public function gcep_application_completed_when_step1_approved()
    {
        $application = Application::factory()->gcep()->create();
        $dateApproved = Carbon::parse('2021-09-16');
        $this->actingAs($this->user, 'api')
            ->json('POST', '/api/applications/'.$application->uuid.'/current-step/approve', ['date_approved' => $dateApproved])
            ->assertStatus(200)
            ->assertJsonFragment([
                'date_completed' => $dateApproved->toJson(),
                'current_step' => 1
            ]);
    }
    
    /**
     * @test
     */
    public function vcep_application_completed_when_step4_approved()
    {
        $application = Application::factory()->vcep()->create();
        $application->approveCurrentStep(Carbon::parse('2021-01-02'));
        $this->assertEquals(2, $application->current_step);
        $this->assertNull($application->date_completed);

        $application->approveCurrentStep(Carbon::parse('2021-01-03'));
        $this->assertEquals(3, $application->current_step);
        $this->assertNull($application->date_completed);
        
        $application->approveCurrentStep(Carbon::parse('2021-01-04'));
        $this->assertEquals(4, $application->current_step);
        $this->assertNull($application->date_completed);

        $dateApproved = Carbon::parse('2021-09-16');
        $this->actingAs($this->user, 'api')
            ->json('POST', '/api/applications/'.$application->uuid.'/current-step/approve', ['date_approved' => $dateApproved])
            ->assertStatus(200)
            ->assertJsonFragment([
                'date_completed' => $dateApproved->toJson()
            ]);
    }
    


    
}
