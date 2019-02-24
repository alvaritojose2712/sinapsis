var typingTimer;                //timer identifier
var doneTypingInterval = 1000;  //time in ms, 5 second for example

export const create = (uri,data,callback=null) => {
	axios.post(uri,data)
	.then(res=>{
		if (callback) callback(res.data)
	})
}

export const update = (uri,id,data,callback=null) => {
	axios.put(uri+id,data)
	.then(res=>{
		if (callback) callback(res.data)
	})
}

export const read = (uri,callback=null) => {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(doneTyping, doneTypingInterval);
	function doneTyping () {
		axios.get(uri)
		.then(res=>{
			if (callback) callback(res.data)
		})
	}
}

export const deleteFun = (uri,id,callback=null) => {
	axios.delete(uri+id)
	.then(res=>{
		if (callback) callback(res.data)
	})
}

export const requestOptions = (fields,modelId,q="") =>{
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
