<?php

use Illuminate\Database\Seeder;

class NominaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_nominas")->insert([
            [   
                "id" => 1,
                "denominacion" => "Súper nómina",
                "fecha" => "2019-01-01",
                "periodo" => "Mensual",
            ]
        ]);
    }
}
