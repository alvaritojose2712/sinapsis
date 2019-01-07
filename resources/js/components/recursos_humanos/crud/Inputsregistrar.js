import React, {Component} from 'react';


export default class Inputsregistrar extends Component{
	constructor(){
		super();
		this.state = {
			valores_globales:{},
			categoriaSelect:"",
			editUser:{},
			
		}
		this.valoresApropiados = this.valoresApropiados.bind(this)

	};
	componentWillMount(){
		axios.get("/valores_globales.json")
		.then(res=>{
			this.setState({valores_globales:res.data})
		})
		.catch(err=>{console.log(err)})
		if (this.props.User) {
			this.setState({
				editUser: this.props.User 
			});
		}
	}
	valoresApropiados(e){
		this.setState({categoriaSelect:e.target.value});
	}

	render(){
		let iterador = (obj,select="")=>obj?obj.map((e,i)=><option key={i} defaultValue={e} selected={select==e}>{e}</option>):null
		
		const {valores_globales,categoriaSelect,editUser} = this.state
		const {categoria,grado_instruccion,estado,estatus,nacionalidad,genero,profesion,departamento_adscrito,cargo_desempeñado_departamento} = valores_globales

		let {
			id,
			nombre,
			apellido,
			//nacionalidad,
			cedula,
			//estado,
			//estatus,
			//categoria,
			cargo,
			dedicacion,
			//genero,
			fecha_nacimiento,
			telefono_1,
			telefono_2,
			correo,
			cuenta_bancaria,
			fecha_ingreso,
			antiguedad_otros_ieu,
			caja_ahorro,
			//grado_instruccion,
			//profesion,
			//departamento_adscrito,
			//cargo_desempeñado_departamento,
			hrs_diurnas,
			hrs_nocturnas,
			hrs_feriadas,
			hrs_feriadas_nocturnas,
		} = editUser
		let nacionalidad_default = editUser.nacionalidad
		let estado_default = editUser.estado
		let estatus_default = editUser.estatus
		let categoria_default = editUser.categoria
		let genero_default = editUser.genero
		let grado_instruccion_default = editUser.grado_instruccion
		let profesion_default = editUser.profesion
		let departamento_adscrito_default = editUser.departamento_adscrito
		let cargo_desempeñado_departamento_default = editUser.cargo_desempeñado_departamento
		
		return(
			<div className="container-fluid table-responsive">
			  <div className="row mt-2">
					<div className="col">
					  	<div className="form-group">
					    	<label htmlFor="nombre">Nombres</label>
					    	<input required type="text" maxLength="30" className="form-control form-control-lg" name="nombre" 
					    	defaultValue={nombre?nombre:""} 
					    	placeholder="Introduzca primer y segundo nombre"/>
					  	</div>
					  	<div className="form-group">
					    	<label htmlFor="apellido">Apellidos</label>
					   	 	<input required type="text" className="form-control form-control-lg" maxLength="30" name="apellido" 
					   	 	defaultValue={apellido?apellido:""} 
					   	 	placeholder="Introduzca ambos apellidos"/>
					  	</div>
					  	<hr/>
					  	<div className="form-group">
						    <label htmlFor="cedula">Cédula de identidad</label>
						    <input required type="text" className="form-control form-control-lg" name="cedula" 
						    defaultValue={cedula?cedula:""} 
						    placeholder="Cédula de identidad" maxLength="8"/>
						</div>
						 
						 <div className="form-group">
					  		<label htmlFor="nacionalidad">Nacionalidad</label>
						  	 <select className="form-control form-control-lg" name="nacionalidad">
							   {iterador(nacionalidad,nacionalidad_default)}
							</select>
					  	</div>
					  	<hr/>
						<div className="form-group">
						    <label htmlFor="genero">Género</label>
						  	 <select className="form-control form-control-lg" name="genero">
							   {iterador(genero,genero_default)}
							</select>
						</div>

						<div className="form-group">
						    <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
						    <input required type="date" maxLength="10" className="form-control form-control-lg" placeholder="Fecha de nacimiento" name="fecha_nacimiento" defaultValue={fecha_nacimiento?fecha_nacimiento:""} min="1930-01-01"  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"/>
						</div>
						<hr/>
					  	<div className="form-group">
						    <label htmlFor="telefono_1">Teléfono móvil</label>
						    <input required type="text" maxLength="15" className="form-control form-control-lg" name="telefono_1" defaultValue={telefono_1?telefono_1:""}/>
						</div>

						<div className="form-group">
						    <label htmlFor="telefono_2">Teléfono de casa</label>
						    <input required type="text" maxLength="15" className="form-control form-control-lg" name="telefono_2" defaultValue={telefono_2?telefono_2:""}/>
						</div>
						<hr/>
						<div className="form-group">
					    	<label htmlFor="correo">Dirección de correo electrónico</label>
					    	<input required type="email" maxLength="30" className="form-control form-control-lg" name="correo" defaultValue={correo?correo:""} placeholder="Correo electrónico"/>
					    	
					 	</div>
					 	<div className="form-group">
						    <label htmlFor="cuenta_bancaria">Cuenta bancaria</label>
						    <input required type="text" className="form-control form-control-lg" placeholder="Número de cuenta bancaria" maxLength="99" name="cuenta_bancaria" defaultValue={cuenta_bancaria?cuenta_bancaria:""}/>
						</div>
						<div className="form-group">
						    <label htmlFor="profesion">Profesión</label>
						  	 <select className="form-control form-control-lg" name="profesion">
						  	 	<option> -Seleccione- </option>
							    {iterador(profesion,profesion_default)}
							</select>
						</div>
						<div className="form-group">
						    <label htmlFor="departamento_adscrito">Departamento adscrito</label>
						  	 <select className="form-control form-control-lg" name="departamento_adscrito">
						  	 	<option> -Seleccione- </option>
							    {iterador(departamento_adscrito,departamento_adscrito_default)}
							</select>
						</div>

						<div className="form-group">
						    <label htmlFor="cargo_desempeñado_departamento">Cargo desempeñado en el departamento</label>
						  	 <select className="form-control form-control-lg" name="cargo_desempeñado_departamento">
						  	 	<option> -Seleccione- </option>
							    {iterador(cargo_desempeñado_departamento,cargo_desempeñado_departamento_default)}
							</select>
						</div>
					</div>
				  	<div className="col">
						  	<div className="form-group">
						    	<label htmlFor="estado">Estado</label>
							  	 <select className="form-control form-control-lg" name="estado">
							  	 	<option> -Seleccione- </option>
								    {iterador(estado,estado_default)}
								</select>
						  	</div>
						  	<div className="form-group">
						  		<label htmlFor="estatus">Estatus</label>
							  	 <select className="form-control form-control-lg" name="estatus">
							  	 	<option> -Seleccione- </option>
								    {iterador(estatus,estatus_default)}
								</select>
						  	</div>
						  	<div className="form-group">
							    <label htmlFor="grado_instruccion">Grado de intrucción</label>
							  	 <select className="form-control form-control-lg" name="grado_instruccion">
							  	 	<option> -Seleccione- </option>
								    {iterador(grado_instruccion,grado_instruccion_default)}
								</select>
							</div>
						  	<div className="form-group">
							    <label htmlFor="categoria">Categoría</label>
							  	 <select onChange={this.valoresApropiados} className="form-control form-control-lg" name="categoria">
							  	 	<option> -Seleccione- </option>
								    {
								   	 categoria?Object.keys(categoria)
								   	 .map((e,i)=><option key={i} value={e}>{e}</option>):null
								    }
								</select>
							</div>

							<div className="form-group">
							    <label htmlFor="dedicacion">Dedicación</label>
							  	 <select className="form-control form-control-lg" name="dedicacion">
									{
								   	 categoriaSelect?categoria[categoriaSelect].dedicacion
								   	 .map((e,i)=><option key={i} value={e}>{e}</option>):null
								    }
								</select>
							</div>
							<div className="form-group">
						    	<label htmlFor="cargo">Cargo</label>
							  	 <select className="form-control form-control-lg" name="cargo">
							  	 	{
								   	 categoriaSelect?categoria[categoriaSelect].cargo
								   	 .map((e,i)=><option key={i} value={e}>{e}</option>):null
								    }
								</select>
						 	</div>	 
						 	<div className="form-group">
						    	<label htmlFor="fecha_ingreso">Fecha de ingreso</label>
						    	<input required type="date" maxLength="10" className="form-control form-control-lg" name="fecha_ingreso" defaultValue={fecha_ingreso?fecha_ingreso:""}  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" placeholder="Fecha de ingreso a la institución"/>
						    	
						 	</div>
						 	<div className="form-group">
						  		<label htmlFor="caja_ahorro">¿Aplica caja de ahorro?</label>
							  	 <select className="form-control form-control-lg" name="caja_ahorro" >
								    <option value="0">No</option>
								    <option value="1">Si</option>
								</select>
						  	</div>
						  	<div className="form-group">
							    <label htmlFor="antiguedad_otros_ieu">Años en otros Institutos de educación universitaria</label>
							    <input required type="number" min="0" defaultValue="0" max="80" maxLength="3"  className="form-control form-control-lg" placeholder="Años en otros IEU" name="antiguedad_otros_ieu" defaultValue={antiguedad_otros_ieu?antiguedad_otros_ieu:""} />
							</div>
							<hr/>
							<div className="form-group">
							    <label htmlFor="hrs_nocturnas">Horas extras nocturnas <strong>mensuales</strong></label>
							    <input required type="number" min="0" defaultValue="0" max="80" maxLength="3"  className="form-control form-control-lg" placeholder="Horas munsuales" name="hrs_nocturnas" defaultValue={hrs_nocturnas?hrs_nocturnas:""} />
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_diurnas">Horas extras diurnas <strong>mensuales</strong></label>
							    <input required type="number" min="0" defaultValue="0" max="80" maxLength="3"  className="form-control form-control-lg" placeholder="Horas munsuales"  name="hrs_diurnas" defaultValue={hrs_diurnas?hrs_diurnas:""} />
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_feriadas">Horas extras feriadas <strong>mensuales</strong></label>
							    <input required type="number" min="0" defaultValue="0" max="80" maxLength="3"  className="form-control form-control-lg" placeholder="Horas munsuales" name="hrs_feriadas" defaultValue={hrs_feriadas?hrs_feriadas:""} />
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_feriadas_nocturnas">Horas extras feriadas-nocturnas <strong>mensuales</strong></label>
							    <input required type="number" min="0" defaultValue="0" max="80" maxLength="3"  className="form-control form-control-lg" placeholder="Horas munsuales" name="hrs_feriadas_nocturnas" defaultValue={hrs_feriadas_nocturnas?hrs_feriadas_nocturnas:""} />
							</div>
					</div>
			  </div>
			  <div className="row mt-2">
					<div className="text-center">
						<h1>
							Agregar hijos 
							<button className="btn btn-outline-success btn-lg" type="button" id="agregar_nuevo_hijo"><i className="fa fa-plus"></i></button>
						</h1>
					</div>
				  	<table className='table table-bordered'>
				  		<thead>
					  		<tr>
					  			<th>Id</th>
					  			<th>Nombres</th>
					  			<th>Apellidos</th>
					  			<th>Género</th>
					  			<th>Fecha de nacimiento</th>
					  			<th>¿Es estudiante?</th>
					  			<th>¿Tiene alguna discapacidad?</th>
					  			<th>Cancelar</th>
					  		</tr>
				  		</thead>
				  		<tbody></tbody>
				  	</table>
			  </div>
			</div>
		)
	}
}
Inputsregistrar.defaultProps = {
	User: false
}