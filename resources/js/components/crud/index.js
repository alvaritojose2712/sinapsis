import React, { Component } from 'react';
import { NavLink, Route, Link } from 'react-router-dom'
		 
import Vermas from './Vermas';
import Registrar from './Registrar';
import Editar from './Editar';
import List from './List';
import { create,read,update,deleteFun} from './actions';
import {PartidasComponent,MovimientosComponent} from './formsVistas';
import Alert from 'react-s-alert';
import Modal from 'react-responsive-modal';

export default class Crud extends Component {
    constructor(){
        super()
        this.state = {
            form:{},
            data:[],
            options:{
                data:[],
                url:"",
                primary:"",
                mostrar:[],
                solicitante:"",
            },
            open:false
        }
        this.onChange = this.onChange.bind(this)
        this.buscar = this.buscar.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onGuardar = this.onGuardar.bind(this)
        this.onEdit = this.onEdit.bind(this)
        this.modoEdit = this.modoEdit.bind(this)
        this.modoRegistrar = this.modoRegistrar.bind(this)
        this.getOptions = this.getOptions.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)
		this.onOpenModal = this.onOpenModal.bind(this)
		this.selectOption = this.selectOption.bind(this)
    }
	componentWillMount(){
		read(this.props.resource,res=>this.setState({data:res}))
    }
    buscar(e){
        this.props.history.push(this.props.match.url);
        read(this.props.resource+e.target.value,res=>this.setState({data:res}))
    }
    onDelete(id){
        if(confirm("¿Desea eliminar?")){
            
            deleteFun(this.props.resource,id,(res)=>{
                if(res.code==200){
                    Alert.success(res.msj);
                    this.props.history.push(this.props.match.url);
                    read(this.props.resource,resRead=>{
                        this.setState({data:resRead})
                    })
                }else{
                    Alert.error(res.msj);
                }
            })
        }
    }
    onGuardar(e){
        e.preventDefault()
        create(this.props.resource,this.state.form,(res)=>{
            if(res.code==200){
                Alert.success(res.msj);
                read(this.props.resource,resRead=>{
                    this.setState({data:resRead})
                })
            }else{
                Alert.error(res.msj);
            }
        })
    }
    onEdit(e,id){
        e.preventDefault()
        update(this.props.resource,id,this.state.form,(res)=>{
            if(res.code==200){
                Alert.success(res.msj);
                this.props.history.push(this.props.match.url);
                read(this.props.resource,resRead=>{
                    this.setState({data:resRead})
                })
            }else{
                Alert.error(res.msj);
            }
        })
    }
    modoEdit(id){
        this.setState({
            form: this.state.data.filter(e=>e[this.props.primary]==id)[0]
        })
    }
    modoRegistrar(){
        this.setState({
            form: {}
        })
    }
    onChange(e){
        let copy = Object.assign({},this.state.form,{
            [e.target.name]:e.target.value
        })
        this.setState({form:copy})
    }
    getOptions(url,primary,mostrar,solicitante,q=""){
        read(url+q,res=>{
            this.setState({
                options:{
                    url:url,
                    primary:primary,
                    mostrar:mostrar,
                    solicitante:solicitante,
                    data:res,
                },
                open:true
            })
        })
    }
    selectOption(solicitante,value){
        let copy = Object.assign({},this.state.form,{
            [solicitante]:value
        })
        this.setState({form:copy,open:false})
    }
    onOpenModal() {
		this.setState({ open: true });
	};
	onCloseModal(){
		this.setState({ open: false });
	};
    render() {
		const {match,primary,model,title} = this.props
        const {data,form,options,open} = this.state
        const forms = {
            partidas: <PartidasComponent onChange={this.onChange} value={form}/>,
            movimientos: <MovimientosComponent onChange={this.onChange} value={form} getOptions={this.getOptions}/>,
        }
        return (
        	<div className="container-fluid h-100">
                {
					open
					?<Modal open={open} onClose={this.onCloseModal}>
                        <hr/>    
                        <input type="text" className="form-control" placeholder="Buscar opción..." 
                        onChange={
                            (e) => this.getOptions(
                                options.url,
                                options.primary,
                                options.mostrar,
                                options.solicitante,
                                e.target.value
                                )
                        }/>
                        <table className="table">
                            <tbody>
                            {
                                options.data.length && typeof options.data === "object"
                                ?options.data.map((e,i)=>
                                    <tr className="hover pointer" key={i} onClick={()=>this.selectOption(options.solicitante,e[options.primary])}>
                                    {
                                        options.mostrar(e).map((ee,ii)=>
                                            <td key={ii}>{typeof ee==="object"?JSON.stringify(ee):ee}</td>
                                        )
                                    }
                                    </tr>
                                )
                                :null
                            }
                            </tbody>
                        </table>
				  	</Modal>
					:null
				}
        		<div className="row h-100 p-2">
        			<div className="h-100 col table-responsive">
        				<h1 className="text-light">
		        			{title}
		        		</h1>
						<Route 
                            path={`${match.url}/vermas/:id`}
                            exact
							render={
                                props => 
                                <Vermas {...props} data={data} primary={primary} onDelete={this.onDelete} model={model}/>
                            }
						/>
						<Route 
							path={`${match.url}/registrar`} 
							render={
                                props => <Registrar {...props} onGuardar={this.onGuardar} form={forms[model]} modoRegistrar={this.modoRegistrar}/>
                            }
						/>
						<Route 
							path={`${match.url}/vermas/:id/editar`} 
							render={
                                props => <Editar {...props} onEdit={this.onEdit} form={forms[model]} modoEdit={this.modoEdit}/>
                                
                            }
						/>
                        
        			</div>
        			<div className="h-100 col-3 table-responsive">
						<List primary={primary} url={match.url} buscar={this.buscar} data={data}/>
        			</div>
        		</div>
        	</div>
        );
    }
}



