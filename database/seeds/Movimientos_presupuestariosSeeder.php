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
                'movimiento' => "0",
                'descripcion' => "Inicio",
                "tipo" => 0],
			[
            "fecha"=>"2019-02-01",
            'referencia' => "1",
            'movimiento' => "556322",
            'descripcion' => "Entrada de 4500 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-02-15",
            'referencia' => "1",
            'movimiento' => "-30234",
            'descripcion' => "Salida de 30234 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-03-01",
            'referencia' => "1",
            'movimiento' => "-5465",
            'descripcion' => "Salida de 5465 BsS",
            "tipo" => 0],
            [
                "fecha"=>"2019-04-01",
                'referencia' => "1",
                'movimiento' => "10000",
                'descripcion' => "Entrada de 10000 BsS",
                "tipo" => 0],
            [
                "fecha"=>"2019-05-01",
                'referencia' => "1",
                'movimiento' => "54565",
                'descripcion' => "Crédito 1",
                "tipo" => 1],
            [
                "fecha"=>"2019-05-15",
                'referencia' => "1",
                'movimiento' => "84531",
                'descripcion' => "Crédito 2",
                "tipo" => 1],

            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "45987",
            'descripcion' => "Entrada de 1000 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "-500",
            'descripcion' => "Salida de 500 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "2",
            'movimiento' => "-10",
            'descripcion' => "Salida de 10 BsS",
            "tipo" => 0],

            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "400",
            'descripcion' => "Entrada de 400 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "-50",
            'descripcion' => "Salida de 50 BsS",
            "tipo" => 0],
            [
            "fecha"=>"2019-01-01",
            'referencia' => "3",
            'movimiento' => "-90",
            'descripcion' => "Salida de 90 BsS",
            "tipo" => 0],
        ]);
    }
}
