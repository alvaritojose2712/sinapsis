import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import Crud from './crud';


const mapStateToProps = (state) => ({
	fields: state.formsPresupuesto.fields,
});


class Indexforms extends Component {
	render(){
		const {match,fields} = this.props
		  
		return(
			<React.Fragment>
				<div className="pt-2 pb-2 btn-group">
						<NavLink
							activeClassName="active"
							className="btn btn-outline-primary btn-sm"
							to={`${match.url}/Partidas`}>
							Partidas
						</NavLink>
						<NavLink
							activeClassName="active"
							className="btn btn-outline-primary btn-sm"
							to={`${match.url}/AccionesProyectos`}>
							Acciones centralizadas y/o Proyectos
						</NavLink>
						<NavLink
							activeClassName="active"
							className="btn btn-outline-primary btn-sm"
							to={`${match.url}/AccionesEspecificas`}>
							Acciones específicas
						</NavLink>
						<NavLink
							activeClassName="active"
							className="btn btn-outline-primary btn-sm"
							to={`${match.url}/PresupuestoOrdinario`}>
							Presupuesto ordinario
						</NavLink>
						<NavLink
							activeClassName="active"
							className="btn btn-outline-primary btn-sm"
							to={`${match.url}/MovimientosPresupuestarios`}>
							Movimientos presupuestarios
						</NavLink>
				</div>
				<div className="p-2 bg-light rounded boxAuto">

					<Route
						path={`${match.url}/partidas`}
						render={props=><Crud {...props} keyData={fields['partidas']}/>}
					/>
					<Route
						path={`${match.url}/AccionesProyectos`}
						render={props=><Crud {...props} keyData={fields['AccionesProyectos']}/>}
					/>
					<Route
						path={`${match.url}/AccionesEspecificas`}
						render={props=><Crud {...props} keyData={fields['AccionesEspecificas']}/>}
					/>
					<Route
						path={`${match.url}/PresupuestoOrdinario`}
						render={props=><Crud {...props} keyData={fields['PresupuestoOrdinario']}/>}
					/>
					<Route
						path={`${match.url}/MovimientosPresupuestarios`}
						render={props=><Crud {...props} keyData={fields['MovimientosPresupuestarios']}/>}
					/>
				</div>
			</React.Fragment>
		);
	};
};


export default connect(
    mapStateToProps,
    null
)(Indexforms);
