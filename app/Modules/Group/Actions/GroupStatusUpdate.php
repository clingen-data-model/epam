<?php
namespace App\Modules\Group\Actions;

use App\Modules\Group\Models\Group;
use Illuminate\Support\Facades\Auth;
use Lorisleiva\Actions\ActionRequest;
use App\Modules\Group\Models\GroupStatus;
use Lorisleiva\Actions\Concerns\AsController;
use App\Modules\Group\Events\GroupStatusUpdated;
use App\Modules\Group\Http\Resources\GroupResource;

class GroupStatusUpdate
{
    use AsController;

    public function handle(Group $group, GroupStatus $groupStatus): Group
    {
        if ($group->group_status_id == $groupStatus->id) {
            return $group;
        }

        $oldStatus = $group->status;

        $group->update(['group_status_id' => $groupStatus->id]);

        event(new GroupStatusUpdated($group, $groupStatus, $oldStatus));

        return $group;
    }

    public function asController(ActionRequest $request, Group $group)
    {
        $newStatus = GroupStatus::findOrFail($request->status_id);
        return new GroupResource($this->handle($group, $newStatus));
    }

    public function rules(): array
    {
        return [
            'status_id' => 'required|exists:group_statuses,id',
        ];
    }

    public function authorize(ActionRequest $request): bool
    {
        return Auth::user() && Auth::user()->hasPermissionTo('groups-manage');
    }

    public function getValidationMessages()
    {
        return [
            'required' => 'This field is required.',
            'exists' => 'The status you selected is invalid.'
        ];
    }
}
