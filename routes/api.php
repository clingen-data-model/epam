<?php

use App\Models\DocumentType;
use Illuminate\Http\Request;
use App\Actions\FeedbackSubmit;
use App\Actions\NotificationMarkRead;
use App\Http\Controllers\Api\AnnualReviewController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CdwgController;
use App\Http\Controllers\Api\PeopleController;
use App\Http\Controllers\Api\MailLogController;
use App\Http\Controllers\Api\MailDraftController;
use App\Http\Controllers\Api\GeneLookupController;
use App\Http\Controllers\Api\DiseaseLookupController;
use App\Http\Controllers\ImpersonateSearchController;
use App\Modules\User\Http\Controllers\CurrentUserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['guest']], function () {
    Route::post('/send-reset-password-link', [AuthController::class, 'sendResetPasswordLink']);
    Route::post('/reset-password', [AuthController::class, 'resetPassword']);
});

Route::get('/document-types', function () {
    return DocumentType::all();
});

Route::get('/authenticated', [AuthController::class, 'isAuthenticated']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/current-user', [CurrentUserController::class, 'show']);

    Route::post('/feedback', FeedbackSubmit::class);

    Route::get('/email-drafts/{applicationUuid}/{approvedStepNumber}', [MailDraftController::class, 'show']);
    Route::get('/mail-log', [MailLogController::class, 'index']);

    Route::put('/notifications/{notificationId}', NotificationMarkRead::class);

    Route::get('/impersonate/search', [ImpersonateSearchController::class, 'index']);

    Route::group(['prefix' => '/annual-reviews'], function () {
        Route::get('', [AnnualReviewController::class, 'index']);
        Route::get('/windows', [AnnualReviewController::class, 'windows']);
        Route::post('/export', [AnnualReviewController::class, 'export']);
        Route::get('/{id}', [AnnualReviewController::class, 'show']);
    });
});

Route::get('/cdwgs', [CdwgController::class, 'index']);

Route::get('/diseases/search', [DiseaseLookupController::class, 'search']);
Route::get('/diseases/{mondo_id}', [DiseaseLookupController::class, 'show']);

Route::get('/genes/search', [GeneLookupController::class, 'search']);
Route::get('/genes/{hgnc_id}', [GeneLookupController::class, 'show']);
