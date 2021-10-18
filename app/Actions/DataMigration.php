<?php
namespace App\Actions;

use App\Models\Event;
use Ramsey\Uuid\Uuid;
use App\Models\Document;
use App\Models\LogEntry;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Modules\Group\Models\Group;
use App\Modules\Person\Models\Person;
use App\Modules\ExpertPanel\Models\Coi;
use Illuminate\Database\Eloquent\Model;
use App\Modules\Group\Models\GroupMember;
use Lorisleiva\Actions\Concerns\AsAction;
use App\Modules\ExpertPanel\Models\NextAction;
use App\Modules\ExpertPanel\Models\ExpertPanel;

class DataMigration
{
    use AsAction;

    public function handle()
    {
        Model::unguard();
        DB::transaction(function () {
            $cdwgs = $this->migrateCdwgs()->keyBy('id');
            $this->migrateApplications($cdwgs);
        });
        Model::reguard();
    }
   
    private function migrateApplications($cdwgs)
    {
        $applicationsData = DB::table('applications')->get()
            ->map(function ($row) use ($cdwgs) {
                $group = $this->createGroupForApplication($row, $cdwgs);
                $approvalDates = json_decode($row->approval_dates, true);

                $data = [
                    'uuid' => $row->uuid,
                    'group_id' => $group->id,
                    'short_base_name' => $row->short_base_name,
                    'long_base_name' => $row->long_base_name,
                    'expert_panel_type_id' => $row->ep_type_id,
                    'cdwg_id' => $cdwgs->get($row->cdwg_id) ? $cdwgs->get($row->cdwg_id)->id : null,
                    'affiliation_id' => $row->affiliation_id,
                    'date_initiated' => $row->date_initiated,
                    'step_1_approval_date' => isset($approvalDates['step 1']) ? $approvalDates['step 1'] : null,
                    'step_2_approval_date' => isset($approvalDates['step 2']) ? $approvalDates['step 2'] : null,
                    'step_3_approval_date' => isset($approvalDates['step 3']) ? $approvalDates['step 3'] : null,
                    'step_4_approval_date' => isset($approvalDates['step 4']) ? $approvalDates['step 4'] : null,
                    'date_completed' => $row->date_completed,
                    'created_at' => $row->created_at,
                    'updated_at' => $row->updated_at,
                    'deleted_at' => $row->deleted_at,
                    'coi_code' => $row->coi_code,
                    'current_step' => $row->current_step
                ];

                $expertPanel = ExpertPanel::withTrashed()->firstOrCreate(['group_id' => $group->id], $data);

                $this->migrateDocumentsForGroup(
                    $this->queryAppItems('documents', $row->id)->get(),
                    $group,
                    $expertPanel
                );
                $this->migrateNextActionForEp($this->queryAppItems('next_actions', $row->id)->get(), $expertPanel);
                $this->migrateGroupMembers($this->queryAppItems('application_person', $row->id)->get(), $group);
                $activityLogs = DB::table('activity_log')
                                    ->where([
                                        'subject_type' => 'App\Modules\Application\Models\Application',
                                        'subject_id' => $row->id
                                    ])->get();
                $this->migrateActivityLogs($activityLogs, $expertPanel);
                $this->migrateCois($this->queryAppItems('cois', $row->id)->get(), $expertPanel);
            });
    }

    private function migrateActivityLogs($rows, $expertPanel)
    {
        foreach ($rows as $row) {
            $subjectType = ExpertPanel::class;
            $subjectId = $expertPanel->id;

            if (substr($row->description, 0, 1) == '<') {
                $props = json_decode($row->properties);
                $data = [
                    'entry' => $row->description,
                    'subject_type' => $subjectType,
                    'subject_id' => $subjectId,
                    'author_type' => $row->causer_type,
                    'author_id' => $row->causer_id,
                    'log_date' => $row->created_at,
                    'created_at' => $row->created_at,
                    'updated_at' => $row->updated_at,
                    'metadata' => [
                        'step' => $props->step
                    ]
                ];

                LogEntry::firstOrCreate(
                    ['entry' => $row->description],
                    $data
                );
                continue;
            }

            if (
                in_array($row->activity_type, ['contact-added']) ||
                substr($row->description, 0, 12) == 'Added contact'
            ) {
                $subjectType = Group::class;
                $subjectId = $expertPanel->group_id;
            }

            $activityType = $this->parseActivityType($row);

            $mapped = [
                'type' => $activityType,
                'log_name' => $row->log_name,
                'subject_type' => $subjectType,
                'subject_id' => $subjectId,
                'payload' => $row->properties
            ];
            Event::withTrashed()
                ->firstOrCreate(
                    ['id' => $row->id],
                    $mapped
                );
        };
    }
   
    public function parseActivityType($row)
    {
        if (!empty($row->activity_type)) {
            return $row->activity_type;
        }

        switch ($row->description) {
            case 'expert-panel-attributes-updated':
                return 'attributes-updated';
            case 'Application initiated':
            case 'Application completed':
            case 'Application deleted':
                return Str::kebab($row->description);
            case 'Step 1 approved':
            case 'Step 2 approved':
            case 'Step 3 approved':
            case 'Step 4 approved':
                return 'step-approved';
            default:
                $patterns = [
                    '/(^Added contact.+)/',
                    '/(^Added next action.+)/',
                    '/(^Attributes updated:.+)/',
                    '/(^COI form completed.+)/',
                    '/(^scope version marked final$)/',
                ];
                $replacements = [
                    'contact-added',
                    'next-action-added',
                    'attributes-updated',
                    'coi-completed',
                    'document-marked-final',
                ];
                return preg_replace($patterns, $replacements, $row->description);
        }
        if ($row->description == 'Application initiated') {
            return 'appliation-initiated';
        }
    }
    

