import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, Router } from 'react-router-dom'
		 
import { selectItemFun,read } from '../actions/formsAction'	    


const mapStateToProps = (state) => ({
    data: state.formsPresupuesto.data,
    selectItem: state.formsPresupuesto.selectItem,
    selectModel: state.formsPresupuesto.selectModel,
    fields: state.formsPresupuesto.fields,
});



class handle extends Component {
    render() {

        return (
        	<div className="container-fluid h-100">
        		<div className="row h-100">
        			<div className="col table-responsive">
        				<div className="p-3">
		        			{
		        				this.props.selectModel!==null
		        				?<span className="h1">{this.props.fields[this.props.selectModel].nombre}</span>
		        				:null
		        			}
		        		</div>
        				{this.props.children}
        			</div>
        			<div className="col-3 table-responsive">
        				<Link to="registrar">
        					<button className="btn btn-primary btn-lg w-100 mb-2">Registrar</button>
        				</Link>
        				<input 
	        				type="text" 
	        				placeholder="Buscar..." 
	        				onChange={
	        					() => {
		        					this.props.selectItemFun(null)
		        					this.props.read(
		        						this.props.fields[this.props.selectModel].uri+event.target.value
		        					)
		        				}
	        				}
	        				className="form-control" />
        				<ul className="list-group mt-2">
							{
								this.props.data.length
								?this.props.data.map((e,i)=>
									<Link 
									key={i} 
									to="vermas"
									className={
										i===this.props.selectItem
										? "list-group-item pointer active"
										: "list-group-item pointer"
									}
									onClick={
										() => {
											this.props.selectItemFun(i);
										}
									}>
										<h5>{Object.values(e)[0]}</h5>
										<i>{Object.values(e)[1]}</i>
									</Link>
								)
								: <li className="text-center list-group-item">
									<h3>¡Sin resultados!</h3>
								  </li>
							}
						</ul>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default connect(
    mapStateToProps,
    { selectItemFun,read } 
)(handle);

