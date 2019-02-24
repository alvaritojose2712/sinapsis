import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store  from '../store'

import Partidas from './partidas/partidasIndex';
import accionesProyectos from './acciones_proyectos/accionProyectosIndex';
import Forms from './forms/';
import Crud from '../crud/';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


export default class Presupuesto extends Component {
	render(){
		const {match} = this.props
		return(
			<Provider store={store}>
				
				<div className="row h-100">
					<div className="h-100 col col-md-auto p-0">
						<div className="w-100 h-100">
							<div className="btn-group btn-group-sm btn-group-vertical h-100">
								<Link className="btn btn-primary" to={`${match.url}`}>
									<i className="fa-2x fa fa-home" title="Inicio"></i> 
								</Link>
								<Link className="btn btn-primary" to={`${match.url}/forms`}>
									<i className="fa-2x fa fa-wpforms" title="Formularios"></i> 
								</Link>
								<Link className="btn btn-primary" to={`${match.url}/partidas`}>
									<i className="fa-2x fa fa-calculator" title="Partidas Presupuestaria"></i> 
								</Link>
								<Link className="btn btn-primary" to={`${match.url}/acciones_proyectos`}>
									<i className="fa-2x fa fa-book" title="Acciones / Proyectos"></i>					
								</Link>
								<Link className="btn btn-primary" to={`${match.url}/crud`}>
									Crud				
								</Link>
							</div>
						</div>
					</div>
					<div className="h-100 col">
						<div className="container-fluid h-100 flex">
							<Route path={`${match.url}/partidas/:partida?`} component={Partidas}/>
							<Route path={`${match.url}/acciones_proyectos`} component={accionesProyectos}/>
							<Route path={`${match.url}/forms`} component={Forms}/>
							<Route 
							path={`${match.url}/crud`} 
							render={
								props => 
								// <Crud {...props} resource="/presupuesto/partidas/" primary="codigo" model="partidas" title="Partidas presupuestarias"/>
								<Crud {...props} resource="/presupuesto/movimientos_presupuestarios/" primary="id" model="movimientos" title="Movimientos presupuestarios"/>
							}
							/>
						</div>
					</div>
				</div>
				<Alert stack={false} timeout={5000} position='bottom'  effect='slide'/>
			</Provider>
		);
	};


};

