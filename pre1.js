var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre2/pre2-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre2/pre2-page");
}

exports.si = si;
exports.no = no;