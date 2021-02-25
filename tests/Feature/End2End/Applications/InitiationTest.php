<?php

namespace Tests\Feature\End2End\Applications;

use App\Domain\Person\Models\Person;
use App\Models\Cdwg;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Ramsey\Uuid\Uuid;
use Tests\TestCase;

class InitiationTest extends TestCase
{
    use WithFaker;
    use RefreshDatabase;

    /**
     * @test
     */
    public function can_create_initiate_an_application()
    {
        $this->seed();    

        $data = $this->makeApplicationData();
        $response = $this->json('POST', '/api/applications', $data);

        $response->assertStatus(200);

        $expectedAttributes = array_merge(
            $data, 
            [
                'date_initiated'=>'2020-01-01T00:00:00.000000Z', 
                'current_step' => 1
            ]
        );
        $response->assertJson($expectedAttributes);
    }

    /**
     * @test
     */
    public function validates_required_parameters_before_initiating_application()
    {
        $this->seed();    

        $data = [];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJson([
            'message' => 'The given data was invalid.',
            'errors' => [
                'uuid' => ['The uuid field is required.'],
                'working_name' => ['The working name field is required.'],
                'cdwg_id' => ['The cdwg id field is required.'],
                'ep_type_id' => ['The ep type id field is required.'],
            ]
        ]);
    }

    /**
     * @test
     */
    public function validates_uuid_is_a_uuid()
    {
        $data = ['uuid'=>'bob is yer uncle'];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['uuid' => ['The uuid must be a valid UUID.']]);
    }

    /**
     * @test
     */
    public function validates_date_initiated_is_a_date()
    {
        $data = ['date_initiated'=>'bob is yer uncle'];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['date_initiated' => ['The date initiated is not a valid date.']]);
    }
    
    /**
     * @test
     */
    public function validates_working_name_lenghth()
    {
        $data = ['working_name'=>'Aliqua anim et excepteur amet exercitation. Consequat duis fugiat qui labore laborum culpa amet. Exercitation eiusmod id velit excepteur incididunt minim magna cupidatat. Excepteur ullamco culpa ut labore exercitation laborum veniam. Cupidatat ex laborum di'];
        
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['working_name' => ['The working name may not be greater than 256 characters.']]);

        $data = ['working_name'=>'Al'];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['working_name' => ['The working name must be at least 3 characters.']]);
    }
    
    /**
     * @test
     */
    public function validates_cdwg_id_exists()
    {
        $data = ['cdwg_id'=>'2'];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['cdwg_id' => ['The selected cdwg is invalid.']]);
    }
    
    /**
     * @test
     */
    public function validates_ep_types_id_exists()
    {
        $data = ['ep_type_id'=>'3'];
        $response = $this->json('Post', '/api/applications', $data);

        $response->assertStatus(422);
        $response->assertJsonFragment(['ep_type_id' => ['The selected expert panel type is invalid.']]);
    }
    
    
}
