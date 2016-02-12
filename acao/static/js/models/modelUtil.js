ModelUtil = function (argument) {
    this.description = "Util functions and methods for JS models";
};

ModelUtil.setModel = function(obj, data) {
    for(var key in data){
        if((!data[key] instanceof Array) && (data[key]==null || data[key]=='null' || data[key]=='None' || data[key]==""))
            obj[key] = undefined;
        else
            obj[key] = data[key];
    }

    ModelUtil._addCommonUtils(obj); 
};

ModelUtil._addCommonUtils = function (obj) {


//    obj.isState = function () {
//        return this instanceof State;
//    };
//    obj.isCity = function () {
//        return this instanceof City;
//    };
//    obj.isNeighborhood = function () {
//        return this instanceof Neighborhood;
//    };
//    obj.isAddress = function () {
//        return this instanceof Address;
//    };
//
//    obj.hasPostion = function () {
//        if (this.latitude && this.longitude) {
//            return true;
//        } else {
//            return false;
//        }
//    };
}