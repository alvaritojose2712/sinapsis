export const handleChange = e => dispatch => {
	dispatch({
		type: "ON_CHANGE",
		payload: {value:e.target.value,name:e.target.name}
	})
}

export const deleteFun = (uri,id,callback=null) => dispatch => {
	axios.delete(uri+id)
	.then(res=>{
		if (callback) callback(res.data)
	})
}
export const create = (uri,data,callback=null) => dispatch => {
	axios.post(uri,data)
	.then(res=>{
		if (callback) callback(res.data)
	})
}

export const update = (uri,id,data,callback=null) => dispatch => {
	axios.put(uri+id,data)
	.then(res=>{
		if (callback) callback(res.data)
	})
}
export const modoEditFun = (uri,data,callback=null) => dispatch => {
	dispatch({
		type: "MODO_EDIT",
	})
}

export const read = (uri,callback=null) => dispatch => {
    axios.get(uri)
	.then(res=>{
		dispatch({
			type: "GET_DATA",
			payload: res.data
		})
		if (callback) callback()
	})
}
export const selectItemFun = index => dispatch =>{
	dispatch({
		type: "SELECT_ITEM",
		payload: index
	})
}
export const initialFormFun = () => dispatch =>{
	dispatch({
		type: "INITIAL_FORM",
		payload: null
	})
}

var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example
export const requestOptions = (fields,modelId,q="") => dispatch =>{
	clearTimeout(typingTimer);
	typingTimer = setTimeout(doneTyping, doneTypingInterval);
	function doneTyping () {
		fields.map((e,i)=>{
			if (e.isSelect && e.options.optionsListUri) {
				axios.get(e.options.optionsListUri+q)
				.then(res=>{
					dispatch({
						type:"ADD_OPTIONS_LIST",
						payload:{
							options:()=>{
								return res.data.map((ee,ii)=>{
									return { label:`${ee[e.options.label[0]]} - ${ee[e.options.label[1]]}`, value: ee[e.options.value] }
								})
							},
							modelId:modelId,
							fieldId:i,
						}
					});
				})
				
			}
		})
	}
	

}
