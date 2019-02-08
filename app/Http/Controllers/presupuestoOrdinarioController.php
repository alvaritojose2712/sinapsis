<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Presupuesto_ordinario;

class presupuestoOrdinarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index()
    {
       return Presupuesto_ordinario::all();
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
            $PresupuestOrdinario = new Presupuesto_ordinario;
            $PresupuestOrdinario->monto = $request->monto;
            $PresupuestOrdinario->denominacion = $request->denominacion;
            $PresupuestOrdinario->ae = $request->ae;
            $PresupuestOrdinario->partida = $request->partida;           
            $PresupuestOrdinario->fecha = $request->fecha;           
            
            $PresupuestOrdinario->save();
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
        return Presupuesto_ordinario::where("nombre","LIKE","$id%")
            ->orWhere("denominacion","LIKE","$id%")
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
            $PresupuestOrdinarioUpdate = Presupuesto_ordinario::where("id",$id);
            
            $PresupuestOrdinarioUpdate->update($request->all());

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
            Presupuesto_ordinario::where("id",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}
