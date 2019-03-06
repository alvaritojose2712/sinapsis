<?php

use Illuminate\Database\Seeder;

class CondicionesNominaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_condiciones_nominas")->insert([
            [   
                "id" => 1,
                "valor" => "DOCENTE",
                "id_nomina" => 1,
            ]
        ]);
    }
}
