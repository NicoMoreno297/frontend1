var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("seleccion/seleccion-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("seleccion/seleccion-page");
}

exports.si = si;
exports.no = no;