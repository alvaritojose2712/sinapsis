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
                "id_nomina" => 1,
                "id_formula" => 1,
                "id_division" => 1,
            ],
            [   
                "id_nomina" => 1,
                "id_formula" => 1,
                "id_division" => 2,
            ],

            [   
                "id_nomina" => 1,
                "id_formula" => 27,
                "id_division" => 1,
            ],
            [   
                "id_nomina" => 1,
                "id_formula" => 27,
                "id_division" => 2,
            ],

            [   
                "id_nomina" => 1,
                "id_formula" => 2,
                "id_division" => 1,
            ],
            [   
                "id_nomina" => 1,
                "id_formula" => 2,
                "id_division" => 2,
            ],

            [   
                "id_nomina" => 1,
                "id_formula" => 28,
                "id_division" => 1,
            ],
            [   
                "id_nomina" => 1,
                "id_formula" => 28,
                "id_division" => 2,
            ]
        ]);
    }
}
