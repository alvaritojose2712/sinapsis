<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Personal extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('personals')->insert([
            [
	            'nombre' => 'Alvaro',
	            'apellido' => 'Ospino',
	            'cedula' => '26767116',
	            'nacionalidad' => 'V',
	            'genero' => 'Masculino',
	            'fecha_nacimiento' => '1998-12-27',
	            'telefono_1' => '04269422081',
	            'telefono_2' => '02409940793',
	            'correo' => 'alvaroospino79@gmail.com',
	            'categoria' => 'DOCENTE',
	            'cargo' => 'ASOCIADO',
	            'dedicacion' => 'EXCLUSIVA',
	            'estado' => 'ACTIVO',
	            'estatus' => 'CONTRATADO',
	            'grado_instruccion' => 'TSU',
	            'fecha_ingreso' => '2018-09-09',
	            'caja_ahorro' => '0',
	            'cuenta_bancaria' => '001750090232323',
	            'antiguedad_otros_ieu' => '2',
	            'hrs_nocturnas' => '0',
	            'hrs_feriadas' => '0',
	            'hrs_diurnas' => '0',
	            'hrs_feriadas_nocturnas' => '0',
	            'profesion' => 'Informático',
	            'departamento_adscrito' => 'PNFI',
	            'cargo_desempeñado_departamento' => 'Coordinador'
            ],
            [
            	'nombre' => 'Silfredo',
	            'apellido' => 'Rivero',
	            'cedula' => '9868006',
	            'nacionalidad' => 'V',
	            'genero' => 'Masculino',
	            'fecha_nacimiento' => '1966-10-18',
	            'telefono_1' => '041762323',
	            'telefono_2' => '024023423',
	            'correo' => 'josesilfre@',
	            'categoria' => 'DOCENTE',
	            'cargo' => 'ASOCIADO',
	            'dedicacion' => 'EXCLUSIVA',
	            'estado' => 'ACTIVO',
	            'estatus' => 'FIJO',
	            'grado_instruccion' => 'MASTER',
	            'fecha_ingreso' => '2001-01-01',
	            'caja_ahorro' => '0',
	            'cuenta_bancaria' => '017232323',
	            'antiguedad_otros_ieu' => '0',
	            'hrs_nocturnas' => '0',
	            'hrs_feriadas' => '0',
	            'hrs_diurnas' => '0',
	            'hrs_feriadas_nocturnas' => '0',
	            'profesion' => 'Ing. Mecánico',
	            'departamento_adscrito' => 'Presupuesto',
	            'cargo_desempeñado_departamento' => 'Coordinador'
            ]
        ]);
    }
}
