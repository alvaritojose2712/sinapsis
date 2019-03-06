<?php

use Illuminate\Database\Seeder;

class UnidadTrubutariaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Illuminate\Support\Facades\DB::table("sno_unidad_tributarias")->insert([
            [
                'fecha_inicio' => "2019-01-01",
                'valor' => "3",
            ]
        ]);
    }
}
