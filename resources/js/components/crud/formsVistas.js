import React from 'react';
import { formatMoneda, formatPartida } from '../formats';
import Cleave from 'cleave.js/react';

export const PartidasComponent = ({ onChange, value }) => (
    <div className="form rounded bg-light p-3">
        <div className="form-group">
            <label>Código</label>
            <input type="text" className="form-control" value={value.codigo || ""} onChange={onChange} name="codigo" placeholder="Código" required />
        </div>
        <div className="form-group">
            <label>Nombre de la partida</label>
            <input type="text" className="form-control" value={value.partida || ""} onChange={onChange} name="partida" placeholder="Partida" required />
        </div>
        <div className="form-group">
            <label>Descripción</label>
            <input type="text" className="form-control" value={value.descripcion || ""} onChange={onChange} name="descripcion" placeholder="Descripción" required />
        </div>
    </div>
);
export const PartidasVista = ({ data }) => (
    <div className="list-group rounded">
            <div className="list-group-item">
            <h5><b>Código</b></h5>
            {formatPartida(data.codigo)}
        </div>
            <div className="list-group-item">
            <h5><b>Partida</b></h5>
            {data.partida}
        </div>
            <div className="list-group-item">
            <h5><b>Descripción</b></h5>
            {data.descripcion}
        </div>
            <div className="list-group-item">
            <h5><b>Fecha de creación</b></h5>
            {data.created_at}
        </div>
            <div className="list-group-item">
            <h5><b>Fecha de modificación</b></h5>
            {data.updated_at}
        </div>
    </div>
);

            
export const MovimientosComponent = ({ onChange, value, getOptions }) => (
    <div className="form rounded bg-light p-3">
        <div className="form-group">
            <label>Descripción</label>
            <input type="text" className="form-control" value={value.descripcion || ""} onChange={onChange} name="descripcion" placeholder="Descripción" required />
        </div>
        <div className="form-group">
            <label>Referencia</label>
            <div>
                <div className="btn-group w-100" onClick={
                    () => getOptions(
                        "/presupuesto/presupuesto_ordinario/",
                        "id",
                        (obj)=>[obj.id, obj.denominacion, obj.uno_uno_especifica.nombre, formatPartida(obj.partida)],
                        "referencia"
                    )}>
                    <input type="text" className="form-control" value={value.referencia || ""} onChange={onChange} name="referencia" placeholder="ID -> Presupuesto ordinario asociado" required disabled/>
                    <button
                    type="button" 
                    className="btn btn-primary" 
                    ><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
        <div className="form-group">
            <label>Movimiento</label>
            <Cleave options={{
                numeral:true,
                numeralDecimalMark: ",",
                delimiter: "."
            }}
            className="text-right form-control" 
            placeholder="0,00"
            name="movimiento"
            value={value.movimiento || ""} 
            onChange={onChange}
            required/>
        </div>
        <div className="form-group">
            <label>Tipo</label>
            <select name="tipo" value={value.tipo===undefined?"":value.tipo} className="form-control" onChange={onChange} required>
                <option></option>
                <option value={0}>Presupuesto ordinario</option>
                <option value={1}>Crédito adicional</option>
                <option value={2}>Traspaso</option>
            </select>
        </div>
        <div className="form-group">
            <label>Fecha</label>
            <input type="date" className="form-control" value={value.fecha || ""} onChange={onChange} name="fecha" required />
        </div>
    </div>
);
export const MovimientosVista = ({ data }) => (
    <div className="list-group rounded">
        <div className="list-group-item">
            <h5><b>Descripción</b></h5>
            {data.descripcion}
        </div>
        <div className="list-group-item">
            <h5><b>Referencia</b></h5>
            {data.referencia}
        </div>
        <div className="list-group-item">
            <h5><b>Movimiento</b></h5>
            {
                data.movimiento<0
                ?<span className="text-danger">{formatMoneda(data.movimiento)}</span>
                :<span className="text-success">{formatMoneda(data.movimiento)}</span>
            }
        </div>
        <div className="list-group-item">
            <h5><b>Tipo</b></h5>
            {data.tipo==0?"Presupuesto ordinario":null}
            {data.tipo==1?"Crédito adicional":null}
            {data.tipo==2?"Traspaso":null}
        </div>
        <div className="list-group-item">
            <h5><b>Fecha de vigencia</b></h5>
            {data.fecha}
        </div>
        <div className="list-group-item">
            <h5><b>Fecha de creación</b></h5>
            {data.created_at}
        </div>
        <div className="list-group-item">
            <h5><b>Fecha de modificación</b></h5>
            {data.updated_at}
        </div>
    </div>
);            										