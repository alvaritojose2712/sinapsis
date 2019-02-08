import { 
	BUSCAR_PERSONAL, 
	AGREGAR_PERSONAL, 
	SELECT_PERSONAL, 
	EDIT_USER,
	EMPTY_EDITUSER,
	GET_VALORES_GLOBALES } from '../actions/types'

const buscarPersonal = (q="",callback=null) => dispatch => {
	axios
	.get(`/recursoshumanos/personalController/${q}`)
	.then(res => {
		dispatch({
			type: BUSCAR_PERSONAL,
			payload: res.data
		})
		if(callback!==null) callback()
	})
}

const selectPersonal = (index) => dispatch => {
	dispatch({
		type: SELECT_PERSONAL,
		payload: index
	})
}
const getValoresGlobales = () => dispatch => {
	axios.get("/valores_globales.json")
	.then(res=>{
		dispatch({
			type: GET_VALORES_GLOBALES,
			payload: res.data
		})
	})
	
}
const editUserInputs = (data) => dispatch => {
	dispatch({
		type: EDIT_USER,
		payload: data
	})
}

const emptyEditUser = () => dispatch => {
	dispatch({
		type: EMPTY_EDITUSER,
		payload: null
	})
}


export {buscarPersonal,selectPersonal,getValoresGlobales,editUserInputs,emptyEditUser}