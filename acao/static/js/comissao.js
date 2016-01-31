function Comissao(){

	this.resgatarComissoes();

}


Comissao.prototype.resgatarComissoes = function(){

	var sucess_function = function(resultado) {
		lista_comissoes = resultado['comissoes'];
		for(x in lista_comissoes){
			$('#tabela_comissoes tbody').append('<tr id="'+lista_comissoes[x]['id']+'"><td>'+lista_comissoes[x]['sigla'] +'</td><td>'+lista_comissoes[x]['nome'] +'</td><td>'+lista_comissoes[x]['indicado'] +'</td><td>'+lista_comissoes[x]['condicao'] +'</td><td><font color="red"><i class="fa fa-remove"></i></font></td></tr>')
		}

		$("#tabela_comissoes tbody tr").click(function(e){
			id_comissao_clicado = e.currentTarget.id;
			window.location.href = "/comissao/"+id_comissao_clicado+"/";
		});

	}

	$.ajax({url: "/comissao/list/", success:sucess_function});

}