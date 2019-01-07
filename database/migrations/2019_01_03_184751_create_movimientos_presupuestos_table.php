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
            
            $table->integer('id')->unsigned();
            $table->foreign('id')->references("id")->on("presupuesto_ordinarios");
            $table->float('entrada');
            $table->float('salida');
            $table->text('descripcion');
            $table->date("fecha");
            $table->string("credito_adicional",20);
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
