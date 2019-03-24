<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDivisionesFormulasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('divisiones_formulas', function (Blueprint $table) {
            $table->increments('id');
            
            $table->integer("id_formula_asig")->unsigned();
            $table->foreign("id_formula_asig")
            ->references('id')
            ->on('sno_formulas_asignadas')
            ->onUpdate('cascade')
            ->onDelete('cascade');
           
            $table->integer("id_division")->unsigned();
            $table->foreign("id_division")
            ->references("id")
            ->on("divisiones_globals")
            ->onUpdate("cascade");
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
        Schema::dropIfExists('divisiones_formulas');
    }
}
