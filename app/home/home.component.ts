import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import * as Camera from "nativescript-camera";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    onButtonTap() {
        this.router.navigate(["/sugerir"]);
    }
    takePicture() {
        var imageModule = require("ui/image");
        Camera.takePicture()
            .then(function (imageAsset) {
                console.log("Result is an image asset instance");
                var image = new imageModule.Image();
                image.src = imageAsset;

            }).catch(function (err) {
                console.log("Error -> " + err.message);
            }).then(() => {
                this.onButtonTap();
            })
    }
    onButtonTap1(): void {
        this.router.navigate(["/milista"]);
    }

    onButtonTap2(): void {
        this.router.navigate(["/buscar"]);
    }


    message = "Has sido autenticado con éxito. This is where you build your core application functionality.";

    constructor(private router: Router) {
        
    }

    submit() {
        
    }


    ngOnInit(): void {
    }
}
