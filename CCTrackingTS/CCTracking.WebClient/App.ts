﻿/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>


import adminLeft = require("../CCTracking.WebClient/Common/Views/AdminLeftView");
import modalHelper = require("./ModalHelper");
var datatablesBootstrap = require("datatablesBootstrap");

export class Application extends Marionette.Application {
    IsAdminRole: boolean;
    AppLayout: any;
    ContainerRegion: Marionette.Region;
    AppRoutes: Marionette.AppRouter;
    LoginRegion: Marionette.Region;
    HeaderRegion: Marionette.Region;
    LeftRegion: Marionette.Region;
    AdminLeftRegion: Marionette.Region;
    RightRegion: Marionette.Region;
    MainRegion: Marionette.Region;
    DetailRegion: Marionette.Region;
    ModalRegion: Marionette.Region;
    ModalAlertRegion: Marionette.Region;
    SubRegion: Marionette.Region;
    BusAvailabilityRegion: Marionette.Region;

    private static _instance: Application = null;

    constructor() {
        super();
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
                BusAvailabilityRegion: '#BusAvailabilityRegion',

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

    initializeAfter() {
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


    }

    applyRouting(self, layout) {

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
            goUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().Show(); });
            },
            goViewUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().GetAll(); });
            },
            goBus() {
                require(['./Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
            },
            goAddBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
            },
            goEditBooking() {
                //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
            },
            goViewHome() {
                require(['./Home/HomeCtrl'], (p) => { new p.HomeCtrl().Show(); });
            },
            goViewBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().GetAll(1); });
                //this.appRoute.navigate("viewBooking");
                //routes.navigate("viewBooking");
            },
            goPayment() {
                //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
            },
            goStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().Show(); });
            },
            goViewStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().GetAll(); });
            },
            goCancel() {
                //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
            },
            goViewBusVisit() {

                require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().SimpleLoad(); });
            },
            gobusVisit() {
                require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Load(); });
            },
            goEditBusVisit() {

                //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
            },
            goAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
            },
            goViewAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().GetAll(); });
            },
            goSearchBooking() {
                require(['./Search/SearchCtrl'], (p) => { new p.SearchCtrl().Show(); });
            },

            goAdminSearchBooking() {
                require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], (p) => { new p.AdminSearchBookingCtrl().Show(); });
            },
            goDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().Show(); });
            },
            goViewDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().GetAll(); });
            },
            goGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().Show(); });
            },
            goViewGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().GetAll(); });
            },
            goTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().Show(); });
            },
            goViewTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().GetAll(); });
            },
            goUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().Show(); });
            },
            goViewUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().GetAll(); });
            },
            goLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().Show(); });
            },
            goViewLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().GetAll(); });
            },
            goPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().Show(); });
            },
            goViewPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().GetAll(); });
            },
            goRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().Show(); });
            },
            goViewRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().GetAll(); });
            },
            goVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().Show(); });
            },
            goViewVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().GetAll(); });
            },
            goCauseOfDeath() {
                require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], (p) => { new p.CauseOfDeathCtrl().Show(); });
            },
            goViewCauseOfDeath() {
                require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], (p) => { new p.CauseOfDeathCtrl().GetAll(); });
            },
            goViewTest() {
                // new koBindingController.KoBindingCtrl().Show();
            },
            goTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().Show(); });
            },
            goViewTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().GetAll(); });
            },

            goNearestCentreSetup() {
                require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], (p) => { new p.NearestCentreSetupCtrl().Show(); });
            },
            goViewNearestCentreSetup() {
                require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], (p) => { new p.NearestCentreSetupCtrl().GetAll(); });
            },

            goChangePassword() {
                require(['./ChangePassword/ChangePasswordCtrl'], (p) => { new p.ChangePasswordCtrl().Load(); });
            },
            goExtraCharge() {
                //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
            },
            goDriverSummary() {
                require(['./Admin/Reports/Driver/DriverSummaryCtrl'], (p) => { new p.DriverSummaryCtrl().Show(); });
            },
            goBusVisitSummary() {
                require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], (p) => { new p.BusVisitSummaryCtrl().ShowVisit(); });
            },
            goBusVisitMilageSummary() {
                require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], (p) => { new p.BusVisitSummaryCtrl().ShowMilage(); });
            },
            goAuditBooking() {
                require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], (p) => { new p.AuditBookingCtrl().Show(); });
            },
            goAuditBusVisit() {
                require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], (p) => { new p.AuditBusVisitCtrl().Show(); });
            },
            goAuditPayment() {
                require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], (p) => { new p.AuditPaymentCtrl().Show(); });
            },
            goAuditRefundBooking() {
                require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], (p) => { new p.AuditRefundBookingCtrl().Show(); });
            },
            goBusCentreReport() {
                require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], (p) => { new p.BusCentreReportCtrl().Show(); });
            },
            goBusMilageReport() {
                require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], (p) => { new p.BusMilageCtrl().Show(); });
            },
            goBusFuelingReport() {
                require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], (p) => { new p.BusFuelingReportCtrl().Show(); });
            },
            goLogout() {
                var appInstance = Application.getInstance();
                appInstance.vent.trigger("Event-BackToLogin", false);
            },
            defaultRoute() {
                self.ContainerRegion.reset();
                self.ContainerRegion.show(layout);
                require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
            }
        });
        //debugger;
        this.AppRoutes = new router();

    }

    applyRoutingForOperator(self, layout) {

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
            goUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().Show(); });
            },
            goViewUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().GetAll(); });
            },
            goBus() {
                require(['./Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
            },
            goAddBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
            },
            goEditBooking() {
                //require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
            },
            goViewHome() {
                require(['./Home/HomeCtrl'], (p) => { new p.HomeCtrl().Show(); });
            },
            goViewBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().GetAll(1); });
                //this.appRoute.navigate("viewBooking");
                //routes.navigate("viewBooking");
            },
            goPayment() {
                //require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
            },
            goStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().Show(); });
            },
            goViewStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().GetAll(); });
            },
            goCancel() {
                //require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
            },
            goViewBusVisit() {

                require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().SimpleLoad(); });
            },
            gobusVisit() {
                require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Load(); });
            },
            goEditBusVisit() {

                //require(['./Bus/BusVisit/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
            },
            goAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
            },
            goViewAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().GetAll(); });
            },
            goSearchBooking() {
                require(['./Search/SearchCtrl'], (p) => { new p.SearchCtrl().Show(); });
            },

            goAdminSearchBooking() {
                require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], (p) => { new p.AdminSearchBookingCtrl().Show(); });
            },
            goDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().Show(); });
            },
            goViewDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().GetAll(); });
            },
            goGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().Show(); });
            },
            goViewGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().GetAll(); });
            },
            goTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().Show(); });
            },
            goViewTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().GetAll(); });
            },
            goUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().Show(); });
            },
            goViewUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().GetAll(); });
            },
            goLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().Show(); });
            },
            goViewLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().GetAll(); });
            },
            goPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().Show(); });
            },
            goViewPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().GetAll(); });
            },
            goRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().Show(); });
            },
            goViewRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().GetAll(); });
            },
            goVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().Show(); });
            },
            goViewVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().GetAll(); });
            },
            goCauseOfDeath() {
                require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], (p) => { new p.CauseOfDeathCtrl().Show(); });
            },
            goViewCauseOfDeath() {
                require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], (p) => { new p.CauseOfDeathCtrl().GetAll(); });
            },
            goViewTest() {
                // new koBindingController.KoBindingCtrl().Show();
            },
            goTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().Show(); });
            },
            goViewTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().GetAll(); });
            },

            goNearestCentreSetup() {
                require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], (p) => { new p.NearestCentreSetupCtrl().Show(); });
            },
            goViewNearestCentreSetup() {
                require(['./Admin/NearestCentreSetup/NearestCentreSetupCtrl'], (p) => { new p.NearestCentreSetupCtrl().GetAll(); });
            },

            goChangePassword() {
                require(['./ChangePassword/ChangePasswordCtrl'], (p) => { new p.ChangePasswordCtrl().Load(); });
            },
            goExtraCharge() {
                //require(['./ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().Show(); });
            },
            goDriverSummary() {
                require(['./Admin/Reports/Driver/DriverSummaryCtrl'], (p) => { new p.DriverSummaryCtrl().Show(); });
            },
            goBusVisitSummary() {
                require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], (p) => { new p.BusVisitSummaryCtrl().ShowVisit(); });
            },
            goBusVisitMilageSummary() {
                require(['./Admin/Reports/BusVisit/BusVisitSummaryCtrl'], (p) => { new p.BusVisitSummaryCtrl().ShowMilage(); });
            },
            goAuditBooking() {
                require(['./Admin/Reports/Audit/Booking/AuditBookingCtrl'], (p) => { new p.AuditBookingCtrl().Show(); });
            },
            goAuditBusVisit() {
                require(['./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl'], (p) => { new p.AuditBusVisitCtrl().Show(); });
            },
            goAuditPayment() {
                require(['./Admin/Reports/Audit/Payment/AuditPaymentCtrl'], (p) => { new p.AuditPaymentCtrl().Show(); });
            },
            goAuditRefundBooking() {
                require(['./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl'], (p) => { new p.AuditRefundBookingCtrl().Show(); });
            },
            goBusCentreReport() {
                require(['./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl'], (p) => { new p.BusCentreReportCtrl().Show(); });
            },
            goBusMilageReport() {
                require(['./Admin/Reports/Bus/BusMilage/BusMilageCtrl'], (p) => { new p.BusMilageCtrl().Show(); });
            },
            goBusFuelingReport() {
                require(['./Admin/Reports/BusFueling/BusFuelingReportCtrl'], (p) => { new p.BusFuelingReportCtrl().Show(); });
            },
            goLogout() {
            var appInstance = Application.getInstance();
                appInstance.vent.trigger("Event-BackToLogin", false);
            },
            defaultRoute() {
                self.ContainerRegion.reset();
                self.ContainerRegion.show(layout);
                require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
            }
        });
        //debugger;
        this.AppRoutes = new router();

    }

    goViewBooking() {
        require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().GetAll(1); });
        this.AppRoutes.navigate("viewBooking");
    }

    initalizeLocalStorage() {
        var deferred = $.Deferred();
        if (localStorage.getItem('lookupResponse') == null || localStorage.getItem('lookupResponse') == "undefined") {
            require(['./DAL/Lookup'], (p) => {
                deferred = p.Load();
                deferred.done(p => {
                        localStorage.setItem('lookupResponse', JSON.stringify(p));
                        require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
                    }
                );
                return deferred;
            });
        } else {
            require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
        }
    }

    initalizeLocalStorage1() {
        if (localStorage.getItem('lookupResponse') != null) {
            localStorage.removeItem('lookupResponse');
        }
        require(['./DAL/Lookup'], (p) => {
            var deferred = p.Load();
            deferred.done(p => {
                localStorage.setItem('lookupResponse', JSON.stringify(p));
            }
                );
        });
    }

    public static getInstance(): Application {

        if (Application._instance === null) {
            //alert("new instance");
            Application._instance = new Application();
        }
        return Application._instance;
    }
}

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
//aaa
