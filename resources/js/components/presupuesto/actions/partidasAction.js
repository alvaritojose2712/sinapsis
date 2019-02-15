import { GET_PARTIDAS, GET_PARTIDAS_ACCIONES_PROYECTOS, SELECT_ACCION_ESPECIFICA, SELECT_MOVIMIENTOS } from '../actions/types'

export const getPartidas = (q="",callback=null) => dispatch => {
	axios.get("/presupuesto/partidas/"+q)
	.then(res=>{
		dispatch({
			type: GET_PARTIDAS,
			payload: res.data
		})
		if (callback) callback()
	})
	.catch(err=>console.log(err.data))
}

export const getPartidasActionesProyectos = (codigo,callback=null) => dispatch => {

	axios.all([
	   // axios.get("/presupuesto/movimientos_presupuestarios/"+codigo),
	    axios.get("/presupuesto/partidas/"+codigo),
	])
	.then(axios.spread((/*presupuesto_ordinario, */acciones_proyectos) => {
		dispatch({
			type: GET_PARTIDAS_ACCIONES_PROYECTOS,
			payload: {
				//presupuesto_ordinario:presupuesto_ordinario.data,
				acciones_proyectos:acciones_proyectos.data[0]['partida_padre'],
				partidaSelect:{codigo:codigo}
			}
		})
		if (callback) callback()
	}))
	.catch(err=>console.log(err))
}

export const selectAccionEspecificaFun = (index) => dispatch => {
	dispatch({
		type: SELECT_ACCION_ESPECIFICA,
		payload: index
	})
}



