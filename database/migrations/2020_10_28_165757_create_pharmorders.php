<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePharmorders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pharmorders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('billing_amount_currency')->nullable();
            $table->integer('billing_amount_value')->nullable();
            $table->integer('billing_cart_total')->nullable();
            $table->integer('billing_handling_fee')->nullable();
            $table->string('billing_email_address')->nullable();
            $table->string('billing_name')->nullable();
            $table->string('billing_orderID')->nullable();
            $table->string('billing_payerID')->nullable();
            $table->string('billing_create_time')->nullable();
            $table->string('billing_update_time')->nullable();
            $table->integer('pharm_id')->nullable();
            $table->string('pharm_username')->nullable();
            $table->string('pharm_name')->nullable();
            $table->integer('patient_id')->nullable();
            $table->string('patient_username')->nullable();
            $table->string('patient_first_name')->nullable();
            $table->string('patient_last_name')->nullable();
            $table->string('patient_middle_name')->nullable();
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
        Schema::dropIfExists('pharmorders');
    }
}
