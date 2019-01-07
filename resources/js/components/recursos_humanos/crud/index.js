import React, {Component} from 'react';

import Busqueda from './Busqueda';
import Vermas from './Vermas';
import Registrar from './Registrar';
import Editar from './Editar';
	
export default class Recursoshumanoscrud extends Component {
	constructor(){
		super();
		this.state = {
			datos: false,
			vermas: false,
			registrar:false,
			editar:false,
		}
		this.modoVermas = this.modoVermas.bind(this)
		this.modoRegistrar = this.modoRegistrar.bind(this)
		this.modoEditar = this.modoEditar.bind(this)
	};

	modoVermas(datos){
		this.setState({
			datos:datos,
			vermas:true,
			registrar:false,
			editar:false,
		})
	}
	modoRegistrar(){
		this.setState({
			vermas:false, 
			registrar:true,
			editar:false,
		})
	}
	modoEditar(e){
		this.setState({
			vermas:false, 
			registrar:false,
			editar:true,
		})
	}
	render(){
		const {vermas,registrar,editar,datos} = this.state
	
		let action;
		if (vermas) {
			action =  <Vermas User={datos} editar={this.modoEditar}/>
		}else if(registrar){
			action = <Registrar/>
		}else if(editar){
			action = <Editar User={datos}/>
		}
		
		return(
			<div className='row h-100'>
				<div className='col-3 text-white table-responsive'>
					<div className='btn-group mb-2 mt-2'>
						<button className='btn btn-warning btn-lg' onClick={this.modoRegistrar}>Incluir nuevo personal</button>
					</div>
					<Busqueda select={this.modoVermas} cardSeleccionada={datos.id} />
				</div>
				<div className='col table-responsive'>
					{action}
				</div>
			</div>
		);
	};


};

