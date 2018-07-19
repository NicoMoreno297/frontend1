var frameModule = require("ui/frame");

function omitir() {
    var topmost = frameModule.topmost();
    topmost.navigate("seleccion/seleccion-page");
}

function inicio() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre1/pre1-page");
}

function info() {
    var topmost = frameModule.topmost();
    topmost.navigate("info/info-page");
}

exports.info = info;

exports.omitir = omitir;
exports.inicio = inicio;