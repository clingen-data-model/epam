<?php

namespace App\Models;

use App\Models\Traits\HasComments;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Contracts\HasComments as ContractsHasComments;

class Comment extends Model implements ContractsHasComments
{
    use HasFactory;
    use SoftDeletes;
    use HasComments; 

    public $fillable = [
        'content',
        'comment_type_id',
        'subject_type',
        'subject_id',
        'creator_type',
        'creator_id',
        'metadata',
        'resolved_at'
    ];

    public $casts = [
        'id' => 'integer',
        'subject_id' => 'integer',
        'creator_id' => 'integer',
        'metadata' => 'array',
        'resolved_at' => 'datetime'
    ];

    public $with = [
        'type',
        'creator'
    ];

    public $appends = [
        'is_resolved'
    ];

    public $with = [
        'type',
    ];

    /**
     * RELATIONS
     */
    public function type(): BelongsTo
    {
        return $this->belongsTo(CommentTYpe::class, 'comment_type_id');
    }

    public function creator()
    {
        return $this->morphTo();
    }

    public function subject()
    {
        return $this->morphTo();
    }

    /**
     * SCOPES
     */
    public function scopeResolved($query)
    {
        return $query->whereNotNull('resolved_at');
    }

    public function scopePending($query)
    {
        return $query->whereNull('resolved_at');
    }

    /**
     * ACCESSORS
     */

    public function getIsResolvedAttribute(): bool
    {
        return (bool)$this->resolved_at;
    }
    
    public function getIsPendingAttribute(): bool
    {
        return is_null($this->resolved_at);
    }
    
    
}
