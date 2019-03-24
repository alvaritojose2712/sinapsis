<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_formulas_asignadas extends Model
{
    public function formula() { 
        return $this->hasOne('sinapsis\sno_formulas',"id","id_formula"); 
    }
    public function divisiones() { 
        return $this->hasMany('sinapsis\Divisiones_formula',"id_formula_asig","id"); 
    }
}
