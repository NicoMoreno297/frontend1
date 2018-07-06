//import * as camera from "nativescript-camera";
//import { Image } from "ui/image";

var cameraModule = require("nativescript-camera");
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
   });
}
 
//exports.onPageLoaded = onPageLoaded;
exports.tapAction = tapAction;