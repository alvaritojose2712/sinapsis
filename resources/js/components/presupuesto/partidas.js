import React, {Component} from 'react';
import Cargando from '../cargando';
import Datos_partida from './datos_partida';
import formatPartida from '../formatPartida';

export default class Partidas extends Component {
	constructor(){
		super();
		this.state = {
			partidas: [],
			cargando:true,
			acciones_partida:[],
			presupuesto_ordinario:[],
			partida_select:{partida:"",codigo:""},
			movimientos:[],
			ae:{id:"",especificas:[]},
		}
		this.getPartidas = this.getPartidas.bind(this)
		this.busqueda = this.busqueda.bind(this)
		this.showPartida = this.showPartida.bind(this)
		this.selectMovimientos = this.selectMovimientos.bind(this)
		this.verAccionesEspecificas = this.verAccionesEspecificas.bind(this)
		
	};
	componentWillMount(){
		this.getPartidas();
		this.timer = null;
	}
	selectMovimientos(data){
		this.setState({
			movimientos:data 
		});
	}
	verAccionesEspecificas(i){
		this.setState({
			ae: {id:i,especificas:this.state.acciones_partida[i]['especificas']}
		});
	}
	getPartidas(q=""){
		axios.get("/presupuesto/partidas/"+q)
		.then(res=>{
			this.setState({
				partidas:res.data,
				cargando:false,
			});
		})
		.catch(err=>console.log(err.data))
	}
	busqueda(e){
		clearTimeout(this.timer)
		let val = e.target.value
		this.setState({
			cargando:true 
		});
		this.timer = setTimeout(()=>{
			this.getPartidas(val)
		},1000)
	}
	
	showPartida(codigo,partida){
		this.setState({
			cargando:true,
			acciones_partida:[],
			presupuesto_ordinario:[],
			movimientos:[],
			ae:{id:"",especificas:[]},
		});	
		
		axios.all([
		    axios.get("/presupuesto/acciones_especificas/"+codigo),
		    axios.get("/presupuesto/movimientos_presupuestarios/"+codigo)
		])
		.then(axios.spread((accionesRes, movimientosRes) => {
		    this.setState({
				acciones_partida:accionesRes.data,
				presupuesto_ordinario:movimientosRes.data,
				cargando:false,
				partida_select:{partida:partida,codigo:codigo},
				presupuesto_ordinario:[],
				movimientos:[],
				ae:{id:"",especificas:[]},
			})
		}))
		.catch(err=>console.log(err))
	}
	margePartida(val){
		let _class = this.state.partida_select.codigo==val?"active list-group-item":"list-group-item"

		
		if(RegExp(/[1-9]((([1-9]0)|(0[1-9]))|([1-9][1-9]))000000/).test(val)){
			_class += " ml-2 list-group-item-primary"
		}else if(RegExp(/[1-9]((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))0000/).test(val)){
			_class += " ml-3 list-group-item-success"
		}else if(RegExp(/[1-9]((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))00/).test(val)){
			_class += " ml-4 list-group-item-warning"
		}else if(RegExp(/[1-9]((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))((([1-9]0)|(0[1-9]))|([1-9][1-9]))/).test(val)){
			_class += " ml-5 list-group-item-danger"
		}
		return _class
	}
	render(){
		const {cargando,partidas,partida_select,acciones_partida,presupuesto_ordinario,movimientos,ae} = this.state
		return(
			<div className="row">
				<div className="col-3 h-100">
					<div className="table-responsive">
						<input className="form-control mt-2" placeholder="Buscar..." onChange={this.busqueda}/>
						
						{partidas.length===0?<h1 className="text-center">¡Sin resultados!</h1>:""}
						<ul className="list-group">
						{partidas.map((e,i)=>
							
							<li 
								key={i} 
								className={this.margePartida(e.codigo)}
								onClick={()=>this.showPartida(e.codigo,e.partida)}
								style={{cursor:"pointer"}}>
								<h5>{formatPartida(e.codigo)}</h5>
								<i>{e.partida}</i>
							</li>
								
						)}
						</ul>
					</div>
				</div>
				<div className="col">
					<div className="text-right m-2">
						<h1 className="">{partida_select.partida}</h1>
						<h3><code>{formatPartida(partida_select.codigo)}</code></h3>
					</div>
					<div className=""><Cargando active={cargando}/></div>
					<div className="row mb-3">
						<div className="col">
							{	
								acciones_partida.length==0?(<h1>¡Sin datos!</h1>):(
									acciones_partida.map((e,i)=>{
										return (
											<div key={e.id} className={this.state.ae.id===i?"card text-center mt-2":"card text-center mt-2 card-replegada"}>
											  <div className="card-header">
											    <h5>{e.nombre}</h5>
											  </div>
											  <div className="card-body">
											    <i><h5 className="card-title text-muted">{e.tipo}</h5></i>
											    <p className="card-text">{e.descripcion}</p>
											    <span className="text-muted">{e.fecha}</span>
											  </div>
											  <div className="card-footer">
											    <a 
											    href="#" 
											    className="btn btn-primary" 
											    onClick={()=>this.verAccionesEspecificas(i)}
											    >Ver acciones específicas</a>
											  </div>
											</div>
										)
									})
								)

							}
						</div>
						<div className="col-5">
							{	
								ae.especificas.length==0?null:(
									ae.especificas.map((e,i)=>{
										return (
											<div key={e.id} className="card text-center mt-2 bg-primary">
											  <div className="card-body">
											    <h5 className="card-title">{e.nombre}</h5>
											    <p className="card-text">{e.descripcion}</p>
											    <a href="#" className="btn btn-secondary">Ver datos asociados</a>
											  </div>
											</div>
										)
									})
								)
								
							}
						</div>
					</div>		
				</div>
			</div>	
		);
	};


};

