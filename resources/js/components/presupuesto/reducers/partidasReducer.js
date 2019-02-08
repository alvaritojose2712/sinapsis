import { GET_PARTIDAS, GET_PARTIDAS_ACCIONES_PROYECTOS,SELECT_ACCION_ESPECIFICA, SELECT_MOVIMIENTOS } from '../actions/types'

const initialState = {
	partidas: [],
	presupuesto_ordinario: [],
	acciones_proyectos: {num:[],data:[]},
	partidaSelect:{codigo:"",partida:""},
	accionProyectoSelect:null,
	movimientosSelect:null,
}

export default function(state = initialState, {type,payload}){
	switch(type){
		case GET_PARTIDAS:
			return {...initialState,partidas:payload}
		case GET_PARTIDAS_ACCIONES_PROYECTOS:
		// console.log([...state.partidas])
			return {
				...state, 
				presupuesto_ordinario:payload.presupuesto_ordinario,
				acciones_proyectos:payload.acciones_proyectos,
				partidaSelect:{
					codigo:payload.partidaSelect.codigo,
					partida:[...state.partidas].filter((e,i)=>e.codigo===payload.partidaSelect.codigo)[0].partida
				},
				accionProyectoSelect:null,
				movimientosSelect:null,
			}
		case SELECT_ACCION_ESPECIFICA:
			return {
				...state,
				accionProyectoSelect:payload
			}
		case SELECT_MOVIMIENTOS:
			return {
				...state,
				movimientosSelect:payload
			}
		default:
		return state
	}
}
