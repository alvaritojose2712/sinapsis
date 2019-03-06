import React, {Component} from 'react';
import { connect } from 'react-redux';
import Cleave from 'cleave.js/react';
import { getValoresGlobales ,editUserInputs } from './actions/busquedaActions';

class Inputsregistrar extends Component{
	constructor(){
		super();
		this.onChange = this.onChange.bind(this)
		this.onChangeHijos = this.onChangeHijos.bind(this)
		this.removeHijo = this.removeHijo.bind(this)
		this.addNewHijo = this.addNewHijo.bind(this)
		this.editHijo = this.editHijo.bind(this)
		this.cancelEditHijo = this.cancelEditHijo.bind(this)
	};
	componentWillMount(){
		this.props.getValoresGlobales()
	}
	componentDidMount(){
		const {personals,persona,editUserInputs} = this.props
		if (persona!==null) editUserInputs(personals[persona])
	}
	onChange(e){
		this.props.editUserInputs({
			type:"onChangeInputs",
			data:{...e}
		})
	}
	addNewHijo(){
		this.props.editUserInputs({
			type: "addHijos",
			dataHijos: {
				genero_hijo: "",
				nombres_apellidos_hijo: "",
				fecha_nacimiento_hijo: "",
				estudiante_hijo: "",
				discapacidad_hijo: "",
				type: "insert",
			}
		})
	}
	removeHijo(index){
		this.props.editUserInputs({
			type: "removeHijos",
			dataHijos: index
		})
	}
	removeHijosExit(index){
		if (window.confirm("Confirme eliminación de carga familiar...")) {
			this.props.editUserInputs({
				type: "removeHijosExit",
				index: index
			})
		} 
	}
	cancelRemoveHijosExit(index){
		this.props.editUserInputs({
			type: "cancelRemoveHijosExit",
			index: index
		})
	}
	onChangeHijos(index, {target:{value,name}}){
		this.props.editUserInputs({
			type: "modificarHijos",
			dataHijos: {
				name:name,
				value:value,
				index:index
			}
		})
	}
	editHijo(index){
		this.props.editUserInputs({
			type: "modoEditHijos",
			dataHijos: {
				index:index,
				accion:"update"
			}
		})
	}
	cancelEditHijo(index){
		this.props.editUserInputs({
			type: "cancelEditHijos",
			dataHijos: {
				index:index,
				accion:"modify"
			}
		})
	}
	render(){
		let iterador = (arr) => {
		  	if(arr&&!Array.isArray(arr)) arr = Object.keys(arr)
		    return arr?arr.map((e,i)=><option key={i} value={e}>{e}</option>):null
		}
		
		const {editUser,valores_globales} = this.props

		const form_class = "form-control form-control-lg"
		
		let {nombre,
			apellido,
			cedula,
			genero,
			fecha_nacimiento,
			telefono_1,
			telefono_2,
			correo,
			cuenta_bancaria,
			fecha_ingreso,
			antiguedad_otros_ieu,
			caja_ahorro,
			hrs_diurnas,
			hrs_nocturnas,
			hrs_feriadas,
			hrs_feriadas_nocturnas,
			nacionalidad,
			estado,
			estatus,
			categoria,
			cargo,
			dedicacion,
			grado_instruccion,
			profesion,
			departamento_adscrito,
			cargo_departamento,
			hijos,
		} = editUser
		
		return(
			<div className="container-fluid table-responsive">
			  <div className="row mt-2">
					<div className="col">
					  	<div className="form-group">
					    	<label htmlFor="nombre">Nombres</label>
					    	<input 
					    	type="text" 
					    	maxLength="30" 
					    	className={form_class} 
					    	name="nombre" 
					    	value={nombre} 
					    	onChange={this.onChange}
					    	placeholder="Introduzca primer y segundo nombre" required/>
					  	</div>
					  	<div className="form-group">
					    	<label htmlFor="apellido">Apellidos</label>
					   	 	<input 
					   	 	type="text" 
					   	 	className={form_class} 
					   	 	maxLength="30" 
					   	 	name="apellido" 
					   	 	value={apellido} 
					   	 	onChange={this.onChange}
					   	 	placeholder="Introduzca ambos apellidos" required/>
					  	</div>
					  	<hr/>
					  	<div className="form-group">
						    <label htmlFor="cedula">Cédula de identidad</label>
								<Cleave 
									options={{
										numeral:true,
										delimiter:"",
										maxLength:8
									}}
									type="text" 
									maxLength="8"
						    className={form_class} 
						    name="cedula" 
						    value={cedula}
						    onChange={this.onChange}
								placeholder="Cédula de identidad"
								required/>
						</div>
						 
						 <div className="form-group">
					  		<label htmlFor="nacionalidad">Nacionalidad</label>
						  	 <select 
						  	 	className={form_class} 
						  	 	name="nacionalidad" 
						  	 	value={nacionalidad}
						  	 	onChange={this.onChange}>
							  	<option></option>
							    {valores_globales?valores_globales.filter(e=>e.campo==="nacionalidad").map((e,i)=><option key={i}>{e.valor}</option>):null}
							</select>
					  	</div>
					  	<hr/>
						<div className="form-group">
						    <label htmlFor="genero">Género</label>
						  	 <select 
						  	 	className={form_class} 
						  	 	name="genero"
						  	 	value={genero}
						  	 	onChange={this.onChange}>
						  	  <option></option>
									{valores_globales?valores_globales.filter(e=>e.campo==="genero").map((e,i)=><option key={i}>{e.valor}</option>):null}
							</select>
						</div>

						<div className="form-group">
						    <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
						    <Cleave 
									options={{
										date:true,
								}}
						    maxLength="10" 
						    className={form_class} 
						    placeholder="Fecha de nacimiento" 
						    name="fecha_nacimiento"  
						    value={fecha_nacimiento} 
						    onChange={this.onChange}
						    min="1930-01-01" 
						    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
						    required/>
						</div>
						<hr/>
					  	<div className="form-group">
						    <label htmlFor="telefono_1">Teléfono móvil</label>
						    <input 
						    type="text" 
						    maxLength="15" 
						    className={form_class} 
						    name="telefono_1" 
						    value={telefono_1} 
						    onChange={this.onChange}
						    required/>
						</div>

						<div className="form-group">
						    <label htmlFor="telefono_2">Teléfono de casa</label>
						    <input 
						    type="text" 
						    maxLength="15" 
						    className={form_class} 
						    name="telefono_2" 
						    value={telefono_2} 
						    onChange={this.onChange}
						    required/>
						</div>
						<hr/>
						<div className="form-group">
					    	<label htmlFor="correo">Dirección de correo electrónico</label>
					    	<input 
					    	type="email" 
					    	maxLength="30" 
					    	className={form_class} 
					    	name="correo"  
					    	value={correo}
					    	onChange={this.onChange}
					    	placeholder="Correo electrónico" 
					    	required/>
					    	
					 	</div>
					 	<div className="form-group">
						    <label htmlFor="cuenta_bancaria">Cuenta bancaria</label>
						    <input 
						    type="text" 
						    className={form_class} 
						    placeholder="Número de cuenta bancaria" 
						    maxLength="99" 
						    name="cuenta_bancaria" 
						    value={cuenta_bancaria}
						    onChange={this.onChange} 
						    required/>
						</div>
						<div className="form-group">
						    <label htmlFor="profesion">Profesión</label>
						  	 <select 
						  	 	className={form_class} 
						  	 	name="profesion"  
									onChange={this.onChange}
						  		value={profesion}>
						  	 	<option></option>
									{valores_globales?valores_globales.filter(e=>e.campo==="profesion").map((e,i)=><option key={i}>{e.valor}</option>):null}
							</select>
						</div>
						<div className="form-group">
						    <label htmlFor="departamento_adscrito">Departamento adscrito</label>
						  	 <select 
						  	 	className={form_class} 
						  	 	name="departamento_adscrito"
						  	    onChange={this.onChange}
						  	    value={departamento_adscrito}>
						  	 	<option></option>
									 {valores_globales?valores_globales.filter(e=>e.campo==="departamento_adscrito").map((e,i)=><option key={i}>{e.valor}</option>):null}
							</select>
						</div>

						<div className="form-group">
						    <label htmlFor="cargo_departamento">Cargo desempeñado en el departamento</label>
						  	 <select 
						  	 	className={form_class} 
						  	 	name="cargo_departamento"
						  	    onChange={this.onChange}
						  	    value={cargo_departamento}>
						  	 	<option></option>
									{valores_globales?valores_globales.filter(e=>e.campo==="cargo_departamento").map((e,i)=><option key={i}>{e.valor}</option>):null}
							</select>
						</div>
					</div>
				  	<div className="col">
						  	<div className="form-group">
						    	<label htmlFor="estado">Estado</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="estado" 
						  	     	onChange={this.onChange}
							  	 	value={estado}>
							  	 	<option></option>
										{valores_globales?valores_globales.filter(e=>e.campo==="estado").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
						  	</div>
						  	<div className="form-group">
						  		<label htmlFor="estatus">Estatus</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="estatus" 
						  	     	onChange={this.onChange}
							  	 	value={estatus}>
							  	 	<option></option>
										 {valores_globales?valores_globales.filter(e=>e.campo==="estatus").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
						  	</div>
						  	<div className="form-group">
							    <label htmlFor="grado_instruccion">Grado de intrucción</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="grado_instruccion" 
						  	     	onChange={this.onChange}
							  	 	value={grado_instruccion}>
							  	 	<option></option>
										 {valores_globales?valores_globales.filter(e=>e.campo==="grado_instruccion").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
							</div>
						  	<div className="form-group">
							    <label htmlFor="categoria">Categoría</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="categoria" 
						  	    onChange={this.onChange}
							  	 	value={categoria}>
							  	 	<option></option>
										 {valores_globales?valores_globales.filter(e=>e.campo==="categoria").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
							</div>

							<div className="form-group">
							    <label htmlFor="dedicacion">Dedicación</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="dedicacion"
						  	     	onChange={this.onChange}
						  	     	value={dedicacion}>
						  	     	<option></option>
											{valores_globales?valores_globales.filter(e=>e.campo==="dedicacion").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
							</div>
							<div className="form-group">
						    	<label htmlFor="cargo">Cargo</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="cargo"
						  	     	onChange={this.onChange}
						  	     	value={cargo}>
						  	     	<option></option>
											{valores_globales?valores_globales.filter(e=>e.campo==="cargo").map((e,i)=><option key={i}>{e.valor}</option>):null}
								</select>
						 	</div>	 
						 	<div className="form-group">
						    	<label htmlFor="fecha_ingreso">Fecha de ingreso</label>
						    	<input 
						    		type="date" 
						    		maxLength="10" 
						    		className={form_class} 
						    		name="fecha_ingreso" 
						    		pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" 
						    		placeholder="Fecha de ingreso a la institución" 
						    		value={fecha_ingreso} 
						    		onChange={this.onChange}
						    		required/>
						    	
						 	</div>
						 	<div className="form-group">
						  		<label htmlFor="caja_ahorro">¿Aplica caja de ahorro?</label>
							  	 <select 
							  	 	className={form_class} 
							  	 	name="caja_ahorro"
							  	 	onChange={this.onChange}
							  	 	value={caja_ahorro}>
							  	 	<option></option>
								    <option value="0">No</option>
								    <option value="1">Si</option>
								</select>
						  	</div>
						  	<div className="form-group">
							    <label htmlFor="antiguedad_otros_ieu">Años en otros Institutos de educación universitaria</label>
							    <input 
							    type="number" 
							    min="0" 
							    max="80" 
							    maxLength="3" 
							    className={form_class} 
							    placeholder="Años en otros IEU" 
							    name="antiguedad_otros_ieu" 
							    value={antiguedad_otros_ieu} 
							    onChange={this.onChange}
							    required/>
							</div>
							<hr/>
							<div className="form-group">
							    <label htmlFor="hrs_nocturnas">Horas extras nocturnas <strong>mensuales</strong></label>
							    <input 
							    type="number" 
							    min="0" 
							    max="80" 
							    maxLength="3" 
							    className={form_class} 
							    placeholder="Horas munsuales" 
							    name="hrs_nocturnas" 
							    value={hrs_nocturnas} 
							    onChange={this.onChange}
							    required/>
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_diurnas">Horas extras diurnas <strong>mensuales</strong></label>
							    <input 
							    type="number" 
							    min="0" 
							    max="80" 
							    maxLength="3" 
							    className={form_class} 
							    placeholder="Horas munsuales" 
							    name="hrs_diurnas" 
							    value={hrs_diurnas}
							    onChange={this.onChange} 
							    required/>
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_feriadas">Horas extras feriadas <strong>mensuales</strong></label>
							    <input 
							    type="number" 
							    min="0" 
							    max="80" 
							    maxLength="3" 
							    className={form_class} 
							    placeholder="Horas munsuales" 
							    name="hrs_feriadas" 
							    value={hrs_feriadas}
							    onChange={this.onChange} 
							    required/>
							</div>
							<div className="form-group">
							    <label htmlFor="hrs_feriadas_nocturnas">Horas extras feriadas-nocturnas <strong>mensuales</strong></label>
							    <input 
							    type="number" 
							    min="0" 
							    max="80" 
							    maxLength="3" 
							    className={form_class} 
							    placeholder="Horas munsuales" 
							    name="hrs_feriadas_nocturnas" 
							    value={hrs_feriadas_nocturnas}
							    onChange={this.onChange} 
							    required/>
							</div>
					</div>
			  </div>
			  <hr/>
			  <div className="row">
					<div className="">
						<h1>
							Agregar hijos 
							<button 
								onClick={this.addNewHijo}
								className="ml-2 btn btn-outline-success btn-lg" 
								type="button"><i className="fa fa-plus"></i></button>
						</h1>
					</div>
				  	<table className='table'>
				  		<thead>
					  		<tr>
					  			<th>Nombres y Apellidos</th>
					  			<th>Género</th>
					  			<th>Fecha de nacimiento</th>
					  			<th>¿Es estudiante?</th>
					  			<th>¿Tiene alguna discapacidad?</th>
					  			<th></th>
					  		</tr>
				  		</thead>
				  		<tbody>
				  			{
				  				hijos.length>0? (
				  					hijos.map((e,i)=>(
				  						e.type===undefined||e.type==="modify"
				  						?<tr key={i} className={e.remove?"item-delete":""}>
				  							<td>{e.nombres_apellidos_hijo}</td>
				  							<td>{e.genero_hijo}</td>
				  							<td>{e.fecha_nacimiento_hijo}</td>
				  							<td>{e.estudiante_hijo?"Si":"No"}</td>
				  							<td>{e.discapacidad_hijo?"Si":"No"}</td>
				  							<td>
				  								<div className="btn-group">
					  								{
						  								e.remove===undefined
					  									?(	<React.Fragment>
							  									<button 
							  										onClick={()=>this.editHijo(i)}
							  										className="btn btn-sm btn-success" 
							  										type="button"><i className="fa fa-pencil"></i>
								  								</button>
						  										<button 
						  										onClick={()=>this.removeHijosExit(i)}
						  										className="btn btn-sm btn-danger" 
						  										type="button"><i className="fa fa-remove"></i>
							  									</button>
								  							</React.Fragment>
							  							)
					  									:<button 
					  										onClick={()=>this.cancelRemoveHijosExit(i)}
					  										className="btn btn-sm btn-danger" 
					  										type="button"><i className="fa fa-arrow-right"></i>
					  									</button>
				  									}
				  								</div>
				  							</td>
				  						</tr>
				  						:<tr key={i}>
				  							<td>
				  								<input 
				  									type="text" 
				  									onChange={()=>this.onChangeHijos(i,event)}
				  									name="nombres_apellidos_hijo" 
				  									className="form-control"
				  									required
				  									value={e.nombres_apellidos_hijo}
				  								/>
				  							</td>
				  							<td>
				  								<select 
				  									className="form-control" 
				  									onChange={()=>this.onChangeHijos(i,event)}
				  									name="genero_hijo"
				  									required
				  									value={e.genero_hijo}
				  								>
				  									<option value=""></option>
											    	<option value="Masculino">Masculino</option>
											   	    <option value="Femenino">Femenino</option>
				  								</select>
				  							</td>
				  							<td>
				  								<input 
				  									type="date" 
				  									onChange={()=>this.onChangeHijos(i,event)}
				  									name="fecha_nacimiento_hijo" 
				  									className="form-control"
				  									required
				  									value={e.fecha_nacimiento_hijo}
				  									/></td>
				  							<td>
				  								<select 
				  									className="form-control" 
				  									onChange={()=>this.onChangeHijos(i,event)}
				  									name="estudiante_hijo"
				  									required
				  									value={e.estudiante_hijo}
				  								>
				  									<option value=""></option>
												    <option value="0">No</option>
												    <option value="1">Si</option>
					  							</select>
				  							</td>
				  							<td>
				  								<select 
				  									className="form-control" 
				  									onChange={()=>this.onChangeHijos(i,event)}
				  									name="discapacidad_hijo"
				  									required
				  									value={e.discapacidad_hijo}
				  								>
				  									<option></option>
												    <option value="0">No</option>
												    <option value="1">Si</option>
					  							</select>
				  							</td>
				  							<td>
				  								<div className="btn-group">
					  								{	
					  									e.type==="update"
					  									?<button 
					  										onClick={()=>this.cancelEditHijo(i)}
					  										className="btn btn-sm btn-warning" 
					  										type="button"><i className="fa fa-warning"></i>
						  								</button>
						  								:<button 
					  										onClick={()=>this.removeHijo(i)}
					  										className="btn btn-sm btn-warning" 
					  										type="button"><i className="fa fa-remove"></i>
					  									</button>
					  								}	
				  								</div>
				  							</td>
				  						</tr>
				  					))
				  				) : null
				  			}

				  		</tbody>
				  	</table>
			  </div>
		  		{
		  			hijos.length==0
		  			? <h3 className="text-center">¡Sin carga familiar!</h3>
	  				: null
		  		}
			</div>
		)
	}
}
const mapStateProps = state => ({
	persona: state.busqueda.persona,
	personals: state.busqueda.personals,
	valores_globales: state.busqueda.valores_globales,
	editUser:state.busqueda.editUser
})
export default connect(mapStateProps, {getValoresGlobales,editUserInputs})(Inputsregistrar)
