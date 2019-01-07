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
		  background-color: #F4F4F4;
		}
		.flex{
			display: flex;
			flex-direction: column;
		}
		.box2{
			flex:1;
			overflow: auto;
		}
	</style>
	<script type="text/javascript">
		// $(document).on("click",".alert",function() {
		// 	$(this).css({display:"none"})
		// })
	</script>
</head>
<body>
	<div class="flex h-100">
		<div class="box1">
	        <nav class="navbar navbar-dark bg-dark text-success">
			  <a class="navbar-brand">Sinapsis</a>
			</nav>
		</div>
		<div class="box2 container-fluid h-100">
	    	@yield('contenido')
	    </div>
	</div>
@yield('js')
</body>
</html>