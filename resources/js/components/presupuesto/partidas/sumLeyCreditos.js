import React,{Component} from 'react';
import {formatMoneda} from '../../formats';

let calMontoMov = (mov) => {
    if(typeof mov !== "object") return 0
    return mov.map(ee=>ee.movimiento).reduce((a,b)=>parseFloat(a)+parseFloat(b),0)
}
let calcProgress = (total,movimientos)=>{
    const cien = parseFloat(total)
    let mov;
    if(!movimientos.length && typeof movimientos === "object") return {porcentaje:"0%",monto:"0"}
    mov = typeof movimientos !== "object"?movimientos:movimientos.map(ee=>ee.movimiento).reduce((a,b)=>parseFloat(a)+parseFloat(b),0)
    return {porcentaje:(((mov*100)/cien).toFixed(3)).toString()+"%",monto:mov}
} 
const sumLeyCreditos = ({data}) => (
    <React.Fragment>
        <div className="text-left text-muted">
            Presupuestado: <b>{formatMoneda(parseFloat(data.monto))}</b><br/>
            Presupuestado + Créditos: <b>{formatMoneda(parseFloat(data.monto)+parseFloat(calMontoMov(data.movimientos.filter(e=>e.tipo===1))))}</b>
        </div>
        <div className="d-flex">
            <div className="progress" style={{
                    height: "35px",
                    width: calcProgress(parseFloat(data.monto)+parseFloat(calMontoMov(data.movimientos.filter(e=>e.tipo===1))),data.monto).porcentaje
            }}>
                <div className="progress-bar bg-info" style={{
                    width: calcProgress(data.monto,parseFloat(calMontoMov(data.movimientos.filter(e=>e.tipo===0&&e.movimiento>0)))).porcentaje
                }}></div>
            </div>
            <div className="progress-bar bg-warning" style={{
                    height: "35px",
                    width: calcProgress(parseFloat(data.monto)+parseFloat(calMontoMov(data.movimientos.filter(e=>e.tipo===1))),parseFloat(calMontoMov(data.movimientos.filter(e=>e.tipo===1)))).porcentaje,
                }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            
        </div>
        <div className="d-flex justify-content-between">
            <div className="text-left text-info">{
                formatMoneda(
                    calMontoMov(
                        data.movimientos.filter( e=>e.tipo===0&&e.movimiento>0 )
                    )
                )
            }</div>
            <div className="text-right text-warning text-weight">
                <b>

                    {
                        formatMoneda(
                            calMontoMov(
                                data.movimientos.filter( e=>e.tipo===1 )
                                )
                                )
                            }
                </b>
            </div>
        </div>
        <hr/>
        <div className="text-center">
            <span className="text-success h4">

                {
                    formatMoneda(
                        calMontoMov(
                            data.movimientos
                        )
                        
                    )
                }
            </span>
        </div>
    </React.Fragment>
)
export default sumLeyCreditos