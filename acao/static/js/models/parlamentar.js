var Parlamentar = function () {
	

}

Parlamentar.prototype.load = function(sucess_function) {
	$.ajax({url: "/parlamentares/list/", success:sucess_function});	
};

Parlamentar.prototype.loadDetails = function(id_to_detail, sucess_function) {
	$.ajax({url: "/parlamentares/"+id_to_detail, success:sucess_function});	
};

Parlamentar.prototype.saveParlamentar = function(parlamentar_obj, sucess_function) {
	console.log("SAVE saveParlamentar");
	console.log(parlamentar_obj);
	$.ajax({method: "POST", url: "/parlamentar/create/", data: parlamentar_obj, success:sucess_function});	
};

Parlamentar.prototype.updateParlamentarSave = function(parlamentar_obj, sucess_function) {
	console.log(parlamentar_obj);
	$.ajax({method: "POST", url: "/parlamentar/update/", data: parlamentar_obj, success:sucess_function});	
};

Parlamentar.prototype.deleteParlamentar = function(id_to_delete, sucess_function) {
	
	$.ajax({method: "POST", url: "/parlamentar/delete/", data: {'id_to_delete': id_to_delete}, success:sucess_function});	
};