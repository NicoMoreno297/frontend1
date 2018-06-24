"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const page_1 = require("tns-core-modules/ui/page");
const user_model_1 = require("../shared/user.model");
const user_service_1 = require("../shared/user.service");
let BuscarComponent = class BuscarComponent {
    constructor(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.page.actionBarHidden = false;
        this.user = new user_model_1.User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
    }
};
BuscarComponent = __decorate([
    core_1.Component({
        selector: "app-buscar",
        moduleId: module.id,
        templateUrl: "./buscar.component.html",
        styleUrls: ['./buscar.component.css']
    }),
    __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
], BuscarComponent);
exports.BuscarComponent = BuscarComponent;
