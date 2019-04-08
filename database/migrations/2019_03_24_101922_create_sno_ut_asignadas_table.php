<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoUtAsignadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_ut_asignadas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_nomina')->unsigned();
            $table->foreign('id_nomina')
            ->references('id')
            ->on('sno_nominas')
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->integer('id_ut')->unsigned();
            $table->foreign('id_ut')
            ->references('id')
            ->on('sno_unidad_tributarias')
            ->onDelete('cascade')
            ->onUpdate('cascade');
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
        Schema::dropIfExists('sno_ut_asignadas');
    }
}
