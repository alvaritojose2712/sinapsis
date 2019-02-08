import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Notificacion from '../../notificacion';
import Forms from './forms';
import { create,read,selectItemFun,initialFormFun } from '../actions/formsAction'
import { openNotificacion,finishNotificacion } from '../../utilidadAction'


const mapStateToProps = (state) => ({
    fields: state.formsPresupuesto.fields,
    selectModel: state.formsPresupuesto.selectModel,
    form: state.formsPresupuesto.form,
    notificacion: state.utilidad.notificacion,
});

export class Registrar extends Component {
	constructor(){
		super()
		this.submit = this.submit.bind(this)
	}
	submit(e){
		let uriSelect = this.props.fields[this.props.selectModel].uri
		e.preventDefault()
		this.props.openNotificacion()
		this.props.create(uriSelect,this.props.form,(res)=>{
			this.props.selectItemFun(null)
			this.props.read(uriSelect)
			this.props.finishNotificacion(res)
		})
    }
    componentWillMount(){
    	this.props.initialFormFun()
    }
    render() {
        const {
            action
        } = this.props;

        return (
        	<React.Fragment>
	        	<Notificacion 
					cargando={this.props.notificacion.cargando} 
					active={this.props.notificacion.active} 
					color={this.props.notificacion.color} 
					msj={this.props.notificacion.msj}/>
				<div className="p-2 text-center">
					<span className="h3">
						Registrar datos
					</span>
				</div>
	            <Forms handleSubmit={this.submit}/>
	        </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    {
    	create,
    	read,
    	openNotificacion,
    	finishNotificacion,
    	selectItemFun,
    	initialFormFun,
    }
)(Registrar);
