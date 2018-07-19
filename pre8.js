var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre9/pre9-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre9/pre9-page");
}

exports.si = si;
exports.no = no;