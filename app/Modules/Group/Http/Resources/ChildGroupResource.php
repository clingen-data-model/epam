<?php

namespace App\Modules\Group\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChildGroupResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->displayName,
            'members_count' => $this->members_count,
            'coordinators' => $this->whenLoaded('coordinators', $this->coordinators),
            'chairs' => $this->whenLoaded('chairs', $this->chairs),
            'type' => $this->whenLoaded('type', $this->type),
            'status' => $this->whenLoaded('status', $this->status),
        ];
    }
}
