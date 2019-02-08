import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getAccionesProyectos, selectAccionProyectoFun, selectEspecificaFun } from '../actions/accionesProyectosAction';

import Cargando from '../../cargando';
import {formatPartida,formatMoneda} from '../../formats';

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
			especificaSelect,
		} = this.props
	  	let addClass = (val1,val2,_default,toggle,_sino="") => {
	  		let _class = _default;
	  		_class += val1===val2?` ${toggle}`:` ${_sino}`
	  		return _class
	  	}
		return(
			<div className="row h-100">
				<div className="col-3">
					<div className="input-group input-group-lg mb-2 mt-2">
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
							  	<table 
							  		className={addClass(i,accionProyectoSelect,"table m-0 p-1 pointer","table-primary padre-datos","atenuar hover")}
							  		onClick={
							  			()=>{
							  				selectEspecificaFun(null)
							  				if(accionProyectoSelect===i)selectAccionProyectoFun(null)
							  				else selectAccionProyectoFun(i)
							  			}
							  		}
							  		key={e.id}>
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
						 	)
							:null
						  }
						</div>
					}
				</div>
				<div className="col">
					<div className="row h-100">
						<div className="col">
							{	
								accionProyectoSelect!==null
								?accionesProyectos[accionProyectoSelect].especificas.map((e,i)=>(
										<div 
										key={e.id} 

										className={addClass(i,especificaSelect,"card mt-2 pointer","active","atenuar hover")}
							  			onClick={()=>especificaSelect===i?selectEspecificaFun(null):selectEspecificaFun(i)}
										>
										  
										  <div className="">
										  	<div className="h-100 text-center text-primary list-group-item bg-light">
											  <div className="card-body">
											    <span className="card-title h5 text-bold">{e.nombre}</span>
											    <p className="card-text text-italic">{e.descripcion}</p>
											  </div>
											</div>
										  </div>
										</div>
									)
								)
								:null
							}
						</div>
						<div className="col">

								{
									especificaSelect!==null
									?accionesProyectos[accionProyectoSelect].especificas[especificaSelect].ordinario.length
									  	?accionesProyectos[accionProyectoSelect].especificas[especificaSelect].ordinario.map((eOrdinario,iOrdinario)=>
									  		<div className=" mt-2 list-group-item" key={iOrdinario}>
									  			<div className="h3">
									  				<Link to={`/presupuesto/partidas/${eOrdinario.partida}`}>{formatPartida(eOrdinario.partida)}</Link>
									  			</div>
									  			<hr/>
									  			<div className="h3 ml-5">
									  				<span className="text-success">{formatMoneda(eOrdinario.monto)}</span>
									  			</div>
									  			<div className="text-muted text-right text-italic">
									  				{eOrdinario.fecha}
									  			</div>
									  		</div>
									  	)
									  	:null
									:null
								}
						</div>
					</div>
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
