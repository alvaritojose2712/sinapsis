import React, {Component} from 'react';
import Cargando from '../../cargando';
import Notificacion from '../../notificacion';
import InputsRegistrar from './Inputsregistrar'

export default class Registrar extends Component{
	constructor(){
		super();
		this.state = {
			cargando:true,
			notificacion:{
				active:false,
				cargando:false,
				color:"danger",
				msj:"Hola mundo",
			},
		}
		this.guardar = this.guardar.bind(this)

	};
	
	guardar(e){
		e.preventDefault()
		 this.setState({
        	notificacion:{
				active:true,
				cargando:true,
				color:"warning",
				msj:"",
			} 
        });
		let form = new FormData(e.target)
	    let data = {}
	    for(let key of form.entries()){
	    	data[key[0]] = key[1]
	    }
		try{
			axios
			.post('/recursoshumanos/personalController',data)
		    .then(res=>{
		        this.setState({
		        	notificacion:{
						active:true,
						cargando:false,
						color:"success",
						msj:res.data,
					} 
		        });
		       
		    })
		}
	    catch(err){
	        this.setState({
	        	notificacion:{
					active:true,
					cargando:false,
					color:"danger",
					msj:JSON.stringify(err.response.data),
				} 
	        });
	    };
	}
	render(){
		const {cargando,notificacion} = this.state
		
		return(
			<form onSubmit={this.guardar} className="container-fluid m-2">
				<Notificacion 
					cargando={notificacion.cargando} 
					active={notificacion.active} 
					color={notificacion.color} 
					msj={notificacion.msj}/>
			    <div>
			  		<div className="btn-group">
						<button type="submit" className="btn btn-info btn-lg"><i className="fa fa-save"></i> Guardar información</button>
					</div>
			    </div>
				<InputsRegistrar/>
			</form>
		)
	}
}

