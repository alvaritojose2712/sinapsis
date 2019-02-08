<?php

namespace sinapsis\Http\Controllers;

use Illuminate\Http\Request;
use sinapsis\Partidas_presupuestaria;
use sinapsis\Acciones_proyecto;
use sinapsis\Acciones_especifica;
use sinapsis\Presupuesto_ordinario;

class partidasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Partidas_presupuestaria::where("codigo","LIKE","401%")->get()->take(15);
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
            $partidas = new Partidas_presupuestaria;
            $partidas->codigo = $request->codigo;
            $partidas->partida = $request->partida;
            $partidas->descripcion = $request->descripcion;
            $partidas->save();
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
        $id = str_replace(".", "", (string)$id);
        try{
            $partidas = Partidas_presupuestaria::where("codigo","LIKE","$id%")
                ->orWhere("partida","LIKE","$id%")
                ->get()->take(15);

            if (strlen((string)$id)===9) {
                $id = parsePartida($id);
                $partidas_padre = Partidas_presupuestaria::where("codigo","LIKE","$id%")->get()->count();
                if ($partidas->count()===1) {
                    
                    $arr_data_partida_padre = array(
                        "num" => $partidas_padre==0?0:$partidas_padre-1,
                        "data" =>  Acciones_proyecto::with(["especificas" => function($q) use ($id){
                            
                            $q->with(["ordinario"=>function($qq) use ($id){
                                $qq->with(["movimientos"])->where("partida","LIKE","$id%");
                            }])->whereIn("id",function($qq) use ($id){
                                $qq->from("presupuesto_ordinarios")->where("partida","LIKE","$id%")->select("ae");
                            });

                        }])
                        ->whereIn("id",function($q) use ($id){
                            $q->from("acciones_especificas")->whereIn("id",function($qq) use ($id){
                                $qq->from("presupuesto_ordinarios")->where("partida","LIKE","$id%")->select("ae");
                            })->select("acciones_proyectos_id");
                        })
                        ->orderBy("tipo","Proyecto")
                        ->get(),


// Acciones_proyecto::with(["especificas" => function($q) use ($id){
//     $q->where("partida","LIKE","$id%");
// }])->whereIn("id", function($q) use ($id){
//     $q->from("acciones_especificas")->select("acciones_proyectos_id")->where("partida","LIKE","$id%");
// })->orderBy("tipo","Proyecto")->get(),
                    );
                    $partidas[0]->partida_padre = $arr_data_partida_padre;
                }
            }
            return $partidas;
        }catch(\Exception $e){
            return $e->getMessage();
        }
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
            $partida_update = Partidas_presupuestaria::where("codigo",$id);
           
            $partida_update->update($request->all());

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
            Partidas_presupuestaria::where("codigo",$id)->delete();
            return response(["code"=>200,"msj"=>"¡Éxito al eliminar!"],200);
        }catch(\Exception $e){
           return response(["code"=>500,"msj"=>$e->getMessage()],200);
        }
    }
}

