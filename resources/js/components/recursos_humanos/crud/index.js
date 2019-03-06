import React, {Component} from 'react';
import { NavLink, Route } from 'react-router-dom'

import Busqueda from './Busqueda';
import Vermas from './Vermas';
import Editar from './Editar';
import Registrar from './Registrar';
	
const Recursoshumanoscrud = () => {
	return (
		<div className='row h-100'>
				<div className='col-3 text-white table-responsive bg-light rounded h-100'>
					<div className='mb-2 mt-2'>
						<NavLink 
						to="/recursoshumanos/personal/registrar"
						activeClassName='btn-danger'
						className='btn btn-outline-danger btn-lg btn-block'>
							<i className="fa fa-plus"></i> Incluir nuevo personal
						</NavLink>
					</div>
					<Busqueda/>
				</div>
				<div className='col table-responsive bg-light rounded h-100'>
					<Route path='/recursoshumanos/personal/registrar' component={Registrar}/>
					<Route path='/recursoshumanos/personal/editar' component={Editar}/>
					<Route path='/recursoshumanos/personal/vermas' component={Vermas}/>
				</div>
		</div>
	);
}

export default Recursoshumanoscrud;


