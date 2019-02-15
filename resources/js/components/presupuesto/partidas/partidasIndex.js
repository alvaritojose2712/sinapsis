import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPartidas, getPartidasActionesProyectos, selectAccionEspecificaFun } from '../actions/partidasAction';

import Modal from 'react-responsive-modal';
import Cargando from '../../cargando';
import {formatPartida,formatMoneda} from '../../formats';
import MovimientosComponent from './movimientosComponent';
import EspecificaComponent from './EspecificaComponent';


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
		this.toggleClass = this.toggleClass.bind(this)
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
	toggleClass(e,_class){
		if(e.currentTarget.className.indexOf(_class)===-1){
			e.currentTarget.className += ` ${_class}`
		}else{
			e.currentTarget.className = e.currentTarget.className.replace(` ${_class}`,"")
		}
		// e.target.className += "Holaaa mundo"
	}
	movimientos(esp,ordin){
		const accion_proyectoDatos = this.props.accionProyectoSelect===null?{}:this.props.acciones_proyectos.data[this.props.accionProyectoSelect]
		if(accion_proyectoDatos.especificas){
			this.setState({ 
				open: true,
				dataModal:{
					type:"movimientos",
					obj:accion_proyectoDatos.especificas[esp].ordinario[ordin]
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
				selectAccionEspecificaFun,
				getPartidas 
		} = this.props
		let {dataModal,open} = this.state
		const accion_proyectoDatos = accionProyectoSelect===null?{}:acciones_proyectos.data[accionProyectoSelect]
		let addClass = (val1,val2,_default,toggle) => {
	  		let _class = _default;
			  _class += val1===val2?` ${toggle}`:""
	  		return _class
		}
		
		return(
			<div className="row h-100">
				{
					open
					?<Modal open={open} onClose={this.onCloseModal}>
						{
							dataModal.type==="movimientos"
							?<MovimientosComponent mov={dataModal.obj}/>
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
					 	<h3 className="d-flex justify-content-between">
						 	<span className="text-success">
								{
									formatMoneda(
										acciones_proyectos.data.reduce((a,b)=>(
											a+b.especificas.reduce((aa,bb)=>(
												aa+bb.ordinario.reduce((aaa,bbb)=>(
													aaa+bbb.movimientos.reduce((aaaa,bbbb)=>(
														aaaa+bbbb.movimiento
													),0)
												),0)
											),0)
										),0)

									) 
								}
							</span>
					 		<code>{formatPartida(partidaSelect.codigo)}
								{
									acciones_proyectos.num
									?<span className="badge badge-secondary ml-2">
										{acciones_proyectos.num}
									</span>
									:null
								}
							</code>
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
									className={addClass(i,accionProyectoSelect,"list-group-item text-center hover pointer","padre-datos active")}
								  	onClick={
										  () => {
											  if (accionProyectoSelect===i) selectAccionEspecificaFun(null)
											  else selectAccionEspecificaFun(i)
											  
											}}
								  	key={e.id}>
								  		<div className="mb-2">
								  			<span className="h4">{e.nombre}</span> 
											<div>
												<small>Específicas</small>{"  "}
												<span className="badge badge-secondary">{e.especificas.length}</span>
											</div>
								  		</div>
										<div className="sub-datos">
											<h6 className="ml-4">{e.descripcion}</h6>
											<h2 className="text-left">
												{
													formatMoneda(
														e.especificas.reduce((a,b)=>(
															a+b.ordinario.reduce((aa,bb)=>(
																aa+bb.movimientos.reduce((aaa,bbb)=>aaa+bbb.movimiento,0)
															),0)
														),0)

													)
												}
											</h2>
										</div>	
								  	</div>
								  )}
								</div>
							}
							
						</div>
						<div className="col">
							{	
								accion_proyectoDatos.especificas
								?accion_proyectoDatos.especificas.map((e,i)=><EspecificaComponent data={e} id={i} key={e.id} OnMovimientos={this.movimientos}/>)
								:null
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

export default connect(mapStateProps, {getPartidas,getPartidasActionesProyectos,selectAccionEspecificaFun})(Partidas)
