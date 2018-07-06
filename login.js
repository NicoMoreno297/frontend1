var frameModule = require("ui/frame");

function forgotPassword() {
    var topmost = frameModule.topmost();
    topmost.navigate("forget/forget-page");
}

function inicio() {
    var topmost = frameModule.topmost();
    topmost.navigate("seleccion/seleccion-page");
}

exports.forgotPassword = forgotPassword;
exports.inicio = inicio;