<?php

namespace Tests\Feature\Integration\Notificaitons;

use Tests\TestCase;
use Illuminate\Support\Carbon;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\ExpertPanel\Jobs\ApproveStep;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Notifications\UserDefinedMailNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Notification;

class NotifyStepApprovedTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->seed();
        
        $this->application = ExpertPanel::factory()->create([
            'ep_type_id' => config('expert_panels.types.gcep.id')
        ]);
        $this->addContactToApplication($this->application);
        $this->addContactToApplication($this->application);
    }

    /**
     * @test
     */
    public function does_not_send_StepApprovedNotification_if_notify_contacts_is_false()
    {
        $job = new ApproveStep($this->application->uuid, Carbon::now(), false);
        Notification::fake();
        Bus::dispatch($job);

        Notification::assertNothingSent();
    }

    /**
     * @test
     */
    public function does_not_send_StepApprovedNotification_if_is_last_step()
    {
        $job = new ApproveStep($this->application->uuid, Carbon::now(), true);
        Notification::fake(UserDefinedMailNotification::class);

        Bus::dispatch($job);

        // Notification::assertNothingSent();
        Notification::assertSentTo($this->application->contacts, UserDefinedMailNotification::class);
    }
    
    /**
     * @test
     */
    public function sends_StepApprovedNotification_if_not_last_step_and_notify_contacts_is_true()
    {
        $this->application->ep_type_id = config('expert_panels.types.vcep.id');
        $this->application->save();
        $job = new ApproveStep($this->application->uuid, Carbon::now(), true);
        Notification::fake(UserDefinedMailNotification::class);

        Bus::dispatch($job);

        Notification::assertSentTo($this->application->contacts, UserDefinedMailNotification::class);
    }

    /**
     * @test
     */
    public function step_1_approved_email_carbon_copies_clingen_addresses()
    {
        $this->application->ep_type_id = config('expert_panels.types.vcep.id');

        $clingenAddresses = config('applications.cc_on_step_approved');

        $mailMessage = (new UserDefinedMailNotification($this->application, 1, false, ccAddresses: $clingenAddresses))
                            ->toMail($this->application->contacts->first());


        $this->assertEquals($clingenAddresses, $mailMessage->cc);
    }

    /**
     * @test
     */
    public function steps_2_through_4_approved_does_not_cc_clingen_addresses()
    {
        $this->application->ep_type_id = config('expert_panels.types.vcep.id');

        $mailMessage = (new UserDefinedMailNotification($this->application, 2, false))
                            ->toMail($this->application->contacts->first());

        $this->assertEquals([], $mailMessage->cc);

        $mailMessage = (new UserDefinedMailNotification($this->application, 3, false))
                            ->toMail($this->application->contacts->first());

        $this->assertEquals([], $mailMessage->cc);

        $mailMessage = (new UserDefinedMailNotification($this->application, 4, false))
                            ->toMail($this->application->contacts->first());

        $this->assertEquals([], $mailMessage->cc);
    }
}
