@extends("app.app")
@section("titulo","CRUD")
@push("import-plus")
 <link rel="stylesheet" href="{{asset('css/personal/personal.css')}}">
 
@endpush
	@section("contenido")
		<script src="{{asset('js/vue.js')}}"></script>
		<script src="{{asset('js/axios.min.js')}}"></script>
        <div class="row h-100" id="app">
			<div class="col-4 panel-left text-white table-responsive">
				<div class="mt-2">
					<form @submit.prevent>
						<div class="input-group mb-3">
							<input type="text" class="form-control" placeholder="Buscar" v-model="input" @keyup.enter="api()">
							<div class="input-group-prepend">
							<button class="btn btn-outline-secondary" type="button" @click="api()"><i class="fa fa-search"></i></button>
							</div>
						</div>
					</form>
				</div>
				<div v-if="loading" class="text-center mt-2">
					<i class="fa fa-compass fa-pulse fa-3x"></i>
				</div>
				<div class="cardbg-dark mt-2" v-for="(user,key,index) in users">
					<div class="card-header row">
						<div class="col">@{{user.id}}</div>
						<div class="col text-right"><i>@{{user.cedula}}</i></div>
					</div>
					<div class="card-body">
						<h5 class="card-title"><b>@{{user.apellido}}</b>, @{{user.nombre}}</h5>
						<p class="card-text"><button class="btn btn-primary btn-large" v-on:click="ver_mas(key)">Ver más</button></p>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="col table-responsive padding-large text-primary">
					<div class="section-large">
						<div class="btn-group w-100">
							<button class="btn btn-outline-success btn-lg boton_editar" title=""><i class="fa fa-edit"></i></button>
							<button class="btn btn-outline-danger btn-lg boton_eliminar" title=""><i class="fa fa-trash"></i></button>
						</div>
					</div>
					<div>
						<span class=""><i class="fa fa-user-circle-o"></i> 
							<h1>
								<span v-html="nombre"></span> 
								<span v-html="apellido"></span>
							</h1>
						</span>
					</div>
					<div class="text-right">
						<code>
						<h2><span v-html="nacionalidad"></span>-<b>@{{cedula | format_cedula}}</b></h2>
						</code>
					</div>
					<div class="w3-section">
						<span class="font-30x" v-html="estado"></span>
					</div>
					<div>
						<table class="table font-20x">
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
									<td v-html="estatus"></td>
									<td v-html="categoria"></td>
									<td v-html="cargo"></td>
									<td v-html="dedicacion"></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="section-large">
						<table class="table font-30x w3-center">
							<tr>
								<td v-html="genero"></td>
								<td><span v-html="fecha_nacimiento"></span> (<span class="años font-weight-bold"></span> años)</td>
							</tr>
						</table>
					</div>
					<div class="">
						<table class="table font-20x w3-center table-info">
							<tr>
								<td><i class="fa fa-phone"></i></td>
								<td><i class="fa fa-phone-square"></i></td>
								<td><i class="fa fa-mail-reply"></i></td>
							</tr>
							<tr>
								<td v-html="telefono_1"></td>
								<td v-html="telefono_2"></td>
								<td v-html="correo"></td>
							</tr>
						</table>
					</div>
					<div class="w3-section">
						<table class="table font-20x">
							<tr>
								<th>Cuenta Bancaria</th>
								<td v-html="cuenta_bancaria"></td>
							</tr>
							<tr>
								<th>Fecha de ingreso</th>
								<td><span v-html="fecha_ingreso"></span><span class="hace-fecha-ingreso"> (Hace <span class="años-fecha-ingreso font-weight-bold"></span> años)</span></td>
							</tr>
							<tr>
								<th>Antiguedad en otros IEU</th>
								<td class=""><span v-html="antiguedad_otros_ieu"></span> años</td>
							</tr>
							<tr>
								<th>¿Aplica a caja de ahorro?</th>
								<td v-html="caja_ahorro"></td>
							</tr>
						</table>
					</div>
					<div class="w3-section">
						<table class="table font-20x table-striped">
							<tr>
								<th>Grado de instrucción</th>
								<td v-html="grado_instruccion"></td>
							</tr>
							<tr>
								<th>Profesión</th>
								<td v-html="profesion"></td>
							</tr>
							<tr>
								<th>Departamento abscrito</th>
								<td v-html="departamento_adscrito" class="text-info"></td>
							</tr>
							<tr>
								<th>Cargo desenpeñado en el departamento</th>
								<td v-html="cargo_desempeñado_departamento"></td>
							</tr>
							<tr>
								<th>Horas Extras-Diurnas</th>
								<td v-html="hrs_diurnas"></td>
							</tr>
							<tr>
								<th>Horas Extras-Nocturnas</th>
								<td v-html="hrs_nocturnas"></td>
							</tr>
							<tr>
								<th>Horas Extras-Feriadas</th>
								<td v-html="hrs_feriadas"></td>
							</tr>
							<tr>
								<th>Horas Feriadas-Nocturnas</th>
								<td v-html="hrs_feriadas_nocturnas"></td>
							</tr>
						</table>
					</div>
					<div class="section-large">
						<h1 class="">Nº Hijos <span class="numero_hijos font-weight-bold"></span></h1>
						<table class="table table-info font-20x">
							<thead>
								<tr>
									<th>Nombres y Apellidos</th>
									<th>Fecha de nacimiento</th>
									<th>¿Tiene alguna discapacidad?</th>
									<th>¿Es estudiante?</th>
								</tr>
							</thead>
							<tbody class="hijos-personal">
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<script>
			var app = new Vue({
				el: "#app",
				data: {
					loading: true,
					users: [],
					input: "",
					nombre:"",
					apellido:"",
					cedula:"",
					nacionalidad:"",
					estado:"",
					estatus:"",
					categoria:"",
					cargo:"",
					dedicacion:"",
					genero:"",
					fecha_nacimiento:"",
					telefono_1:"",
					telefono_2:"",
					correo:"",
					cuenta_bancaria:"",
					fecha_ingreso:"",
					antiguedad_otros_ieu:"",
					caja_ahorro:"",
					grado_instruccion:"",
					profesion:"",
					departamento_adscrito:"",
					cargo_desempeñado_departamento:"",
					hrs_diurnas:"",
					hrs_nocturnas:"",
					hrs_feriadas:"",
					hrs_feriadas_nocturnas:""
				},
				mounted(){
					this.api()
				},
				filters: {
					format_cedula(val){
						if(!val) {return '';}
						let formato = '';
						let count = 1;
						for(let i = val.toString().length-1; i>=0; i--){
							formato = val.toString()[i]+formato
							if(count%3==0){
								formato = "."+formato
							}
							count++;
						}
						return formato
					}
				},
				methods: {
					api(){
						axios
							.get('/personalController/'+this.input)
							.then(res => {
								this.users = res.data
							})
							.finally(()=>{
								this.loading = false
							})
					},
					ver_mas(index){
						let obj = this.users[index]
						Object.keys(obj).map((val,i)=>{
							if(this[val]!==undefined){
								this[val] = obj[val]
							}
							//console.log(typeof this[val])
						})
					}
				}
			})
		</script>
	@endsection