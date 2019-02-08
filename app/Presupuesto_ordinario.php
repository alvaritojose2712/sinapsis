<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Presupuesto_ordinario extends Model
{
    public function movimientos(){
    	return $this->hasMany("sinapsis\Movimientos_presupuesto","referencia","id");
    }
    public function especificas(){
    	return $this->hasMany("sinapsis\Acciones_especificas","ae","id");
    }
}
