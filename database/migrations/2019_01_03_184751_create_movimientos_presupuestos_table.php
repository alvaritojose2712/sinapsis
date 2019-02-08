<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMovimientosPresupuestosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movimientos_presupuestos', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            
            $table->increments('id');
            $table->text('descripcion');
            $table->integer('referencia')->unsigned();
            $table->foreign('referencia')->references("id")->on("presupuesto_ordinarios")
            ->onUpdate('cascade');
            $table->float('movimiento');
            $table->integer("credito_adicional")->unsigned();
            $table->foreign("credito_adicional")->references("id")->on("credito_adicionals")
            ->onUpdate('cascade');
            $table->date("fecha");
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
        Schema::dropIfExists('movimientos_presupuestos');
    }
}
