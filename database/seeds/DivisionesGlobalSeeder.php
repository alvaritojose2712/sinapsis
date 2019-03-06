<?php

use Illuminate\Database\Seeder;

class DivisionesGlobalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("divisiones_globals")->insert([
            [   
                "denominacion" => "1era quincena",
                "porcentaje" => "50",
            ],
            [   
                "denominacion" => "2da quincena",
                "porcentaje" => "50",
            ]
        ]);
    }
}
