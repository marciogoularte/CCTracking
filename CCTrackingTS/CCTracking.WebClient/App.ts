/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>

//import menu = require("CCTracking.WebClient/Common/views/HeaderView");
//import summary = require("CCTracking.WebClient/Booking/views/BookingLeftView");
//import main = require("CCTracking.WebClient/Booking/views/BookingMainView");

//import login = require("../CCTracking.WebClient/Login/Views/LoginView");
//import loginController = require("./Login/LoginCtrl");
import adminLeft = require("../CCTracking.WebClient/Common/Views/AdminLeftView");
import modalHelper = require("./ModalHelper");
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

export class Application extends Marionette.Application {
    AppLayout: any;
    ContainerRegion: Marionette.Region;
    AppRoutes: Marionette.AppRouter;
    LoginRegion: Marionette.Region;
    HeaderRegion: Marionette.Region;
    LeftRegion: Marionette.Region;
    RightRegion: Marionette.Region;
    MainRegion: Marionette.Region;
    DetailRegion: Marionette.Region;
    ModalRegion: Marionette.Region;
    SubRegion: Marionette.Region;

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

    initializeAfter() {
        //console.log('Initalize after called..');

        //var loginView = new login.LoginItemView();
        var layout = this.AppLayout;
        this.ContainerRegion.show(layout);
        //var loginCtrl = new loginController.LoginCtrl();
        //loginCtrl.Load();
        require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
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
            goUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().Show(); });
                //new userController.UserCtrl().Show();
            },
            goViewUser() {
                require(['./User/UserCtrl'], (p) => { new p.UserCtrl().GetAll(); });
                //new userController.UserCtrl().GetAll();
            },
            goBus() {
                require(['./Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
                // new busController.BusCtrl().Show();
            },
            goAddBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                //new bookingController.BookingCtrl().Show();
            },
            goEditBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().Show(); });
                //new bookingController.BookingCtrl().Show();
            },
            goViewBooking() {
                require(['./Booking/BookingCtrl'], (p) => { new p.BookingCtrl().GetAll(1); });
                // new bookingController.BookingCtrl().GetAll(1);
            },
            goPayment() {
                require(['./Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().Show(); });
                //new paymentController.PaymentCtrl().Show();
            },
            goStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().Show(); });
                //new stationController.StationCtrl().Show();
            },
            goViewStation()
            {
                require(['./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl'], (p) => { new p.StationCtrl().GetAll(); });
                //new stationController.StationCtrl().GetAll();
            },
            goCancel() {
            require(['./RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().Show(); });
                // new refundBookingController.RefundBookingCtrl().Show();
            },
            goViewBusVisit() {
                require(['./Bus/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().SimpleLoad(); });
            },
            gobusVisit() {
                require(['./Bus/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
            },
            goEditBusVisit() {
                require(['./Bus/BusVisitCtrl'], (p) => { new p.BusVisitCtrl().Show(); });
            },
            goAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().Show(); });
                // new adminBusController.BusCtrl().Show();
            },
            goViewAdminBus() {
                require(['./Admin/Bus/BusCtrl'], (p) => { new p.BusCtrl().GetAll(); });
                // new adminBusController.BusCtrl().GetAll();
            },
            goSearchBooking() {
                require(['./Search/SearchCtrl'], (p) => { new p.SearchCtrl().Show(); });
            },

            goAdminSearchBooking() {
                require(['./Admin/AdminSearchBooking/AdminSearchBookingCtrl'], (p) => { new p.AdminSearchBookingCtrl().Show(); });
            },
            goDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().Show(); });
                //new driverController.DriverCtrl().Show();
            },
            goViewDriver() {
                require(['./Admin/Driver/DriverCtrl'], (p) => { new p.DriverCtrl().GetAll(); });
                //new driverController.DriverCtrl().GetAll();
            },
            goGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().Show(); });
                //new graveyardController.GraveyardCtrl().Show();
            },
            goViewGraveyard() {
                require(['./Admin/Graveyard/GraveyardCtrl'], (p) => { new p.GraveyardCtrl().GetAll(); });
                //new graveyardController.GraveyardCtrl().GetAll();
            },
            goTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().Show(); });
                //new townController.TownCtrl().Show();
            },
            goViewTown() {
                require(['./Admin/Town/TownCtrl'], (p) => { new p.TownCtrl().GetAll(); });
                //new townController.TownCtrl().GetAll();
            },
            goUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().Show(); });
                //new unionCouncilController.UnionCouncilCtrl().Show();
            },
            goViewUnionCouncil() {
                require(['./Admin/UnionCouncil/UnionCouncilCtrl'], (p) => { new p.UnionCouncilCtrl().GetAll(); });
                //new unionCouncilController.UnionCouncilCtrl().GetAll();
            },
            goLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().Show(); });
                //new landmarkController.LandmarkCtrl().Show();
            },
            goViewLandmark() {
                require(['./Admin/Landmark/LandmarkCtrl'], (p) => { new p.LandmarkCtrl().GetAll(); });
                //new landmarkController.LandmarkCtrl().GetAll();
            },
            goPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().Show(); });
                //new paymentTypeController.PaymentTypeCtrl().Show();
            },
            goViewPaymentType() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().GetAll(); });
                //new paymentTypeController.PaymentTypeCtrl().GetAll();
            },
            goRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().Show(); });
                //new refundTypeController.RefundTypeCtrl().Show();
            },
            goViewRefundType() {
                require(['./Admin/RefundType/RefundTypeCtrl'], (p) => { new p.RefundTypeCtrl().GetAll(); });
                //new refundTypeController.RefundTypeCtrl().GetAll();
            },
            goVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().Show(); });
                //new visitTypeController.VisitTypeCtrl().Show();
            },
            goViewVisitType() {
                require(['./Admin/VisitType/VisitTypeCtrl'], (p) => { new p.VisitTypeCtrl().GetAll(); });
                //new visitTypeController.VisitTypeCtrl().GetAll();
            },
            goCauseOfDeath() {
                require(['./Admin/PaymentType/PaymentTypeCtrl'], (p) => { new p.PaymentTypeCtrl().Show(); });
                //new causeOfDeathController.CauseOfDeathCtrl().Show();
            },
            goViewCauseOfDeath() {
                require(['./Admin/CauseOfDeath/CauseOfDeathCtrl'], (p) => { new p.PaymentTypeCtrl().GetAll(); });
                // new causeOfDeathController.CauseOfDeathCtrl().GetAll();
            },
            goViewTest() {
                // new koBindingController.KoBindingCtrl().Show();
            },
            goTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().Show(); });
                // new trackingDeviceController.TrackingDeviceCtrl().Show();
            },
            goViewTrackingDevice() {
                require(['./Admin/TrackingDevice/TrackingDeviceCtrl'], (p) => { new p.TrackingDeviceCtrl().GetAll(); });
                // new trackingDeviceController.TrackingDeviceCtrl().GetAll();
            },
            defaultRoute() {
                //layout.MainRegion.close();
                //layout.DetailRegion.close();
                self.ContainerRegion.reset();
                self.ContainerRegion.show(layout);
                // this.LoginRegion.show(loginView);
                //loginCtrl.Load();
                require(['./Login/LoginCtrl'], (p) => { new p.LoginCtrl().Load(); });
            }
        });
        this.AppRoutes = new routes();
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

    //var modal = new rgnModal({ el: '#ModalPopup' });    
    //app.ModalRegion = modal;

    app.ModalRegion = rgnModal;
});
//aaa
