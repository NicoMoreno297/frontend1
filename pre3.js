var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre4/pre4-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre4/pre4-page");
}

exports.si = si;
exports.no = no;