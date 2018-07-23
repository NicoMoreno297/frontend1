var frameModule = require("ui/frame");

function omitir() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/seleccion/seleccion");
}

function inicio() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/pregunta1/pregunta1");
}

exports.info=function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/informacion/informacion");
}

exports.omitir = omitir;
exports.inicio = inicio;