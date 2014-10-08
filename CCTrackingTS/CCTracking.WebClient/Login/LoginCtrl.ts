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
import views = require("./LoginView");
import dto = require("../Dtos/LoginDto");
import DAL = require("../DAL/Login");

import menu = require("../Common/Views/HeaderView");

import appObjectDto = require("../Dtos/AppObjectDto");




import adminLeft = require("../Common/Views/AdminLeftView");
import adminRight = require("../Common/Views/AdminRightView");
import summary = require("../Booking/Views/BookingLeftView");
import busAvailabilityCtrl = require("../Bus/BusAvailabilityCtrl");
import bookingCtrl = require("../Booking/BookingCtrl");

import uc = require("../User/UserCtrl");

export class LoginCtrl extends helper.Controller {
    app: any;
    loginViewModel: views.LoginViewModel;
    loginView: views.LoginView;
    backboneModel: Backbone.Model;

    constructor() {
        super();
        //alert("constructor");
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.LoginDto();
        this.loginViewModel = new views.LoginViewModel(this.backboneModel, this);
        this.loginView = new views.LoginView({ viewModel: this.loginViewModel });
    }
    
    Load() {

        this.loginView = new views.LoginView();
        var layout = this.app.AppLayout;
        //this.ContainerRegion.show(layout);
        this.app.LoginRegion.show(this.loginView);
        this.loginView.on("LoginUser", () => this.Login(this.loginViewModel.bbModel));
    }

    Login(login: any) {
        //debugger;
        var appObj = this.app.request("AppGlobalSetting");
        
        login.set("userName", $("#txtUserName").val());
        login.set("password", $("#txtPassword").val());
        var promise = DAL.Login(login);
        promise.done((p) => this.Authenticated(p));
    }

    //TODO: this method should be inside controller
    Authenticated(loginDto: dto.Models.LoginDto) {
        //console.log(loginResponse);

        if (loginDto == undefined) {
            alert("User name or password is wrong..");
        }

        if (loginDto["errorMessage"] !== null) {
            alert(loginDto.get("errorMessage"));
        }
        else {

            alert("You are authencated.." + loginDto["userName"] + " Authenticaiton id is: " + loginDto["authenticationToken"]);
           // var app = this.app.Application.getInstance();

            //Setting global object which can be accissible from other pages.
            var appObject = new appObjectDto.Models.AppObject();

            appObject.set("Id", loginDto["id"]);
            appObject.set("FirstName", loginDto["firstName"]);
            appObject.set("LastName", loginDto["lastName"]);
            appObject.set("UserName", loginDto["userName"]);
            appObject.set("AuthenticationToken", loginDto["authenticationToken"]);

            this.app.reqres.setHandler("AppGlobalSetting", () => appObject, this);

            //app.AppLayout.LoginRegion.close();
            this.app.LoginRegion.close();

            var appObj = this.app.request("AppGlobalSetting");
            //alert(appObj.get("FirstName") + ',' + appObj.get("LastName"));
            //var headerModel = new Backbone.Model({ firstName: "Muhammad", lastName: "Ahmed" });
            var headerModel = new Backbone.Model({ firstName: appObj.get("FirstName"), lastName: appObj.get("LastName"), userName: appObj.get("UserName") });
            //var headerModel = new Backbone.Model({ appObj });
            var headerView = new menu.HeaderItemView({
                model: headerModel
            });

            //app.AppLayout.HeaderRegion.show(headerView);
            this.app.HeaderRegion.show(headerView);

            if (loginDto["isAdmin"]) {
                //admin view
                //app.AppLayout.LeftRegion.show(new adminLeft.AdminLeftItemView());
                this.app.LeftRegion.show(new adminLeft.AdminLeftItemView());

                var ctrl = new uc.UserCtrl();
               // ctrl.Show();
                ctrl.GetAll();
                var vm = ctrl.userViewModel.model;
                //knockout binding syntax
               // vm.FirstName("value set from another place...")

            }
            else {
                //app.AppLayout.LeftRegion.show(new summary.BookingSummaryItemView());
                this.app.LeftRegion.show(new summary.BookingSummaryItemView());
                new busAvailabilityCtrl.BusAvailabilityCtrl().Show();
                var ctrlBooking = new bookingCtrl.BookingCtrl();
                ctrlBooking.Show();
            }

        }
    }

    Cancel() {
        window.location.href = "#viewLogin";
    }

}
