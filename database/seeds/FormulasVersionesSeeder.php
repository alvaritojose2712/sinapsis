<?php

use Illuminate\Database\Seeder;

class FormulasVersionesSeeder extends Seeder
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
[1, 'UTRIBUTARIA*200*NHIJOS', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para la atención de Hijas e Hijos con Discapacidad', '2017-09-01'],
[2, 'UTRIBUTARIA*300', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima familiar', '2017-09-01'],
[3, 'UTRIBUTARIA*50', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para el Apoyo a Actividad Docente y de Investigación', '2017-09-01'],
[4, 'SUELDO*0.12', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-TSU', '2017-09-01'],
[5, 'SUELDO*0.14', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-LICENCIADO', '2017-09-01'],
[6, 'SUELDO*0.16', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-ESPECIALISTA\n', '2017-09-01'],
[7, 'SUELDO*0.18', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-MASTER\n', '2017-09-01'],
[8, 'SUELDO*0.2', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-DOCTOR\n', '2017-09-01'],
[9, 'ANTIGUEDAD*0.015*SUELDONORMAL', '0', 'prima salarial', 'sueldo normal', 'asignacion', '30', 'Prima por antiguedad', '2017-09-01'],
[10, 'UTRIBUTARIA*50', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para Chóferes y Supervisores', '2017-09-01'],
[11, 'SUELDO*0.1', '0', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'Caja de ahorro', '2017-09-01'],
[12, 'SUELDO*0.16', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Especialización para Docente', '2017-09-01'],
[13, 'SUELDO*0.18', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Maestría para Docentes', '2017-09-01'],
[14, 'SUELDO*0.2', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Doctorado para Docente', '2017-09-01'],
[15, '((SUELDONORMAL*12)/52)*0.04*LUNES', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'Seguro social', '2017-09-01'],
[16, 'SUELDO*0.06', '0', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'IPASME', '2017-09-01'],
[17, '(((SUELDONORMAL/30)/8)*0.3)*HRSNOCTURNAS', '0', 'bono salarial', 'sueldo normal', 'asignacion', '30', 'Bono nocturno - OBRERO', '2017-09-01'],
[18, 'SUELDO', '0', 'salario', 'salario', 'asignacion', '30', 'Sueldo básico', '2017-09-01'],
[19, '((SUELDONORMAL+(SUELDO*0.1))+(((SUELDONORMAL+(SUELDO*0.1))/30)*105)/12)/30*120', '0', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono de fin de año', '2017-09-01'],
[20, '((SUELDONORMAL*12)/52)*0.005*LUNES', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'PIE', '2017-09-01'],
[21, '((SUELDONORMAL+(SUELDO*0.1))+(((SUELDONORMAL+(SUELDO*0.1))/30)*120)/12)/30*105', '0', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono vacacional', '2017-09-01'],
[22, 'SUELDONORMAL*0.02', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FAOV', '2017-09-01'],
[23, '(((SUELDONORMAL*12)/52)*0.02)*LUNES', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FPJ', '2017-09-01'],
[24, 'UTRIBUTARIA*30*61', '0', 'bono alimentacion', 'sueldo basico', 'asignacion', '30', 'CestaTicket', '2017-09-01'],
[25, '((SUELDONORMAL*12)/52)*0.09*LUNES', '((SUELDONORMAL*12)/52)*0.09*LUNES', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'Seguro social', '2017-09-01'],
[26, 'SUELDO*0.06', 'SUELDO*0.06', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'IPASME', '2017-09-01'],

[1, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para la atención de Hijas e Hijos con Discapacidad', '1900-01-01'],
[2, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima familiar', '1900-01-01'],
[3, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para el Apoyo a Actividad Docente y de Investigación', '1900-01-01'],
[4, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-TSU', '1900-01-01'],
[5, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-LICENCIADO', '1900-01-01'],
[6, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-ESPECIALISTA\n', '1900-01-01'],
[7, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-MASTER\n', '1900-01-01'],
[8, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima de Profesionalización-DOCTOR\n', '1900-01-01'],
[9, '0', '0', 'prima salarial', 'sueldo normal', 'asignacion', '30', 'Prima por antiguedad', '1900-01-01'],
[10, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima para Chóferes y Supervisores', '1900-01-01'],
[11, '0', '0', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'Caja de ahorro', '1900-01-01'],
[12, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Especialización para Docente', '1900-01-01'],
[13, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Maestría para Docentes', '1900-01-01'],
[14, '0', '0', 'prima salarial', 'sueldo basico', 'asignacion', '30', 'Prima por Doctorado para Docente', '1900-01-01'],
[15, '0', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'Seguro social', '1900-01-01'],
[16, '0', '0', 'deduccion salarial', 'sueldo basico', 'deduccion', '30', 'IPASME', '1900-01-01'],
[17, '0', '0', 'bono salarial', 'sueldo normal', 'asignacion', '30', 'Bono nocturno - OBRERO', '1900-01-01'],
[18, '0', '0', 'salario', 'salario', 'asignacion', '30', 'Sueldo básico', '1900-01-01'],
[19, '0', '0', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono de fin de año', '1900-01-01'],
[20, '0', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'PIE', '1900-01-01'],
[21, '0', '0', 'bono salarial', 'sueldo normal', 'asignacion', '360', 'Bono vacacional', '1900-01-01'],
[22, '0', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FAOV', '1900-01-01'],
[23, '0', '0', 'deduccion salarial', 'sueldo normal', 'deduccion', '30', 'FPJ', '1900-01-01'],
[24, '0', '0', 'bono alimentacion', 'sueldo basico', 'asignacion', '30', 'CestaTicket', '1900-01-01'],
[25, '0', '0', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'Seguro social', '1900-01-01'],
[26, '0', '0', 'aporte_patronal', 'aporte_patronal', 'aporte_patronal', '30', 'IPASME', '1900-01-01'],
[27, '3000', '0', 'NULL', 'NULL', 'NULL', '30', '3000 venta de pollo', '2017-09-01'],
[28, '60', '0', 'NULL', 'NULL', 'NULL', '30', '60% del monto', '2017-09-01'],

];
        foreach($arrInsert as $valor){
            array_push($arr,[
                'id_formula' => $valor[0],
                "fecha"=>$valor[8],
                'formula' => $valor[1],
                'formula_aporte' => $valor[2],
            ]);
        }
        DB::table("sno_formulas_versiones")->insert($arr);
    }
}
