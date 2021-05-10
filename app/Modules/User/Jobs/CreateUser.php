<?php

namespace App\Modules\User\Jobs;

use App\Modules\User\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Modules\User\Events\UserCreated;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateUser
{
    use Dispatchable;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(private string $name, private string $email)
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(Dispatcher $eventBus)
    {
        $user = User::create(['name' => $this->name, 'email' => $this->email, 'password' => Hash::make(uniqid())]);
        $eventBus->dispatch(new UserCreated(user: $user));

        return $user;
    }
}
