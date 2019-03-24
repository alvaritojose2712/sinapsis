<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoFormulasVersionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_formulas_versiones', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_formula')->unsigned();
            $table->foreign('id_formula')->references('id')
            ->on('sno_formulas')
            ->onUpdate('cascade');

            $table->string('formula');
            $table->string('formula_aporte')->default("NULL");
            $table->date('fecha');
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
        Schema::dropIfExists('sno_formulas_versiones');
    }
}
