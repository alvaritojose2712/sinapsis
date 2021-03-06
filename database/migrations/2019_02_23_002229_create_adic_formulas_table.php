<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdicFormulasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('adic_formulas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("id_nomina")->unsigned();
            $table->foreign("id_nomina")
            ->references('id')
            ->on('sno_nominas')
            ->onUpdate('cascade');

            $table->integer("id_formula")->unsigned();
            $table->foreign("id_formula")
            ->references('id')
            ->on('sno_formulas_versiones')
            ->onUpdate('cascade');

            $table->integer('cedula')->index();
            $table->foreign('cedula')
            ->references('cedula')
            ->on('personals')
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
        Schema::dropIfExists('adic_formulas');
    }
}
