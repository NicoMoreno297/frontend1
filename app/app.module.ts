import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SugerirComponent } from "./sugerir/sugerir.component";
import { MiListaComponent } from "./milista/milista.component";
import { BuscarComponent } from "./Buscar/buscar.component";
import { SignupComponent } from './signup/signup.component';
import { Pre1Component } from './pregunta1/pregunta1.component';
import { Pre2Component } from './pregunta2/pregunta2.component';
import { Pre3Component } from './pregunta3/pregunta3.component';
import { Pre4Component } from './pregunta4/pregunta4.component';
import { Pre5Component } from './pregunta5/pregunta5.component';
import { Pre6Component } from './pregunta6/pregunta6.component';
import { Pre7Component } from './pregunta7/pregunta7.component';
import { Pre8Component } from './pregunta8/pregunta8.component';
import { Pre9Component } from './pregunta9/pregunta9.component';
import { Pre10Component } from './pregunta10/pregunta10.component';
import { FaceComponent } from './signface/signface.component';

import { UserService } from "./shared/user.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SugerirComponent,
        MiListaComponent,
        BuscarComponent,
        SignupComponent,
        Pre1Component,
        Pre2Component,
        Pre3Component,
        Pre4Component,
        Pre5Component,
        Pre6Component,
        Pre7Component,
        Pre8Component,
        Pre9Component,
        Pre10Component,
        FaceComponent
    ],
    providers: [
        UserService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
