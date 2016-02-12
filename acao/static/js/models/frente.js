var Frente = function () {
	

}

Frente.prototype.load = function(sucess_function) {
	$.ajax({url: "/frente/list/", success:sucess_function});	
};

Frente.prototype.loadDetails = function(id_to_detail, sucess_function) {
	$.ajax({url: "/frente/"+id_to_detail, success:sucess_function});	
};