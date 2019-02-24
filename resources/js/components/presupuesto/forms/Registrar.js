import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Notificacion from '../../notificacion';
import Forms from './forms';
import { create,read,selectItemFun,initialFormFun } from '../actions/formsAction'
import { openNotificacion,finishNotificacion } from '../../utilidadAction'


const mapStateToProps = (state) => ({
    fields: state.formsPresupuesto.fields,
    form: state.formsPresupuesto.form,
    notificacion: state.utilidad.notificacion,
});

export class Registrar extends Component {
	constructor(){
		super()
		this.submit = this.submit.bind(this)
	}
	submit(e){
		const {form,selectItemFun,read,finishNotificacion,create,openNotificacion,keyData} = this.props
		let uriSelect = keyData.uri
		e.preventDefault()
		openNotificacion()
		create(uriSelect,form,(res)=>{
			selectItemFun(null)
			read(uriSelect)
			finishNotificacion(res)
		})
    }
    componentWillMount(){
    	this.props.initialFormFun()
    }
    render() {
        const {
			notificacion,
			keyData
        } = this.props

        return (
        	<React.Fragment>
	        	<Notificacion 
					cargando={notificacion.cargando} 
					active={notificacion.active} 
					color={notificacion.color} 
					msj={notificacion.msj}/>
				<div className="p-2 text-center">
					<span className="h3">
						Registrar datos
					</span>
				</div>
	            <Forms handleSubmit={this.submit} keyData={keyData}/>
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
