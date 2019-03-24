<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_formulas extends Model
{
    public function condiciones() { 
        return $this->hasMany('sinapsis\sno_condiciones_formulas',"id_formula","id"); 
    }
    public function versiones() { 
        return $this->hasMany('sinapsis\sno_formulas_versiones',"id_formula","id"); 
    }
}
