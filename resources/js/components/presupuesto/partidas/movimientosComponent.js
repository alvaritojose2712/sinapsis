import React, {Component} from 'react';
import {Line,Bar} from 'react-chartjs-2';
import {formatMoneda} from '../../formats';


let calcDispo = (mov) => {
    let arr = []
    var actual = 0
    if(mov.length){
        mov.map((e,i)=>{
            actual+=parseFloat(e.movimiento)
            arr.push(actual)
        })
    }
    return arr
}
const Movimientoscomponent = ({mov}) => (
    <React.Fragment>
        <br/>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#disponibilidad">Disponibilidad</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#presupuestado">Presupuestado</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#ingresos_egresos">Ingresos y egresos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#creditos">Créditos adicionales</a>
            </li>
        </ul>
        <div className="tab-content">
            <div className="tab-pane fade show active" id="disponibilidad">
                <h1>Disponibilidad</h1>

                <table className="table">
                    <tbody>
                        
                        {
                            mov.movimientos&&mov.movimientos.length
                            ?mov.movimientos.map((e,i)=>
                            <React.Fragment key={i}>
                                
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.tipo===1?"Crédito adicional":"Presupuesto ley"}</td>
                                    <td>{e.descripcion}</td>
                                    <td>{e.fecha}</td>
                                    <td className="text-right">
                                        <span className={e.movimiento>0?"text-success":"text-danger"}>
                                            {formatMoneda(e.movimiento)}
                                        </span>
                                    </td>
                                </tr>
                                
                            </React.Fragment>
                            )
                            :null
                        }
                        <tr>
                            <td colSpan="4" className="text-right"></td>
                            <td className="text-right h3">{
                                formatMoneda(mov.movimientos.map((e,i)=>e.movimiento).reduce((a,b)=>a+b,0))
                            }</td>
                        </tr>
                    </tbody>
                </table>
                {
                    mov.movimientos&&mov.movimientos.length
                    ?<Line data={{
                        labels: mov.movimientos.map(e=>e.fecha),
                        datasets: [
                            {
                                label: 'Disponible',
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: 'rgba(75,192,192,1)',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data:calcDispo(mov.movimientos)
                            }
                        ]
                    }} />
                    :null
                }
            </div>
            <div className="tab-pane fade" id="presupuestado">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Denominación</th>
                            <th>Partida</th>
                            <th>Acción específica</th>
                            <th>Monto presupuestado</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{mov.id}</td>
                            <td>{mov.denominacion}</td>
                            <td>{mov.partida.codigo}</td>
                            <td>{mov.ae.id}</td>
                            <td>{formatMoneda(mov.monto)}</td>
                            <td>{mov.fecha}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="tab-pane fade" id="ingresos_egresos">
                <h1>Ingresos y egresos</h1>
                {
                    mov.movimientos&&mov.movimientos.length
                    ?<Bar data={{
                        labels: mov.movimientos.map(e=>e.fecha),
                        datasets: [
                        {
                            label: 'Movimiento',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: mov.movimientos.map(e=>e.movimiento)
                        }
                        ]
                    }} />
                    :null
                }
            </div>
            <div className="tab-pane fade" id="creditos">
                <h1>Créditos adicionales</h1>
                <table className="table">
                    <tbody>
                        {
                            mov.movimientos&&mov.movimientos.length
                            ?mov.movimientos.map((e,i)=>
                            <React.Fragment key={i}>
                                {
                                    e.tipo===1
                                    ?<tr>
                                        <td>{e.id}</td>
                                        <td>{e.descripcion}</td>
                                        <td>{e.fecha}</td>
                                        <td className="text-right">
                                            <span className={e.movimiento>0?"text-success":"text-danger"}>
                                                {formatMoneda(e.movimiento)}
                                            </span>
                                        </td>
                                    </tr>
                                    :null
                                }
                            </React.Fragment>
                            )
                            :null
                        }
                        <tr>
                            <td colSpan="4" className="text-right"></td>
                            <td className="text-right h3">{
                                formatMoneda(mov.movimientos.filter(e=>e.tipo===1).map((e,i)=>e.movimiento).reduce((a,b)=>a+b,0))
                            }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </React.Fragment>
)
export default Movimientoscomponent