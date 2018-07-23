var frameModule = require("ui/frame");

exports.info=function() {
    var topmost = frameModule.topmost();
    topmost.navigate("view/sino");
}