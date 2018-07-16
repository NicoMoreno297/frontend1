var frameModule = require("ui/frame");
var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");
var page = require("ui/page");
var dialogsModule = require("ui/dialogs");

var nombre;
var password;


exports.loaded = function(args) {
    console.log("hello");
    page=args.object;
    //page.bindingContext = perfil;
};

exports.forgotPassword = function() {
    frameModule.topmost().navigate("views/forget/forget");
};

exports.inicio = function() {
    frameModule.topmost().navigate("views/home/home");
};

exports.signUp = function() {
    frameModule.topmost().navigate("views/signup/signup");
};

function enviar(){
    return fetchModule.fetch( config.apiUrl+"ingresoperfil", {
        method: "POST",
        body: JSON.stringify({
            nombre : page.getViewById("nombre").text,
            password : page.getViewById("password").text
        })
    }).then(function(response){
    response.json().then(function(data) {
        console.log(data);
    })})
}

function completeRegistration() {
    var r=enviar()
    dialogsModule.alert(""+ r.ok);
    if (r.ok){
            dialogsModule.alert(""+ JSON.stringify({
                nombre : page.getViewById("nombre").text,
                password : page.getViewById("password").text
            }))
            .then(function() {
                frameModule.topmost().navigate("views/seleccion/seleccion");
            })
    } else {
            
            dialogsModule
                .alert({
                    message: "Username or password incorrect",
                    okButtonText: "OK"
                });
        }
}

exports.login = function() {
    completeRegistration();
};