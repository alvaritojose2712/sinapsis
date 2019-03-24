<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class Adic_personal extends Model
{
    public function division() { 
        return $this->belongTo('sinapsis\sno_nominas',"id","id_nomina"); 
    }
}
