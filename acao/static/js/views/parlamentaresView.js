var ParlamentaresView = function () {
    
    this.template = $("#parlamentaresViewTemplate").html();

    self = this;
    this.parlamentarModel = new Parlamentar();
    this.parlamentarDetailsView = new ParlamentarDetailsView();
    this.parlamentarCreateView = new ParlamentarCreateView(this.parlamentarModel,this);
    this.parlamentarUpdateView = new ParlamentarUpdateView(this.parlamentarModel,this);



}

ParlamentaresView.prototype.show = function() {
    $("#parlamentaresView").show();
};

ParlamentaresView.prototype.hide = function() {
    $("#parlamentaresView").hide();
};

ParlamentaresView.prototype.load = function() {
    this.fetchData();
    var items = [];
    console.log("LOAD Parlamentar")

    $("#parlamentaresView").html(_.template(this.template,{items:items}));

    //----adwdw NAO SEO PQ PAROU DE FUNFAR fetchData
    this.parlamentares_dict = {}
    var self = this;


    var sucess_function = function(resultado) {


        $("#tableRowSpinner").hide();
        
        lista_parlamentares = resultado['parlamentares'];
        
        for(x in lista_parlamentares){
            $('#table_parlamentares tbody').append(new ParlamentarView().render(lista_parlamentares[x]));
            self.parlamentares_dict[lista_parlamentares[x]['id']] = lista_parlamentares[x]
        }


        $("#parlamentaresView #table_parlamentares tbody tr .update_parlamentar").click(function(e){
            id_parlamentar_clicado = e.currentTarget.id;
            console.log("id_parlamentar_clicado");
            console.log(id_parlamentar_clicado);
            parlamentar_obj = self.parlamentares_dict[id_parlamentar_clicado];
            //self.showFrenteUpdate(id_parlamentar_clicado);
            self.parlamentarUpdateView.render(parlamentar_obj);
            self.hide();
            self.parlamentarUpdateView.show();

        });

        $("#parlamentaresView #table_parlamentares tbody tr .delete_parlamentar").click(function(e){
            id_parlamentar_clicado = e.currentTarget.id;
            console.log(id_parlamentar_clicado);
            self.showParlamentarDelete(id_parlamentar_clicado);
        });

        $("#parlamentaresView #table_parlamentares .details_parlamentar").click(function(e){
            id_parlamentar_clicado = e.currentTarget.id;
            console.log(id_parlamentar_clicado);
            self.showParlamentarDetails(id_parlamentar_clicado);
        });
        

        $("#create_parlamentar").click(function(e){
            id_parlamentar_clicado = e.currentTarget.id;
                    self.hide();
                    self.parlamentarCreateView.load();
                    self.parlamentarCreateView.show();
        });
    }
    this.parlamentarModel.load(sucess_function);


};


ParlamentaresView.prototype.fetchData = function() {

   
    console.log("this.fetchData();");
    
};

ParlamentaresView.prototype.showParlamentarDetails = function(id_parlamentar_clicado) {
    var self = this;
    var sucess_function = function(resultado) {
        self.fetchComissoesData(id_parlamentar_clicado);
        self.fetchFrentesData(id_parlamentar_clicado);
        self.parlamentarDetailsView.render(resultado);
        console.log(resultado);
        self.hide();
        self.parlamentarDetailsView.show();
    }

    this.parlamentarModel.loadDetails(id_parlamentar_clicado, sucess_function);
};

ParlamentaresView.prototype.showParlamentarDelete = function(id_parlamentar_clicado) {
    var self = this;
    var sucess_function = function(resultado) {
        console.log("DELETADO COM SUCESSO");
        self.load();
        self.show();        
    }

    console.log('id_parlamentar_clicado');
    console.log(id_parlamentar_clicado);

    this.parlamentarModel.deleteParlamentar(id_parlamentar_clicado, sucess_function);
};

ParlamentaresView.prototype.fetchComissoesData = function(id_parlamentar_clicado){
    var self = this;

    var sucess_function = function(resultado) {
        lista_comissoes = resultado['parlamentarComissoes'];
        for(x in lista_comissoes){
            $('#parlamentarComissoesDetailsView tbody').append(new ComissaoView().render(lista_comissoes[x]));
        }
        self.hide();
    }
        this.parlamentarModel.loadDetails_comissoes(id_parlamentar_clicado, sucess_function);
};


ParlamentaresView.prototype.fetchFrentesData = function(id_parlamentar_clicado){
    var self = this;
        console.log('VAI VAI VAI');

    var sucess_function = function(resultado) {
        lista_frentes = resultado['parlamentarFrentes'];
        for(x in lista_frentes){
            console.log('VAI VwwwwwAI VAI');
            console.log(lista_frentes[x]);
            $('#parlamentarFrentesDetailsView tbody').append(new FrenteView().render(lista_frentes[x]));
        }
        self.hide();
    }
        this.parlamentarModel.loadDetails_frentes(id_parlamentar_clicado, sucess_function);
};