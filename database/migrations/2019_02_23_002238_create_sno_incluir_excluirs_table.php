<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoIncluirExcluirsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_incluir_excluirs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer("id_formula_asignada")->unsigned();
            $table->foreign('id_formula_asignada')->references('id')->on('sno_formulas_asignadas')
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
        Schema::dropIfExists('sno_incluir_excluirs');
    }
}
