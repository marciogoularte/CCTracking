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
                ModalRegion: '#ModalPopup',
                ModalAlertRegion: "#ModalAlertPopup"
            });

            //alert('constructor');
            var layout = Marionette.Layout.extend({
                template: "#AppLayout",
                regions: {
                    LoginRegion: '#LoginRegion',
                    HeaderRegion: '#HeaderRegion',
                    LeftRegion: '#LeftRegion',
                    AdminLeftRegion: '#AdminLeftRegion',
                    RightRegion: '#RightRegion',
                    MainRegion: '#MainRegion',
                    DetailRegion: '#DetailRegion',
                    SubRegion: '#SubRegion',
                    BusAvailabilityRegion: '#BusAvailabilityRegion'
                }
            });
            this.AppLayout = new layout();

            this.LoginRegion = this.AppLayout.LoginRegion;
            this.HeaderRegion = this.AppLayout.HeaderRegion;
            this.LeftRegion = this.AppLayout.LeftRegion;
            this.AdminLeftRegion = this.AppLayout.AdminLeftRegion;
            this.RightRegion = this.AppLayout.RightRegion;
            this.MainRegion = this.AppLayout.MainRegion;
            this.DetailRegion = this.AppLayout.DetailRegion;
            this.SubRegion = this.AppLayout.SubRegion;
            this.BusAvailabilityRegion = this.AppLayout.BusAvailabilityRegion;

            //this.applyRouting(this);
            //start history...
            if (Backbone.history) {
                Backbone.history.start();
            }
        }
        Application.prototype.initializeAfter = function () {
            //console.log('Initalize after called..');
            this.ContainerRegion.reset();

            //this.initalizeLocalStorage();
            //var loginView = new login.LoginItemView();
            var layout = this.AppLayout;

            this.ContainerRegion.show(layout);

            //var loginCtrl = new loginController.LoginCtrl();
            //loginCtrl.Load();
            this.initalizeLocalStorage();
            //this.applyRouting(this,layout);
        };

        Application.prototype.applyRouting = function (self, layout) {
            var router = Backbone.Router.extend({
                routes: {
                    'user': 'goUser',
                    'viewUser': 'goViewUser',
                    'bus': 'goBus',
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewHome': 'goViewHome',
                    'viewBooking': 'goViewBooking',
                    'editPayment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'viewAlkhidmatCentre': 'goViewStation',
                    'editRefund': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'editBusVisit': 'goEditBusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    'busMilageReport': 'goBusMilageReport',
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
                    'nearestCentreSetup': 'goNearestCentreSetup',
                    'viewNearestCentreSetup': 'goViewNearestCentreSetup',
                    'driverSummary': 'goDriverSummary',
                    'busVisitSummary': 'goBusVisitSummary',
                    'busVisitMilageSummary': 'goBusVisitMilageSummary',
                    'driverDetail': '',
                    'busVisitDetail': '',
                    'busVisitMilageDetail': '',
                    'changePassword': 'goChangePassword',
                    'editExtraCharge': 'goExtraCharge',
                    'auditBooking': 'goAuditBooking',
                    'auditBusVisit': 'goAuditBusVisit',
                    'auditPayment': 'goAuditPayment',
                    'auditRefundBooking': 'goAuditRefundBooking',
                    'busCentreReport': 'goBusCentreReport',
                    'busFuelingReport': 'goBusFuelingReport',
                    'login': 'defaultRoute',
                    'logout': 'goLogout',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().Show();
                    });
                },
                goViewUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().GetAll();
                    });
                },
                goBus: function () {
                    require(['./Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goAddBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                },
                goEditBooking: function () {
                    //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                },
                goViewHome: function () {
                    require(['./Home/HomeCtrl'], function (p) {
                        new p.HomeCtrl().Show();
                    });
                },
                goViewBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    //this.appRoute.navigate("viewBooking");
                    //routes.navigate("viewBooking");
                },
                goPayment: function () {
                    //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
                },
                goStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().Show();
                    });
                },
                goViewStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().GetAll();
                    });
                },
                goCancel: function () {
                    //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
                },
                goViewBusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().SimpleLoad();
                    });
                },
                gobusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Load();
                    });
                },
                goEditBusVisit: function () {
                    //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
                },
                goAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goViewAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().GetAll();
                    });
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goAdminSearchBooking: function () {
                    require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], function (p) {
                        new p.AdminSearchBookingCtrl().Show();
                    });
                },
                goDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().Show();
                    });
                },
                goViewDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().GetAll();
                    });
                },
                goGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().Show();
                    });
                },
                goViewGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().GetAll();
                    });
                },
                goTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().Show();
                    });
                },
                goViewTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().GetAll();
                    });
                },
                goUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().Show();
                    });
                },
                goViewUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().GetAll();
                    });
                },
                goLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().Show();
                    });
                },
                goViewLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().GetAll();
                    });
                },
                goPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                },
                goViewPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                },
                goRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().Show();
                    });
                },
                goViewRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().GetAll();
                    });
                },
                goVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().Show();
                    });
                },
                goViewVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().GetAll();
                    });
                },
                goCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().Show();
                    });
                },
                goViewCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().GetAll();
                    });
                },
                goViewTest: function () {
                    // new koBindingController.KoBindingCtrl().Show();
                },
                goTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().Show();
                    });
                },
                goViewTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().GetAll();
                    });
                },
                goNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().Show();
                    });
                },
                goViewNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().GetAll();
                    });
                },
                goChangePassword: function () {
                    require(['./ChangePassword/ChangePasswordCtrl'], function (p) {
                        new p.ChangePasswordCtrl().Load();
                    });
                },
                goExtraCharge: function () {
                    //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
                },
                goDriverSummary: function () {
                    require(['./Admin/Reports/Driver/DriverSummaryCtrl'], function (p) {
                        new p.DriverSummaryCtrl().Show();
                    });
                },
                goBusVisitSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowVisit();
                    });
                },
                goBusVisitMilageSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowMilage();
                    });
                },
                goAuditBooking: function () {
                    require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], function (p) {
                        new p.AuditBookingCtrl().Show();
                    });
                },
                goAuditBusVisit: function () {
                    require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], function (p) {
                        new p.AuditBusVisitCtrl().Show();
                    });
                },
                goAuditPayment: function () {
                    require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], function (p) {
                        new p.AuditPaymentCtrl().Show();
                    });
                },
                goAuditRefundBooking: function () {
                    require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], function (p) {
                        new p.AuditRefundBookingCtrl().Show();
                    });
                },
                goBusCentreReport: function () {
                    require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], function (p) {
                        new p.BusCentreReportCtrl().Show();
                    });
                },
                goBusMilageReport: function () {
                    require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], function (p) {
                        new p.BusMilageCtrl().Show();
                    });
                },
                goBusFuelingReport: function () {
                    require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], function (p) {
                        new p.BusFuelingReportCtrl().Show();
                    });
                },
                goLogout: function () {
                    var appInstance = Application.getInstance();
                    appInstance.vent.trigger("Event-BackToLogin", false);
                },
                defaultRoute: function () {
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);
                    require(['./Login/LoginCtrl'], function (p) {
                        new p.LoginCtrl().Load();
                    });
                }
            });

            //debugger;
            this.AppRoutes = new router();
        };

        Application.prototype.applyRoutingForOperator = function (self, layout) {
            var router = Backbone.Router.extend({
                routes: {
                    'addBooking': 'goAddBooking',
                    'editBooking': 'goEditBooking',
                    'viewBooking': 'goViewBooking',
                    'editPayment': 'goPayment',
                    'alkhidmatCentre': 'goStation',
                    'editRefund': 'goCancel',
                    'busVisit': 'gobusVisit',
                    'editBusVisit': 'goEditBusVisit',
                    'viewBusVisit': 'goViewBusVisit',
                    'searchBooking': 'goSearchBooking',
                    'changePassword': 'goChangePassword',
                    'editExtraCharge': 'goExtraCharge',
                    'login': 'defaultRoute',
                    'logout': 'goLogout',
                    '*other': 'defaultRoute'
                },
                goUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().Show();
                    });
                },
                goViewUser: function () {
                    require(['./User/UserCtrl'], function (p) {
                        new p.UserCtrl().GetAll();
                    });
                },
                goBus: function () {
                    require(['./Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goAddBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().Show();
                    });
                },
                goEditBooking: function () {
                    //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                },
                goViewHome: function () {
                    require(['./Home/HomeCtrl'], function (p) {
                        new p.HomeCtrl().Show();
                    });
                },
                goViewBooking: function () {
                    require(['./Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    //this.appRoute.navigate("viewBooking");
                    //routes.navigate("viewBooking");
                },
                goPayment: function () {
                    //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
                },
                goStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().Show();
                    });
                },
                goViewStation: function () {
                    require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], function (p) {
                        new p.StationCtrl().GetAll();
                    });
                },
                goCancel: function () {
                    //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
                },
                goViewBusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().SimpleLoad();
                    });
                },
                gobusVisit: function () {
                    require(['./Bus/BusVisit/BusVisitCtrl'], function (p) {
                        new p.BusVisitCtrl().Load();
                    });
                },
                goEditBusVisit: function () {
                    //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
                },
                goAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().Show();
                    });
                },
                goViewAdminBus: function () {
                    require(['./Admin/Bus/BusCtrl'], function (p) {
                        new p.BusCtrl().GetAll();
                    });
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goAdminSearchBooking: function () {
                    require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], function (p) {
                        new p.AdminSearchBookingCtrl().Show();
                    });
                },
                goDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().Show();
                    });
                },
                goViewDriver: function () {
                    require(['./Admin/Driver/DriverCtrl'], function (p) {
                        new p.DriverCtrl().GetAll();
                    });
                },
                goGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().Show();
                    });
                },
                goViewGraveyard: function () {
                    require(['./Admin/Graveyard/GraveyardCtrl'], function (p) {
                        new p.GraveyardCtrl().GetAll();
                    });
                },
                goTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().Show();
                    });
                },
                goViewTown: function () {
                    require(['./Admin/Town/TownCtrl'], function (p) {
                        new p.TownCtrl().GetAll();
                    });
                },
                goUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().Show();
                    });
                },
                goViewUnionCouncil: function () {
                    require(['./Admin/UnionCouncil/UnionCouncilCtrl'], function (p) {
                        new p.UnionCouncilCtrl().GetAll();
                    });
                },
                goLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().Show();
                    });
                },
                goViewLandmark: function () {
                    require(['./Admin/Landmark/LandmarkCtrl'], function (p) {
                        new p.LandmarkCtrl().GetAll();
                    });
                },
                goPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().Show();
                    });
                },
                goViewPaymentType: function () {
                    require(['./Admin/PaymentType/PaymentTypeCtrl'], function (p) {
                        new p.PaymentTypeCtrl().GetAll();
                    });
                },
                goRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().Show();
                    });
                },
                goViewRefundType: function () {
                    require(['./Admin/RefundType/RefundTypeCtrl'], function (p) {
                        new p.RefundTypeCtrl().GetAll();
                    });
                },
                goVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().Show();
                    });
                },
                goViewVisitType: function () {
                    require(['./Admin/VisitType/VisitTypeCtrl'], function (p) {
                        new p.VisitTypeCtrl().GetAll();
                    });
                },
                goCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().Show();
                    });
                },
                goViewCauseOfDeath: function () {
                    require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], function (p) {
                        new p.CauseOfDeathCtrl().GetAll();
                    });
                },
                goViewTest: function () {
                    // new koBindingController.KoBindingCtrl().Show();
                },
                goTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().Show();
                    });
                },
                goViewTrackingDevice: function () {
                    require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], function (p) {
                        new p.TrackingDeviceCtrl().GetAll();
                    });
                },
                goNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().Show();
                    });
                },
                goViewNearestCentreSetup: function () {
                    require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], function (p) {
                        new p.NearestCentreSetupCtrl().GetAll();
                    });
                },
                goChangePassword: function () {
                    require(['./ChangePassword/ChangePasswordCtrl'], function (p) {
                        new p.ChangePasswordCtrl().Load();
                    });
                },
                goExtraCharge: function () {
                    //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
                },
                goDriverSummary: function () {
                    require(['./Admin/Reports/Driver/DriverSummaryCtrl'], function (p) {
                        new p.DriverSummaryCtrl().Show();
                    });
                },
                goBusVisitSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowVisit();
                    });
                },
                goBusVisitMilageSummary: function () {
                    require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], function (p) {
                        new p.BusVisitSummaryCtrl().ShowMilage();
                    });
                },
                goAuditBooking: function () {
                    require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], function (p) {
                        new p.AuditBookingCtrl().Show();
                    });
                },
                goAuditBusVisit: function () {
                    require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], function (p) {
                        new p.AuditBusVisitCtrl().Show();
                    });
                },
                goAuditPayment: function () {
                    require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], function (p) {
                        new p.AuditPaymentCtrl().Show();
                    });
                },
                goAuditRefundBooking: function () {
                    require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], function (p) {
                        new p.AuditRefundBookingCtrl().Show();
                    });
                },
                goBusCentreReport: function () {
                    require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], function (p) {
                        new p.BusCentreReportCtrl().Show();
                    });
                },
                goBusMilageReport: function () {
                    require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], function (p) {
                        new p.BusMilageCtrl().Show();
                    });
                },
                goBusFuelingReport: function () {
                    require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], function (p) {
                        new p.BusFuelingReportCtrl().Show();
                    });
                },
                goLogout: function () {
                    var appInstance = Application.getInstance();
                    appInstance.vent.trigger("Event-BackToLogin", false);
                },
                defaultRoute: function () {
                    self.ContainerRegion.reset();
                    self.ContainerRegion.show(layout);
                    require(['./Login/LoginCtrl'], function (p) {
                        new p.LoginCtrl().Load();
                    });
                }
            });

            //debugger;
            this.AppRoutes = new router();
        };

        Application.prototype.goViewBooking = function () {
            require(['./Booking/BookingCtrl'], function (p) {
                new p.BookingCtrl().GetAll(1);
            });
            this.AppRoutes.navigate("viewBooking");
        };

        Application.prototype.initalizeLocalStorage = function () {
            var deferred = $.Deferred();
            if (localStorage.getItem('lookupResponse') == null || localStorage.getItem('lookupResponse') == "undefined") {
                require(['./DAL/Lookup'], function (p) {
                    deferred = p.Load();
                    deferred.done(function (p) {
                        localStorage.setItem('lookupResponse', JSON.stringify(p));
                        require(['./Login/LoginCtrl'], function (p) {
                            new p.LoginCtrl().Load();
                        });
                    });
                    return deferred;
                });
            } else {
                require(['./Login/LoginCtrl'], function (p) {
                    new p.LoginCtrl().Load();
                });
            }
        };

        Application.prototype.initalizeLocalStorage1 = function () {
            if (localStorage.getItem('lookupResponse') != null) {
                localStorage.removeItem('lookupResponse');
            }
            require(['./DAL/Lookup'], function (p) {
                var deferred = p.Load();
                deferred.done(function (p) {
                    localStorage.setItem('lookupResponse', JSON.stringify(p));
                });
            });
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
        var rgnModalAlert = new modalHelper.ModalRegion({ el: '#ModalAlertPopup' });

        //var modal = new rgnModal({ el: '#ModalPopup' });
        //app.ModalRegion = modal;
        app.ModalRegion = rgnModal;
        app.ModalAlertRegion = rgnModalAlert;
    });
});
//aaa
//# sourceMappingURL=App.js.map
