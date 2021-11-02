<?php

namespace App\Modules\Group\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Modules\Group\Models\Group;
use App\Http\Controllers\Controller;
use App\ModelSearchService;
use App\Modules\Group\Http\Resources\GroupResource;
use App\Modules\Group\Http\Resources\MemberResource;

class GroupController extends Controller
{
    public function index(Request $request)
    {
        $searchService = new ModelSearchService(
            modelClass: Group::class,
            defaultWith: [
                'type', 
                'status', 
                'expertPanel', 
                'coordinators', 
                'coordinators.roles', 
                'coordinators.person'
            ],
            sortFunction: function ($query, $field, $dir) {
                if ($field == 'type') {
                    $query->innerJoin('group_types', 'groups.group_type_id', '=', 'group_types.id');
                    $query->ordeBy('group_types.name', $dir);
                    return $query;
                }
                if ($field == 'status') {
                    $query->innerJoin('group_statuses', 'groups.group_status_id', '=', 'group_statuses.id');
                    $query->ordeBy('group_statuses.name', $dir);
                    return $query;
                }
                return $query->orderBy($field, $dir);
            }
        );
        return $searchService->search($request->all());
    }

    public function show($uuid, Request $request)
    {
        $group = Group::findByUuidOrFail($uuid);
        $group->load([
            'type',
            'status',
            // 'members',
            // 'members.person',
            // 'members.roles',
            // 'members.permissions',
            // 'members.cois',
            'expertPanel',
        ]);

        return new GroupResource($group);
    }
    public function members(Request $request, $groupUuid)
    {
        $group = Group::findByUuidOrFail($groupUuid);
        $members = $group->members->load('roles', 'permissions', 'cois', 'person', 'person.institution');
        return MemberResource::collection($members);
    }
}