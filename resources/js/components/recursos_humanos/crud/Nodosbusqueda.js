import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

import {formatCedula} from '../../formats';
import { selectPersonal } from './actions/busquedaActions';

class Nodosbusqueda extends Component{
	render(){
		let {data,index} = this.props.user
		let {id,cedula,apellido,nombre} = data; 
		
		return( 
			<div className={this.props.persona===index?"bg-primary text-light card mt-2":"bg-dark card mt-2"}>
				<div className="card-header flex-row row justify-content-between">
					<div>
						<small>{id}</small>
					</div>
					<div><span>{formatCedula(cedula)}</span></div>
				</div>
				<div className="card-body">
					<h5 className="card-title"><b>{apellido}</b>, {nombre}</h5>
					<p className="card-text">
						<Link to="/recursoshumanos/personal/vermas">
							<button 
								className="btn btn-secundary btn-large" 
								onClick={()=>{this.props.selectPersonal(index)}}>Ver más
							</button>
						</Link>
					</p>
				</div>
			</div>
		)
	}
}
const state = state => ({
	persona: state.busqueda.persona
})
export default connect(state, {selectPersonal})(Nodosbusqueda)
