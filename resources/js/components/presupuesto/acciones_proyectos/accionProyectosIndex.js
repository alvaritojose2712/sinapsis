import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';

import { connect } from 'react-redux';
import { getAccionesProyectos, selectAccionProyectoFun, selectEspecificaFun } from '../actions/accionesProyectosAction';

import Cargando from '../../cargando';
import Showaccionproyectos from './showAccionProyecto';
import formOrdinario from '../partidas/formOrdinario';


class AccionesProyectos extends Component {
	constructor(){
		super();
		this.state = {
			cargando:true,
		}
	};
	componentWillMount(){
		this.props.getAccionesProyectos("",this.setState({cargando:false}))
		
	}
	render(){
		const { 
			accionesProyectos,
			selectAccionProyectoFun, 
			accionProyectoSelect,
			getAccionesProyectos,
			selectEspecificaFun,
		} = this.props
		let addClass = (val1,val2,_default,toggle,_sino="") => {
			let _class = _default;
			_class += val1===val2?` ${toggle}`:` ${_sino}`
			return _class
		}
		return(
			<div className="row h-100">
				<div className="col-3 pt-2 pb-2 h-100 table-responsive">
					<div className="input-group input-group-lg mb-2">
						<input 
						type="text" 
						className="form-control" 
						placeholder="Buscar..."
						onChange={
							()=>{
								this.setState({cargando:true});
								getAccionesProyectos( event.target.value, this.setState({cargando:false}) )
							}
						}/>
					    <div className="input-group-prepend">
					    	<span className="input-group-text bg-light">
					    		<Cargando active={this.state.cargando}/>
					    		<i className="fa fa-search"></i>
					    	</span>
					    </div>
					</div>
					{
						<div className="card">
						  <div className="p-3 bg-light">
						  	Acciones/Proyectos <span className="badge badge-primary">{accionesProyectos.length}</span>
						  </div>
						  {
						  	accionesProyectos.length
								?accionesProyectos.map((e,i)=>
									<Link to="/presupuesto/acciones_proyectos/showAccionProyecto" key={e.id}>
										<table 
											className={addClass(i,accionProyectoSelect,"table m-0 p-1 pointer","table-primary padre-datos","atenuar hover")}
											onClick={
												()=>{
													selectEspecificaFun(null)
													if(accionProyectoSelect===i)selectAccionProyectoFun(null)
													else selectAccionProyectoFun(i)
												}
											}>
											<thead>
												<tr>
													<td colSpan="2">
														<span className="h4">{e.nombre}</span> 
															<span className="text-secundary"> <i className="fa fa-arrow-right mr-2 ml-2"></i> Específicas </span>
															<span className="badge badge-secondary">
																{e.especificas.length}
															</span>
													</td>
												</tr>
											</thead>
											<tbody className="sub-datos">
												<tr>
													<td>
														<b>Descripción:</b> <h6>{e.descripcion}</h6>	
													</td>
												</tr>
											</tbody>
										</table>
									</Link>
						 	)
							:null
						  }
						</div>
					}
				</div>
				<div className="col h-100">
					<Route path="/presupuesto/acciones_proyectos/ingresarPresupuestoOrdinario" component={formOrdinario}/>
					<Route path="/presupuesto/acciones_proyectos/showAccionProyecto/" component={Showaccionproyectos}/>
				</div>
			</div>	
		);
	};


};
const mapStateProps = state => ({
	accionesProyectos: state.accionesProyectos.accionesProyectos,
	accionProyectoSelect: state.accionesProyectos.accionProyectoSelect,
	especificaSelect: state.accionesProyectos.especificaSelect,
})

export default connect(mapStateProps, {
	getAccionesProyectos, 
	selectAccionProyectoFun,
	selectEspecificaFun
})(AccionesProyectos)