    private function migrateGroupMembers($rows, $group)
    {
        $rows->each(function ($row) use ($group) {
            GroupMember::withTrashed()
                ->firstOrCreate(
                    [
                        'group_id' => $group->id,
                        'person_id' => $row->person_id
                    ],
                    [
                        'group_id' => $group->id,
                        'person_id' => $row->person_id,
                        'is_contact' => 1
                    ],
                );
        });
    }

    private function migrateCois($rows, $expertPanel)
    {
        $rows->each(function ($row) use ($expertPanel) {
            $uuid = Uuid::uuid4();
            $data = json_decode($row->data);
            $person = Person::withTrashed()->firstOrCreate(
                ['email' => $data->email],
                [
                    'uuid' => $uuid->toString(),
                    'email' => $data->email,
                    'first_name' => $data->first_name,
                    'last_name' => $data->last_name
                ]
            );
            $groupMember = GroupMember::withTrashed()->firstOrCreate(
                [
                    'group_id' => $expertPanel->group_id,
                    'person_id' => $person->id
                ],
                [
                    'group_id' => $expertPanel->group_id,
                    'person_id' => $person->id
                ]
            );
            $coi = new Coi;
            $coi->setTable('cois_v2')
                ->firstOrCreate(
                    ['group_member_id' => $groupMember->id],
                    [
                        'uuid' => Uuid::uuid4(),
                        'expert_panel_id' => $expertPanel->id,
                        'group_member_id' => $groupMember->id,
                        'data' => $row->data,
                        'completed_at' => $row->created_at,
                        'created_at' => $row->created_at,
                        'updated_at' => $row->updated_at,
                    ]
                );
        });
    }
    
    private function migrateNextActionForEp($nextActions, $expertPanel)
    {
        $nextActions->each(function ($na) use ($expertPanel) {
            $na->expert_panel_id = $expertPanel->id;
            $na->application_step = $na->step;
            $na->assignee_id = $na->assigned_to;
            $na->assignee_name = $na->assigned_to_name;

            unset($na->application_id);
            unset($na->step);
            unset($na->assigned_to);
            unset($na->assigned_to_name);

            $nextAction = new NextAction();
            $nextAction->setTable('next_actions_v2')->withTrashed()->firstOrCreate(['id' => $na->id], (array)$na);
        });
    }

    private function migrateDocumentsForGroup($documents, $group, $expertPanel)
    {
        $documents->each(function ($doc) use ($group, &$expertPanel) {
            $mapped = (array)$doc;
            $mapped['metadata'] = [
                'step' => $doc->step,
                'is_final' => $doc->is_final,
                'version' => $doc->version,
                'date_received' => $doc->date_received
            ];
            $mapped['owner_type'] = get_class($group);
            $mapped['owner_id'] = $group->id;

            unset($mapped['application_id']);
            unset($mapped['is_final']);
            unset($mapped['date_received']);
            unset($mapped['date_reviewed']);
            unset($mapped['step']);
            unset($mapped['version']);

            $document = new Document;
            $document->setTable('documents_v2')->withTrashed()->firstOrCreate(['uuid' => $doc->uuid], $mapped);

            dump($doc->document_type_id.' - v'.$doc->version.': '.$doc->date_received);
            if ($doc->document_type_id == config('documents.types.scope.id') && $doc->version == 1) {
                $expertPanel->step_1_received_date = $doc->date_received;
            }

            if ($doc->document_type_id == config('documents.types.final-app.id') && $doc->version == 1) {
                $expertPanel->step_4_received_date = $doc->date_received;
            }
        });

        $expertPanel->save();
    }

    private function createGroupForApplication($row, $cdwgs)
    {
        $group = Group::withTrashed()
                    ->firstOrCreate(
                        ['uuid' => $row->uuid],
                        [
                            'name' => $row->working_name,
                            'group_type_id' => config('groups.types.ep.id'),
                            'group_status_id' => ($row->date_completed)
                                                    ? config('groups.statuses.active')
                                                    : config('groups.statuses.pending-approval'),
                            'parent_id' => $cdwgs->get($row->cdwg_id) ? $cdwgs->get($row->cdwg_id)->id : null,
                            'created_at' => $row->created_at,
                            'updated_at' => $row->updated_at,
                            'deleted_at' => $row->deleted_at
                        ]
                    );
        return $group;
    }


    private function migrateCdwgs()
    {
        $rows = DB::table('cdwgs')->get();

        $cdwgs = $rows->map(function ($row) {
            $group = Group::withTrashed()->firstOrCreate(
                ['uuid' => $row->uuid],
                [
                    'name' => $row->name,
                    'group_type_id' => config('groups.types.cdwg.id'),
                    'group_status_id' => config('groups.statuses.active'),
                    'created_at' => $row->created_at,
                    'updated_at' => $row->updated_at,
                    'deleted_at' => null
                ]
            );
            $group->cdwg_id = $row->id;
            return $group;
        })->keyBy('cdwg_id');

        return $cdwgs;
    }

    private function queryAppItems($table, $appId)
    {
        return DB::table($table)
                ->where('application_id', $appId);
    }
}
