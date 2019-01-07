import React, {Component} from 'react';
import formatPartida from '../formatPartida';

export default class Datos_partida extends Component {
	constructor(){
		super();
		this.state = {
			movimientos:[],
			ae:[],
		}
		this.selectMovimientos = this.selectMovimientos.bind(this)
		this.verAccionesEspecificas = this.verAccionesEspecificas.bind(this)
	}
	selectMovimientos(data){
		this.setState({
			movimientos:data 
		});
	}
	verAccionesEspecificas(i){
		this.setState({
			ae: this.props.acciones_presupuestarias[i]['especificas']
		});
	}
	render(){
		let {acciones_presupuestarias,partida,presupuesto_ordinario} = this.props
		
		//let {acciones_proyecto,descripcion,fecha,id,nombre} = acciones_presupuestarias[0]
		
		const {movimientos,ae} = this.state

		 return(
			<React.Fragment>
				<div className="text-right m-2">
					<h1 className="">{partida.partida}</h1>
					<h3><code>{formatPartida(partida.codigo)}</code></h3>
				</div>
				<div className="row mb-3">
					<div className="col">
						{	
							acciones_presupuestarias.length==0?(<h1>¡Sin datos!</h1>):(
								acciones_presupuestarias.map((e,i)=>{
									return (
										<div key={e.id} className="card text-center mt-2">
										  <div className="card-header">
										    <h5>{e.tipo}</h5>
										  </div>
										  <div className="card-body">
										    <h5 className="card-title">{e.nombre}</h5>
										    <p className="card-text">{e.descripcion}</p>
										    <a 
										    href="#" 
										    className="btn btn-primary" 
										    onClick={()=>this.verAccionesEspecificas(i)}
										    >Ver acciones específicas</a>
										  </div>
										  <div className="card-footer text-muted">
										    {e.fecha}
										  </div>
										</div>
									)
								})
							)

						}
					</div>
					<div className="col-5">
						{	
							ae.length==0?(<h1>¡Sin datos!</h1>):(
								ae.map((e,i)=>{
									return (
										<div key={e.id} className="card text-center mt-2 bg-primary">
										  <div className="card-header">
										    <h6>{e.id}</h6>
										  </div>
										  <div className="card-body">
										    <h5 className="card-title">{e.nombre}</h5>
										    <p className="card-text">{e.descripcion}</p>
										    <a href="#" className="btn btn-secondary">Ver datos asociados</a>
										  </div>
										  <div className="card-footer text-muted">
										    {e.fecha}
										  </div>
										</div>
									)
								})
							)
							
						}
					</div>
				</div>
			</React.Fragment>
		 );
	};


};

// 				
// 				<div className="mb-3">
// 					<div className="row">
// 						<div className="col-4">
// 							<h3>Presupuesto ordinario asociado</h3>
// 							<table className="table table-bordered table-hover">
// 								<thead>
// 									<tr>
// 										<th>Id</th>
// 										<th>Monto BsS.</th>
// 										<th>Fecha</th>
// 									</tr>
// 								</thead>
// 								<tbody>
// 									{presupuesto_ordinario.map((e,i)=>
// 											<tr key={i} onClick={()=>this.selectMovimientos(e.movimientos)}>
// 												<td>{e.id}</td>
// 												<td>{e.monto}</td>
// 												<td>{e.fecha}</td>
// 											</tr>
// 										)
// 									}
// 								</tbody>
// 							</table>
// 							{presupuesto_ordinario.length==0
// 							?<h4 className="text-center"><i>¡Sin datos!</i></h4>
// 							:null
// 							}
// 						</div>
// 						<div className="col">
// 							<h4>Movimientos</h4>
// 							<table className="table table-bordered">
// 								<thead>
// 									<tr>
// 										<th>Id</th>
// 										<th>Entrada BsS.</th>
// 										<th>Salida BsS.</th>
// 										<th>Descripción</th>
// 										<th>Crédito adicional</th>
// 										<th>Fecha</th>
// 									</tr>
// 								</thead>
// 								<tbody>

// 									{presupuesto_ordinario.length>0
// 										? (movimientos.map((e,i)=>
// 											<tr key={i}>
// 												<td>{e.id}</td>
// 												<td>{e.entrada}</td>
// 												<td>{e.salida}</td>
// 												<td>{e.descripcion}</td>
// 												<td>{e.credito_adicional}</td>
// 												<td>{e.fecha}</td>
// 											</tr>)
// 										):(null)
										
// 									}
// 								</tbody>
// 							</table>
// 							{movimientos.length==0
// 							?<h4 className="text-center"><i>¡Sin datos!</i></h4>
// 							:null
// 							}
// 						</div>
// 					</div>
// 				</div>