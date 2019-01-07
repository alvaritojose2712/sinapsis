import React, {Component} from 'react';

export default class Nodosbusqueda extends Component{
	constructor(){
		super();
		this.select = this.select.bind(this)
	}
	render(){
		let {id,cedula,apellido,nombre} = this.props.user; 
		
		return( 
			<div className={this.select()}>
				<div className="card-header flex-row row justify-content-between">
					<div>{id}</div>
					<div><i>{cedula}</i></div>
				</div>
				<div className="card-body">
					<h5 className="card-title"><b>{apellido}</b>, {nombre}</h5>
					<p className="card-text">
						<button 
							className="btn btn-secundary btn-large" 
							onClick={()=>{this.props.select(this.props.user)}}>Ver más
						</button>
					</p>
				</div>
			</div>
		)
	}
	select(){
		let clases = 'card mt-2 bg-'
		clases += (this.props.cardSeleccionada==this.props.user.id) ? "primary" : "dark"
		return clases
	}
}