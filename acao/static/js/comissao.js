function Comissao(){

	this.resgatarComissoes();

}


Comissao.prototype.resgatarComissoes = function(){

	var sucess_function = function(resultado) {
		lista_comissoes = resultado['comissoes'];
		for(x in lista_comissoes){
			$('#tabela_comissoes tbody').append('<tr><th>'+lista_comissoes[x]['nome'] +'</th></tr>')

		}
	}

	$.ajax({url: "/comissao/list/", success:sucess_function});

}