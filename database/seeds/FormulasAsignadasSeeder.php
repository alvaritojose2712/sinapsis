<?php

use Illuminate\Database\Seeder;

class FormulasAsignadasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("sno_formulas_asignadas")->insert([
            [   
                "id_nomina" => 1,
                "id_formula" => 1,
            ],[   
                "id_nomina" => 1,
                "id_formula" => 2,
            ],[   
                "id_nomina" => 1,
                "id_formula" => 3,
            ],[   
                "id_nomina" => 1,
                "id_formula" => 4,
            ]
            ,[   
                "id_nomina" => 2,
                "id_formula" => 19,
            ]
            ,[   
                "id_nomina" => 2,
                "id_formula" => 21,
            ],
        ]);
    }
}
