import { 
	BUSCAR_PERSONAL, 
	AGREGAR_PERSONAL, 
	SELECT_PERSONAL,
	EDIT_USER,
	EMPTY_EDITUSER,
	GET_VALORES_GLOBALES } from '../actions/types'

const initialState = {
	personals: [],
	persona: null,
	valores_globales: {},
	editUser: {
		antiguedad_otros_ieu:"",
		apellido:"",
		caja_ahorro:"",
		cargo:"",
		cargo_departamento:"",
		categoria:"",
		cedula:"",
		correo:"",
		cuenta_bancaria:"",
		dedicacion:"",
		departamento_adscrito:"",
		estatus:"",
		estado:"",
		fecha_ingreso:"",
		fecha_nacimiento:"",
		genero:"",
		grado_instruccion:"",
		hrs_diurnas:"",
		hrs_feriadas:"",
		hrs_feriadas_nocturnas:"",
		hrs_nocturnas:"",
		nacionalidad:"",
		nombre:"",
		profesion:"",
		telefono_1:"",
		telefono_2:"",
		hijos:[],
	}
}

export default function(state = initialState, {type,payload}){
	switch(type){
		case BUSCAR_PERSONAL:
			return {...state,personals:payload,persona:null}
		case SELECT_PERSONAL:
			return {...state,persona:payload}
		case GET_VALORES_GLOBALES:
			return {...state,valores_globales:payload}
		case EDIT_USER:
			if (payload.type==="onChangeInputs"){
				return {...state,editUser:{...state.editUser,[payload.data.target.name]:payload.data.target.value}}
			}else if(payload.type==="modificarHijos"){
				let copy = [...state.editUser.hijos]
				copy[payload.dataHijos.index][payload.dataHijos.name] = payload.dataHijos.value
				return {...state,editUser: {...state.editUser,hijos: copy}}
			}else if(payload.type==="addHijos"){
				return {...state,editUser:{...state.editUser,hijos:[...state.editUser.hijos,payload.dataHijos]}}
			}else if(payload.type==="removeHijos"){
				return {...state,editUser:{...state.editUser,hijos:[...state.editUser.hijos].filter((e,i)=>i!==payload.dataHijos)}}
			}else if(payload.type==="removeHijosExit"){
				let copy = [...state.editUser.hijos]
				copy[payload.index].remove = true
				return {...state,editUser: {...state.editUser,hijos: copy}}
			}else if(payload.type==="cancelRemoveHijosExit"){
				let copy = [...state.editUser.hijos]
				delete copy[payload.index].remove
				return {...state,editUser: {...state.editUser,hijos: copy}}
			}else if(payload.type==="modoEditHijos" || payload.type==="cancelEditHijos"){
				let copy = [...state.editUser.hijos]
				copy[payload.dataHijos.index].type = payload.dataHijos.accion
				return {...state,editUser: {...state.editUser,hijos: copy}}
			}else{
				return {...state,editUser:payload}
			} 
		case EMPTY_EDITUSER:
			return {...state,editUser:{...initialState.editUser},persona:null}
		default:
		return state
	}
}
