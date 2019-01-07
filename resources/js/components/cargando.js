import React, {Component} from 'react';

export default class Cargando extends Component{
	render(){
		let display = (this.props.active)?{display:''}:{display:'none'}
		return(
			<div className="loaders text-center mt-2 text-dark" >
				<div className="loader" style={display}>
			        <div className="loader-inner ball-pulse">
			          <div className='bg-dark'></div>
			          <div className='bg-dark'></div>
			          <div className='bg-dark'></div>
			        </div>
			     </div>
			</div>
		);
	}
}