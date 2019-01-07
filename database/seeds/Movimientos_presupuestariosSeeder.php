<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class Movimientos_presupuestariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("movimientos_presupuestos")->insert([

			'id' => "1",
            'entrada' => "4500",
            'salida' => "0",
            'descripcion' => "Salida de 4500 BsS",
            "fecha" => "2018-09-09",
            "credito_adicional" => "null",
        ]);
    }
}
