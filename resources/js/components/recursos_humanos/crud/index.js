import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from '../../store';

import Busqueda from './Busqueda';
import Vermas from './Vermas';
import Editar from './Editar';
import Registrar from './Registrar';
	


export default class Recursoshumanoscrud extends Component {
	render(){
		return(
			<Provider store={store}>
				<div className='row h-100'>
					<div className='col-3 text-white table-responsive bg-light rounded'>
						<div className='mb-2 mt-2'>
							<Link 
							to="/recursoshumanos/personal/registrar"
							className='btn btn-outline-danger btn-lg btn-block'>
								<i className="fa fa-plus"></i> Incluir nuevo personal
							</Link>
						</div>
						<Busqueda/>
					</div>
					<div className='col table-responsive bg-light rounded'>
						<Route path='/recursoshumanos/personal/registrar' component={Registrar}/>
						<Route path='/recursoshumanos/personal/editar' component={Editar}/>
						<Route path='/recursoshumanos/personal/vermas' component={Vermas}/>
					</div>
				</div>
			</Provider>
		);
	};


};

