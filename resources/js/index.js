import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Recursoshumanoscrud from './components/recursos_humanos/crud/';
import Presupuesto from './components/presupuesto/';


class Index extends Component{
	render(){
		return(
			<Router>
				<Switch>
					<Route path='/recursoshumanos/personal/' component={Recursoshumanoscrud}/>
					<Route path='/presupuesto' component={Presupuesto}/>
				</Switch>
			</Router>
		);
	}
}
render(<Index/>,document.getElementById('app'));