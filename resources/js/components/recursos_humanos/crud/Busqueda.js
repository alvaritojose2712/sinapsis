import React, {Component} from 'react';
import Cargando from '../../cargando';
import Nodosbusqueda from './Nodosbusqueda';

export default class Busqueda extends Component{
	constructor(){
		super();
		this.state = {
			data: [],
			cargando:true,
		}
		this.busqueda = this.busqueda.bind(this)
		this.api_get = this.api_get.bind(this)
		
	};
	
	componentWillMount(){
		this.api_get()
	};
	api_get(q=""){
		axios
		.get("/recursoshumanos/personalController/"+q)
		.then(res => {
			if (typeof res.data != "object") {
				res.data = []
			}
			this.setState({data:res.data,cargando:false})
			
		})
		.catch(err=>console.log(err))
	}
	busqueda(e) {
		this.setState({cargando:true})
		this.api_get(e.target.value)
	}
	render(){
		const {cargando,data} = this.state
		return(
			<React.Fragment>	
				<div className="">
					<div className="input-group ">
						<input type="text" className="form-control" placeholder="Buscar personal..." onChange={this.busqueda}/>
						<div className="input-group-prepend">
							<button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i></button>
						</div>
					</div>
				</div>
				<Cargando active={cargando}/>
				{data.length?null:<div className='h3 text-center text-dark'><i>¡Sin resultados!</i></div>}
				{data.map((e,i)=>
					<Nodosbusqueda 
						user={e} 
						key={i} 
						cardSeleccionada={this.props.cardSeleccionada}
						select={this.props.select}/>
				)}
			</React.Fragment>
		)
	}
}