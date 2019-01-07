<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class hijos_personal extends Model
{
    function personal() {
        return $this->belongsTo('sinapsis\personal');
    }
}
