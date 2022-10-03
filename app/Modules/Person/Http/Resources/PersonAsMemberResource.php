<?php

namespace App\Modules\Person\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Modules\Group\Http\Resources\MembershipResource;

class PersonAsMemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // $data = parent::toArray($request);
        $data = [
            'uuid' => $this->uuid,
            'id' => $this->id,
            'name' => $this->name,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'email' => $this->email,
            'timezone' => $this->timezone,
            'profile_photo' => $this->profile_photo,
            'legacy_credentials' => $this->legacy_credentials
        ];
        $data['institution'] = $this->whenLoaded('institution', new InstitutionResource($this->institution));
        $data['credentials'] = $this->whenLoaded('credentials', $this->credentials);

        return $data;
    }
}
