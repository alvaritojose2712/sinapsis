import React, {Component} from 'react';

import { connect } from 'react-redux'
import { buscarPersonal } from './actions/busquedaActions';

import Cargando from '../../cargando';
import Nodosbusqueda from './Nodosbusqueda';

class Busqueda extends Component{
	constructor(props){
		super(props);
		this.state = {
			cargando:true
		}
		this.busqueda = this.busqueda.bind(this)	
	};
	componentWillMount(){
		this.props.buscarPersonal("",()=>this.setState({cargando:false}))
	};
	busqueda(e) {
		this.setState({cargando:true})
		this.props.buscarPersonal(e.target.value,()=>this.setState({cargando:false}))
	}
	render(){
		const {personals} = this.props
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
				
				<Cargando active={this.state.cargando}/>
				{	
					personals.length
					? personals.map( (e,i) => <Nodosbusqueda user={{index:i,data:e}} key={i}/> )
					: <div className='h3 text-center text-dark mt-2'><i>¡Sin resultados!</i></div>
				}
			</React.Fragment>
		)
	}
}

const mapStateProps = state => ({
	personals: state.busqueda.personals
})

export default connect(mapStateProps, {buscarPersonal})(Busqueda)