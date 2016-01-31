function Frente(){

	this.resgatarFrentes();

}


Frente.prototype.resgatarFrentes = function(){

	var sucess_function = function(resultado) {
		lista_frentes = resultado['frentes'];
		for(x in lista_frentes){
			$('#tabela_frentes tbody').append('<tr id="'+lista_frentes[x]['id']+'"><td>'+lista_frentes[x]['sigla'] +'</td><td>'+lista_frentes[x]['nome'] +'</td><td>'+lista_frentes[x]['nome'] +'</td><td>'+lista_frentes[x]['nome'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td></tr>')
		}

		$("#tabela_frentes tbody tr").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/frente/"+id_frente_clicado+"/";
		});

	}

	$.ajax({url: "/frente/list/", success:sucess_function});

}