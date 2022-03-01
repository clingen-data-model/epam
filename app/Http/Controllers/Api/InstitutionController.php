<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ModelSearchService;
use App\Modules\Person\Models\Institution;

class InstitutionController extends Controller
{
    public function __construct()
    {
    }
    

    public function index(Request $request)
    {
        $searchService = new ModelSearchService(
            modelClass: Institution::class,
            defaultWith: ['country']
        );

        return $searchService->buildQuery($request->all())
                ->withCount('people')
                ->get();
    }
}
