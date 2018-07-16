var PerfilViewModel = require("../../shared/view-models/perfil-view-model");
var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var fetchModule = require("fetch");
var config = require("../../shared/config");

var page = require("ui/page");
var perfil = new PerfilViewModel();


exports.loaded = function(args) {
    console.log("hello");
    page=args.object;
    //page.bindingContext = perfil;
};


function enviar(){
    return fetchModule.fetch( config.apiUrl+"cuestionario", {
        method: "POST",
        body: JSON.stringify({
            puntos :page.getViewById("numpuntos").text
        })
    })
}


function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

function completeRegistration() {
    enviar()
        .then(function() {
            dialogsModule
                .alert(""+ JSON.stringify({
                    puntos :page.getViewById("numpuntos").text
                }))
                .then(function() {
                    frameModule.topmost().navigate("views/home/home");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Desafortunadamente no pudimos creartu cuenta.",
                    okButtonText: "OK"
                });
        });
}

exports.validar = function() {
    completeRegistration();
    //perfil.signup();
};



/*
function completeRegistration() {

    
        console.log(edad);

        return fetchModule.fetch( config.apiUrl+"ingresoperfil", {
            method: "POST",
            body: JSON.stringify({
                mail: this.mail,
                edad: this.edad,
                nombre: this.edad,
                password: this.password
            })
        })
        .then(function() {
            dialogsModule
                .alert("Tu cuenta fue creada exitosamente.")
                .then(function() {
                    frameModule.topmost().navigate("views/seleccion/seleccion");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Desafortunadamente no pudimos creartu cuenta.",
                    okButtonText: "OK"
                });
        });
    };*/