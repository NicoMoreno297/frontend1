var frameModule = require("ui/frame");
var config = require("../../shared/config");
var fetchModule = require("fetch");
var observableModule = require("data/observable");
var page = require("ui/page");
var dialogsModule = require("ui/dialogs");

var topmost = frameModule.topmost();
function si() {
    config.cont=config.cont+1;
    console.log("hello"+config.cont);
    completeQuestionary();
}

function no() {
    completeQuestionary();
    topmost.navigate("views/home/home");
}

function enviar(){
    return fetchModule.fetch( config.apiUrl+"preferencias", {
        method: "POST",
        body: JSON.stringify({
            puntaje : config.cont
        })
    })
}

exports.info=function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/ayuda/ayuda");
}

function completeQuestionary() {
    enviar()
        .then(function(result) {
                    topmost.navigate("views/home/home");
        }).catch(function(error) {
            console.log(error);
            dialogsModule
                .alert({
                    message: error.message,
                    okButtonText: "OK"
                });
        });
}

exports.si = si;
exports.no = no;