<?php

use Illuminate\Support\Facades\Route;
use App\Modules\Group\Actions\GenesAdd;
use App\Modules\Group\Actions\MemberAdd;
use App\Modules\Group\Actions\GeneRemove;
use App\Modules\Group\Actions\GeneUpdate;
use App\Modules\Group\Actions\MemberInvite;
use App\Modules\Group\Actions\MemberRemove;
use App\Modules\Group\Actions\MemberRetire;
use App\Modules\Group\Actions\MemberUpdate;
use App\Modules\Group\Actions\AddGenesToVcep;
use App\Modules\Group\Actions\CurationReviewProtocolUpdate;
use App\Modules\Group\Actions\MemberAssignRole;
use App\Modules\Group\Actions\MemberRemoveRole;
use App\Modules\Group\Actions\EvidenceSummaryAdd;
use App\Modules\Group\Actions\EvidenceSummaryDelete;
use App\Modules\Group\Actions\EvidenceSummaryUpdate;
use App\Modules\Group\Actions\MemberGrantPermissions;
use App\Modules\Group\Actions\MemberRevokePermission;
use App\Modules\Group\Actions\ScopeDescriptionUpdate;
use App\Modules\Group\Actions\MembershipDescriptionUpdate;
use App\Modules\Group\Http\Controllers\Api\ActivityLogsController;
use App\Modules\Group\Http\Controllers\Api\GroupController;
use App\Modules\Group\Http\Controllers\Api\GeneListController;
use App\Modules\Group\Http\Controllers\Api\EvidenceSummaryController;

// Route::post('/{{group_uuid}}/members', MemberAdd::class);



Route::group([
    'prefix' => 'api/groups',
    'middleware' => ['api', 'auth:sanctum']
], function () {
    Route::get('/', [GroupController::class, 'index']);
    Route::get('/{uuid}', [GroupController::class, 'show']);

    Route::get('/{uuid}/activity-logs', [ActivityLogsController::class, 'index']);
    Route::post('/{uuid}/activity-logs', [ActivityLogsController::class, 'store']);
    Route::put('/{uuid}/activity-logs/{logEntryId}', [ActivityLogsController::class, 'update']);
    Route::delete('/{uuid}/activity-logs/{logEntryId}', [ActivityLogsController::class, 'destroy']);

    Route::put('/{uuid}/application/membership-description', MembershipDescriptionUpdate::class);
    Route::put('/{uuid}/application/scope-description', ScopeDescriptionUpdate::class);
    
    Route::get('/{uuid}/application/genes', [GeneListController::class, 'index']);
    Route::post('/{uuid}/application/genes', GenesAdd::class);
    Route::put('/{uuid}/application/genes/{gene_id}', GeneUpdate::class);
    Route::delete('/{uuid}/application/genes/{gene_id}', GeneRemove::class);

    Route::get('/{uuid}/application/evidence-summaries', [EvidenceSummaryController::class, 'index']);
    Route::post('/{uuid}/application/evidence-summaries', EvidenceSummaryAdd::class);
    Route::put('/{uuid}/application/evidence-summaries/{summaryId}', EvidenceSummaryUpdate::class);
    Route::delete('/{uuid}/application/evidence-summaries/{summaryId}', EvidenceSummaryDelete::class);
    
    Route::put('/{uuid}/application/curation-review-protocols', CurationReviewProtocolUpdate::class);

    Route::post('/{uuid}/invites', MemberInvite::class);
    
    Route::get('/{group_uuid}/members', [GroupController::class, 'members']);
    Route::post('/{group_uuid}/members', MemberAdd::class);
    Route::delete('/{group_uuid}/members/{member_id}', MemberRemove::class);
    Route::put('/{group_uuid}/members/{member_id}', MemberUpdate::class);
    Route::post('/{group_uuid}/members/{member_id}/retire', MemberRetire::class);
    
    Route::post('/{group_uuid}/members/{member_id}/roles', MemberAssignRole::class);
    Route::delete('/{group_uuid}/members/{member_id}/roles/{role_id}', MemberRemoveRole::class);

    Route::post('/{group_uuid}/members/{member_id}/permissions', MemberGrantPermissions::class);
    Route::delete('/{group_uuid}/members/{member_id}/permissions/{permission_id}', MemberRevokePermission::class);
});
