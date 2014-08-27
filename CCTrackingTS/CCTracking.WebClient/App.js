﻿/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../CCTracking.WebClient/Login/Views/LoginView", "./ModalHelper", "./Bus/BusCtrl", "./User/UserCtrl", "./Booking/BookingCtrl", "./Payment/PaymentCtrl", "./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl", "./RefundBooking/RefundBookingCtrl", "./Bus/BusVisitCtrl", "marionette", "datatablesBootstrap"], function(require, exports, login, modalHelper, busController, userController, bookingController, paymentController, stationController, refundBookingController, busVisitController) {
    var datatablesBootstrap = require("datatablesBootstrap");

    var Application = (function (_super) {
        __extends(Application, _super);
        function Application() {
            _super.call(this);
            if (Application._instance) {
                throw new Error("Error: Creating Application object.");
            }
            Application._instance = this;

            this.on('initialize:after', this.initializeAfter);

            this.addRegions({
                ContainerRegion: '#ContainerRegion',
                ModalRegion: '#ModalPopup'
            });

            //alert('constructor');
            var layout = Marionette.Layout.extend({
                template: "#AppLayout",
                regions: {
                    LoginRegion: '#LoginRegion',
                    HeaderRegion: '#HeaderRegion',
                    LeftRegion: '#LeftRegion',
                    RightRegion: '#RightRegion',
                    MainRegion: '#MainRegion',
                    DetailRegion: '#DetailRegion',
                    SubRegion: '#SubRegion'
                }
            });
            this.AppLayout = new layout();

            this.LoginRegion = this.AppLayout.LoginRegion;
            this.HeaderRegion = this.AppLayout.HeaderRegion;
            this.LeftRegion = this.AppLayout.LeftRegion;
            this.RightRegion = this.AppLayout.RightRegion;
            this.MainRegion = this.AppLayout.MainRegion;
            this.DetailRegion = this.AppLayout.DetailRegion;
            this.SubRegion = this.AppLayout.SubRegion;

            //start history...
            if (Backbone.history) {
                Backbone.history.start();
            }
        }
        Application.prototype.initializeAfter = function () {
            //console.log('Initalize after called..');
            var loginView = new login.LoginItemView();
            var layout = this.AppLayout;
            this.ContainerRegion.show(layout);
            this.LoginRegion.show(loginView);

            var self = this;
            var routes = Backbone.Router.extend({
                routes: {
                    'user': 'goUser',
                    'bus': 'goBus',
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewBooking': 'goViewBooking',
                    'payment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'viewAlkhidmatCentre': 'goViewStation',
                    'cancel': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    new userController.UserCtrl().Show();
                },
                goBus: function () {
                    new busController.BusCtrl().Show();
                },
                goAddBooking: function () {
                    new bookingController.BookingCtrl().Show();
                },
                goEditBooking: function () {
                    new bookingController.BookingCtrl().Show();
                },
                goViewBooking: function () {
                    new bookingController.BookingCtrl().GetAll();
                },
                goPayment: function () {
                    new paymentController.PaymentCtrl().Show();
                },
                goStation: function () {
                    new stationController.StationCtrl().Show();
                },
                goViewStation: function () {
                    new stationController.StationCtrl().GetAll();
                },
                goCancel: function () {
                    new refundBookingController.CancelBookingCtrl().Show();
                },
                goViewBusVisit: function () {
                    new busVisitController.BusVisitCtrl().GetAll();
                },
                gobusVisit: function () {
                    new busVisitController.BusVisitCtrl().Show();
                },
                defaultRoute: function () {
                    //layout.MainRegion.close();
                    //layout.DetailRegion.close();
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);
                    this.LoginRegion.show(loginView);
                }
            });
            this.AppRoutes = new routes();
        };

        Application.getInstance = function () {
            if (Application._instance === null) {
                //alert("new instance");
                Application._instance = new Application();
            }
            return Application._instance;
        };
        Application._instance = null;
        return Application;
    })(Marionette.Application);
    exports.Application = Application;

    //on load call initialize application
    $(function () {
        var app = Application.getInstance();
        app.start();

        //var rgnModal = modalHelper.GetModalRegion();
        var rgnModal = new modalHelper.ModalRegion({ el: '#ModalPopup' });

        //var modal = new rgnModal({ el: '#ModalPopup' });
        //app.ModalRegion = modal;
        app.ModalRegion = rgnModal;
    });
});
//aaa
//# sourceMappingURL=App.js.map
