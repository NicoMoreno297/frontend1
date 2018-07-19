var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre5/pre5-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre5/pre5-page");
}

exports.si = si;
exports.no = no;