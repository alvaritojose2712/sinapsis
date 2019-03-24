<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class sno_tablas_sueldos extends Model
{
    public function sueldos() { 
        return $this->hasMany('sinapsis\sno_sueldos',"id_tabla","id"); 
    }
}
