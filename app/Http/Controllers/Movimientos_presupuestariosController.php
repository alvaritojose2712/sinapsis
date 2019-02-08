<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Movimientos_presupuesto;

class Movimientos_presupuestariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index()
    {
       return Movimientos_presupuesto::all();
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
        try{
            $MovimientosPresupuestarios = new Movimientos_presupuesto;
            $MovimientosPresupuestarios->movimiento = $request->movimiento;
            $MovimientosPresupuestarios->descripcion = $request->descripcion;
            $MovimientosPresupuestarios->referencia = $request->referencia;
            $MovimientosPresupuestarios->fecha = $request->fecha;
            $MovimientosPresupuestarios->credito_adicional = $request->credito_adicional;           
            
            $MovimientosPresupuestarios->save();
            return response(["code"=>200,"msj"=>"¡Éxito al guardar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Movimientos_presupuesto::where("id","LIKE","$id%")
            ->orWhere("descripcion","LIKE","$id%")
            ->orWhere("referencia","LIKE","$id%")
            ->get();
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
        try{
            $MovimientosPresupuestariosUpdate = Movimientos_presupuesto::where("id",$id);
            
            $MovimientosPresupuestariosUpdate->update($request->all());

            return response(["code"=>200,"msj"=>"¡Éxito al editar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            Movimientos_presupuesto::where("id",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}

