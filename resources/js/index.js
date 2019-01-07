import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Recursoshumanoscrud from './components/recursos_humanos/crud';
import Ordinario from './components/presupuesto/ordinario';


class Index extends Component{
	render(){
		return(
			<Router>
				<Switch>
					<Route path='/recursoshumanos/personal' component={Recursoshumanoscrud}/>
					<Route path='/presupuesto/ordinario' component={Ordinario}/>

				</Switch>
			</Router>
		);
	}
}
render(<Index/>,document.getElementById('app'));