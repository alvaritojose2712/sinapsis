<?php

use Illuminate\Database\Seeder;

class FormulasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        $arr = [];
		$arrInsert = [
[1, 'UTRIBUTARIA*200*NHIJOS', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para la atención de Hijas e Hijos con Discapacidad', '2017-09-01'],
[2, 'UTRIBUTARIA*300', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima familiar', '2017-09-01'],
[3, 'UTRIBUTARIA*50', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para el Apoyo a Actividad Docente y de Investigación', '2017-09-01'],
[4, 'SUELDO*0.12', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-TSU', '2017-09-01'],
[5, 'SUELDO*0.14', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-LICENCIADO', '2017-09-01'],
[6, 'SUELDO*0.16', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-ESPECIALISTA\n', '2017-09-01'],
[7, 'SUELDO*0.18', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-MASTER\n', '2017-09-01'],
[8, 'SUELDO*0.2', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-DOCTOR\n', '2017-09-01'],
[9, 'ANTIGUEDAD*0.015*SUELDONORMAL', 'NULL', 'prima salarial', 'sueldo normal', 'asignacion', '30', 'Prima por antiguedad', '2017-09-01'],
[10, 'UTRIBUTARIA*50', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para Chóferes y Supervisores', '2017-09-01'],
[11, 'SUELDO*0.1', 'NULL', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'Caja de ahorro', '2017-09-01'],
[12, 'SUELDO*0.16', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Especialización para Docente', '2017-09-01'],
[13, 'SUELDO*0.18', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Maestría para Docentes', '2017-09-01'],
[14, 'SUELDO*0.2', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Doctorado para Docente', '2017-09-01'],
[15, '((SUELDONORMAL*12)/52)*0.04*LUNES', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'Seguro social', '2017-09-01'],
[16, 'SUELDO*0.06', 'NULL', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'IPASME', '2017-09-01'],
[17, '(((SUELDONORMAL/30)/8)*0.3)*HRSNOCTURNAS', 'NULL', 'bono salarial', 'sueldo normal', 'asignacion', '30', 'Bono nocturno - OBRERO', '2017-09-01'],
[18, 'SUELDO', 'NULL', 'salario', 'salario', 'asignacion', '30', 'Sueldo básico', '2017-09-01'],
[19, '((SUELDONORMAL+(SUELDO*0.1))+(((SUELDONORMAL+(SUELDO*0.1))/30)*105)/12)/30*120', 'NULL', 'bono anual', 'sueldo normal', 'asignacion', '30', 'Bono de fin de año', '2017-09-01'],
[20, '((SUELDONORMAL*12)/52)*0.005*LUNES', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'PIE', '2017-09-01'],
[21, '((SUELDONORMAL+(SUELDO*0.1))+(((SUELDONORMAL+(SUELDO*0.1))/30)*120)/12)/30*105', 'NULL', 'bono anual', 'sueldo normal', 'asignacion', '30', 'Bono vacacional', '2017-09-01'],
[22, 'SUELDONORMAL*0.02', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FAOV', '2017-09-01'],
[23, '(((SUELDONORMAL*12)/52)*0.02)*LUNES', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FPJ', '2017-09-01'],
[24, 'UTRIBUTARIA*30*61', 'NULL', 'bono alimentacion', 'sueldo basico', 'asignacion', '30', 'CestaTicket', '2017-09-01'],
[25, '((SUELDONORMAL*12)/52)*0.09*LUNES', '((SUELDONORMAL*12)/52)*0.09*LUNES', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'Seguro social Aporte', '2017-09-01'],
[26, 'SUELDO*0.06', 'SUELDO*0.06', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'IPASME Aporte', '2017-09-01'],
        ];
        foreach($arrInsert as $valor){
            array_push($arr,[
                'id' => $valor[0],
                'tipo_concepto' => $valor[3],
                'tipo_sueldo' => $valor[4],
                'movimiento' => $valor[5],
                'dias' => $valor[6],
                "partida"=>"401010100",
                "descripcion" => $valor[7],
            ]);
        }
        DB::table("sno_formulas")->insert($arr);
    }
}
