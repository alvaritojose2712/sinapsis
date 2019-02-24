import React from 'react';
import {Link} from 'react-router-dom';
import {PartidasVista,MovimientosVista} from './formsVistas';
const Vermas = ({onDelete,data,primary,match,model}) => {
    const select = data.filter(e=>e[primary]==match.params.id)[0]
    const vistas = {
        partidas: <PartidasVista data={select}/>,
        movimientos: <MovimientosVista data={select}/>,
    }
    return (
        <div>
            <div className="text-right">
                <div className="pt-3 pb-3 inline rounded-top">
                    <div className="btn-group">
                        <Link to={`${match.url}/editar`} className="btn btn-outline-warning btn-lg">
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-outline-danger btn-lg" 
                        onClick={()=>onDelete(match.params.id)}>
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                </div>
            </div>
            { vistas[model] }
        </div>
    );
}

export default Vermas;
