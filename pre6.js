var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre7/pre7-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre7/pre7-page");
}

exports.si = si;
exports.no = no;