var Comissao = function () {
	

}

Comissao.prototype.load = function(sucess_function) {
	$.ajax({url: "/comissao/list/", success:sucess_function});	
};

Comissao.prototype.loadDetails = function(id_to_detail, sucess_function) {
	$.ajax({url: "/comissao/"+id_to_detail, success:sucess_function});	
};