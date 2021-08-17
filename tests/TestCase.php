<?php

namespace Tests;

use App\Models\Cdwg;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Bus;
use App\Modules\Person\Models\Person;
use App\Modules\ExpertPanel\Jobs\AddContact;
use Illuminate\Foundation\Testing\WithFaker;
use App\Modules\ExpertPanel\Actions\ContactAdd;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use WithFaker;
    // Helper methods
    
    public function setup():void
    {
        parent::setup();
    }
    

    public function makeApplicationData()
    {
        $data = [
            'uuid' => Uuid::uuid4()->toString(),
            'working_name' => 'EP Working Name',
            'ep_type_id' => config('expert_panels.types.vcep.id'),
            'cdwg_id' => Cdwg::all()->random()->id,
            'date_initiated' => Carbon::parse('2020-01-01')
        ];
        return $data;
    }

    protected function makeContactData(int $number = 1)
    {
        $contacts = [];
        for ($i=0; $i < $number; $i++) {
            $contacts[] = [
                'uuid' => Uuid::uuid4(),
                'first_name' => $this->faker()->firstName,
                'last_name' => $this->faker()->lastName,
                'email' => $this->faker()->email,
                'phone' => $this->faker()->phoneNumber
            ];
        }

        return $contacts;
    }
    
    protected function addContactToApplication(ExpertPanel  $expertPanel)
    {
        $person = Person::factory()->create();
        ContactAdd::run($expertPanel->uuid, $person->uuid);
        
        return $person;
    }

    protected function assertLoggedActivity(
        $expertPanel,
        $description,
        $properties = null,
        $causer_type = null,
        $causer_id = null
    ) {
        $data = [
            'log_name' => 'applications',
            'description' => $description,
            'subject_type' => ExpertPanel::class,
            'subject_id' => (string)$expertPanel->id,
            'causer_type' => $causer_type,
            'causer_id' => $causer_id,
        ];

        if ($properties) {
            if (!isset($properties['step'])) {
                $properties['step'] = $expertPanel->current_step;
            }
            foreach ($properties as $key => $val) {
                $dbVal = $val;
                if (is_array($val) || is_object($val)) {
                    $dbVal = json_encode($val);
                }
                $data['properties->'.$key] = $dbVal;
            }
        }

        $this->assertDatabaseHas('activity_log', $data);
    }
}
