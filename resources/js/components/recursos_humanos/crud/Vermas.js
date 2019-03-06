import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux'
import { buscarPersonal } from './actions/busquedaActions';
import Alert from 'react-s-alert';

import {diffFecha,formatCedula} from '../../formats';


class Vermas extends Component{
	confimDelete(e,id){
		e.preventDefault();
		if (confirm("Confirme la eliminación")) {
			axios
			.delete(`/recursoshumanos/personalController/${id}`)
		    .then(res=>{
					if(res.data.code==200){
						Alert.success(res.data.msj);
						this.props.buscarPersonal()
					}else{
							Alert.error(res.data.msj);
					}
		    })
		}
	}
	render(){
		if (this.props.persona===null) return null
		const {
			id,
			nombre,
			apellido,
			nacionalidad,
			cedula,
			estado,
			estatus,
			categoria,
			cargo,
			dedicacion,
			genero,
			fecha_nacimiento,
			telefono_1,
			telefono_2,
			correo,
			cuenta_bancaria,
			fecha_ingreso,
			antiguedad_otros_ieu,
			caja_ahorro,
			grado_instruccion,
			profesion,
			departamento_adscrito,
			cargo_departamento,
			hrs_diurnas,
			hrs_nocturnas,
			hrs_feriadas,
			hrs_feriadas_nocturnas,
			hijos,
		} = this.props.personals[this.props.persona]
	return(
		<div className="text-primary">
			<div className="section-large pt-2 pb-2">
				<div className="btn-group">
					<Link 
					className="btn btn-outline-success btn-lg"
					to="/recursoshumanos/personal/editar">
						<i className="fa fa-edit"></i> Editar
					</Link>
					<button 
					className="btn btn-outline-danger btn-lg"
					onClick={()=>this.confimDelete(event,id)}>
						<i className="fa fa-trash"></i> Eliminar
					</button>
				</div>
			</div>
			<div>
				<span>
					<h1>
						<span title="apellido"><b>{apellido}</b>, </span>
						<span title="nombre">{nombre}</span> 
					</h1>
				</span>
			</div>
			<div className="text-right">
				<code>
				<h2><span title="nacionalidad">{nacionalidad}</span>-<b>{formatCedula(cedula)}</b></h2>
				</code>
			</div>
			<div className="text-right">
				<span className="text-height h4" title="estado">{estado}</span>
			</div>
			<div>
				<table className="table font-20x">
					<thead>
						<tr>
							<th>Estatus</th>
							<th>Categoría</th>
							<th>Cargo</th>
							<th>Dedicación</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td title="estatus">{estatus}</td>
							<td title="categoria">{categoria}</td>
							<td title="cargo">{cargo}</td>
							<td title="dedicacion">{dedicacion}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<table className="table">
					<thead>
						<tr>
							<th>Género</th>
							<th>Fecha de nacimiento</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td title="genero">{genero}</td>
							<td><span title="fecha_nacimiento">{fecha_nacimiento}</span> (<span className="años font-weight-bold"></span>{diffFecha(fecha_nacimiento)} años)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<table className="table table-info">
					<thead>
						<tr>
							<td className="text-center"><i className="fa fa-phone fa-3x"></i></td>
							<td className="text-center"><i className="fa fa-phone-square fa-3x"></i></td>
							<td className="text-center"><i className="fa fa-envelope fa-3x"></i></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="text-center">{telefono_1}</td>
							<td className="text-center">{telefono_2}</td>
							<td className="text-center">{correo}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<table className="table font-20x">
					<tbody>
						<tr>
							<th>Cuenta Bancaria</th>
							<td title="cuenta_bancaria">{cuenta_bancaria}</td>
						</tr>
						<tr>
							<th>Fecha de ingreso</th>
							<td><span title="fecha_ingreso">{fecha_ingreso}</span><span className="hace-fecha-ingreso"> (Hace <span className="años-fecha-ingreso font-weight-bold"></span>{diffFecha(fecha_ingreso)} años)</span></td>
						</tr>
						<tr>
							<th>Antiguedad en otros IEU</th>
							<td><span title="antiguedad_otros_ieu">{antiguedad_otros_ieu}</span> años</td>
						</tr>
						<tr>
							<th>¿Aplica a caja de ahorro?</th>
							<td title="caja_ahorro">{caja_ahorro?"Si":"No"}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<table className="table font-20x table-striped">
					<tbody>
						<tr>
							<th>Grado de instrucción</th>
							<td title="grado_instruccion">{grado_instruccion}</td>
						</tr>
						<tr>
							<th>Profesión</th>
							<td title="profesion">{profesion}</td>
						</tr>
						<tr>
							<th>Departamento abscrito</th>
							<td title="departamento_adscrito" className="text-info">{departamento_adscrito}</td>
						</tr>
						<tr>
							<th>Cargo desenpeñado en el departamento</th>
							<td title="cargo_departamento">{cargo_departamento}</td>
						</tr>
						<tr>
							<th>Horas Extras-Diurnas</th>
							<td title="hrs_diurnas">{hrs_diurnas}</td>
						</tr>
						<tr>
							<th>Horas Extras-Nocturnas</th>
							<td title="hrs_nocturnas">{hrs_nocturnas}</td>
						</tr>
						<tr>
							<th>Horas Extras-Feriadas</th>
							<td title="hrs_feriadas">{hrs_feriadas}</td>
						</tr>
						<tr>
							<th>Horas Feriadas-Nocturnas</th>
							<td title="hrs_feriadas_nocturnas">{hrs_feriadas_nocturnas}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				<h1>Hijos de {nombre} <span className="numero_hijos font-weight-bold"></span></h1>
				<table className="table table-info font-20x">
					<thead>
						<tr>
							<th>Nombres y Apellidos</th>
							<th>Género</th>
							<th>Fecha de nacimiento</th>
							<th>¿Es estudiante?</th>
							<th>¿Tiene alguna discapacidad?</th>
						</tr>
					</thead>
					<tbody>
						{hijos.map((e,i)=>(
							 <tr key={i}>
								<td>{e.nombres_apellidos_hijo}</td>
								<td>{e.genero_hijo}</td>
								<td>{e.fecha_nacimiento_hijo}</td>
								<td>{e.estudiante_hijo?"Si":"No"}</td>
								<td>{e.discapacidad_hijo?"Si":"No"}</td>
							</tr>
						))}
					</tbody>
				</table>
				{
		  			hijos==0
		  			? <h3 className="text-center">¡Sin carga familiar!</h3>
	  				: null
		  		}
			</div>
		</div>
	)
		
	}
}
const mapStateProps = state => ({
	persona: state.busqueda.persona,
	personals: state.busqueda.personals,

})

export default connect(

	mapStateProps, 
	{	
		buscarPersonal,

	}
)(Vermas)
