<?php

namespace App\Modules\Person\Actions;

use App\Models\Credential;
use Lorisleiva\Actions\ActionRequest;
use Lorisleiva\Actions\Concerns\AsController;

class CredentialSearch
{
    use AsController;

    public function handle(ActionRequest $request)
    {
        $query = Credential::query()->with('synonyms');

        if ($request->has('keyword')) {
            $query->whereRaw('LOWER(credentials.name) LIKE ?', '%'.$this->normalizeString($request->keyword.'%'));
            $query->orWhere(fn($q) => $q->matchesSynonym($request->keyword));
        }

        $query->orderBy('approved', 'DESC');
        $query->orderBy('name', 'ASC');

        return $query->get();
    }

    private function normalizeString(string $string): string
    {
        return preg_replace('/\./', '', strtolower($string));
    }


}
