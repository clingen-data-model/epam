<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnnualReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('annual_reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('expert_panel_id');
            $table->foreign('expert_panel_id')
                ->references('id')->on('expert_panels')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();

            $table->unsignedBigInteger('annual_review_window_id');
            $table->foreign('annual_review_window_id')
                ->references('id')->on('annual_review_windows')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            
            $table->unsignedBigInteger('submitter_id')->nullable();
            $table->foreign('submitter_id')
                ->references('id')->on('group_members')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
                
            $table->dateTime('completed_at')->nullable();
            $table->json('data')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('annual_reviews');
    }
}
