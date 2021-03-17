<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\HasUuid;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasTimestamps;

class Document extends Model
{
    use HasFactory;
    use SoftDeletes;
    use HasTimestamps;
    use HasUuid;

    protected $fillable = [
        'uuid',
        'filename',
        'storage_path',
        'step',
        'metadata',
        'version',
        'date_received',
        'date_reviewed',
        'application_id',
        'document_category_id',
        'is_final',
    ];

    protected $casts = [
        'metadata' => 'array'
    ];

    protected $dates = [
        'date_received',
        'date_reviewed'
    ];

    # Relationships
    public function category()
    {
        return $this->belongsTo(DocumentCategory::class, 'document_category_id');
    }

    public function scopeCategory($query, $category)
    {
        $id = $category;
        if ($category instanceof DocumentCategory) {
            $id = $category->id;
        }
        return $query->where('document_category_id', $id);
    }

    public function scopeVersion($query, $version)
    {
        return $query->where('version', $version);
    }
    
}
