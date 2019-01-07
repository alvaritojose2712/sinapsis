<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class Presupuesto_ordinarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table("presupuesto_ordinarios")->insert([
        	'id' => "1",
            'partida_codigo' => "301010101",
            "monto" => "5000",
            "fecha" => "2018-09-09",
        ]);
        
    }
}
