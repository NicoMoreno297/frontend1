var frameModule = require("ui/frame");

function foto() {
    var topmost = frameModule.topmost();
    topmost.navigate("seleccion/seleccion-page");
}

function info() {
    var topmost = frameModule.topmost();
    topmost.navigate("info/info-page");
}

exports.foto = foto;
exports.info = info;