import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-pregunta1",
    moduleId: module.id,
    templateUrl: "./pregunta1.component.html",
    styleUrls: ['./pregunta1.component.css']
})
export class Pre1Component {
    isLoggingIn = true;
    user: User;
    

    constructor( private router: Router) {
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    submit() {
        this.router.navigate(["/pregunta2"]);
    }

}