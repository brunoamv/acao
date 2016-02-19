var Frente = function () {
	

}

Frente.prototype.load = function(sucess_function) {
	$.ajax({url: "/frente/list/", success:sucess_function});	
};

Frente.prototype.loadDetails = function(id_to_detail, sucess_function) {
	$.ajax({url: "/frente/"+id_to_detail, success:sucess_function});	
};

Frente.prototype.deleteFrente = function(id_to_delete, sucess_function) {
	
	$.ajax({method: "POST", url: "/frente/delete/", data: {'id_to_delete': id_to_delete}, success:sucess_function});	
};

Frente.prototype.updateFrenteSave = function(frente_obj, sucess_function) {
	console.log(frente_obj);
	$.ajax({method: "POST", url: "/frente/update/", data: frente_obj, success:sucess_function});	
};

Frente.prototype.loadDetails_parlamentares = function(id_to_detail, sucess_function) {
	$.ajax({url: "/frente/"+id_to_detail+"/parlamentares/", success:sucess_function});	
};

Frente.prototype.saveFrente = function(frente_obj, sucess_function) {
	console.log("SAVE FRENTE");
	console.log(frente_obj);
	$.ajax({method: "POST", url: "/frente/create/", data: frente_obj, success:sucess_function});	
};