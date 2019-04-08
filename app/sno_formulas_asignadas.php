<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_formulas_asignadas extends Model
{
    public function divisiones() { 
        return $this->hasMany('sinapsis\Divisiones_formula',"id_formula_asig","id"); 
    }
}
