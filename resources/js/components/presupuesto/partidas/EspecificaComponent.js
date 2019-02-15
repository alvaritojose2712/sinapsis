import React from 'react';
import SumLeyCreditos from './sumLeyCreditos';
import {formatPartida,formatMoneda} from '../../formats';

const toggleClass = (e,_class) => {
    if(e.currentTarget.className.indexOf(_class)===-1){
        e.currentTarget.className += ` ${_class}`
    }else{
        e.currentTarget.className = e.currentTarget.className.replace(` ${_class}`,"")
    }
}

const Especifica = ({data,id,OnMovimientos}) => (
    <div 
    className="pt-0 pb-0 text-center text-primary list-group-item pointer"
    onDoubleClick={e=>toggleClass(e,"padre-datos")}
    >
        <div className="card-body">
            <div className="text-success text-right h2">
                {
                    formatMoneda(
                        data.ordinario.reduce((a,b)=>
                            a+b.movimientos.reduce((aa,bb)=>
                                aa+bb.movimiento
                            ,0)
                        ,0)
                    )
                }
            </div>
            <span className="card-title h5 text-bold">{data.nombre}</span>
            <p className="card-text text-italic"
            >{data.descripcion}</p>
            
        </div>
        <div className="sub-datos">
            <table className="table table-light">
                <tbody>
                    {	
                        data.ordinario.length
                        ?data.ordinario.map((ee,ii)=>
                            <React.Fragment key={ee.id}>
                                {
                                    !ii
                                    ?<tr>
                                        <td colSpan="2" className="h1 text-muted">
                                            {ee.fecha}
                                        </td>
                                    </tr>
                                    :(
                                        data.ordinario[ii-1].fecha===ee.fecha
                                        ?null
                                        :<tr>
                                            <td colSpan="2" className="h1 text-muted">
                                                {ee.fecha}
                                            </td>
                                        </tr>
                                    )
                                }
                                <tr 
                                className="pointer">
                                    <td className="fit align-middle text-primary">
                                        {formatPartida(ee.partida.codigo)}
                                    </td>
                                    <th className="text-right" colSpan="3" onClick={()=>OnMovimientos(id,ii)}>
                                        <SumLeyCreditos data={ee}/>																			
                                    </th>
                                </tr>
                            </React.Fragment>
                        )
                        :null
                    }
                    <tr>
                        <td colSpan="2" className="text-right text-primary">{formatMoneda(data.ordinario.map(ee=>ee.monto).reduce((a,b)=>parseFloat(a)+parseFloat(b),0))}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
)
export default Especifica