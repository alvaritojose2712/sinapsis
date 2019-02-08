import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from '../../store'

import Handle from './handle';
import Registrar from './Registrar';
import Vermas from './Vermas';
import Editar from './Editar';
import TapNavigation from './tapNavigation';

import { selectItemFun,read,selectModelFun } from '../actions/formsAction';	 


const mapStateToProps = (state) => ({
    selectModel: state.formsPresupuesto.selectModel,
    fields: state.formsPresupuesto.fields,

});


class Routes extends Component {
	changeModel(val){
		if (val!==this.props.selectModel) {
			this.props.selectItemFun(null)
			this.props.read(this.props.fields[val].uri)
			
		}
	}
	render(){
		let addClass = (val1,val2,_default,toggle,_sino="") => {
	  		let _class = _default;
	  		_class += val1===val2?` ${toggle}`:` ${_sino}`
	  		return _class
	  	}
		return(
			<Provider store={store}>
				<React.Fragment>
					<div className="pt-2 pb-2">
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"partidas",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"partidas","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Partidas
						  </Link>
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"AccionesProyectos",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"AccionesProyectos","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Acciones y/o Proyectos
						  </Link>
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"AccionesEspecificas",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"AccionesEspecificas","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Acciones específicas
						  </Link>
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"PresupuestoOrdinario",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"PresupuestoOrdinario","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Presupuesto ordinario
						  </Link>
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"MovimientosPresupuestarios",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"MovimientosPresupuestarios","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Movimientos presupuestarios
						  </Link>
						  <Link 
						  to="/presupuesto/forms/"
						  onClick={
						  	()=>{
						  		this.props.selectModelFun(
						  			"CreditoAdicional",
						  			(val)=>this.changeModel(val)
						  		)
						  	}
						  }
						  className={addClass(this.props.selectModel,"CreditoAdicional","btn","btn-outline-warning","btn-outline-primary btn-sm")}>
						     Crédito adicional
						  </Link>
					</div>
					<div className="p-2 bg-light rounded boxAuto">
						{
							this.props.selectModel!==null
							?<Handle>
								<Route path="/presupuesto/forms/vermas" component={Vermas}/>
        						<Route path="/presupuesto/forms/registrar" component={Registrar}/>
        						<Route path="/presupuesto/forms/editar" component={Editar}/>
							</Handle>
							:null
						}
					</div>
				</React.Fragment>
			</Provider>
		);
	};
};


export default connect(
    mapStateToProps,
    {
    	selectItemFun,
    	selectModelFun,
    	read,
    }
)(Routes);
