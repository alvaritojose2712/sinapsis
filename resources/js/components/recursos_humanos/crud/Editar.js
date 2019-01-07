import React, {Component} from 'react';
import InputsRegistrar from './Inputsregistrar'


export default class Editar extends Component{
	constructor(){
		super();
		this.state = {
		}
	};

	render(){

		return(
			<InputsRegistrar User={this.props.User}/>
		)
	}
}
