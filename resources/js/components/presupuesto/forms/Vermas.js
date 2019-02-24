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
    notificacion: state.utilidad.notificacion,
});


export class Vermas extends Component {
	constructor(){
		super()
		this.onDelete = this.onDelete.bind(this)
	}

    onDelete(){
		
		const { 
			openNotificacion,
			finishNotificacion,
			deleteFun,
			selectItemFun,
			read,
			fields,
			data,
			keyData,
			selectItem
    	} = this.props
		let uriSelect = keyData.uri
		
		if(confirm("¿Desea eliminar?")){
			let id = data[selectItem][keyData.primary]
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
			keyData,
			notificacion
        } = this.props;

        return (
			<div>
				<Notificacion 
					cargando={notificacion.cargando} 
					active={notificacion.active} 
					color={notificacion.color} 
					msj={notificacion.msj}/>
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
										keyData.traducciones[e[0]]
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
