import { Component } from "@angular/core";
import * as Camera from "nativescript-camera";

import { BackendService } from "./shared/backend.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor() {
        BackendService.setup();
    }
}
