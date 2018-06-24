import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }

    toggleForm() {
        this.router.navigate(["/pregunta1"]);
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Por favor, ingresa tu usuario y contraseña.");
            return;
        }

        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(() => {
                this.router.navigate(["/home"]);
            })
            .catch(() => {
                this.alert("Desafortunadamente no pudimos encontrar tu cuenta.");
            });
    }

    register() {
        this.router.navigate["/pregunta1"];
    }

    forgotPassword() {
        prompt({
            title: "Contraseña olvidada",
            message: "Ingresa la dirección de email que utilizaste para registrarte a MOVIE TV para resetear tu contraseña.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Tu contraseñá fue reseteada con éxito. Por favor, revisa tu email for instructions on choosing a new password.");
                    }).catch(() => {
                        this.alert("Desafortunadamente, un error ourrió al intentar resetear tu contraseña.");
                    });
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "MOVIE TV",
            okButtonText: "OK",
            message: message
        });
    }
}

