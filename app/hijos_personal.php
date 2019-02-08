<?php

namespace sinapsis;

use Illuminate\Database\Eloquent\Model;

class hijos_personal extends Model
{
	protected $fillable = [
     	"id",
		"genero_hijo",
		"nombres_apellidos_hijo",
		"fecha_nacimiento_hijo",
		"estudiante_hijo",
		"discapacidad_hijo",
		"cedula_representante",
    ];
    function personal() {
        return $this->belongsTo('sinapsis\personal');
    }
}
