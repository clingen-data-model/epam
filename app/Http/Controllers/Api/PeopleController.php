<?php

namespace App\Http\Controllers\Api;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Bus\Dispatcher;
use App\Domain\Person\Models\Person;
use App\Http\Controllers\Controller;
use App\Domain\Person\Jobs\CreatePerson;
use App\Http\Requests\PersonCreationRequest;

class PeopleController extends Controller
{
    public function __construct(private Dispatcher $commandBus)
    {
    }

    public function index(Request $request)
    {
        return Person::all();
    }
    
    

    public function store(PersonCreationRequest $request)
    {
        $data = $request->only('first_name', 'last_name', 'email', 'phone', 'uuid');
        $this->commandBus->dispatch(new CreatePerson(...$data));
        $person = Person::findByUuid($request->uuid);
        
        if (!$person) {
             throw new Exception('Failed to find newly created person');
        }

        return $person;
    }
    
}
