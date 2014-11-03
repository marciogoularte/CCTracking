/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./LoginView", "../Dtos/LoginDto", "../DAL/Login", "../Common/Views/HeaderView", "../Dtos/AppObjectDto", "../Common/Views/AdminLeftView", "../Booking/BookingLeft/BookingLeftCtrl", "../Bus/BusAvailabilityCtrl", "../Booking/BookingCtrl", "../User/UserCtrl", "marionette", "jquery", "knockout", "text!./Login.html"], function(require, exports, application, helper, views, dto, DAL, menu, appObjectDto, adminLeft, bookingLeftCtrl, busAvailabilityCtrl, bookingCtrl, uc) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./Login.html"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var LoginCtrl = (function (_super) {
        __extends(LoginCtrl, _super);
        function LoginCtrl() {
            _super.call(this);

            //alert("constructor");
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.LoginDto();
            this.loginViewModel = new views.LoginViewModel(this.backboneModel, this);
            this.loginView = new views.LoginView({ viewModel: this.loginViewModel });
        }
        LoginCtrl.prototype.Load = function () {
            var _this = this;
            this.loginView = new views.LoginView();
            var layout = this.app.AppLayout;

            //this.ContainerRegion.show(layout);
            this.app.LoginRegion.show(this.loginView);
            this.loginView.on("LoginUser", function () {
                return _this.Login(_this.loginViewModel.bbModel);
            });
        };

        LoginCtrl.prototype.Login = function (login) {
            var _this = this;
            //debugger;
            //this.ShowOverlay();
            var appObj = this.app.request("AppGlobalSetting");
            login.set("userName", $("#txtUserName").val());
            login.set("password", $("#txtPassword").val());
            var promise = DAL.Login(login);

            promise.done(function (p) {
                return _this.Authenticated(p);
            });
        };

        LoginCtrl.prototype.ShowOverlay = function () {
            var ov = $("#Overlay");

            //var pos = $(_btn).offset();
            var doc = $(document);
            ov.css({
                left: 0,
                top: 0,
                width: 0,
                height: 0
            }).show().animate({
                left: 0,
                top: 0,
                width: '90%',
                height: '90%'
            }, "slow");
        };

        LoginCtrl.prototype.HideOvrlay = function () {
            $("#Overlay").hide("slow");
        };

        //TODO: this method should be inside controller
        LoginCtrl.prototype.Authenticated = function (loginDto) {
            //console.log(loginResponse);
            var lblLoginMessage = $("#lblLoginMessage");
            if (loginDto == undefined) {
                helper.ShowModalPopup("danger", "Authentication", "User name or password is wrong..!<br> Pelase try again");
                return;
                // alert("User name or password is wrong..");
                //lblLoginMessage.text('User name or password is wrong..');
            }

            if (loginDto["errorMessage"] !== null) {
                helper.ShowModalPopup("danger", "Authentication", loginDto.get("errorMessage"));
            } else {
                //Setting global object which can be accissible from other pages.
                var appObject = new appObjectDto.Models.AppObject();

                appObject.set("Id", loginDto["id"]);
                appObject.set("FirstName", loginDto["firstName"]);
                appObject.set("LastName", loginDto["lastName"]);
                appObject.set("UserName", loginDto["userName"]);
                appObject.set("IsAdmin", loginDto["isAdmin"]);
                appObject.set("AuthenticationToken", loginDto["authenticationToken"]);

                this.app.reqres.setHandler("AppGlobalSetting", function () {
                    return appObject;
                }, this);

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
                } else {
                    new bookingLeftCtrl.BookingLeftCtrl().Show();

                    //this.app.LeftRegion.show(bookingLeftView);
                    new busAvailabilityCtrl.BusAvailabilityCtrl().Show();
                    var ctrlBooking = new bookingCtrl.BookingCtrl();
                    ctrlBooking.Show();
                }
            }
        };

        LoginCtrl.prototype.Cancel = function () {
            window.location.href = "#viewLogin";
        };
        return LoginCtrl;
    })(helper.Controller);
    exports.LoginCtrl = LoginCtrl;
});
