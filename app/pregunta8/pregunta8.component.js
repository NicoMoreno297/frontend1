var frameModule = require("ui/frame");
var config = require("../../shared/config");

function si() {
    var topmost = frameModule.topmost();
    config.cont=config.cont+1;
    console.log("hello"+config.cont);
    topmost.navigate("views/pregunta9/pregunta9");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/pregunta9/pregunta9");
}

exports.info=function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/ayuda/ayuda");
}
exports.si = si;
exports.no = no;
