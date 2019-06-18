@extends("app.app")
@section("titulo","Personal")
@section("contenido")
	<table class="table table-light mt-2">
		<thead>
			<tr>
				<th>ID</th>
				<th>Denominación</th>
				<th>Período</th>
				<th>Fecha</th>
			</tr>
		</thead>
		<tbody>
		@foreach ($nominas as $nomina)
			<tr class="hover pointer">
				<td>{{$nomina->id}}</td>
				<td>{{$nomina->denominacion}}</td>
				<td>{{$nomina->periodo}}</td>
				<td>{{$nomina->fecha}}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@endsection
