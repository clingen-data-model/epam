<?php

namespace App\Modules\ExpertPanel\Actions;

use App\Modules\ExpertPanel\Models\ExpertPanel;
use App\Modules\ExpertPanel\Models\RulesetStatus;
use App\Modules\ExpertPanel\Models\SpecificationStatus;
use App\Modules\ExpertPanel\Actions\SpecificationRulesetSync;
use App\Modules\ExpertPanel\Models\Specification;

class SpecificationAndRulsetsSync
{

    public function __construct(
        private SpecificationSync $syncSpecification,
        private SpecificationRulesetSync $syncRuleset
    )
    {
    }


    public function handle(
        string $cspecId,
        ExpertPanel $expertPanel,
        string $name,
        string $event,
        array $rulesets
    ): Specification
    {
        $specStatus = SpecificationStatus::findByEvent($event);
        $specification = $this->syncSpecification->handle(
            cspecId: $cspecId,
            expertPanel: $expertPanel,
            name: $name,
            status: $specStatus
        );

        $rulesetStatus = RulesetStatus::findByEvent($event);
        foreach ($rulesets as $ruleset) {
            $this->syncRuleset->handle(
                specification: $specification,
                cspecRulesetId: $ruleset->ruleSetId,
                status: $rulesetStatus,
            );
        }

        return $specification;
    }
}
