<?php

namespace App\Domain\Application\Jobs;

use Carbon\Carbon;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Domain\Application\Exceptions\UnmetStepRequirementsException;
use App\Domain\Application\Models\Application;
use App\Domain\Application\Service\StepManagerFactory;

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
    public function handle(StepManagerFactory $stepManagerFactory)
    {
        $stepManager = $stepManagerFactory($this->application);
        
        if (! $stepManager->canApprove()) {
            throw new UnmetStepRequirementsException($this->application, $stepManager->getUnmetRequirements());
        }

        $this->application->approveCurrentStep($this->dateApproved);
    }
}
