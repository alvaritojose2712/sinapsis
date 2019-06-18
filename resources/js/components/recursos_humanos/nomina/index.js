import React, { Component } from 'react'
import {mostrarNominas} from './actions/nominaActions';
import {connect} from 'react-redux';
import {formatCedula} from '../../formats';
import Modal from 'react-responsive-modal';
import Recibo from './recibo';
import { Link } from 'react-router-dom';
class Nominas extends Component {
  constructor(){
    super();
		this.state = {
      idRecibo:null,
			cargando:true,
			open:false,
			dataModal:{
				type:"",
				obj:{}
			}
		}
    this.onCloseModal = this.onCloseModal.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this)
  }
  componentWillMount(){
    this.props.mostrarNominas()
  }
  onOpenModal(id) {
		this.setState({ open: true, idRecibo:id });
	};
	 
	onCloseModal(){
		this.setState({ open: false });
  };
  
  render() {
    const {nomina} = this.props.nomina
    return (
      <div>
					{/* <Route path='/recursoshumanos/nominas/:id?' component={()=>alert("hola mundo")}/> */}

          {/* {
            open
            &&
            <Modal open={open} onClose={this.onCloseModal}>
              {
                this.state.idRecibo!==null
                ?<Recibo data={this.state.idRecibo}/>
                :null
              }
              
            </Modal>
            
          } */}
          <table className="table table-bordered bg-light mt-2">
            <thead>
              <tr>
                <th>ID</th>
                <th>Denominación</th>
                <th>Período</th>
                <th>Fecha</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.nomina.nomina.map((e,i)=>
                <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.denominacion}</td>
                    <td>{e.periodo}</td>
                    <td>{e.fecha}</td>
                    <td>
                      <Link to={"/recursoshumanos/nominas/"+e.id}>
                        <i className="fa fa-arrow-right"/>
                      </Link>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
      </div>
    )
  }
}
const mapStateProps = state => ({
  nomina: state.nomina
})
export default connect(
  mapStateProps,
  {
    mostrarNominas
  }
)(Nominas);