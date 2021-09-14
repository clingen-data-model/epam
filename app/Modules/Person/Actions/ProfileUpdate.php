<?php

namespace App\Modules\Person\Actions;

use DateTimeZone;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use App\Modules\Person\Models\Person;
use Illuminate\Support\Facades\Event;
use Lorisleiva\Actions\ActionRequest;
use Lorisleiva\Actions\Concerns\AsObject;
use App\Modules\Person\Events\ProfileUpdated;
use Lorisleiva\Actions\Concerns\AsController;
use App\Modules\Person\Http\Requests\ProfileUpdateRequest;
use App\Modules\Person\Policies\ProfilePolicy;

class ProfileUpdate
{
    use AsObject;
    use AsController;

    public function handle(Person $person, array $data)
    {
        $policy = new ProfilePolicy();
        if (Auth::guest()) {
            abort(403);
        }
        // if (!$policy->update(Auth::user(), $person)) {
        if (Auth::user()->cannot('update', $person)) {
            abort(403);
        }
        $person->update($data);

        Event::dispatch(new ProfileUpdated($person, $data));

        return $person;
    }

    public function asController($personUuid, ProfileUpdateRequest $request)
    {
        $person = Person::findByUuidOrFail($personUuid);

        return $this->handle($person, $request->all());
    }
}
