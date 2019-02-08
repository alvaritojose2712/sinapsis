import React, {Component} from 'react';
import { connect } from 'react-redux';
import { closeModal } from './utilidadAction'


	
class modal extends Component {
    constructor(){
        super()
        this.closeModal = this.closeModal.bind(this)
    }
    closeModal(){
        this.props.closeModal()
    }
	render(){
		
		return(
			<div className="modal" tabIndex="-1" role="dialog" style={{display:this.props.modal&&this.props.modalSelect===this.props.id?"initial":"none"}}>
                <div className="modal-dialog h-75" role="document">
                    <div className="modal-content h-100">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body table-responsive">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={this.closeModal}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
		);
	};


};
export default connect(
    state=>({
        modal:state.utilidad.modal
    }),
    {
    	closeModal
    }
)(modal);

