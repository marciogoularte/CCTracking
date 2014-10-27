/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./ModalHelper", "marionette", "datatablesBootstrap"], function(require, exports, modalHelper) {
    //import busController = require("./Bus/BusCtrl");
    //import userController = require("./User/UserCtrl");
    //import bookingController = require("./Booking/BookingCtrl");
    //import paymentController = require("./Payment/PaymentCtrl");
    //import stationController = require("./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl");
    ///import refundBookingController = require("./RefundBooking/RefundBookingCtrl");
    //import busVisitController = require("./Bus/BusVisitCtrl");
    //import adminBusController = require("./Admin/Bus/BusCtrl");
    //import searchController = require("./Search/SearchCtrl");
    //import driverController = require("./Admin/Driver/DriverCtrl");
    //import graveyardController = require("./Admin/Graveyard/GraveyardCtrl");
    //import townController = require("./Admin/Town/TownCtrl");
    //import unionCouncilController = require("./Admin/UnionCouncil/UnionCouncilCtrl");
    //import landmarkController = require("./Admin/Landmark/LandmarkCtrl");
    //import paymentTypeController = require("./Admin/PaymentType/PaymentTypeCtrl");
    //import refundTypeController = require("./Admin/RefundType/RefundTypeCtrl");
    //import visitTypeController = require("./Admin/VisitType/VisitTypeCtrl");
    //import causeOfDeathController = require("./Admin/CauseOfDeath/CauseOfDeathCtrl");
    //import trackingDeviceController = require("./Admin/TrackingDevice/TrackingDeviceCtrl");
    //import koBindingController = require("./Tests/KoBindingCtrl");
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
            //var loginView = new login.LoginItemView();
            var layout = this.AppLayout;
            this.ContainerRegion.show(layout);

            //var loginCtrl = new loginController.LoginCtrl();
            //loginCtrl.Load();
            require(['./Login/LoginCtrl'], function (p) {
                new p.LoginCtrl().Load();
            });

            //this.LoginRegion.show(loginView);
            var self = this;
            var routes = Backbone.Router.extend({
                routes: {
                    'user': 'goUser',
                    'viewUser': 'goViewUser',
                    'bus': 'goBus',
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewBooking': 'goViewBooking',
                    'payment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'viewAlkhidmatCentre': 'goViewStation',
                    'cancel': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'editBusVisit': 'goEditBusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    'adminBus': 'goAdminBus',
                    'viewAdminBus': 'goViewAdminBus',
                    'searchBooking': 'goSearchBooking',
                    'adminSearchBooking': 'goAdminSearchBooking',
                    'driver': 'goDriver',
                    'viewDriver': 'goViewDriver',
                    'graveyard': 'goGraveyard',
                    'viewGraveyard': 'goViewGraveyard',
                    'town': 'goTown',
                    'viewTown': 'goViewTown',
                    'unionCouncil': 'goUnionCouncil',
                    'viewUnionCouncil': 'goViewUnionCouncil',
                    'landmark': 'goLandmark',
                    'viewLandmark': 'goViewLandmark',
                    'paymentType': 'goPaymentType',
                    'viewPaymentType': 'goViewPaymentType',
                    'refundType': 'goRefundType',
                    'viewRefundType': 'goViewRefundType',
                    'visitType': 'goVisitType',
                    'viewVisitType': 'goViewVisitType',
                    'causeOfDeath': 'goCauseOfDeath',
                    'viewCauseOfDeath': 'goViewCauseOfDeath',
                    'viewTest': 'goViewTest',
                    'trackingDevice': 'goTrackingDevice',
                    'viewTrackingDevice': 'goViewTrackingDevice',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().Show();
                    });
                    //new userController.UserCtrl().Show();
                },
                goViewUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().GetAll();
                    });
                    //new userController.UserCtrl().GetAll();
                },
                goBus: function () {
                    require(['./Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                    // new busController.BusCtrl().Show();
                },
                goAddBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                    //new bookingController.BookingCtrl().Show();
                },
                goEditBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                    //new bookingController.BookingCtrl().Show();
                },
                goViewBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    // new bookingController.BookingCtrl().GetAll(1);
                },
                goPayment: function () {
                    require(['./Payment/PaymentCtrl'], function (p) {
                        new p.PaymentCtrl().Show();
                    });
                    //new paymentController.PaymentCtrl().Show();
                },
                goStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().Show();
                    });
                    //new stationController.StationCtrl().Show();
                },
                goViewStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().GetAll();
                    });
                    //new stationController.StationCtrl().GetAll();
                },
                goCancel: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundBookingCtrl().GetAll();
                    });
                    // new refundBookingController.RefundBookingCtrl().Show();
                },
                goViewBusVisit: function () {
                    require(['./Bus/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().SimpleLoad();
                    });
                },
                gobusVisit: function () {
                    require(['./Bus/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Show();
                    });
                },
                goEditBusVisit: function () {
                    require(['./Bus/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Show();
                    });
                },
                goAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                    // new adminBusController.BusCtrl().Show();
                },
                goViewAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().GetAll();
                    });
                    // new adminBusController.BusCtrl().GetAll();
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goAdminSearchBooking: function () {
                    require(['.Admin/AdminSearch/AdminSearchBookingCtrl'], function (p) {
                        new p.AdminSearchBookingCtrl().Show();
                    });
                },
                goDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().Show();
                    });
                    //new driverController.DriverCtrl().Show();
                },
                goViewDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().GetAll();
                    });
                    //new driverController.DriverCtrl().GetAll();
                },
                goGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().Show();
                    });
                    //new graveyardController.GraveyardCtrl().Show();
                },
                goViewGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().GetAll();
                    });
                    //new graveyardController.GraveyardCtrl().GetAll();
                },
                goTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().Show();
                    });
                    //new townController.TownCtrl().Show();
                },
                goViewTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().GetAll();
                    });
                    //new townController.TownCtrl().GetAll();
                },
                goUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().Show();
                    });
                    //new unionCouncilController.UnionCouncilCtrl().Show();
                },
                goViewUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().GetAll();
                    });
                    //new unionCouncilController.UnionCouncilCtrl().GetAll();
                },
                goLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().Show();
                    });
                    //new landmarkController.LandmarkCtrl().Show();
                },
                goViewLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().GetAll();
                    });
                    //new landmarkController.LandmarkCtrl().GetAll();
                },
                goPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                    //new paymentTypeController.PaymentTypeCtrl().Show();
                },
                goViewPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                    //new paymentTypeController.PaymentTypeCtrl().GetAll();
                },
                goRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().Show();
                    });
                    //new refundTypeController.RefundTypeCtrl().Show();
                },
                goViewRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().GetAll();
                    });
                    //new refundTypeController.RefundTypeCtrl().GetAll();
                },
                goVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().Show();
                    });
                    //new visitTypeController.VisitTypeCtrl().Show();
                },
                goViewVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().GetAll();
                    });
                    //new visitTypeController.VisitTypeCtrl().GetAll();
                },
                goCauseOfDeath: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                    //new causeOfDeathController.CauseOfDeathCtrl().Show();
                },
                goViewCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                    // new causeOfDeathController.CauseOfDeathCtrl().GetAll();
                },
                goViewTest: function () {
                    // new koBindingController.KoBindingCtrl().Show();
                },
                goTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().Show();
                    });
                    // new trackingDeviceController.TrackingDeviceCtrl().Show();
                },
                goViewTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().GetAll();
                    });
                    // new trackingDeviceController.TrackingDeviceCtrl().GetAll();
                },
                defaultRoute: function () {
                    //layout.MainRegion.close();
                    //layout.DetailRegion.close();
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);

                    // this.LoginRegion.show(loginView);
                    //loginCtrl.Load();
                    require(['./Login/LoginCtrl'], function (p) {
                        new p.LoginCtrl().Load();
                    });
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
