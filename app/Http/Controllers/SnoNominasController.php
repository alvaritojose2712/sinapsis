<?php

namespace sinapsis\Http\Controllers;

use sinapsis\sno_unidad_tributaria;
use sinapsis\sno_formulas_versiones;
use sinapsis\sno_nominas;
use sinapsis\sno_sueldos;
use sinapsis\sno_tablas_sueldos;
use sinapsis\personal;
use sinapsis\Adic_personal;
use sinapsis\Adic_formula;
use Illuminate\Http\Request;
use \jlawrence\eos\Parser;
class SnoNominasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function filtro($v1,$operador,$v2){
        if ($operador === "igual") {
            if ($v1==$v2) return true;
        }
        else if ($operador === "diferente") {
            if ($v1!=$v2) return true;
        }
        else if ($operador === "menor") {
            if ($v1<$v2) return true;
        }
        else if ($operador === "mayor") {
            if ($v1>$v2) return true;
        }
        return false;	
    }
    public function condicion($persona,$condiciones,&$hijos)
    {       
        $unicos_p = [];
        $unicos_h = [];
        foreach ($condiciones as $e) {
            if ($e->type==0) {
                $campo = $e["valorall"]["campo"];
                if(!array_key_exists($campo,$unicos_p)) $unicos_p[$campo] = false;
                $operador = $e["operador"];
                $v1 = $e["valorall"]["valor"];
                $v2 = $persona[$campo];
                if (!$unicos_p[$campo]&&$this->filtro($v1,$operador,$v2)) $unicos_p[$campo] = true;
            }else{
                if (isset($unicos_h[$e->campo])) {
                    array_push($unicos_h[$e->campo],$e->valor);
                }else{
                    $unicos_h[$e->campo] = [$e->valor];
                }
            }
        }
        $h = 0;
        if (count($unicos_h)) {
            foreach ($persona->hijos as $hijo) {
                $is_valid = true;
                foreach($unicos_h as $campo => $valores){
                    $camp = false;
                    foreach($valores as $valor){
                        if ($hijo[$campo]==$valor) {
                            $camp = true;
                            break;
                        }
                    };
                    if (!$camp) {
                        $is_valid = false;
                        break;
                    }   
                };
                if ($is_valid) ++$h;
            }
        }
        $hijos = $h;
        $pass = true;
        foreach ($unicos_p as $e) {
            if(!$e) {
                $pass = false;
                break;
            }
        };
        return $pass;
    }

    public function fechas_count($obj,$arr = null){
        $date_and_days = [];
            $fechas = [];
            if($arr!==null){
                $fechasDB = $arr;
            }else{
                $fechasDB = $obj->whereBetween("fecha",[$this->inicio,$this->cierre])->distinct()->get(['fecha']);
            }
            array_push($fechas, $this->inicio);
            foreach($fechasDB as $e) {array_push($fechas, $e['fecha']);}
            array_push($fechas, $this->cierre);
            $fechas = array_unique($fechas);
            usort($fechas,function( $a, $b ) {return strtotime($a) - strtotime($b);});
            $anterior = NULL;
            $count = 0;
            foreach ($fechas as $i => $fecha) {
                if ($anterior !== NULL) {
                    $f = (new \DateTime($fecha))->modify('-1 day');
                    if($i==count($fechas)-1){$f = $fecha;}
                    $dias = s_datediff("d",$anterior,$f);
                    $count += $dias;
                    array_push($date_and_days, [$anterior,$count]); 
                }
                $anterior = $fecha;
            }
            $date_and_days[0][0] = $obj->where("fecha","<=",$this->inicio)->orderBy("fecha","desc")->first()->fecha;
        return $date_and_days;
    }
    public function get_date_range($arr,$i){
        $anterior = null;
        foreach ($arr as $actual) {
            if ($anterior!==null) {
                if ($anterior<$i&&$i<=$actual[1]) {return $actual[0];}
                if($i<=$arr[0][1]){return $arr[0][0];}
            }
            $anterior = $actual[1];
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return sno_nominas::all();
    }

    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
    /**
     * Display the specified resource.
     *
     * @param  \sinapsis\sno_nominas  $sno_nominas
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        $this->inicio = "2016-01-20";
        $this->cierre = "2019-02-15";
        /*
            _Variables_
            UTRIBUTARIA
            LUNES
            NHIJOS
            SUELDO
            SUELDONORMAL
            SUELDOINTEGRAL
            ANTIGUEDAD

        */
        /*$condiciones = [
            [
                "id_formula" => 1, 
                "valor" => ["valor"=>"ACTIVO","campo"=>"estado"], 
                "operador" => "igual"
            ],
            [
                "id_formula" => 1, 
                "valor" => ["valor"=>"JUBILADO","campo"=>"estado"], 
                "operador" => "igual"
            ],
            [
                "id_formula" => 1, 
                "valor" => ["valor"=>"DOCENTE","campo"=>"categoria"], 
                "operador" => "igual"
            ],
            [
                "id_formula" => 1, 
                "valor" => ["valor"=>"FIJO","campo"=>"estatus"], 
                "operador" => "igual"
            ],
            [
                "id_formula" => 1, 
                "valor" => ["valor"=>"CONTRATADO","campo"=>"estatus"], 
                "operador" => "igual"
            ]
        ];
        $persona = [
            "estado" => "JUBILAD",
            "categoria" => "DOCENTE",
            "estatus" => "CONTRATADO",
        ];*/
        
        //Días entre fecha y fecha
        $inicio = $this->inicio;
        $cierre = $this->cierre;
        $diasPeriodo = s_datediff("d",$inicio,$cierre); 

        $nomina = sno_nominas::with([
            "formulas" => function($q) use ($inicio,$cierre){
                $q->with([
                    "formula" => function($q) use ($inicio,$cierre){
                        $q->with([
                            
                            "condiciones" => function($q) use ($inicio,$cierre){
                                $q->with("valorall");
                            },
                            "versiones"=>function($q) use ($inicio,$cierre){
                                $q->whereBetween("fecha",[$inicio,$cierre])->orderBy("fecha","asc");
                            },
                        ])->orderByRaw("tipo_concepto='prima salarial' AND tipo_sueldo='sueldo basico' DESC");
                    },
                    "divisiones"=>function($q){
                        $q->with("division");
                    }]);
            },
            "condiciones" => function($q){
                $q->with(["valorall"]);
            },
            "adic_formula",
            "adic_personal"])->where("id",$id)->first();
        // return $nomina;

        $fechas_sueldos = $this->fechas_count((new sno_tablas_sueldos));

        $fechas_ut = $this->fechas_count((new sno_unidad_tributaria));
        $fechas_formulas = [];
        foreach ($nomina->formulas as $e) {
            array_push($fechas_formulas,$this->fechas_count((new sno_formulas_versiones),$e->formula->versiones));
        }

        $utQuery = sno_unidad_tributaria::whereIn("fecha",array_map(function($e){return $e[0];},$fechas_ut))->orderBy("fecha","asc")->get();
        $sueldosQuery = sno_tablas_sueldos::with("sueldos")->whereIn("fecha",array_map(function($e){return $e[0];},$fechas_sueldos))->orderBy("fecha","asc")->get();

        $dates_and_days = [];
        foreach ($fechas_formulas as $fecha_formula) {
            $f = [];
            for ($i=1; $i <= $diasPeriodo; $i++) { 
                $fSueldo = $this->get_date_range($fechas_sueldos,$i);
                $fUt = $this->get_date_range($fechas_ut,$i);
                $fFormula = $this->get_date_range($fecha_formula,$i);
               
                $check = true;
                foreach($f as $ii => $e){
                    if ($e[1]===$fSueldo&&$e[2]===$fUt&&$e[3]===$fFormula) {
                        $f[$ii][0] += 1;
                        $check = false;
                        break;
                    }
                };
                if($check){array_push($f,[1,$fSueldo,$fUt,$fFormula]);}
            }
            array_push($dates_and_days,$f);
        }
        // return $dates_and_days;

        //Seleccionar personal de acuerdo a las condiciones Nómina y el Personal adicional
        $adicPersonal = $nomina->adic_personal;
        $condicionesnomina = [];
        foreach ($nomina->condiciones->map(function($q){
            return ["valor"=>$q->valorall->valor,"campo"=>$q->valorall->campo];
        }) as $e) {
            if(isset($condicionesnomina[$e["campo"]])){
                array_push($condicionesnomina[$e["campo"]],$e["valor"]);
            }else{
                $condicionesnomina[$e["campo"]] = [$e["valor"]];
            }
        }
        $adicFormulas =  $nomina->adic_formula;
        $personal = personal::with(["hijos"])
        ->orWhere(function($q) use ($adicPersonal){
            foreach($adicPersonal as $e) {
                $operador = $e->incluir_excluir==1?"=":"!=";
                $q->orWhere('cedula', $operador, $e->cedula);
            }
        })
        ->orWhere(function($q) use ($condicionesnomina){
            foreach ($condicionesnomina as $campo => $arr) {
                $q->where(function($qq) use ($arr,$campo){
                    foreach ($arr as $e) {
                        $qq->orWhere($campo,$e);
                    }
                });
            }
        })
        ->get();
        // return $personal;
        $c = 0;
        foreach($personal as $persona){
            $antiguedad = s_datediff("y",(new \DateTime($persona->fecha_ingreso)),(new \DateTime()));
            $calculos = [];
            $test = 0;

            $sueldo = 0;
            $sueldoNormal = 0;
            $sueldoIntegral = 0;
            $lunes = lunes();
            $hrs_nocturnas = $persona->hrs_nocturnas;
            $hrs_feriadas = $persona->hrs_feriadas;
            $hrs_diurnas = $persona->hrs_diurnas;
            $hrs_feriadas_nocturnas = $persona->hrs_feriadas_nocturnas;
            $hijos = 0;

            $categoria = $persona->categoria;
            $cargo = $persona->cargo;
            $dedicacion = $persona->dedicacion;

            foreach ($nomina->formulas as $i_f => $formulaVersiones) {
                $f = $formulaVersiones->formula;
                if ($this->condicion($persona,$f->condiciones,$hijos)) {
                    $versiones = $f->versiones;
                    $diasF = $f->dias;
                    foreach ($dates_and_days[$i_f] as $arr_days) {
                        // $arr_days[0] //dias
                        // $arr_days[1] //sueldo
                        // $arr_days[2] //ut
                        // $arr_days[3] //formulas
                        
                        $sueldo = $sueldosQuery->where("fecha",$arr_days[1])->first()->sueldos
                        ->where("categoria",$categoria)
                        ->where("cargo",$cargo)
                        ->where("dedicacion",$dedicacion)->first()->salario;
                        
                        $ut = $utQuery->where("fecha",$arr_days[2])->first()->valor;

                        $formula = $versiones->where("fecha")->first();
                        $vars = [
                            "LUNES" => "\$lunes",
                            "UTRIBUTARIA" => "\$ut",
                            "NHIJOS" => "\$hijos",
                            "SUELDO" => "\$sueldo",
                            "SUELDONORMAL" => "\$sueldoNormal",
                            "SUELDOINTEGRAL" => "\$sueldoIntegral",
                            "ANTIGUEDAD" => "\$antiguedad",
                            "HRSNOCTURNAS" => "\$hrs_nocturnas",
                            "HRSFERIADAS" => "\$hrs_feriadas",
                            "HRSDIURNAS" => "\$hrs_diurnas",
                            "HRSFERIADASNOCTURNAS" => "\$hrs_feriadas_nocturnas",
                            
                        ];
                        $formula = $formula->formula;
                        foreach ($vars as $replace => $valor) {
                            $formula = str_replace($replace,$valor,$formula);
                        }
                        $calc = eval('return '.$formula.';');
                        $calc = ($calc/$diasF)*$arr_days[0];
                        // Sueldo normal
                        if (
                            ($f->movimiento==="asignacion" && $f->tipo_concepto==="prima salarial") 
                            OR $f->tipo_concepto==="bono salarial"
                        ) {
                            $sueldoNormal+=$calc;	
                        }
                        //Sueldo integral
                        if (
                            $f->movimiento==="asignacion" 
                            && $f->tipo_concepto==="bono anual" 
                            && $f->tipo_sueldo=="sueldo normal"
                        ) {
                            $sueldoIntegral+=$calc/12;
                        }
                        $test += $calc;
                    }
                    
                }
                echo $hijos."<br>";
            }
            echo $persona->nombre." ".$persona->apellido."______".$test."<br>";
        };
        // echo $c;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \sinapsis\sno_nominas  $sno_nominas
     * @return \Illuminate\Http\Response
     */
    public function edit(sno_nominas $sno_nominas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \sinapsis\sno_nominas  $sno_nominas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sno_nominas $sno_nominas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \sinapsis\sno_nominas  $sno_nominas
     * @return \Illuminate\Http\Response
     */
    public function destroy(sno_nominas $sno_nominas)
    {
        //
    }
}
