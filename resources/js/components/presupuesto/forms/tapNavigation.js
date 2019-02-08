import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';

import { selectItemFun,read,selectModelFun } from '../actions/formsAction';	 

const mapStateToProps = ({ formsPresupuesto }) => ({
    selectModel: formsPresupuesto.selectModel,
    fields: formsPresupuesto.fields,

});

class TapNavigation extends Component {
	changeModel(val){
		if (val!==this.props.selectModel) {
			this.props.selectItemFun(null)
			this.props.read(this.props.fields[val].uri)
			
		}
	}
	render(){
		return(

			<div className="btn-group btn-group-toggle" data-toggle="buttons">
			  <label 
			  onClick={()=>this.props.selectModelFun("partidas",(val)=>this.changeModel(val))}
			  className="btn btn-outline-primary">
			    <input 
			    type="radio" 
			    name="options" /> Partidas
			  </label>
			  <label 
			  onClick={()=>this.props.selectModelFun("AccionesProyectos",(val)=>this.changeModel(val))}
			  className="btn btn-outline-primary">
			    <input 
			    type="radio" 
			    name="options" /> Acciones y/o Proyectos
			  </label>
			  <label 
			  onClick={()=>this.props.selectModelFun("AccionesEspecificas",(val)=>this.changeModel(val))}
			  className="btn btn-outline-primary">
			    <input 
			    type="radio" 
			    name="options" /> Acciones específicas
			  </label>
			  <Link 
			  to="/presupuesto/forms/jaja"
			  className="btn btn-outline-primary">
			    <input 
			    type="radio" 
			    name="options" /> Forms
			  </Link>
			</div>

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
)(TapNavigation);
