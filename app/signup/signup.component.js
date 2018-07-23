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

exports.info=function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/ayuda/ayuda");
}

exports.login = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
    var page;
};

exports.signFacebook = function() {
    alert("Signup Facebook");
};

function enviar(){
    return fetchModule.fetch( config.apiUrl+"ingresoperfil", {
        method: "POST",
        body: JSON.stringify({
            nombre : page.getViewById("nombre").text,
            email : page.getViewById("email").text,
            password : page.getViewById("password").text,
            year : page.getViewById("edad").text
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
                .alert("Bienvenid@ "+page.getViewById("nombre").text)
                .then(function() {
                    frameModule.topmost().navigate("views/intro/intro");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "unfortunately we weren't able to create your account.",
                    okButtonText: "OK"
                });
        });
}

exports.signup = function() {
    completeRegistration();
    //perfil.signup();
};


