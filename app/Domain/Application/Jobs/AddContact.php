<?php

namespace App\Domain\Application\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use App\Domain\Application\Models\Person;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Domain\Application\Models\Application;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Validation\ValidationException;

class AddContact implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(
        private string $applicationUuid,
        private string $uuid,
        private string $first_name,
        private string $last_name,
        private string $email,
        private string $phone,
    )
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {        
        $application = Application::findByUuidOrFail($this->applicationUuid);
        
        $person = Person::firstOrCreate(['uuid' => $this->uuid], [
            'first_name' => $this->first_name, 
            'last_name' => $this->last_name,
            'email' => $this->email,
            'phone' => $this->phone,
        ]);

        $application->addContact($person);
    }
}
