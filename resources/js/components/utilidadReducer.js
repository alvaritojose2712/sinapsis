

const defaultState = {
    notificacion:{
		active:false,
		cargando:false,
		color:"",
		msj:""
	},
	modal:false,
};

const utilidadReducer = (state = defaultState, {type,payload}) => {
    switch (type) {
        case "OPEN_NOTIFICACION":
            return {
                ...state,
                notificacion:{
					active:true,
					cargando:true,
					color:"warning",
					msj:"",
				} 
            };
        case "FINISH_NOTIFICACION":
        	return {
        		...state,
        		notificacion:{
					active:true,
					cargando:false,
					color:payload.code=="200"?"success":"danger",
					msj:(typeof payload.msj==="object")?JSON.stringify(payload.msj):payload.msj,
				} 
        	}
        case "INITIAL_NOTIFICACION":
        	return {
        		...state,
        		notificacion:defaultState.notificacion
			}
		case "OPEN_MODAL":
        	return {
        		...state,
        		modal:true
			}
		case "CLOSE_MODAL":
        	return {
        		...state,
        		modal:false
        	}
			
        default:
            return state;
    }
};

export default utilidadReducer;


