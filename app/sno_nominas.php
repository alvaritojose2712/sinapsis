<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_nominas extends Model
{
    public function condiciones() { 
        return $this->hasMany('sinapsis\sno_condiciones_nomina',"id_nomina","id"); 
    }
    public function adic_formula() { 
        return $this->hasMany('sinapsis\Adic_formula',"id_nomina","id"); 
    }
    public function adic_personal() { 
        return $this->hasMany('sinapsis\Adic_personal',"id_nomina","id"); 
    }
}
