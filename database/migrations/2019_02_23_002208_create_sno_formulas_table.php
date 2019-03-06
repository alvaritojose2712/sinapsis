<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoFormulasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_formulas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('formula');
            $table->string('formula_aporte')->default("NULL");
            $table->string('tipo_concepto');
            $table->string('tipo_sueldo');
            $table->string('movimiento');
            $table->integer('dias');
            $table->text('descripcion');
            $table->string('partida')->index();
            $table->foreign("partida")->references("codigo")->on("partidas_presupuestarias")
            ->onUpdate('cascade');
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
        Schema::dropIfExists('sno_formulas');
    }
}
