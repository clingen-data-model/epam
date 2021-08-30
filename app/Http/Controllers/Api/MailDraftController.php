<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Bus;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\View;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Notifications\UserDefinedMailNotification;

class MailDraftController extends Controller
{
    protected $stepMessages = [
        1 => 'applications.email.approval.initial_approval',
        2 => 'applications.email.approval.vcep_step_2_approval',
        3 => 'applications.email.approval.vcep_step_3_approval',
        4 => 'applications.email.approval.vcep_step_4_approval',
    ];

    public function show($expertPanelUuid, $approvedStepNumber)
    {
        $expertPanel = ExpertPanel::findByUuidOrFail($expertPanelUuid);

        if (!isset($this->stepMessages[$approvedStepNumber])) {
            return abort(404);
        }

        $view = View::make(
            $this->stepMessages[$approvedStepNumber],
            [
                'expertPanel' => $expertPanel,
                'approvedStep' => $approvedStepNumber,
            ]
        );

        $ccrecipients = [];
        if (in_array($approvedStepNumber, config('expert-panels.notifications.cc.steps'))) {
            $ccrecipients = collect(config('expert-panels.notifications.cc.recipients'))
                                ->map(fn ($pair) => ['name' => $pair[1], 'email' => $pair[0]]);
        }

        return [
            'to' => $expertPanel->contacts
                        ->pluck('person')
                        ->map(function ($c) {
                            return [
                                'name' => $c->name,
                                'email' => $c->email,
                                'uuid' => $c->uuid
                            ];
                        }),
            'cc' => $ccrecipients,
            'subject' => 'Application step '.$approvedStepNumber.' for your ClinGen expert panel '.$expertPanel->name.' has been approved.',
            'body' => $view->render()
        ];
    }
}
