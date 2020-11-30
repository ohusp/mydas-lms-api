<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicationscurrentlyusing extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medicationscurrentlyusing', function (Blueprint $table) {
            $table->increments('id');
            $table->text('medications');
            $table->integer('patient_id');
            $table->integer('doc_id');
            $table->string('doc_username');
            $table->string('doc_name');
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('medicationscurrentlyusing');
    }
}
