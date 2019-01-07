<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Acciones_especifica;
use sinapsis\Partidas_presupuestaria;
use sinapsis\Acciones_proyecto;

class Acciones_especificasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {   
        $acciones_especificas = Acciones_especifica::where("partida","=",$id)->get(); 
        $all = [];
        foreach ($acciones_especificas as $accion_especifica) {
            $id_ae = $accion_especifica['id'];
            $acciones_proyectos_id = $accion_especifica['acciones_proyectos_id'];
           
            $accion_proyecto = Acciones_especifica::find($acciones_proyectos_id)->acciones_preyecto;
           
            $id_ap = $accion_proyecto['id'];

            if (!isset($all[$id_ap])) {
                $all[$id_ap] = $accion_proyecto;
                $all[$id_ap]['especificas'] = array($id_ae=>$accion_especifica);

            }else{
                $arr_old = $all[$id_ap]['especificas'];
                $arr_old[$id_ae] = $accion_especifica;
                $all[$id_ap]['especificas'] = $arr_old;
            }
            
        }
        $arr = [];
        foreach ($all as $value) {
            $arr_e = [];
            foreach ($value['especificas'] as $especifica) {
                array_push($arr_e, $especifica);
            }
            $value['especificas'] = $arr_e;
            array_push($arr, $value);
        }
        return response()->json($arr);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
