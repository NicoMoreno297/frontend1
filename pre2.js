var frameModule = require("ui/frame");

function si() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre3/pre3-page");
}

function no() {
    var topmost = frameModule.topmost();
    topmost.navigate("pre3pre3-page");
}

exports.si = si;
exports.no = no;