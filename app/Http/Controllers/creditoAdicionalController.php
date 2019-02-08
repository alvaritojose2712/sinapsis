<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Credito_adicional;

class creditoAdicionalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   public function index()
    {
       return Credito_adicional::all();
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
            $CreditoAdicional = new Credito_adicional;
            $CreditoAdicional->monto = $request->monto;
            $CreditoAdicional->descripcion = $request->descripcion;
            $CreditoAdicional->fecha = $request->fecha;
            
            $CreditoAdicional->save();
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
        return Credito_adicional::where("id","LIKE","$id%")
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
            $CreditoAdicionalUpdate = Credito_adicional::where("id",$id);
            
            $CreditoAdicionalUpdate->update($request->all());

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
            Credito_adicional::where("id",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}
