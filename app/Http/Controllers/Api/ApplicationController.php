<?php

namespace App\Http\Controllers\Api;

use App\Models\Cdwg;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Bus\Dispatcher;
use App\Domain\Application\Jobs\AddContact;
use App\Domain\Application\Models\Application;
use App\Http\Requests\InitiateApplicationRequest;
use App\Domain\Application\Jobs\InitiateApplication;
use App\Domain\Application\Jobs\UpdateExpertPanelAttributes;
use App\Http\Requests\Applications\UpdateExpertPanelAttributesRequest;

class ApplicationController extends Controller
{
    private $dispatcher;

    public function __construct(Dispatcher $dispatcher)
    {
        $this->dispatcher = $dispatcher;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Application::query()->select('applications.*')->with('cdwg', 'logEntries');
        if ($request->has('sort')) {
            $field = $request->sort['field'];
            // dd($field);
            $dir = $request->sort['dir'] ?? 'asc';

            if ($field == 'cdwg.name') {
                $query->leftJoin('cdwgs', 'applications.cdwg_id', '=', 'cdwgs.id');
                $query->orderBy('cdwgs.name', $dir);
            }
            
            elseif ($field == 'latestLogEntry.created_at') {
                $subQuery = DB::table('activity_log')
                                ->select('subject_id', DB::raw('MAX(created_at) as latest_activity_at'))
                                ->where('subject_type', Application::class)
                                ->groupBy('subject_id');

                $query->leftJoinSub($subQuery, 'latest_activity', function ($join) {
                    $join->on('latest_activity.subject_id', '=', 'applications.id');
                })
                ->addSelect('latest_activity.latest_activity_at as latest_activity_at')
                ->orderBy('latest_activity_at', $dir);
            }
            
            else {
                $query->orderBy($field, $dir);
            }

        }

        if ($request->has('with')) {
            $realRelationships = [];
            $query->with($request->with);
        }

        if ($request->has('where')) {
            foreach ($request->where as $key => $value) {
                if ($key == 'since') {
                    $query->where('updated_at', '>', Carbon::parse($value));
                    continue;
                }
                $query->where($key, $value);
            }
        }
        $applications = $query->paginate(200);
        // $applications = $query->get();

        return $applications;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(InitiateApplicationRequest $request)
    {
        $data = $request->except('contacts');
        $data['cdwg_id'] = (int)$request->cdwg_id;
        $data['date_initiated'] = $request->date_initiated ? Carbon::parse($request->date_initiated) : null;
        $job = new InitiateApplication(...$data);
        $this->dispatcher->dispatchNow($job);

        $application = Application::findByUuid($request->uuid);
        
        return $application;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($uuid, Request $request)
    {
        $application = Application::findByUuidOrFail($uuid);
        $application->load(['latestLogEntry', 'cdwg', 'type', 'contacts', 'latestPendingNextAction']);
        return $application;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateExpertPanelAttributesRequest $request, $uuid)
    {
        $this->dispatcher->dispatch(new UpdateExpertPanelAttributes(uuid: $uuid, attributes: $request->all()));

        $application = Application::findByUuidOrFail($uuid);

        return $application;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
