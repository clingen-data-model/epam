<?php

namespace App\Modules\ExpertPanel\Models;

use App\Modules\ExpertPanel\Models\ExpertPanel;
use Database\Factories\CoiFactory;
use Hamcrest\Type\IsObject;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Coi extends Model
{
    use HasFactory;

    public $fillable = [
        'application_id',
        'email',
        'data'
    ];

    public $casts = [
        'data' => 'object'
    ];
    
    public $appends = [
        'response_document'
    ];
    
    public function getResponseDocumentAttribute()
    {
        $coiDef = isset($this->data->document_uuid)
                    ? static::getLegacyDefinition()
                    : static::getDefinition();

        $responseData = collect($this->data)
            ->map(function ($value, $key) use ($coiDef) {
                $questions = collect($coiDef->questions)->keyBy('name');
                if (!isset($questions[$key])) {
                    Log::debug('key, questions->keys(): ', ['keys'=> $key, 'questions'=>$questions->keys()->toArray()]);
                    return;
                }
                return [
                    'question' => $questions->get($key)->question,
                    'response' => $value
                ];
            })
            ->filter()
            ->toArray();

        $responseData['application_id'] = $this->expertPanel_id;
        
        return $responseData;
    }

    public function getResponseForHumans()
    {
        $data = (array)$this->data;
        $questions = collect(static::getDefinition()->questions)->keyBy('name');

        $humanReadable = [];

        foreach ($questions as $name => $def) {
            $response = $data[$name];
            $readableResponse = $response;
            if (in_array($def->type, ['multiple-choice'])) {
                $options = collect($def->options)->pluck('label', 'value');
                $readableResponse = $options[$response];
            }
            if ($def->type == 'yes-no') {
                $readableResponse = $response == 1 ? 'Yes' : 'No';
            }
            $humanReadable[$name] = $readableResponse;
        }

        return $humanReadable;
    }
    

    /**
     * SCOPES
     */
    public function scopeForApplication($query, $expertPanel)
    {
        $id = $expertPanel;
        if ($expertPanel instanceof ExpertPanel) {
            $id = $expertPanel->id;
        }
        return $query->where('application_id', $id);
    }
    

    public static function getDefinition()
    {
        return Cache::remember('coi-definition', 360, function () {
            return json_decode(file_get_contents(base_path('resources/surveys/coi.json')));
        });
    }

    public static function getLegacyDefinition()
    {
        return Cache::remember('legacy-coi-definition', 360, function () {
            return json_decode(file_get_contents(base_path('resources/surveys/legacy_coi.json')));
        });
    }
    
    // Factory
    protected static function newFactory()
    {
        return new CoiFactory();
    }
}
