import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Alert from 'react-s-alert';

import Recursoshumanoscrud from './components/recursos_humanos/crud/';
import Presupuesto from './components/presupuesto/';
import store  from './components/store'

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Index extends Component{
	render(){
		return(
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path='/recursoshumanos/personal/' component={Recursoshumanoscrud}/>
						<Route path='/presupuesto' component={Presupuesto}/>
					</Switch>
				</Router>
				<Alert stack={false} timeout={5000} position='bottom'  effect='slide'/>
			</Provider>
		);
	}
}
render(<Index/>,document.getElementById('app'));