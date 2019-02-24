<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoPrestacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_prestaciones', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('DIAS_TRABAJADOS_literal_b');
            $table->integer('DIAS_DE_PRESTACIONES_literal_b');
            $table->integer('MAX_DIAS_ADICIONALES_literal_b');
            $table->integer('DIAS_ADICIONALES_literal_b');
            $table->integer('DIAS_x_AÑO_literal_c');
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
        Schema::dropIfExists('sno_prestaciones');
    }
}
