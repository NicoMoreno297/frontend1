var frameModule = require("ui/frame");

exports.forgotPassword = function() {
    frameModule.topmost().navigate("views/forget/forget");
};

exports.inicio = function() {
    frameModule.topmost().navigate("views/home/home");
};

exports.signUp = function() {
    frameModule.topmost().navigate("views/signup/signup");
};



function completeRegistration() {
    usuario.login()
        .then(function() {
            dialogsModule
                .then(function() {
                    frameModule.topmost().navigate("views/seleccion/seleccion");
                });
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: "Usuario o contrasea in",
                    okButtonText: "OK"
                });
        });
}

exports.login = function() {
    completeRegistration();
};