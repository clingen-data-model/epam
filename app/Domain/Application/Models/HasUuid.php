<?php

namespace App\Domain\Application\Models;

/**
 * Adds functions to support models that have a uuid.
 */
trait HasUuid
{
    // Queries
    public function scopeHasUuid($query, $uuid)
    {
        return $query->where('uuid', $uuid);
    }
    

    static public function findByUuid($uuid)
    {
        return static::where('uuid', $uuid)->first();
    }

    static public function findByUuidOrFail($uuid)
    {
        $application = static::where('uuid', $uuid)->sole();
        // if (is_null($application)) {
        //     throw new ModelNotFoundException();
        // }

        return $application;
        
    }
}
