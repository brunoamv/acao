// Classe para chamar o Json.
function Parlamentar(){
	this.resgatarParlamentares();

}

// Resgatar valores.
Parlamentar.prototype.resgatarParlamentares = function(){

	var sucess_function = function(resultado) {
		lista_parlamentares = resultado['parlamentares'];
		
		for(x in lista_parlamentares){
			$('#table_parlamentares tbody').append('<tr id="'+lista_parlamentares[x]['id']+'"><td>'+lista_parlamentares[x]['nome'] +'</td><td>'+lista_parlamentares[x]['uf'] +'</td><td>'+lista_parlamentares[x]['telefone'] +'</td><td>'+lista_parlamentares[x]['email'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td></tr>')
		}

		$("#table_parlamentares tbody tr").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			window.location.href = "/parlamentares/"+id_parlamentar_clicado+"/";
		});
		
	}

	$.ajax({url: "/parlamentares/list/", success:sucess_function});
}