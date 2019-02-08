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

			[
            "fecha"=>"2019-01-01",
            'referencia' => "1",
            'movimiento' => "556322",
            'descripcion' => "Entrada de 4500 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "1",
            'movimiento' => "-500",
            'descripcion' => "Salida de 500 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "1",
            'movimiento' => "-900",
            'descripcion' => "Salida de 900 BsS",
            "credito_adicional" => "1"],

            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "45987",
            'descripcion' => "Entrada de 1000 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "-500",
            'descripcion' => "Salida de 500 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "-10",
            'descripcion' => "Salida de 10 BsS",
            "credito_adicional" => "1"],

            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "400",
            'descripcion' => "Entrada de 400 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "-50",
            'descripcion' => "Salida de 50 BsS",
            "credito_adicional" => "1"],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "-90",
            'descripcion' => "Salida de 90 BsS",
            "credito_adicional" => "1"],
        ]);
    }
}
