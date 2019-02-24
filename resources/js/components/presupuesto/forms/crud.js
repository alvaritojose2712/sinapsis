import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route, Link } from 'react-router-dom'
		 
import { selectItemFun,read } from '../actions/formsAction'	    
import Vermas from './Vermas';
import Registrar from './Registrar';
import Editar from './Editar';

const mapStateToProps = (state) => ({
    data: state.formsPresupuesto.data,
    selectItem: state.formsPresupuesto.selectItem,
    fields: state.formsPresupuesto.fields,
});



class handle extends Component {
	componentWillMount(){
		const {selectItemFun,read,keyData,fields} = this.props
		selectItemFun(null)
		read(keyData.uri)
	}
    render() {
		const {selectItemFun,read,keyData,fields,data,selectItem,match} = this.props
        return (
        	<div className="container-fluid h-100">
        		<div className="row h-100">
        			<div className="col table-responsive">
        				<div className="p-3">
		        			{
		        				keyData
		        				?<span className="h1">{keyData.nombre}</span>
		        				:null
		        			}
		        		</div>
						<Route 
							path={`${match.url}/vermas`} 
							render={props=><Vermas {...props} keyData={keyData}/>}
						/>
						<Route 
							path={`${match.url}/registrar`} 
							render={props=><Registrar {...props} keyData={keyData}/>}
						/>
						<Route 
							path={`${match.url}/editar`} 
							render={props=><Editar {...props} keyData={keyData}/>}
						/>
        			</div>
        			<div className="col-3 table-responsive">
						<NavLink 
						to={`${match.url}/registrar`}
						activeClassName="btn btn-danger"
						className="btn btn-primary btn-lg w-100 mb-2">
							Registrar
						</NavLink>
        				<input 
	        				type="text" 
	        				placeholder="Buscar..." 
	        				onChange={
	        					() => {
		        					selectItemFun(null)
		        					read(
		        						keyData.uri+event.target.value
		        					)
		        				}
	        				}
	        				className="form-control" />
        				<ul className="list-group mt-2">
							{
								data.length
								?data.map((e,i)=>
									<Link 
									key={i} 
									to={`${match.url}/vermas`}
									className={
										i===selectItem
										? "list-group-item pointer active"
										: "list-group-item pointer"
									}
									onClick={
										() => {
											selectItemFun(i);
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

