import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom'

import Notificacion from '../../notificacion';
import { deleteFun,selectItemFun,read } from '../actions/formsAction'
import { openNotificacion,finishNotificacion } from '../../utilidadAction'

const mapStateToProps = (state) => ({
    data: state.formsPresupuesto.data,
    selectItem: state.formsPresupuesto.selectItem,
    fields: state.formsPresupuesto.fields,
    selectModel: state.formsPresupuesto.selectModel,
    notificacion: state.utilidad.notificacion,
});


export class Vermas extends Component {
	constructor(){
		super()
		this.onDelete = this.onDelete.bind(this)
	}

    onDelete(){
		let uriSelect = this.props.fields[this.props.selectModel].uri

    	const { 
			openNotificacion,
			finishNotificacion,
			deleteFun,
			selectItemFun,
			read,
			fields,
			data,
			selectModel,
			selectItem
    	} = this.props

		if(confirm("¿Desea eliminar?")){
			let id = data[selectItem][fields[selectModel].primary]
			openNotificacion()
			deleteFun(uriSelect,id,(res)=>{
				
				selectItemFun(null)
				read(uriSelect)
				finishNotificacion(res)
				
			})
		}
    }
    render() {
        const {
            selectItem,
			data,
			fields,
			selectModel,
        } = this.props;

        return (
			<div>
				<Notificacion 
					cargando={this.props.notificacion.cargando} 
					active={this.props.notificacion.active} 
					color={this.props.notificacion.color} 
					msj={this.props.notificacion.msj}/>
		        {
					selectItem!==null
					? (	
						<React.Fragment>
							<h5 className="text-right">
								<Link to="editar">
									<button className="btn btn-warning rounded-circle">
										<i className="fa fa-pencil"></i>
									</button>
								</Link>
								<button className="btn btn-danger rounded-circle" 
								onClick={()=>this.onDelete()}>
									<i className="fa fa-close"></i>
								</button>
							</h5>
							{
								Object.entries(data[selectItem]).map((e,i)=>
								<h5 key={i} className="list-group-item">
									<b>{
										fields[selectModel].traducciones[e[0]]
									}</b>
									<br/>
									{
										typeof e[1] === "object" ? null : e[1]
									}
								</h5>
								)
							}
						</React.Fragment>

					)
					: null
				}
			</div>
		);
    }
}

export default connect(
    mapStateToProps,
    {
    	deleteFun,
    	selectItemFun,
    	read,
    	openNotificacion,
    	finishNotificacion,
    }
)(Vermas);
