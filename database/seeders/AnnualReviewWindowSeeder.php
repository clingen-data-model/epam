<?php

namespace Database\Seeders;

use Database\Seeders\Seeder;
use App\Models\AnnualReviewWindow;

class AnnualReviewWindowSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AnnualReviewWindow::create([
            'for_year' => 2021,
            'start' => '2022-02-16',
            'end' => '2022-03-15',
        ]);
    }
}
