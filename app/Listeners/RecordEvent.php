<?php

namespace App\Listeners;

use App\Domain\Application\Events\ApplicationEvent;
use App\Domain\Application\Events\ApplicationInitiated;
use App\Events\RecordableEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecordEvent
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  RecordableEvent  $event
     * @return void
     */
    public function handle(RecordableEvent $event)
    {
        $causer = Auth::user();

        $logger = activity($event->getLog());

        if ($causer) {
            $logger->causedBy($causer);
        }

        if ($event->hasSubject()) {
            $logger->performedOn($event->getSubject());
        }

        $properties = $event->getProperties();
        if ($properties) {

            if ($event instanceof ApplicationEvent && !isset($properties['step'])) {
                $properties['step'] = $event->getStep();
            }
            
            $logger->withProperties($properties);
        }

        $logger->createdAt($event->getLogDate());

        $logger->log($event->getLogEntry());

    }
}
