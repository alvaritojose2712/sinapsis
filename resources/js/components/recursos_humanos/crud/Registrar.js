import React, {Component} from 'react';
import { connect } from 'react-redux';
import { emptyEditUser, buscarPersonal } from './actions/busquedaActions';

import Notificacion from '../../notificacion';
import InputsRegistrar from './Inputsregistrar';
import {getDataForm} from '../../formats';
import { openNotificacion,finishNotificacion } from '../../utilidadAction'

		


class Registrar extends Component{
	constructor(){
		super();
		this.guardar = this.guardar.bind(this)
	};
	componentDidMount(){
		this.props.emptyEditUser()
	}
	guardar(e){
		e.preventDefault()
		this.props.openNotificacion()

		 let padre = {...this.props.editUser}
		 let hijos = [...this.props.editUser.hijos]
		 delete padre.id
		 delete padre.hijos
			axios
			.post('/recursoshumanos/personalController',{data_padre:padre,hijos:hijos})
		    .then(res=>{
				this.props.finishNotificacion(res.data)
		        if (res.data.code=="200") this.props.buscarPersonal()
		       
		    })
	}
	render(){		
		return(
			<form onSubmit={this.guardar} method="post">
				<Notificacion 
					cargando={this.props.notificacion.cargando} 
					active={this.props.notificacion.active} 
					color={this.props.notificacion.color} 
					msj={this.props.notificacion.msj}/>
			    <div className="mt-2">
			  		<div className="btn-group">
						<button type="submit" className="btn btn-outline-info btn-lg"><i className="fa fa-save"></i> Guardar información</button>
					</div>
			    </div>
				<InputsRegistrar/>
			</form>
		)
	}
}

const mapStateProps = state => ({
	editUser:state.busqueda.editUser,
	notificacion: state.utilidad.notificacion,

})
export default connect(mapStateProps, {
	emptyEditUser,
	buscarPersonal,
	openNotificacion,
	finishNotificacion,
})(Registrar)
