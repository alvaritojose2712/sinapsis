
const initialState = {
	accionesProyectos: [],
	accionProyectoSelect:null,
	especificaSelect:null,
}

export default function(state = initialState, {type,payload}){
	switch(type){
		case "GET_ACCIONES_PROYECTOS":
			return {...initialState,accionesProyectos:payload}

		case "SELECT_ACCION_PROYECTO":
			return {...state,accionProyectoSelect:payload}

		case "SELECT_ESPECIFICA":
			return {
				...state,
				especificaSelect:payload
			}
			
		default:
			return state
	}
}
