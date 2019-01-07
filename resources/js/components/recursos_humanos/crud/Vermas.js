import React, {Component} from 'react';
import Cargando from '../../cargando';
import {CSRF,Put,Delete} from '../../Inputs';

export default class Vermas extends Component{
	confimDelete(e){
		e.preventDefault();
		if (confirm("Confirme la eliminación")) {
			e.target.submit()
		}
	}
	render(){
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
			cargo_desempeñado_departamento,
			hrs_diurnas,
			hrs_nocturnas,
			hrs_feriadas,
			hrs_feriadas_nocturnas,
			hijos,
		} = this.props.User 
		return(
			<div className="text-primary">
				<div className="section-large m-2">
					<div className="btn-group">
						<button className="btn btn-outline-success btn-lg" onClick={this.props.editar}><i className="fa fa-edit"></i>Editar</button>
						<form method="POST" onSubmit={this.confimDelete} action={`/recursoshumanos/personalController/${id}`}>
							<Delete/>
							<CSRF/>
							<button className="btn btn-outline-danger btn-lg"><i className="fa fa-trash"></i>Eliminar</button>
						</form>
					</div>
				</div>
				<div>
					<span className=""><i className="fa fa-user-circle-o"></i> 
						<h1>
							<span title="nombre">{nombre}</span> 
							<span title="apellido">{apellido}</span>
						</h1>
					</span>
				</div>
				<div className="text-right">
					<code>
					<h2><span title="nacionalidad">{nacionalidad}</span>-<b>{cedula}</b></h2>
					</code>
				</div>
				<div className="">
					<span className="font-30x" title="estado">{estado}</span>
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
				<div className="section-large">
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
								<td><span title="fecha_nacimiento">{fecha_nacimiento}</span> (<span className="años font-weight-bold"></span> años)</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="">
					<table className="table table-info">
						<thead>
							<tr>
								<td><i className="fa fa-phone fa-3x"></i></td>
								<td><i className="fa fa-phone-square fa-3x"></i></td>
								<td><i className="fa fa-mail-reply fa-3x"></i></td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{telefono_1}</td>
								<td>{telefono_2}</td>
								<td>{correo}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="">
					<table className="table font-20x">
						<tbody>
							<tr>
								<th>Cuenta Bancaria</th>
								<td title="cuenta_bancaria">{cuenta_bancaria}</td>
							</tr>
							<tr>
								<th>Fecha de ingreso</th>
								<td><span title="fecha_ingreso">{fecha_ingreso}</span><span className="hace-fecha-ingreso"> (Hace <span className="años-fecha-ingreso font-weight-bold"></span> años)</span></td>
							</tr>
							<tr>
								<th>Antiguedad en otros IEU</th>
								<td className=""><span title="antiguedad_otros_ieu">{antiguedad_otros_ieu}</span> años</td>
							</tr>
							<tr>
								<th>¿Aplica a caja de ahorro?</th>
								<td title="caja_ahorro">{caja_ahorro}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="">
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
								<td title="cargo_desempeñado_departamento">{cargo_desempeñado_departamento}</td>
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
				<div className="section-large">
					<h1 className="">Hijos de {nombre} <span className="numero_hijos font-weight-bold"></span></h1>
					<table className="table table-info font-20x">
						<thead>
							<tr>
								<th>Nombres y Apellidos</th>
								<th>Género</th>
								<th>Fecha de nacimiento</th>
								<th>¿Tiene alguna discapacidad?</th>
								<th>¿Es estudiante?</th>
							</tr>
						</thead>
						<tbody>
							{hijos.map((e,i)=>{
								return <tr key={i}>
									<td>{e.nombres_apellidos}</td>
									<td>{e.genero}</td>
									<td>{e.fecha_nacimiento}</td>
									<td>{e.discapacidad?"Si":"No"}</td>
									<td>{e.estudiante?"Si":"No"}</td>
								</tr>
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}