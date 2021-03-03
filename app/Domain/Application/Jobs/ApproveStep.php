<?php

namespace App\Domain\Application\Jobs;

use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Notification;
use App\Domain\Application\Models\Application;
use App\Domain\Application\Events\StepApproved;
use App\Domain\Application\Service\StepManagerFactory;
use App\Domain\Application\Exceptions\UnmetStepRequirementsException;
use App\Domain\Application\Notifications\ApplicationStepApprovedNotification;

class ApproveStep
{
    use Dispatchable;

    private Application $application;
    private Carbon $dateApproved;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        string $applicationUuid, 
        string $dateApproved,
        private bool $notifyContacts = false,
        private bool $notifyClingen = false
    )
    {
        $this->application = Application::findByUuidOrFail($applicationUuid);
        $this->dateApproved = $dateApproved ? Carbon::parse($dateApproved) : Carbon::now();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $stepManager = app()->make(StepManagerFactory::class)($this->application);
        
        if (! $stepManager->canApprove()) {
            throw new UnmetStepRequirementsException($this->application, $stepManager->getUnmetRequirements());
        }

        $wasLastStep = $stepManager->isLastStep();
        $approvedStep = $this->application->current_step;
        $this->application->addApprovalDate($approvedStep, $this->dateApproved);

        if (!$wasLastStep) {
            $this->application->current_step = $this->application->current_step+1;
        }
        
        $this->application->save();

        $event = new StepApproved(
                    application: $this->application, 
                    step: $approvedStep, 
                    dateApproved: $this->dateApproved
                );
        Event::dispatch($event);
        
        if ($wasLastStep) {
            $this->application->completeApplication($this->dateApproved);
        }

        // TODO: extract to command and log an event on the person.
        if ($this->notifyContacts) {
            Notification::send($this->application->contacts, new ApplicationStepApprovedNotification($this->application, $approvedStep, $wasLastStep));
        }
    }
}
