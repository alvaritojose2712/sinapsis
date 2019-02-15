import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import {formatMoneda} from '../../formats';
import MovimientosComponent from '../partidas/movimientosComponent';
import EspecificaComponent from '../partidas/EspecificaComponent';

import { connect } from 'react-redux';
import { getAccionesProyectos, selectAccionProyectoFun, selectEspecificaFun } from '../actions/accionesProyectosAction';


class showAccionProyecto extends Component {
	constructor(){
		super();
		this.state = {
			open:false,
			cargando:true,
			dataModal:{
				type:"",
				obj:{}
			}
        }
        this.onCloseModal = this.onCloseModal.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this)
		this.movimientos = this.movimientos.bind(this)
	};
	movimientos(esp,ordin){
		const accion_proyectoDatos = this.props.accionProyectoSelect===null?{}:this.props.accionesProyectos[this.props.accionProyectoSelect]
		if(accion_proyectoDatos.especificas){
			this.setState({ 
				open: true,
				dataModal:{
					type:"movimientos",
					obj:accion_proyectoDatos.especificas[esp].ordinario[ordin]
				} 
			});
		}
    }
    onOpenModal() {
		this.setState({ open: true });
	};
	 
	onCloseModal(){
		this.setState({ open: false });
	};
	render(){
		const { 
			accionesProyectos,
			accionProyectoSelect,
			selectEspecificaFun,
			especificaSelect,
		} = this.props
	  	let addClass = (val1,val2,_default,toggle,_sino="") => {
	  		let _class = _default;
	  		_class += val1===val2?` ${toggle}`:` ${_sino}`
	  		return _class
	  	}
		return(
			<div className="row h-100">
                {
					open
					?<Modal open={this.state.open} onClose={this.onCloseModal}>
						{
							this.state.dataModal.type==="movimientos"
							?<MovimientosComponent mov={this.state.dataModal.obj}/>
							:null
						}
				  	</Modal>
					:null
				}
                <div className="col pt-2 pb-2 h-100 table-responsive">
                    {accionProyectoSelect!==null
                    ?<div className="p-2 text-right">
                        <div className="text-primary">
                            <h1>{accionesProyectos[accionProyectoSelect].nombre}</h1>
                            <h3>{accionesProyectos[accionProyectoSelect].descripcion}</h3>
                        </div>
                        <span className="h3 text-success">
                            {	
                                formatMoneda(
                                    accionesProyectos[accionProyectoSelect].especificas.reduce((aa,bb)=>(
                                        aa+bb.ordinario.reduce((aaa,bbb)=>(
                                            aaa+bbb.movimientos.reduce((aaaa,bbbb)=>(
                                                aaaa+bbbb.movimiento
                                            ),0)
                                        ),0)
                                    ),0)
                                )
                            }
                        </span>
                    </div>
                    :null
                    }
                    {	
                        accionProyectoSelect!==null
                        ?accionesProyectos[accionProyectoSelect].especificas.map((e,i)=>(
                                <div 
                                key={e.id} 

                                className={addClass(i,especificaSelect,"card pointer","active","atenuar hover")}
                                onClick={()=>especificaSelect===i?selectEspecificaFun(null):selectEspecificaFun(i)}
                                >
                                    
                                    <div className="">
                                    <div className="h-100 text-center text-primary list-group-item bg-light">
                                        <div className="card-body">
                                        <span className="card-title h5 text-bold">{e.nombre}</span>
                                        <p className="card-text text-italic">{e.descripcion}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )
                        )
                        :null
                    }
                </div>
                <div className="col pt-2 pb-2 h-100 table-responsive">
                    {
                        especificaSelect!==null
                        ?	accionesProyectos[accionProyectoSelect].especificas[especificaSelect].ordinario.length
                            ?<React.Fragment>
                                <div className="btn-group m-2">
                                    <Link className="btn btn-warning" to="/presupuesto/acciones_proyectos/ingresarPresupuestoOrdinario">
                                        Ingresar presupuesto ordinario
                                    </Link>
                                </div>

                                <EspecificaComponent data={accionesProyectos[accionProyectoSelect].especificas[especificaSelect]} id={especificaSelect} OnMovimientos={this.movimientos}/>
                            </React.Fragment>
                            :null
                        :null
                    }
                </div>
            </div>

		);
	};


};
const mapStateProps = state => ({
	accionesProyectos: state.accionesProyectos.accionesProyectos,
	accionProyectoSelect: state.accionesProyectos.accionProyectoSelect,
	especificaSelect: state.accionesProyectos.especificaSelect,
})

export default connect(mapStateProps, {
	getAccionesProyectos, 
	selectAccionProyectoFun,
	selectEspecificaFun
})(showAccionProyecto)


