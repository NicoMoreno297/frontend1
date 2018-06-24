import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-buscar",
    moduleId: module.id,
    templateUrl: "./buscar.component.html",
    styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
    user: User;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = false;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }
}

