<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>@yield("titulo")</title>
	<link rel="stylesheet" type="text/css" href="{{asset('fontawesome/css/all.min.css')}}">
	<link rel="stylesheet" href="{{ asset("css/bootstrap.css") }}">
	<script type="text/javascript" src="{{ asset("js/jquery.js") }}"></script>
	<script type="text/javascript" src="{{ asset("js/popper.js") }}"></script>
	<script type="text/javascript" src="{{asset("js/tooltip.js")}}"></script>
	<script type="text/javascript" src="{{ asset("js/bootstrap.js") }}"></script>
	@stack('import-plus')
	<style type="text/css">
		html,
		body {
		  height: 100%;
		  background-color: #F4F4F4;
		  align-items: stretch;
  		align-content: stretch;
		}
		.container-flex {
		  height: 100%;
		  min-height: 100%;
		  display: flex;
		  flex-direction: column;
		}
		.container-flex .box {
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		}
		.container-flex .box-2 {
		  flex: 1;
		}
	</style>
</head>
<body>
	<div class="container-flex">
			@section("sidebar")
	        <nav class="navbar navbar-light">
	 					<a class="navbar-brand" href="">Crear usuario</a>
					</nav>
			@show
	    <div class="container-fluid box-2">
	        @yield('contenido')
	    </div>
	</div>
</body>
</html>