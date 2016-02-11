function Frente(){

	this.resgatarFrentes();

}

Frente.prototype.resgatarFrentes = function(){

	var sucess_function = function(resultado) {
		lista_frentes = resultado['frentes'];
		for(x in lista_frentes){
			$('#tabela_frentes tbody').append('<tr id="'+lista_frentes[x]['id']+'"><td>'+lista_frentes[x]['sigla'] +'</td><td>'+lista_frentes[x]['nome'] +'</td><td>'+lista_frentes[x]['tipo'] +'</td><td>'+lista_frentes[x]['ano'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td><td><font color="blue"><i class="fa fa-check"></i></font></td></tr>')
		}

		$("#tabela_frentes tbody tr").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/frente/"+id_frente_clicado+"/";
		});

		$("#create_frente").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/frente/create/";
		});

		$("#tabela_frentes tbody tr .fa fa-check").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/frente/update/";
		});

		$("#tabela_frentes tbody tr.fa fa-remove").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/frente/delete/";
		});


	}

	$.ajax({url: "/frente/list/", success:sucess_function});

}


