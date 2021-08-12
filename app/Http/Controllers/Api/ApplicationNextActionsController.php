<?php

namespace App\Http\Controllers\Api;

use App\Models\NextAction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Bus\Dispatcher;
use App\Http\Requests\UpdateNextActionRequest;
use App\Modules\ExpertPanel\Jobs\CreateNextAction;
use App\Modules\ExpertPanel\Jobs\DeleteNextAction;
use App\Modules\ExpertPanel\Jobs\UpdateNextAction;
use App\Modules\ExpertPanel\Jobs\CompleteNextAction;
use App\Http\Requests\Applications\CreateNextActionRequest;
use App\Http\Requests\Applications\CompleteNextActionRequest;

class ApplicationNextActionsController extends Controller
{
    public function __construct(private Dispatcher $dispatcher)
    {
        //code
    }

    public function store($expertPanelUuid, CreateNextActionRequest $request)
    {
        $job = new CreateNextAction(
            expertPanelUuid: $expertPanelUuid,
            uuid: $request->uuid,
            entry: $request->entry,
            dateCreated: $request->date_created,
            dateCompleted: $request->date_completed,
            targetDate: $request->target_date,
            step: $request->step,
            assignedTo: $request->assigned_to,
            assignedToName: $request->assigned_to_name
        );

        $this->dispatcher->dispatch($job);

        $nextAction = NextAction::findByUuid($request->uuid);

        return $nextAction;
    }

    public function update($expertPanelUuid, $id, UpdateNextActionRequest $request)
    {
        $all = $request->except('id', 'uuid');
        $cmdParams = [
            'expertPanelUuid' => $expertPanelUuid,
            'nextActionId' => $id
        ];
        foreach ($all as $key => $value) {
            $cmdParams[Str::camel($key)] = $value;
        }

        // dd($cmdParams);

        $this->dispatcher->dispatch(new UpdateNextAction(...$cmdParams));

        $nextAction = NextAction::find($id);

        return $nextAction;
    }
    

    public function complete($expertPanelUuid, $nextActionUuid, CompleteNextActionRequest $request)
    {
        $job = new CompleteNextAction(
            expertPanelUuid: $expertPanelUuid,
            nextActionUuid: $nextActionUuid,
            dateCompleted: $request->date_completed
        );
        $this->dispatcher->dispatch($job);

        $nextAction = NextAction::findByUuid($nextActionUuid);

        return $nextAction;
    }

    public function destroy($expertPanelUuid, $id)
    {
        $job = new DeleteNextAction(
            expertPanelUuid: $expertPanelUuid,
            nextActionId: $id
        );
        $this->dispatcher->dispatch($job);

        return response(['status' => 'success']);
    }
}
