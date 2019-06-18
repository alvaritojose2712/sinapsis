

const initialState = {
	nomina: [],
}

export default function(state = initialState, {type,payload}){
	switch(type){
		case "NOMINA":
			return {...state,nomina:payload}
		default:
			return state
	}
}
