<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreditoAdicionalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("credito_adicionals")->insert([
        	['id' => "1",
            "monto" => "0",
            "fecha"=>"2019-01-01",
            "descripcion" => "NULL"
            ],
            ['id' => "2",
            "monto" => "5000",
            "fecha"=>"2019-01-01",
            "descripcion" => "Nuevo crédito adicional 2 500"
            ],
            ['id' => "3",
            "monto" => "10000",
            "fecha"=>"2019-01-01",
            "descripcion" => "Nuevo crédito adicional 3 10000"
            ],
            ['id' => "4",
            "monto" => "7500",
            "fecha"=>"2019-01-01",
            "descripcion" => "Nuevo crédito adicional 4 7500"
            ],
        ]);
    }
}
