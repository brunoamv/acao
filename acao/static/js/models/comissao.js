var Comissao = function () {
	

}

Comissao.prototype.load = function(sucess_function) {
	$.ajax({url: "/comissao/list/", success:sucess_function});	
};

Comissao.prototype.loadDetails = function(id_to_detail, sucess_function) {
	$.ajax({url: "/comissao/"+id_to_detail, success:sucess_function});	
};

Comissao.prototype.saveComissao = function(comissao_obj, sucess_function) {
	console.log("SAVE saveComissao");
	console.log(comissao_obj);
	$.ajax({method: "POST", url: "/comissao/create/", data: comissao_obj, success:sucess_function});	
};

Comissao.prototype.deleteComissoes = function(id_to_delete, sucess_function) {
	
	$.ajax({method: "POST", url: "/comissao/delete/", data: {'id_to_delete': id_to_delete}, success:sucess_function});	
};

Comissao.prototype.updateComissaoSave = function(comissao_obj, sucess_function) {
	console.log(comissao_obj);
	$.ajax({method: "POST", url: "/comissao/update/", data: comissao_obj, success:sucess_function});	
};

Comissao.prototype.loadDetails_parlamentares = function(id_to_detail, sucess_function) {
	$.ajax({url: "/comissao/"+id_to_detail+"/parlamentares/", success:sucess_function});	
};