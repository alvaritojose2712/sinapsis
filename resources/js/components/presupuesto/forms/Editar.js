import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Notificacion from '../../notificacion';
import Forms from './forms';
import { update,read,modoEditFun,selectItemFun,initialFormFun } from '../actions/formsAction'
import { openNotificacion,finishNotificacion } from '../../utilidadAction'


const mapStateToProps = (state) => ({
    fields: state.formsPresupuesto.fields,
    form: state.formsPresupuesto.form,
    data: state.formsPresupuesto.data,
    selectItem: state.formsPresupuesto.selectItem,
    notificacion: state.utilidad.notificacion,
});

export class Editar extends Component {
	constructor(){
		super()
		this.submit = this.submit.bind(this)
	}
	componentDidMount(){
		this.props.modoEditFun()
	}
	submit(e){
		e.preventDefault()
		const { 
			openNotificacion,
			finishNotificacion,
			read,
			data,
			keyData,
			selectItem,
			form,
			update
    	} = this.props
		let uriSelect = keyData.uri

		openNotificacion()
		let id = data[selectItem][keyData.primary]

		update(uriSelect,id,form,(res)=>{
			read(uriSelect)
			finishNotificacion(res)
		})
    }
    render() {
        const {
			notificacion,
			keyData
        } = this.props;

        return (
        	<React.Fragment>
	        	<Notificacion 
					cargando={notificacion.cargando} 
					active={notificacion.active} 
					color={notificacion.color} 
					msj={notificacion.msj}/>
	            <Forms handleSubmit={this.submit} keyData={keyData}/>
	        </React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    {
    	update,
    	read,
    	modoEditFun,
    	openNotificacion,
    	finishNotificacion,
    	selectItemFun,
    	initialFormFun
    }
)(Editar);
