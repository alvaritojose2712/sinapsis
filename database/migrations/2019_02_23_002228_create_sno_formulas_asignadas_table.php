<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoFormulasAsignadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_formulas_asignadas', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('id_nomina')->unsigned();
            $table->foreign('id_nomina')->references('id')->on('sno_nominas')
            ->onUpdate('cascade');

            $table->integer('id_formula')->unsigned();
            $table->foreign('id_formula')->references('id')->on('sno_formulas')
            ->onUpdate('cascade');

            $table->date('fecha');
            $table->json('divisiones');
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
        Schema::dropIfExists('sno_formulas_asignadas');
    }
}
