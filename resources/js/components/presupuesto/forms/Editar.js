import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Notificacion from '../../notificacion';
import Forms from './forms';
import { update,read,modoEditFun,selectItemFun,initialFormFun } from '../actions/formsAction'
import { openNotificacion,finishNotificacion } from '../../utilidadAction'


const mapStateToProps = (state) => ({
    fields: state.formsPresupuesto.fields,
    selectModel: state.formsPresupuesto.selectModel,
    form: state.formsPresupuesto.form,
    data: state.formsPresupuesto.data,
    selectItem: state.formsPresupuesto.selectItem,
    notificacion: state.utilidad.notificacion,
});

export class Editar extends Component {
	constructor(){
		super()
		this.editar = this.editar.bind(this)
	}
	componentDidMount(){
		this.props.modoEditFun()
	}
	editar(e){
		let uriSelect = this.props.fields[this.props.selectModel].uri
		e.preventDefault()
		const { 
			openNotificacion,
			finishNotificacion,
			deleteFun,
			selectItemFun,
			read,
			fields,
			data,
			selectModel,
			selectItem,
			form,
			update
    	} = this.props

		openNotificacion()
		let id = data[selectItem][fields[selectModel].primary]

		update(uriSelect,id,form,(res)=>{
			read(uriSelect)
			finishNotificacion(res)
		})
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
	            <Forms handleSubmit={this.editar}/>
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
