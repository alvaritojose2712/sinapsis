<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartidasPresupuestariasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidas_presupuestarias', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->string('codigo',20)->primary();
            $table->text('partida');
            $table->text('descripcion');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partidas_presupuestarias');
    }
}
