/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./Login.html"/>



var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../App");
import helper = require("../Helper");
//import views = require("./LoginView");
//import dto = require("../Dtos/LoginDto");
//import DAL = require("../DAL/Login");

//import menu = require("../Common/Views/HeaderView");

import appObjectDto = require("../Dtos/AppObjectDto");

//import adminLeft = require("../Common/Views/AdminLeftView");
//import adminRight = require("../Common/Views/AdminRightView");
//import summary = require("../Booking/BookingLeft/BookingLeftView");

//import bookingLeftCtrl = require("../Booking/BookingLeft/BookingLeftCtrl");
//import busAvailabilityCtrl = require("../Bus/BusAvailabilityCtrl");
//import bookingCtrl = require("../Booking/BookingCtrl");
//import homeCtrl = require("../Home/HomeCtrl");

import uc = require("../User/UserCtrl");

export class LoginCtrl extends helper.Controller {
    app: any;
    loginViewModel: LoginModule.Views.LoginViewModel;
    loginView: LoginModule.Views.LoginView;
    backboneModel: Backbone.Model;

    constructor() {
        super();
        //alert("constructor");
        this.app = application.Application.getInstance();
        this.backboneModel = new LoginModule.Models.LoginDto();
        this.loginViewModel = new LoginModule.Views.LoginViewModel(this.backboneModel, this);
        this.loginView = new LoginModule.Views.LoginView({ viewModel: this.loginViewModel });
    }

    Load() {
        this.loginView = new LoginModule.Views.LoginView();
        //var layout = this.app.AppLayout;
        //this.ContainerRegion.show(layout);
        this.app.LoginRegion.show(this.loginView);
        this.loginView.on("LoginUser", () => this.Login(this.loginViewModel.bbModel));
    }

    Login(login: any) {
        //debugger;
        //this.ShowOverlay();
        var appObj = this.app.request("AppGlobalSetting");
        login.set("userName", $("#txtUserName").val());
        login.set("password", $("#txtPassword").val());
        var promise = LoginModule.Dal.Login(login);

        promise.done((p) => this.Authenticated(p));
    }




    //TODO: this method should be inside controller
    Authenticated(loginDto: LoginModule.Models.LoginDto) {
        //console.log(loginResponse);
        var lblLoginMessage = $("#lblLoginMessage");
        if (loginDto == undefined) {
            helper.ShowModalPopup("danger", "Authentication", "User name or password is wrong..!<br> Pelase try again");
            return;
        }

        if (loginDto["errorMessage"] !== null) {
            helper.ShowModalPopup("danger", "Authentication", loginDto["errorMessage"]);
        } else {
            var appObject = new appObjectDto.Models.AppObject();

            appObject.set("Id", loginDto["id"]);
            appObject.set("FirstName", loginDto["firstName"]);
            appObject.set("LastName", loginDto["lastName"]);
            appObject.set("UserName", loginDto["userName"]);
            appObject.set("IsAdmin", loginDto["isAdmin"]);
            appObject.set("AuthenticationToken", loginDto["authenticationToken"]);

            this.app.reqres.setHandler("AppGlobalSetting", () => appObject, this);

            this.app.LoginRegion.close();

            var appObj = this.app.request("AppGlobalSetting");
            var headerModel = new Backbone.Model({ firstName: appObj.get("FirstName"), lastName: appObj.get("LastName"), userName: appObj.get("UserName") });
            
            require(["../Common/Views/HeaderView"], (p) => {
                var headerView = new p.HeaderItemView({
                    model: headerModel
                });
                this.app.HeaderRegion.show(headerView);
            });
            

            

            //if (loginDto["isAdmin"]) {
            //    //admin view
            //    this.app.AdminLeftRegion.show(new adminLeft.AdminLeftItemView());
            //}
            //new bookingLeftCtrl.BookingLeftCtrl().Show();
            require(['../Bus/BusAvailabilityCtrl'], (p) => {
                   new p.BusAvailabilityCtrl().Show();
            });
            //new busAvailabilityCtrl.BusAvailabilityCtrl().Show();


            if (appObj.get("IsAdmin")) {
                require(["../Home/HomeCtrl"], (p) => {
                    new p.HomeCtrl().Show();
                });
                //var home = new homeCtrl.HomeCtrl();
                //home.Show();
                this.app.applyRouting(this.app, this.app.AppLayout);
            }
            else {
                require(['../Booking/BookingCtrl'], (p) => { new p.BookingCtrl().GetAll(1); });
                this.app.applyRoutingForOperator(this.app, this.app.AppLayout);
            }
        }
    }
    Cancel() {
        window.location.href = "#viewLogin";
    }
}


import baseDAL = require("../DAL/AjaxRequest");
export module LoginModule {

    export module Views {
        var templateView = require("text!./Login.html");
        //import APP = require("../App");
        // View Model
        export class LoginViewModel extends helper.ViewModel {
            constructor(model: any, controller: any) {
                super(model, controller);
            }
        }


        export class LoginView extends helper.Views.MvvmView {
            App: Marionette.Application;

            constructor(options?: any) {
                this.template = templateView;
                this.events = {
                    "submit": "Login"
                }
                this.App = application.Application.getInstance();
                //this.App.vent.on("LoginCallback", this.Authenticated1);
                //this.App.reqres.setHandler("AppGlobalSetting", this.ConfigureGlobalSetting);
                super(options);
            }

            Login(e) {
                e.preventDefault();
                this.trigger("LoginUser");
            }


        }
    }


    export module Models {
        export class LoginDto extends Backbone.Model {
            default() {
                return {
                    id: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    nic: "",
                    userName: "",
                    password: "",
                    resetPassword: "",
                    isAdmin: false,
                    authenticationToken: "",
                    errorMessage: ""
                };
            }
        }
    }


    export module Dal {
        export class LoginDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
            constructor() {
                super(this);
            }
            public getResponse() {
                return new LoginModule.Models.LoginDto();
            }
        }


        export function Login(loginDto: LoginModule.Models.LoginDto) {
            var o: baseDAL.BaseDto = new LoginDal();
            return o.doAjaxRequest(loginDto, "POST", "Login");
        }


        export function ChangePasswrd(loginDto: LoginModule.Models.LoginDto) {
            var o: baseDAL.BaseDto = new LoginDal();
            return o.doAjaxRequest(loginDto, "POST", "ChangePassword");
        }
    }


}