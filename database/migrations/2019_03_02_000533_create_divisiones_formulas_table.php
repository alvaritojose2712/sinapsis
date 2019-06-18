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
            
            $table->integer('id_nomina')->unsigned();
            $table->foreign('id_nomina')
            ->references('id')
            ->on('sno_nominas')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            
            $table->integer('id_formula')->unsigned();
            $table->foreign('id_formula')->references('id')
            ->on('sno_formulas_versiones')
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
