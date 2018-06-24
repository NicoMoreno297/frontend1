import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from './login/login.component';
import { SugerirComponent } from './sugerir/sugerir.component';
import { MiListaComponent } from './milista/milista.component';
import { BuscarComponent } from './Buscar/buscar.component';
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

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "sugerir", component: SugerirComponent },
    { path: "milista", component: MiListaComponent },
    { path: "buscar", component: BuscarComponent },
    { path: "signup", component: SignupComponent },
    { path: "pregunta1", component: Pre1Component },
    { path: "pregunta2", component: Pre2Component },
    { path: "pregunta3", component: Pre3Component },
    { path: "pregunta4", component: Pre4Component },
    { path: "pregunta5", component: Pre5Component },
    { path: "pregunta6", component: Pre6Component },
    { path: "pregunta7", component: Pre7Component },
    { path: "pregunta8", component: Pre8Component },
    { path: "pregunta9", component: Pre9Component },
    { path: "pregunta10", component: Pre10Component },
    { path: "signface", component: FaceComponent },
    { path: "home", loadChildren: "./home/home.module#HomeModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
