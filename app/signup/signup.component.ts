var PerfilViewModel = require("../../shared/view-models/perfil-view-model");


var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var UserViewModel = require("../../shared/view-models/perfil-view-model");
var perfil = new PerfilViewModel();

var page;
var nombre;
var mail;
var password;
var edad;

exports.loaded = function(args) {
    console.log("hello");
    page=args.object;
    page.bindingContext = perfil;
};

exports.login = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
    var page;
    var email;
};

exports.signFacebook = function() {
    alert("Signup Facebook");
};

function completeRegistration() {
    perfil.signup()
        .then(function() {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function() {
                    frameModule.topmost().navigate("views/login/login");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
}

exports.signup = function() {
    nombre = page.getViewById("nombre");
    mail = page.getViewById("mail");
    password = page.getViewById("password");
    edad = page.getViewById("edad");
    completeRegistration();
    completeRegistration();
};