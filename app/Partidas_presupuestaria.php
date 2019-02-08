<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Partidas_presupuestaria extends Model
{
    public function ordinario(){
    	return $this->hasMany("sinapsis\Presupuesto_ordinario","codigo","partida");
    }
}
