<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Sinapsis - @yield("titulo")</title>
	<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    
	<style type="text/css">
		html,
		body {
		  height: 100%;
		  width: 100%;
		  background: #f2f2f2;
		}
		.flex{
			display: flex;
			flex-direction: column;
		}
		.turquesa{
			background: #11EDDD;
		}
	</style>
</head>
<body>
	<div class="flex h-100">
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			  <a class="navbar-brand"><img src="{{asset('image/sinapsis/sinapsis.svg')}}" width="150px" alt="Logo Sinapsis"></a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarNavDropdown">
			    <ul class="navbar-nav">
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          <i class="fa fa-users fa-2x"></i> Recursos Humanos
			        </a>
			        <div class="dropdown-menu">
			         <a class="dropdown-item" href="/recursoshumanos/personal/">Personal</a>
			        </div>
			      </li>
			      <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			         <i class="fa fa-calculator fa-2x"></i> Presupuesto
			        </a>
			        <div class="dropdown-menu">
			         <a class="dropdown-item" href="/presupuesto">Inicio</a>
			        </div>
			      </li>
			    </ul>
			  </div>
			</nav>
		</div>
		<div class="boxAuto container-fluid bg-dark">
	    	@yield('contenido')
	    </div>
	</div>
@yield('js')
</body>
</html>