import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store  from '../store'

import Partidas from './partidas/partidasIndex';
import accionesProyectos from './acciones_proyectos/accionProyectosIndex';
import Forms from './forms/';

export default class Presupuesto extends Component {
	render(){
		return(
			<Provider store={store}>
				<div className="row h-100">
					<div className="h-100 col col-md-auto p-0">
						<div className="w-100 h-100">
							<div className="btn-group btn-group-sm btn-group-vertical h-100">
								<Link className="btn btn-primary" to='/presupuesto/'>
									<i className="fa-2x fa fa-home" title="Inicio"></i> 
								</Link>
								<Link className="btn btn-primary" to='/presupuesto/forms/'>
									<i className="fa-2x fa fa-wpforms" title="Formularios"></i> 
								</Link>
								<Link className="btn btn-primary" to='/presupuesto/partidas/'>
									<i className="fa-2x fa fa-calculator" title="Partidas Presupuestaria"></i> 
								</Link>
								<Link className="btn btn-primary" to='/presupuesto/acciones_proyectos/'>
									<i className="fa-2x fa fa-book" title="Acciones / Proyectos"></i>					
								</Link>
							</div>
						</div>
					</div>
					<div className="h-100 col">
						<div className="container-fluid h-100 flex">
							<Route path='/presupuesto/partidas/:partida?' component={Partidas}/>
							<Route path='/presupuesto/acciones_proyectos' component={accionesProyectos}/>
							<Route path='/presupuesto/forms' component={Forms}/>
						</div>
					</div>
				</div>
			</Provider>
		);
	};


};

