/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="text!CCTracking.WebClient/Login/Templates/Login.html"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>



//var Marionette = require("marionette");
var templateView = require("text!CCTracking.WebClient/Login/Templates/Login.html");
import DAL = require("../../DAL/Login");
import APP = require("../../App");
import Dto = require("../../Dtos/UserDto");
import appObjectDto = require("../../Dtos/AppObjectDto");

import menu = require("../../Common/Views/HeaderView");
import summary = require("../../Booking/Views/BookingLeftView");
import busAvailabilityCtrl = require("../../Bus/BusAvailabilityCtrl");
import bookingCtrl = require("../../Booking/BookingCtrl");
import uc = require("../../User/UserCtrl");

import adminLeft = require("../../Common/Views/AdminLeftView");
import adminRight = require("../../Common/Views/AdminRightView");
import user = require("../../User/UserView");


export class LoginItemView extends Marionette.ItemView {
    App: Marionette.Application;
    constructor(options?: any) {
        //if (!options)
        //    options = {};
        this.template = templateView;
        this.events = {
            "submit": "Login"
        }
        this.App = APP.Application.getInstance();
        //this.App.vent.on("LoginCallback", this.Authenticated1);
        //this.App.reqres.setHandler("AppGlobalSetting", this.ConfigureGlobalSetting);
        super(options);
    }
    //ConfigureGlobalSetting() {
    //    //loginResponse: DAL.Models.LoginResponse
    //    alert('global handler');
    //}
    Login(e) {        
        e.preventDefault();
        //this.trigger("login:clicked");
        var User = new DAL.Models.LoginRequest();
        User.set("userName", $("#txtUserName").val());
        User.set("password", $("#txtPassword").val());
        //alert('login..');
        var promise = DAL.Login(User);
        promise.done((p) => this.Authenticated(p));

    }

    //TODO: this method should be inside controller
    Authenticated(loginResponse: DAL.Models.LoginResponse) {
        //console.log(loginResponse);

        if (loginResponse == undefined) {
            alert("User name or password is wrong..");
        }

        if (loginResponse["authenticationErrorMessage"] !== null) {
            alert(loginResponse.get("authenticationErrorMessage"));
        }
        else {

            alert("You are authencated.." + loginResponse["userName"] + " Authenticaiton id is: " + loginResponse["authenticationToken"]);
            var app = APP.Application.getInstance();

            //Setting global object which can be accissible from other pages.
            var appObject = new appObjectDto.Models.AppObject();

            appObject.set("Id", loginResponse["id"]);
            appObject.set("FirstName", loginResponse["firstName"]);
            appObject.set("LastName", loginResponse["lastName"]);
            appObject.set("UserName", loginResponse["userName"]);
            appObject.set("AuthenticationToken", loginResponse["authenticationToken"]);

            this.App.reqres.setHandler("AppGlobalSetting", () => appObject, this);


            //app.AppLayout.LoginRegion.close();
            app.LoginRegion.close();

            var appObj = app.request("AppGlobalSetting");
            //alert(appObj.get("FirstName") + ',' + appObj.get("LastName"));
            //var headerModel = new Backbone.Model({ firstName: "Muhammad", lastName: "Ahmed" });
            var headerModel = new Backbone.Model({ firstName: appObj.get("FirstName"), lastName: appObj.get("LastName"), userName: appObj.get("UserName") });
            //var headerModel = new Backbone.Model({ appObj });
            var headerView = new menu.HeaderItemView({
                model: headerModel
            });

            //app.AppLayout.HeaderRegion.show(headerView);
            app.HeaderRegion.show(headerView);
            
            if (loginResponse["isAdmin"]) {
                //admin view
                //app.AppLayout.LeftRegion.show(new adminLeft.AdminLeftItemView());
                app.LeftRegion.show(new adminLeft.AdminLeftItemView());



                var ctrl = new uc.UserCtrl();
                ctrl.Show();
                ctrl.GetAll();
                var vm = ctrl.userViewModel.model;
                //knockout binding syntax
                vm.FirstName("value set from another place...")

            }
            else {
                //app.AppLayout.LeftRegion.show(new summary.BookingSummaryItemView());
                app.LeftRegion.show(new summary.BookingSummaryItemView());
                new busAvailabilityCtrl.BusAvailabilityCtrl().Show();
                var ctrlBooking = new bookingCtrl.BookingCtrl();
                ctrlBooking.Show();
            }

        }
    }
}
 