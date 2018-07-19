var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre8/pre8-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre8/pre8-page");
}

exports.si = si;
exports.no = no;