import React, { Component } from 'react';
import { connect } from 'react-redux';

import {leerTxt,formatPartida, formatMoneda} from '../../formats';
import Cleave from 'cleave.js/react';

import {create} from '../actions/formsAction';

class formOrdinario extends Component {
    constructor(){
        super()
        this.selectFile = this.selectFile.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeAll = this.onChangeAll.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            file:[],
            ordinario:{
                partidas:{},
            }
        }
    }
    selectFile(e){
        leerTxt(e,file=>{
            let partidasKeys = Object.keys(JSON.parse(JSON.stringify(this.state.ordinario.partidas)))
            let partidas = JSON.parse(JSON.stringify(this.state.ordinario.partidas))

            file.map(ee=>{
                if(partidasKeys.indexOf(ee[0].replace(/\./g,""))===-1){

                    partidas[ee[0].replace(/\./g,"")] = {
                        partida:ee[0].replace(/\./g,""),
                        denominacion:"",
                        fecha:"",
                        monto:formatMoneda(ee[1]),
                        ae:this.props.accionesProyectos[this.props.accionProyectoSelect].especificas[this.props.especificaSelect].id
                    }
                }else{
                    partidas[ee[0].replace(/\./g,"")].monto = formatMoneda(ee[1])
                }
            })
            this.setState({
                ordinario:{
                    ...this.state.ordinario,
                    partidas:partidas
                }
            })
        })
    }
    onChange(e,type,index){
        let value = e.target.value
        let name = index
        let copy = JSON.parse(JSON.stringify(this.state.ordinario.partidas))
        if(copy[name]&&(copy[name].monto||copy[name].fecha||copy[name].denominacion)){
            if(type==="denominacion"){
                copy[name].denominacion = value
            }else if(type==="fecha"){
                copy[name].fecha = value
            }else if(type==="monto"){
                copy[name].monto = value
            }
        }else{
            copy[name] = {
                partida:name,
                denominacion:"",
                fecha:"",
                monto:value,
                ae:this.props.accionesProyectos[this.props.accionProyectoSelect].especificas[this.props.especificaSelect].id
            }
        }
        this.setState({
            ordinario:{
                ...this.state.ordinario,
                partidas:copy
            }
        })
    }
    onChangeAll(e,type){
        let value = e.target.value
        let ordinario = JSON.parse(JSON.stringify(this.props.accionesProyectos[this.props.accionProyectoSelect].especificas[this.props.especificaSelect].ordinario))
        let partidasKeys = Object.keys(JSON.parse(JSON.stringify(this.state.ordinario.partidas)))
        let partidas = JSON.parse(JSON.stringify(this.state.ordinario.partidas))
        ordinario.map((e,i)=>{
            if(partidasKeys.indexOf(e.partida.codigo)===-1){
                if(type==="denominacion"){
                    partidas[e.partida.codigo] = {
                        partida:e.partida.codigo,
                        denominacion:value,
                        fecha:"",
                        monto:"",
                        ae:this.props.accionesProyectos[this.props.accionProyectoSelect].especificas[this.props.especificaSelect].id
                    }
                }else{
                    partidas[e.partida.codigo] = {
                        partida:e.partida.codigo,
                        denominacion:"",
                        fecha:value,
                        monto:"",
                        ae:this.props.accionesProyectos[this.props.accionProyectoSelect].especificas[this.props.especificaSelect].id
                    }

                }
            }else{
                if(type==="denominacion"){
                    partidas[e.partida.codigo].denominacion = value 
                }else{
                    partidas[e.partida.codigo].fecha = value 
                }
            }
        })
        this.setState({
            ordinario:{
                ...this.state.ordinario,
                partidas:partidas
            }
        })
        
    }
    onSubmit(e){
        e.preventDefault()
        const {accionProyectoSelect,especificaSelect,accionesProyectos} = this.props
        let data = Object.values(this.state.ordinario.partidas)
        data.map(e=>{
            e.monto = e.monto.replace(/\./g,"").replace(/,/g,".")
        })
        this.props.create("/presupuesto/presupuesto_ordinario",data,res=>alert(res))
    }
    render() {
        const {accionProyectoSelect,accionesProyectos,especificaSelect} = this.props
        return (
            <form className="row h-100 p-2" onSubmit={this.onSubmit}>
                <div className="col bg-light rounded h-100 table-responsive">
                    <div className="text-center">
                        <h1>Ingresar presupuesto ordinario</h1>
                        <div className="text-success">
                            {
                                accionProyectoSelect!==null&&especificaSelect!==null&&accionesProyectos
                                ?<React.Fragment>
                                    <h5>{accionesProyectos[accionProyectoSelect].nombre}</h5>
                                    <h5>{accionesProyectos[accionProyectoSelect].especificas[especificaSelect].nombre}</h5>
                                </React.Fragment>
                                :null
                            }
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-success">
                            Guardar
                        </button>
                    </div>
                    
                    <div className="form-group">
                        <span className="text-success">Cargar por lotes: </span>
                        <input type="file" className="form-control-file" onChange={this.selectFile}/>
                    </div>
                    <div className="form-group">
                        <input
                        placeholder="Descripción general..."
                        type="text"
                        onChange={event=>this.onChangeAll(event,"denominacion")}
                        className="form-control"
                        />
                    </div>
                    <div className="text-right">
                        <input
                        type="date"
                        onChange={event=>this.onChangeAll(event,"fecha")}
                        className="form-control"
                        />
                    </div>
                    <table className="table bordered">
                        <thead>
                        {
                            accionProyectoSelect!==null&&especificaSelect!==null&&accionesProyectos
                            ?accionesProyectos[accionProyectoSelect].especificas[especificaSelect].ordinario.map((e,i)=>
                                <tr key={e.id}>
                                    <td className="text-primary">{formatPartida(e.partida.codigo)}</td>
                                    <td>{e.partida.partida}</td>
                                    <td>
                                        <input 
                                        type="date" 
                                        onChange={event=>this.onChange(event,"fecha",e.partida.codigo)}
                                        className="form-control"
                                        value={this.state.ordinario.partidas[e.partida.codigo]?this.state.ordinario.partidas[e.partida.codigo].fecha:""}
                                        required/>
                                    </td>
                                    <td>
                                        <input 
                                        type="text" 
                                        placeholder="Descripción..." 
                                        onChange={event=>this.onChange(event,"denominacion",e.partida.codigo)}
                                        value={this.state.ordinario.partidas[e.partida.codigo]?this.state.ordinario.partidas[e.partida.codigo].denominacion:""}
                                        className="form-control" 
                                        required
                                        />
                                    </td>
                                    <td>
                                        <Cleave options={{
                                            numeral:true,
                                            numeralDecimalMark: ",",
                                            delimiter: "."
                                        }}
                                        className="text-right" 
                                        placeholder="0,00"
                                        onChange={event=>this.onChange(event,"monto",e.partida.codigo)}
                                        value={this.state.ordinario.partidas[e.partida.codigo]?this.state.ordinario.partidas[e.partida.codigo].monto:""}
                                        required/>
                                    </td>
                                </tr>
                            )
                            :null
                        }
                        </thead>
                    </table>
                </div>
            </form>
        );
    }
}

const mapStateProps = state => ({
	accionesProyectos: state.accionesProyectos.accionesProyectos,
	accionProyectoSelect: state.accionesProyectos.accionProyectoSelect,
	especificaSelect: state.accionesProyectos.especificaSelect,
})

export default connect(mapStateProps, {
    create
})(formOrdinario)

