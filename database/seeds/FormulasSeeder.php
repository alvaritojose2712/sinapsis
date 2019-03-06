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
[1, '$unidad_tributaria*200*$prima_hijos', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para la atención de Hijas e Hijos con Discapacidad', '2017-09-01'],
[2, '$unidad_tributaria*300', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima familiar', '2017-09-01'],
[3, '$unidad_tributaria*50', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para el Apoyo a Actividad Docente y de Investigación', '2017-09-01'],
[4, '$sueldo_tabla*0.12', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-TSU', '2017-09-01'],
[5, '$sueldo_tabla*0.14', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-LICENCIADO', '2017-09-01'],
[6, '$sueldo_tabla*0.16', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-ESPECIALISTA\n', '2017-09-01'],
[7, '$sueldo_tabla*0.18', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-MASTER\n', '2017-09-01'],
[8, '$sueldo_tabla*0.2', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-DOCTOR\n', '2017-09-01'],
[9, '$años_antiguedad*0.015*$sueldo_normal', 'NULL', 'prima salarial', 'sueldo normal', 'asignacion', '30', 'Prima por antiguedad', '2017-09-01'],
[10, '$unidad_tributaria*50', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para Chóferes y Supervisores', '2017-09-01'],
[11, '$sueldo_tabla*0.1', 'NULL', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'Caja de ahorro', '2017-09-01'],
[12, '$sueldo_tabla*0.16', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Especialización para Docente', '2017-09-01'],
[13, '$sueldo_tabla*0.18', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Maestría para Docentes', '2017-09-01'],
[14, '$sueldo_tabla*0.2', 'NULL', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Doctorado para Docente', '2017-09-01'],
[15, '(($sueldo_normal*12)/52)*0.04*$lunes_del_mes', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'Seguro social', '2017-09-01'],
[16, '$sueldo_tabla*0.06', 'NULL', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'IPASME', '2017-09-01'],
[17, '((($sueldo_normal/30)/8)*0.3)*$hrs_nocturnas', 'NULL', 'bono salarial', 'sueldo normal', 'asignacion', '30', 'Bono nocturno - OBRERO', '2017-09-01'],
[18, '$sueldo_tabla', 'NULL', 'salario', 'salario', 'asignacion', '30', 'Sueldo básico', '2017-09-01'],
[19, '(($sueldo_normal+($sueldo_tabla*0.1))+((($sueldo_normal+($sueldo_tabla*0.1))/30)*105)/12)/30*120', 'NULL', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono de fin de año', '2017-09-01'],
[20, '(($sueldo_normal*12)/52)*0.005*$lunes_del_mes', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'PIE', '2017-09-01'],
[21, '(($sueldo_normal+($sueldo_tabla*0.1))+((($sueldo_normal+($sueldo_tabla*0.1))/30)*120)/12)/30*105', 'NULL', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono vacacional', '2017-09-01'],
[22, '$sueldo_normal*0.02', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FAOV', '2017-09-01'],
[23, '((($sueldo_normal*12)/52)*0.02)*$lunes_del_mes', 'NULL', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FPJ', '2017-09-01'],
[24, '$unidad_tributaria*30*61', 'NULL', 'bono alimentacion', 'sueldo basico', 'asignacion', '30', 'CestaTicket', '2017-09-01'],
[25, '(($sueldo_normal*12)/52)*0.09*$lunes_del_mes', '(($sueldo_normal*12)/52)*0.09*$lunes_del_mes', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'Seguro social', '2017-09-01'],
[26, '$sueldo_tabla*0.06', '$sueldo_tabla*0.06', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'IPASME', '2017-09-01'],
        ];
        foreach($arrInsert as $valor){
            array_push($arr,[
                'formula' => $valor[1],
                'formula_aporte' => $valor[2],
                'tipo_concepto' => $valor[3],
                'tipo_sueldo' => $valor[4],
                'movimiento' => $valor[5],
                'dias' => $valor[6],
                "descripcion"=>$valor[7],
                "fecha"=>$valor[8],
                "partida"=>"401010100",
            ]);
        }
        Illuminate\Support\Facades\DB::table("sno_formulas")->insert($arr);
    }
}
