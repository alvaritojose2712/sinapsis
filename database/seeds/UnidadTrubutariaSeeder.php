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
                'fecha' => "1900-01-01",
                'valor' => "0",
            ],
            [
                'fecha' => "2019-01-01",
                'valor' => "3",
            ],
            [
                'fecha' => "2018-01-15",
                'valor' => "15",
            ],
            [
                'fecha' => "2017-06-01",
                'valor' => "6",
            ],
            [
                'fecha' => "2017-01-01",
                'valor' => "17",
            ],
            [
                'fecha' => "2016-06-21",
                'valor' => "21",
            ],
            [
                'fecha' => "2016-01-15",
                'valor' => "15",
            ]
            
        ]);
    }
}
