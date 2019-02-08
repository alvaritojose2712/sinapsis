import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../modal';

import { handleChange, requestOptions } from '../actions/formsAction'
import { openModal,closeModal } from '../../utilidadAction'
const mapStateToProps = (state) => ({
    // data: state.formsPresupuesto.data,
    form: state.formsPresupuesto.form,
    fields: state.formsPresupuesto.fields,
    selectModel: state.formsPresupuesto.selectModel,

});

       
class Form extends Component {
	constructor(){
		super()
		this.searchOption = this.searchOption.bind(this)
		this.openModal = this.openModal.bind(this)
		this.selectOption = this.selectOption.bind(this)
		this.state= {
			modal:{
				title:"",
				id:null
			}
		}
	}
	componentWillMount(){
		this.props.requestOptions(this.props.fields[this.props.selectModel].fields,this.props.selectModel)
	}
	searchOption(e){
		this.props.requestOptions(this.props.fields[this.props.selectModel].fields,this.props.selectModel,e.target.value)
	}
	openModal(title,id){
		this.setState({modal:{title:title,id:id}})
		this.props.openModal()
	}
	selectOption(value,name){
		this.props.handleChange({target:{value:value,name:name}})
		this.props.closeModal()
	}
    render() {
        const { 
       		handleSubmit,
       		handleChange,
       		form,
       		fields,
       		selectModel,
      	} = this.props
      	
        return (
            <form onSubmit={handleSubmit}>
			
		      {
		      	fields[selectModel].fields.map((e,i)=>(
		      		<div className="form-group" key={i}>
  						<label>{e.label}</label>
		      			{
		      				e.isSelect
		      				?(
								<div className="form-row">
									<div className="col">
										<Modal title={this.state.modal.title} modalSelect={this.state.modal.id} id={i}>
											<React.Fragment>
												<input type="text" className="form-control" placeholder="Buscar opción..." 
												onChange={this.searchOption}/>
												<table className="table">
													<tbody>
														{
															e.options.optionsList&&e.options.optionsList.length
															? e.options.optionsList.map((ee,ii)=>
																<tr className="hover pointer" key={ii} onClick={()=>this.selectOption(ee.value,e.name)}>
																	<td>{ee.label}</td>
																</tr>
															)
															: null
														}
													</tbody>
												</table>
											</React.Fragment>
										</Modal>
										<div className="btn-group w-100" onClick={()=>this.openModal(e.label,i)}>
											<input type="text" 
											name={e.name}
											value={form[e.name]?form[e.name]:""} 
											onChange={handleChange}
											className="form-control" required disabled/>
											<button
											type="button" 
											className="btn btn-primary" 
											><i className="fa fa-search"></i></button>
										</div>
									</div>
								</div>
		      				)
		      				:(
							    <input 
							    	onChange={handleChange}
							    	name={e.name}
		      						value={form[e.name]?form[e.name]:""}
							    	type={e.type}
							    	onKeyPress={e.keypress?e.keypress:undefined} 
							    	placeholder={e.placeholder}
							    	className="form-control form-control-lg" 
							    	required
							    	/>
		      				)
		      			}
					</div>
		      	))
		      }
		      <button className="btn btn-primary btn-lg" type="submit">Enviar</button>
		    </form> 
        );
    }
}

export default connect(
    mapStateToProps,
    {handleChange,requestOptions,openModal,closeModal}
)(Form);