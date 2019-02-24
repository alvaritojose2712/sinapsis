<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSnoValoresPersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sno_valores_personals', function (Blueprint $table) {
            $table->increments('id');
            $table->string("campo")->index();
            $table->foreign("campo")
            ->references('campo')
            ->on('sno_campos_personals')
            ->onUpdate('cascade');
            $table->string("valor")->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sno_valores_personals');
    }
}
