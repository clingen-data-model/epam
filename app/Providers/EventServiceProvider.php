<?php

namespace App\Providers;

use App\Listeners\RecordEvent;
use App\Listeners\TestListener;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use App\Domain\Application\Events\ContactAdded;
use App\Domain\Application\Events\StepApproved;
use App\Domain\Application\Events\DocumentAdded;
use App\Domain\Application\Events\ContactRemoved;
use App\Domain\Application\Events\NextActionAdded;
use App\Domain\Application\Events\DocumentReviewed;
use App\Domain\Application\Events\NextActionCompleted;
use App\Domain\Application\Events\ApplicationCompleted;
use App\Domain\Application\Events\ApplicationInitiated;
use App\Domain\Application\Events\ExpertPanelAttributesUpdated;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        ApplicationInitiated::class => [
            RecordEvent::class,
        ],
        ApplicationCompleted::class => [
            RecordEvent::class,
        ],
        ExpertPanelAttributesUpdated::class => [
            RecordEvent::class,
        ],
        ContactAdded::class => [
            RecordEvent::class,
        ],
        ContactRemoved::class => [
            RecordEvent::class,
        ],
        DocumentAdded::class => [
            RecordEvent::class,
        ],
        DocumentReviewed::class => [
            RecordEvent::class,
        ],
        StepApproved::class => [
            RecordEvent::class,
        ],
        NextActionAdded::class => [
            RecordEvent::class,
        ],
        NextActionCompleted::class => [
            RecordEvent::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
    }
}
