<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Presupuesto_ordinario extends Model
{
    protected $fillable = [
       "id",
       "partida",
       "denominacion",
       "fecha",
       "monto",
       "ae",
   ];
    public function movimientos(){
    	return $this->hasMany("sinapsis\Movimientos_presupuesto","referencia","id");
    }
    public function especificas(){
    	return $this->hasMany("sinapsis\Acciones_especificas","ae","id");
    }
    public function partida(){
    	return $this->hasOne("sinapsis\Partidas_presupuestaria","codigo","partida");
    }
    public function ae(){
    	return $this->hasOne("sinapsis\Acciones_especifica","id","ae");
    }
}
