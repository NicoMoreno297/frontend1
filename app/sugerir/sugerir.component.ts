import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";


import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-sugerir",
    moduleId: module.id,
    templateUrl: "./sugerir.component.html",
    styleUrls: ['./sugerir.component.css']
})
export class SugerirComponent {
    user: User;

    constructor(private router: Router) {
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";    
    }

   submit() {
        
    }

}

