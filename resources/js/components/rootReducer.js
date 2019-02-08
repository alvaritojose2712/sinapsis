import {combineReducers} from 'redux';
import busqueda from './recursos_humanos/crud/reducers/busquedaReducer';
import partidas from './presupuesto/reducers/partidasReducer';
import accionesProyectos from './presupuesto/reducers/accionesProyectosReducer';
import formsPresupuesto from './presupuesto/reducers/formsReducer';
import utilidad from './utilidadReducer';


export default combineReducers({
	partidas:  partidas,
	busqueda:  busqueda,
	accionesProyectos: accionesProyectos,
	formsPresupuesto: formsPresupuesto,
	utilidad: utilidad,
})
