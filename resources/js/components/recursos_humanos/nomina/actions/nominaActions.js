export const mostrarNominas = (callback=null) => dispatch => {
	axios
	.get(`/recursoshumanos/nominasController`)
	.then(res => {
		dispatch({
			type: "NOMINA",
			payload: res.data
		})
		if(callback!==null) callback()
	})
}

