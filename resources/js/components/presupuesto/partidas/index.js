import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPartidas, getPartidasActionesProyectos, selectAccionEspecificaFun, selectMovimientosFun } from '../actions/partidasAction';

import Modal from 'react-responsive-modal';
import Cargando from '../../cargando';
import {formatPartida,formatMoneda} from '../../formats';

class Partidas extends Component {
	constructor(){
		super();
		this.state = {
			cargando:true,
			open:false,
			dataModal:{
				type:"",
				obj:{}
			}
		}
		this.movimientos = this.movimientos.bind(this)
		this.onCloseModal = this.onCloseModal.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this)
	};
	componentWillMount(){
		let _default="";
		if (this.props.match.params.partida) {
			_default = this.props.match.params.partida
			this.props.getPartidas(_default,()=>{this.setState({
				cargando:false 
			});this.props.getPartidasActionesProyectos(_default)})
		}else{
			this.props.getPartidas(_default)
		}
	}
	onOpenModal() {
		this.setState({ open: true });
	};
	 
	onCloseModal(){
		this.setState({ open: false });
	};
	movimientos(esp,ordin){
		const accion_proyectoDatos = this.props.accionProyectoSelect===null?{}:this.props.acciones_proyectos.data[this.props.accionProyectoSelect]
		if(accion_proyectoDatos.especificas){
			this.setState({ 
				open: true,
				dataModal:{
					type:"movimientos",
					obj:accion_proyectoDatos.especificas[esp].ordinario[ordin].movimientos
				} 
			});
		}
	}
	margePartida(codigo){
		let _class = this.props.partidaSelect.codigo===codigo?"active list-group-item pointer":"list-group-item pointer"
		if(RegExp(/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9]))000000/).test(codigo)) _class += " ml-2 list-group-item-primary"
		else if(RegExp(/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){2}0000/).test(codigo)) _class += " ml-3 list-group-item-success"
		else if(RegExp(/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){3}00/).test(codigo)) _class += " ml-4 list-group-item-warning"
		else if(RegExp(/[1-9]{1}((([1-9]0)|(0[1-9]))|([1-9][1-9])){4}/).test(codigo)) _class += " ml-5 list-group-item-danger"
		return _class
	}
	render(){

		let {   partidas,
				partidaSelect,
				presupuesto_ordinario,
				acciones_proyectos,
				accionProyectoSelect,
				movimientosSelect,
				selectMovimientosFun,
				selectAccionEspecificaFun,
				getPartidas 
		} = this.props

		const accion_proyectoDatos = accionProyectoSelect===null?{}:acciones_proyectos.data[accionProyectoSelect]
		const heightProgress = {height:"50px"}
		let addClass = (val1,val2,_default,toggle) => {
	  		let _class = _default;
	  		_class += val1===val2?` ${toggle}`:""
	  		return _class
		  }
		let calcProgress = (total,movimientos)=>{
			const cien = parseFloat(total)
			if(!movimientos.length) return {porcentaje:"0%",monto:"0"}
			const mov = movimientos.map(ee=>ee.movimiento).reduce((a,b)=>parseFloat(a)+parseFloat(b))
			return {porcentaje:(((mov*100)/cien).toFixed(3)).toString()+"%",monto:mov}
		} 
		return(
			<div className="row h-100">
				{
					this.state.open
					?<Modal open={this.state.open} onClose={this.onCloseModal} center>
						{
							this.state.dataModal.type==="movimientos"
							?<React.Fragment>
								<hr/>
								<table className="table">
									<tbody>
										{
											this.state.dataModal.obj&&this.state.dataModal.obj.length
											?this.state.dataModal.obj.map((e,i)=>
											<React.Fragment key={i}>
												<tr>
													<td>{e.id}</td>
													<td>{e.descripcion}</td>
													<td>{e.credito_adicional}</td>
													<td>{e.fecha}</td>
													<td className="text-right">
														<span className={e.movimiento>0?"text-success":"text-danger"}>
															{formatMoneda(e.movimiento)}
														</span>
													</td>
												</tr>
												
											</React.Fragment>
											)
											:null
										}
										<tr>
											<td colSpan="4" className="text-right">BsS.</td>
											<td className="text-right h3">{
												formatMoneda(this.state.dataModal.obj.map((e,i)=>e.movimiento).reduce((a,b)=>a+b))
											}</td>
										</tr>
									</tbody>
								</table>
							</React.Fragment>
							:null
						}
				  	</Modal>
					:null
				}
				<div className="h-100 col-3 table-responsive">
					<input 
					className="form-control mt-2" 
					placeholder="Buscar..." 
					onChange={
						() => {
							this.setState({cargando:true})
							getPartidas(event.target.value,()=>this.setState({cargando:false}))
						}
					}/>
					
					<ul className="list-group mt-2">
					{
						partidas.length
						?partidas.map(({codigo,partida},i)=>
							<li 
								key={i} 
								className={this.margePartida(codigo)}
								onClick={
									() => {
										this.setState({cargando:true})
										this.props.getPartidasActionesProyectos(codigo,() => this.setState({cargando:false}))
									}
								}>
								<h5>{formatPartida(codigo)}</h5>
								<i>{partida}</i>
							</li>
						)
						:<li className="text-center list-group-item"><h3>¡Sin resultados!</h3></li>
					}
					</ul>
				</div>
				<div className={this.state.cargando?"h-100 col table-responsive atenuar":"h-100 col table-responsive"}>
					<div className="text-right m-2">
					 	<h1 className=""><code>{partidaSelect.partida}</code></h1>
					 	<h3>
					 		<code>{formatPartida(partidaSelect.codigo)}</code>
					 		{
								acciones_proyectos.num
								?<span className="badge badge-secondary ml-2">
									{acciones_proyectos.num}
								</span>
								:null
							}
						</h3>
					</div>
					<div className="row">
						<div className="col-5">
							{
								<div className="card">
								  <div className="list-group-item p-3 bg-light text-primary">
								  	Acciones/Proyectos <span className="badge badge-primary">{acciones_proyectos.data.length}</span>
								  </div>
								  {acciones_proyectos.data.map((e,i)=>
								  	<div 
								  	className={addClass(i,accionProyectoSelect,"list-group-item text-center hover pointer","")}
								  	onClick={
										() => 
											accionProyectoSelect===i
											?selectAccionEspecificaFun(null)
											:selectAccionEspecificaFun(i)
									}
								  	key={e.id}>
								  		<div className="mb-2">
								  			<span className="h4">{e.nombre}</span> 
											<div>
												<small> 
													Específicas
												</small>
												<span className="badge badge-secondary">
													{e.especificas.length}
												</span>
											</div>
								  		</div>
										<div>
											{	
												accionProyectoSelect!==null
												?<div className="">
													<h6 className="ml-4">{accion_proyectoDatos.descripcion}</h6>
												</div>
												:null
											}
										</div>
								  	</div>
								  )}
								</div>
							}
							
						</div>
						<div className="col">
							<div className="row">
								<div className="col pl-1">
									<div className="">
										{	
											accion_proyectoDatos.especificas
											?accion_proyectoDatos.especificas.map((e,i)=>(
													<div key={e.id} className="pt-0 pb-0 text-center text-primary list-group-item">
													  <div className="card-body">
													    <span className="card-title h5 text-bold">{e.nombre}</span>
													    <p className="card-text text-italic">{e.descripcion}</p>
													    <a href="#" className="btn btn-primary btn-sm">Ver datos asociados</a>
													  </div>
														  
														<table className="table table-light">
														<thead>
															<tr>
																<th>Fecha</th>
																<th>Partida</th>
																<th>Monto</th>
															</tr>
														</thead>
														<tbody>
															{	
																e.ordinario.length
																?e.ordinario.map((ee,ii)=>
																	<React.Fragment key={ee.id}>
																		<tr 
																		className="pointer" 
																		onClick={() => movimientosSelect===ii?selectMovimientosFun(null):selectMovimientosFun(i)}>
																			<td className="fit">{ee.fecha}</td>
																			<td className="fit"><i className="text-primary">
																				{formatPartida(ee.partida)}
																			</i></td>
																			<td className="text-right" colSpan="3">
																				<div className="text-right">{formatMoneda(ee.monto)}</div>

																				<div className="progress" style={heightProgress} onClick={()=>this.movimientos(i,ii)}>
																					<div className="progress-bar" style={{width: calcProgress(ee.monto,ee.movimientos).porcentaje}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
																				</div>
																				<div className="">
																					<div className="" style={{width: calcProgress(ee.monto,ee.movimientos).porcentaje}}>
																						{formatMoneda(calcProgress(ee.monto,ee.movimientos).monto)}
																					</div>
																				</div>
																			
																			</td>
																		</tr>
																	</React.Fragment>
																)
																:null
															}
															{
																acciones_proyectos.num
																?<tr>
																	<td colSpan="2"></td>
																	<td className="text-right text-primary">{formatMoneda(e.ordinario.map(ee=>ee.monto).reduce((a,b)=>parseFloat(a)+parseFloat(b)))}</td>
																</tr>
																:null
															} 
														</tbody>
													</table>
													</div>
												)
											)
											:null
										}
									</div>
									
								</div>
							</div>
						</div>
					</div>	
					<hr/>
 					<div className="row">
 						<div className="col-4">
							{
								// presupuesto_ordinario.length
								// ?(<React.Fragment>
								// 		<h2 className="text-primary">Presupuesto ordinario</h2>
			 				// 			<table className="table table-light">
			 				// 				<thead>
			 				// 					<tr>
			 				// 						<th>Fecha</th>
			 				// 						<th>Partida</th>
			 				// 						<th>Monto BsS.</th>
			 				// 					</tr>
			 				// 				</thead>
			 				// 				<tbody>
			 				// 					{presupuesto_ordinario.map((e,i)=>
								// 						<tr 
								// 						className={addClass(i,movimientosSelect,"pointer","table-primary")} 
								// 						key={e.id} 
								// 						onClick={() => movimientosSelect===i?selectMovimientosFun(null):selectMovimientosFun(i)}>
								// 							<td>{e.fecha}</td>
								// 							<td><i className="text-primary">
								// 								{formatPartida(e.partida_codigo)}
								// 							</i></td>
								// 							<td className="text-right">{formatMoneda(e.monto)}</td>
								// 						</tr>
								// 					)
								// 				}
								// 				{
								// 					acciones_proyectos.num
								// 					?<tr>
				 			// 							<td colSpan="2"></td>
				 			// 							<td className="text-right text-primary">{formatMoneda(presupuesto_ordinario.map((e,i)=>e.monto).reduce((a,b)=>a+b))}</td>
				 			// 						</tr>
								// 					:null
								// 				}
								// 			</tbody>
								// 		</table>
								// 	</React.Fragment>
								// )
								// :null
							}
						</div>
						<div className="col">
							{	
								// movimientos.length 
								// ?(<React.Fragment>
								// 		<h2 className="text-primary">Movimientos</h2>
								// 		<table className="table table-light">
								// 			<thead>
								// 				<tr>
								// 					<th>Id</th>
								// 					<th>Descripción</th>
								// 					<th>Crédito adicional</th>
								// 					<th>Fecha</th>
								// 					<th>Movimiento BsS.</th>
								// 				</tr>
								// 			</thead>
								// 			<tbody>
								// 				{
								// 					movimientos.length
								// 					?(
								// 						<React.Fragment>
								// 							{movimientos.map((e,i)=>
								// 							<tr key={i}>
								// 								<td>{e.id}</td>
								// 								<td>{e.descripcion}</td>
								// 								<td>{e.credito_adicional}</td>
								// 								<td>{e.fecha}</td>
								// 								<td className="text-right">
								// 									<span className={e.movimiento>0?"text-success":"text-danger"}>
								// 										{formatMoneda(e.movimiento)}
								// 									</span>
								// 								</td>
								// 							</tr>
								// 							)}
								// 							<tr>
								// 								<td colSpan="4" className="text-right">BsS.</td>
								// 								<td className="text-right h3">{
								// 									formatMoneda(movimientos.map((e,i)=>e.movimiento).reduce((a,b)=>a+b))
								// 								}</td>
								// 							</tr>
								// 						</React.Fragment>
								// 					)
								// 					:null
								// 				}
												
													
												
								// 			</tbody>
								// 		</table>
								// 	</React.Fragment>
								// )
								// :null
							}
						</div>
					</div>
					<Cargando active={this.state.cargando}/>
				
				</div>
			</div>	
		);
	};


};
const mapStateProps = state => ({
	partidas: state.partidas.partidas,
	partidaSelect: state.partidas.partidaSelect,
	presupuesto_ordinario: state.partidas.presupuesto_ordinario,
	acciones_proyectos: state.partidas.acciones_proyectos,
	accionProyectoSelect:state.partidas.accionProyectoSelect,
	movimientosSelect:state.partidas.movimientosSelect,
})

export default connect(mapStateProps, {getPartidas,getPartidasActionesProyectos,selectAccionEspecificaFun,selectMovimientosFun})(Partidas)
