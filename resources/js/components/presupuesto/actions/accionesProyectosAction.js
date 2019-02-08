
export const getAccionesProyectos = (q="",callback=null) => dispatch => {
	axios.get("/presupuesto/acciones_proyectos/"+q)
	.then(res=>{
		dispatch({
			type: "GET_ACCIONES_PROYECTOS",
			payload: res.data
		})
		if (callback) callback()
	})
	.catch(err=>console.log(err.data))
}

export const selectAccionProyectoFun = (index) => dispatch => {
	dispatch({
		type: "SELECT_ACCION_PROYECTO",
		payload: index
	})
}

export const selectEspecificaFun = (index) => dispatch => {
	dispatch({
		type: "SELECT_ESPECIFICA",
		payload: index
	})
}

