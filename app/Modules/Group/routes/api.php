<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Group\Actions\MemberAdd;
use App\Modules\Group\Actions\MemberRemove;
use App\Modules\Group\Actions\MemberRetire;
use App\Modules\Group\Actions\MemberAssignRole;
use App\Modules\Group\Actions\MemberRemoveRole;
use App\Modules\Group\Actions\MemberGrantPermissions;

// Route::post('/{{group_uuid}}/members', MemberAdd::class);


Route::group([
    'prefix' => 'api/groups',
    'middleware' => ['api']
], function () {
    Route::get('/', function () {
        return 'groups!';
    });
    
    Route::post('/{group_uuid}/members', MemberAdd::class);
    Route::delete('/{group_uuid}/members/{member_id}', MemberRemove::class);
    Route::post('/{group_uuid}/members/{member_id}/retire', MemberRetire::class);

    Route::post('/{group_uuid}/members/{member_id}/roles', MemberAssignRole::class);
    Route::delete('/{group_uuid}/members/{member_id}/roles/{role_id}', MemberRemoveRole::class);

    Route::post('/{group_uuid}/members/{member_id}/permissions', MemberGrantPermissions::class);
    // Route::delete('/{group_uuid}/members/{member_id}/permissions/{role_id}', MemberRevokePermission::class);

    Route::group(['middleware' => ['auth:sanctum']], function () {
    });
});
