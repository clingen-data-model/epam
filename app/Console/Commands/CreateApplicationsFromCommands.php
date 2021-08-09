<?php

namespace App\Console\Commands;

use App\Models\Cdwg;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Bus;
use App\Modules\Application\Jobs\ApproveStep;
use App\Modules\Application\Models\Application;
use App\Modules\Application\Jobs\CreateNextAction;
use App\Modules\Application\Jobs\AddApplicationDocument;
use App\Modules\Application\Jobs\CompleteNextAction;

class CreateApplicationsFromCommands extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'applications:create-from-commands {--count=1 : count} {--last-approval= : step at which to stop running approvals} {--type= : type of ep to create}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $faker = \Faker\Factory::create();
        $cdwgs = Cdwg::all();
        $count = $this->option('count', 1);
        $type = $this->option('type');
        

        for ($i=0; $i < $count; $i++) {
            $uuid = Uuid::uuid4()->toString();
            $epTypeId = ($type) ? $type : $faker->randomElement([1,2]);
            $cdwgId = $faker->randomElement($cdwgs->pluck('id')->toArray());
            $this->createApplicationFromCommands($uuid, $epTypeId, $cdwgId);
        }
    }

    public function createApplicationFromCommands($uuid, $epTypeId, $cdwgId)
    {
        $faker = \Faker\Factory::create();
        $lastApprovedStep = $this->option('last-approval', null);
        $application = Application::initiate(...[
            'uuid' => $uuid,
            'working_name' => ucwords(join(' ', $faker->words(4))),
            'cdwg_id' => $cdwgId,
            'ep_type_id' => $epTypeId,
            'date_initiated' => Carbon::now()->subDays(30)
        ]);
        $application->save();

        $cmdSequence = $this->makeCommandSequence($uuid);
        $commandCount = ($epTypeId == 1) ? 2 : $faker->randomElement(range(1, count($cmdSequence)));
        $this->info('building application '.$uuid.' through '.$commandCount.' commands');

        for ($i=0; $i < $commandCount; $i++) {
            $cmd = $cmdSequence[$i];
            $class = $cmd['class'];
            $args = $cmd['args'];

            if (!is_null($lastApprovedStep) && $class == ApproveStep::class && (int)$cmd['step'] > (int)$lastApprovedStep) {
                $this->info('Stop building b/c last-approval set to '.$lastApprovedStep);
                break;
            }

            $this->info('running '.$class.' for '.$uuid);
            $job = new $class(...$args);
            Bus::dispatchNow($job);

            $application->fresh();
            $this->info('new step is '.$application->fresh()->current_step);
        }
    }

    private function makeCommandSequence($uuid)
    {
        $nextActionUuid = Uuid::uuid4()->toString();
        return [
                [ // Add Scope Document
                    'step' => 1,
                    'class' => AddApplicationDocument::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => Uuid::uuid4()->toString(),
                        'filename' => 'test',
                        'storage_path' => '/tmp/'.uniqid().'_test.tst',
                        'document_type_id' => 1,
                        'step' => 1,
                        'date_received' => Carbon::now()->subDays(30),
                    ]
                ],
                [ // Approve step 1 -> go to step 2
                    'step' => 1,
                    'class' => ApproveStep::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'dateApproved' => Carbon::now()->subDays(14)
                    ]
                ],
                [ // Add draft doc
                    'step' => 2,
                    'class' => AddApplicationDocument::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => Uuid::uuid4()->toString(),
                        'filename' => 'test',
                        'storage_path' => '/tmp/'.uniqid().'test.tst',
                        'document_type_id' => 2,
                        'step' => 2,
                        'date_received' => Carbon::now()->subDays(14),
                    ]
                ],
                [ // Approve step 2 -> go to step 3
                    'step' => 2,
                    'class' => ApproveStep::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'dateApproved' => Carbon::now()->subDays(7)
                    ]
                ],
                [ // Create Next Action
                    'step' => 3,
                    'class' => CreateNextAction::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => $nextActionUuid,
                        'entry' => 'Do this next!',
                        'dateCreated' => Carbon::now()->subDays(7)
                    ]
                ],
                [ // Add final specs
                    'step' => 3,
                    'class' => AddApplicationDocument::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => $nextActionUuid,
                        'filename' => 'test',
                        'storage_path' => '/tmp/'.uniqid().'test.tst',
                        'document_type_id' => 3,
                        'step' => 3,
                        'date_received' => Carbon::now()->subDays(6),
                    ]
                ],
                [ // Complete Next Action
                    'step' => '3',
                    'class' => CompleteNextAction::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'nextActionUuid' => $nextActionUuid,
                        'dateCompleted' =>  Carbon::now()->subDays(5)
                    ]
                ],
                [ // Add pilot classifications
                    'step' => 3,
                    'class' => AddApplicationDocument::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => Uuid::uuid4()->toString(),
                        'filename' => 'test',
                        'storage_path' => '/tmp/'.uniqid().'test.tst',
                        'document_type_id' => 4,
                        'step' => 3,
                        'date_received' => Carbon::now()->subDays(6),
                    ]
                ],
                [ // Approve step 3 -> go to step 4
                    'step' => 3,
                    'class' => ApproveStep::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'dateApproved' => Carbon::now()->subDays(4)
                    ]
                ],
                [ // Add finalize application
                    'step' => 4,
                    'class' => AddApplicationDocument::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'uuid' => Uuid::uuid4()->toString(),
                        'filename' => 'test',
                        'storage_path' => '/tmp/'.uniqid().'test.tst',
                        'document_type_id' => 5,
                        'step' => 4,
                        'date_received' => Carbon::now()->subDays(3),
                    ]
                ],
                [ // Approve step 4 -> go to step completed
                    'step' => 4,
                    'class' => ApproveStep::class,
                    'args' => [
                        'applicationUuid' => $uuid,
                        'dateApproved' => Carbon::now()->subDays(1)
                    ]
                ]
            ];
    }
}
