//import * as camera from "nativescript-camera";
//import { Image } from "ui/image";

var cameraModule = require("nativescript-camera");
var frameModule = require("ui/frame");
var imageModule = require("ui/image");
var view = require("ui/core/view");
 
var imageContainer;
 
//function onPageLoaded(args) {
   //var page = args.object;
   //imageContainer = view.getViewById(page, "img");
//}
 
function tapAction() {
    var options={cameraFacing: "front"};
    if(cameraModule.isAvailable){
        console.log("si esta activa");
    }
    else{
        console.log("no esta disponible");
    }
    cameraModule.requestPermissions();
    cameraModule.takePicture(options).then(function (picture) {
       //imageContainer.imageSource = picture;
       console.log("Se tomo la foto");
       var topmost = frameModule.topmost();
       topmost.navigate("views/sentimiento/sentimiento");
   });
}
 
//exports.onPageLoaded = onPageLoaded;
exports.tapAction = tapAction;
