var frameModule = require("ui/frame");
var cont;
exports.home = function() {
    frameModule.topmost().navigate("views/home/home");
};


var firstSwitchState = "OFF";
exports.onFirstChecked(args)=function() {
        if (firstSwitch.checked) {
            this.firstSwitchState = "ON";
            cont=cont+1;
        } else {
            this.firstSwitchState = "OFF";
        }
        console.log(firstSwitchState);
}

exports.ingresarResultados()=function(){
    perfil.resultados()
    .then(function() {
        dialogsModule
            
            .then(function() {
                frameModule.topmost().navigate("views/home/home");
            });
    }).catch(function(error) {
        console.log(error);
        dialogsModule
            .alert({
                message: "Error",
                okButtonText: "OK"
            });
    });
}