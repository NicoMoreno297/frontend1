var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre6/pre6-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre6/pre6-page");
}

exports.si = si;
exports.no = no;