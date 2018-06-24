import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-milista",
    moduleId: module.id,
    templateUrl: "./milista.component.html",
    styleUrls: ['./milista.component.css']
})
export class MiListaComponent {
    user: User;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = false;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    submit() {

    }

}

