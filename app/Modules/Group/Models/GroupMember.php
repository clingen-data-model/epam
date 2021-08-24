<?php

namespace App\Modules\Group\Models;

use App\Models\Traits\HasRoles;
use App\Models\Contracts\HasNotes;
use App\Modules\Group\Models\Group;
use App\Modules\Person\Models\Person;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\GroupMemberFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Models\Traits\HasNotes as HasNotesTrait;
use Illuminate\Database\Eloquent\Relations\Relation;
use App\Modules\Group\Models\Contracts\BelongsToGroup;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Modules\ExpertPanel\Models\Contracts\BelongsToExpertPanel;
use App\Modules\Group\Models\Traits\BelongsToGroup as BelongstToGroupTrait;
use App\Modules\ExpertPanel\Models\Traits\BelongsToExpertPanel as BelongsToExpertPanelTrait;

/**
 * @property int $id
 * @property int $group_id
 * @property int $person_id
 * @property \Carbon\Carbon $start_date
 * @property \Carbon\Carbon $end_date
 * @property \Carbon\Carbon $deleted_at
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
class GroupMember extends Model implements HasNotes, BelongsToGroup, BelongsToExpertPanel
{
    use HasFactory, SoftDeletes, HasRoles, HasNotesTrait, BelongstToGroupTrait, BelongsToExpertPanelTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'group_id',
        'person_id',
        'start_date',
        'end_date',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'group_id' => 'integer',
        'person_id' => 'integer',
    ];

    protected $dates = [
        'start_date',
        'end_date',
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function person()
    {
        return $this->belongsTo(Person::class);
    }

    /**
     * Get all of the expertPanel for the GroupMember
     *
     * @return \Illuminate\Database\Eloquent\Relations\Relation
     */
    public function expertPanel(): Relation
    {
        return $this->hasOneThrough(ExpertPanel::class, Group::class);
    }

    protected static function newFactory()
    {
        return new GroupMemberFactory();
    }
}
