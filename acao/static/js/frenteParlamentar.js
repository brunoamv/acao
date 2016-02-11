function Frente(){
	this.resgatarFrentes();
}

Frente.prototype.resgatarFrentes = function(){

	var sucess_function = function(resultado) {
		lista_frenteParlamentar = resultado['frenteParlametares'];
		for(x in lista_frenteParlamentar){
			$('#table_parlamentares_frente tbody').append('<tr id="'+lista_frenteParlamentar[x]['id']+'"><td>'+lista_frenteParlamentar[x]['frente'] +'</td><td>'+lista_frenteParlamentar[x]['parlamentar'] +'</td><td>'+lista_frenteParlamentar[x]['parlamentar'] +'</td><td>'+lista_frenteParlamentar[x]['parlamentar'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td></tr>')
		}

		$("#table_parlamentares_frente tbody tr").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			window.location.href = "/parlamentares/"+id_frente_clicado+"/";
		});

		$("#create_frenteParlamentar").click(function(e){
			id_frente = e.currentTarget.value;
			id_parlamentar = get_id_parlamentar();
			//window.location.href = "/frente/"+id_frente+"/"+id_parlamentar+"/parlamentares/create/";
		});

	}

	$.ajax({url: "parlamentares", success:sucess_function});

}



function get_id_parlamentar(){

	var sucess_function = function(resultado) {
		lista_parlamentares = resultado['parlamentares'];
		
		for(x in lista_parlamentares){
			$('#table_parlamentares_frente tbody').append('<tr id="'+lista_parlamentares[x]['id']+'"><td>'+lista_parlamentares[x]['nome'] +'</td><td>'+lista_parlamentares[x]['uf'] +'</td><td>'+lista_parlamentares[x]['telefone'] +'</td><td>'+lista_parlamentares[x]['email'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td></tr>')			
		}

	}
	
	$.ajax({url: "/parlamentares/list/", success:sucess_function});
}