<?php

namespace Tests\Feature\End2End\DataExchange;

use Carbon\Carbon;
use Tests\TestCase;
use App\DataExchange\DxMessage;
use Tests\Dummies\FakeMessageStream;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\Testing\WithFaker;
use App\DataExchange\Contracts\MessageStream;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ConsumeCspecMessagesTest extends TestCase
{
    use RefreshDatabase;

    public function setup():void
    {
        parent::setup();
        $this->setupForGroupTest();
        $this->vcep = ExpertPanel::factory()
                        ->vcep()
                        ->create([
                            'current_step' => 2,
                            'step_1_approval_date' => Carbon::now(),
                            'affiliation_id' => '59999',
                        ]);
    }


    /**
     * @test
     * @return void
     */
    public function cspec_draft_rules_approved_message_consumed_and_handled()
    {
        $topic = 'cspec_general_events_test';
        $timestamp = time();
        app()->bind(MessageStream::class, fn () => new FakeMessageStream([
            new DxMessage(
                $topic,
                $timestamp,
                file_get_contents(test_path('files/cspec/cspec-classified-rules-approved.json')),
                1
            ),
        ]));

        Carbon::setTestNow('2022-08-18 00:00:00');
        Artisan::call('schedule:run');

        $this->assertDatabaseHas('expert_panels', [
            'id' => $this->vcep->id,
            'step_2_approval_date' =>  Carbon::createFromTimestamp($timestamp),
            'current_step' => 3
        ]);
    }

    /**
     * @test
     */
    public function cspec_pilot_rules_approved_message_consumed_and_handled()
    {
        $topic = 'cspec_general_events_test';
        $this->vcep->current_step = 3;
        $this->vcep->step_2_approval_date = Carbon::now();
        $this->vcep->save();

        $timestamp = time();
        app()->bind(MessageStream::class, fn () => new FakeMessageStream([
            new DxMessage(
                $topic,
                $timestamp,
                file_get_contents(test_path('files/cspec/cspec-pilot-rules-approved.json')),
                2
            ),
        ]));

        Carbon::setTestNow('2022-08-18 00:00:00');
        Artisan::call('schedule:run');

        $this->assertDatabaseHas('expert_panels', [
            'id' => $this->vcep->id,
            'step_3_approval_date' => Carbon::createFromTimestamp($timestamp),
            'current_step' => 4
        ]);
    }

}
