export const openNotificacion = () => dispatch => {
	dispatch({
		type: "OPEN_NOTIFICACION",
		payload: null
	})
}

export const finishNotificacion = data => dispatch => {
	dispatch({
		type: "FINISH_NOTIFICACION",
		payload: data
	})
}


export const initialNotificacion = data => dispatch => {
	dispatch({
		type: "INITIAL_NOTIFICACION",
		payload: null
	})
}

export const openModal = () => dispatch => {
	dispatch({
		type: "OPEN_MODAL",
		payload: null
	})
}
export const closeModal = () => dispatch => {
	dispatch({
		type: "CLOSE_MODAL",
		payload: null
	})
}

