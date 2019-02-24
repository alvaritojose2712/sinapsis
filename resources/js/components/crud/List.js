import React from 'react';
import {NavLink} from 'react-router-dom';
const List = ({url,primary,data,buscar}) => {
    return (
        <React.Fragment>
            <NavLink 
                to={`${url}/registrar`}
                activeClassName="btn btn-outline-danger"
                className="btn btn-outline-primary btn-lg w-100 mb-2">
                    Registrar
            </NavLink>
            <input 
                type="text" 
                placeholder="Buscar..." 
                onChange={buscar}
                className="form-control" />
            <ul className="list-group mt-2">
                {
                    data.length
                    ?data.map((e,i)=>
                        <NavLink 
                        key={i}
                        className="list-group-item"
                        to={`${url}/vermas/${e[primary]}`}
                        >
                            <h5>{Object.values(e)[0]}</h5>
                            <i>{Object.values(e)[1]}</i>
                        </NavLink>
                    )
                    :<li className="text-center list-group-item">
                        <h3>¡Sin resultados!</h3>
                    </li>
                }
            </ul>
        </React.Fragment>
    );
}

export default List;
