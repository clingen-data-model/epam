<?php

namespace Tests\Feature\Integration\Modules\Person\Models;

use Tests\TestCase;
use App\Modules\Person\Models\Invite;
use Illuminate\Foundation\Testing\WithFaker;
use Plannr\Laravel\FastRefreshDatabase\Traits\FastRefreshDatabase;

/**
 * @group groups
 * @group invites
 */
class InviteTest extends TestCase
{
    use FastRefreshDatabase;

    /**
     * @test
     */
    public function generates_code_before_saving_if_null()
    {
        $invite = Invite::factory()->make(['code' => null]);

        $this->assertNull($invite->code);

        $invite->save();
        
        $this->assertNotNull($invite->code);
    }
}
