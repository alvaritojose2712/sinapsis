<?php

use Illuminate\Database\Seeder;

class DivisionesFormulasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("divisiones_formulas")->insert([
            [   
                "id_formula_asig" => 1,
                "id_division" => 1,
            ],
            [   
                "id_formula_asig" => 1,
                "id_division" => 2,
            ]
        ]);
    }
}
