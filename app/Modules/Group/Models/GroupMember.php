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
    use HasFactory;
    use SoftDeletes;
    use HasRoles;
    use HasNotesTrait;
    use BelongstToGroupTrait;
    use BelongsToExpertPanelTrait;

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
        'v1_contact',
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
        'v1_contact' => 'boolean',
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


    public function scopeContact($query)
    {
        return $query->where('v1_contact', 1);
    }
    
    public function scopeIsActive($query)
    {
        return $query->whereNull('end_date');
    }
    

    protected static function newFactory()
    {
        return new GroupMemberFactory();
    }

    /**
     * Added to force spatie/laravel-permission to allow Roles/Permissions with web guard to GroupMember.
     * NOTE: I'm not entirely sure why Spatie thinks it's important to link roles to guards
     *      While it could be used to separate sets of roles and permissions like I'm doing with the scope
     *      attribute, it locks you into only being able to grant roles to authenticatable models.  I guess
     *      their solution to our use case would be to use the 'Team' concept, but that doesn't really fit
     *      our authorization use cases.
     */
    public function guardName()
    {
        return 'web';
    }
}
