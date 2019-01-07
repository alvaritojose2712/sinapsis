import React, {Component} from 'react';
import Cargando from './cargando';

	
export default class Notificacion extends Component {
	constructor(){
		super();
		this.state = {
			notificacion:false
		}
		this.toggle = this.toggle.bind(this)
		
	};
	toggle(){
		this.setState(prevState => ({
		  notificacion: false
		}));
	}
	render(){
		let clases = "alert-"+this.props.color+" alert alert-dismissible fade show"
		let display = this.props.active?{display:""}:{display:"none"}
		let display_body = this.props.cargando?{display:"none",overflow:"auto"}:{display:"",overflow:"auto"}
		return(
			<div className={clases} role="alert" style={display}>
			  <div style={display_body}>
			  	<strong>Notificación: </strong>{this.props.msj}
			  </div>
			  <Cargando active={this.props.cargando}/>
			</div>
		);
	};


};

