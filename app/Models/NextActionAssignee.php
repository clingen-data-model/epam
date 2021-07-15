<?php

namespace App\Models;

use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class NextActionAssignee extends Model
{
    use HasFactory;

    public $fillable = ['name', 'short_name'];

    public static function boot()
    {
        parent::boot();
        static::saved(function ($model) {
            Cache::forget('next-action-assignees');
            Cache::forever('next-action-assignees', static::all());
        });
    }

    public function getShortNameAttribute()
    {
        if (!isset($this->attributes['short_name']) || !$this->attributes['short_name']) {
            return $this->name;
        }

        return $this->attributes['short_name'];
    }
    

    public static function getAll()
    {
        return Cache::rememberForever('next-action-assignees', function () {
            return static::all();
        });
    }
}
