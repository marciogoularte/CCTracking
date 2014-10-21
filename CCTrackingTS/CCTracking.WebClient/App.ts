/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>

//import menu = require("CCTracking.WebClient/Common/views/HeaderView");
//import summary = require("CCTracking.WebClient/Booking/views/BookingLeftView");
//import main = require("CCTracking.WebClient/Booking/views/BookingMainView");

//import login = require("../CCTracking.WebClient/Login/Views/LoginView");
import loginController = require("./Login/LoginCtrl");
import adminLeft = require("../CCTracking.WebClient/Common/Views/AdminLeftView");
import modalHelper = require("./ModalHelper");
import busController = require("./Bus/BusCtrl");
import userController = require("./User/UserCtrl");
import bookingController = require("./Booking/BookingCtrl");
import paymentController = require("./Payment/PaymentCtrl");
import stationController = require("./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl");
import refundBookingController = require("./RefundBooking/RefundBookingCtrl");
//import busVisitController = require("./Bus/BusVisitCtrl");
import adminBusController = require("./Admin/Bus/BusCtrl");
//import searchController = require("./Search/SearchCtrl");

import driverController = require("./Admin/Driver/DriverCtrl");
import graveyardController = require("./Admin/Graveyard/GraveyardCtrl");
import townController = require("./Admin/Town/TownCtrl");
import unionCouncilController = require("./Admin/UnionCouncil/UnionCouncilCtrl");
import landmarkController = require("./Admin/Landmark/LandmarkCtrl");
import paymentTypeController = require("./Admin/PaymentType/PaymentTypeCtrl");
import refundTypeController = require("./Admin/RefundType/RefundTypeCtrl");
import visitTypeController = require("./Admin/VisitType/VisitTypeCtrl");
import causeOfDeathController = require("./Admin/CauseOfDeath/CauseOfDeathCtrl");
import trackingDeviceController = require("./Admin/TrackingDevice/TrackingDeviceCtrl");
import koBindingController = require("./Tests/KoBindingCtrl");





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
        var loginCtrl = new loginController.LoginCtrl();
        loginCtrl.Load();
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
                new userController.UserCtrl().Show();
            },
            goViewUser() {
                new userController.UserCtrl().GetAll();
            },
            goBus() {
                new busController.BusCtrl().Show();
            },
            goAddBooking() {
                new bookingController.BookingCtrl().Show();
            },
            goEditBooking() {
                new bookingController.BookingCtrl().Show();
            },
            goViewBooking() {
                new bookingController.BookingCtrl().GetAll();
            },
            goPayment() {
                new paymentController.PaymentCtrl().Show();
            },
            goStation()
            {
                new stationController.StationCtrl().Show();
            },
            goViewStation()
            {
                new stationController.StationCtrl().GetAll();
            },
            goCancel() {
                new refundBookingController.CancelBookingCtrl().Show();
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
                new adminBusController.BusCtrl().Show();
            },
            goViewAdminBus() {
                new adminBusController.BusCtrl().GetAll();
            },
            goSearchBooking() {
                require(['./Search/SearchCtrl'], (p) => { new p.SearchCtrl().Show(); });
            },
            goDriver() {
                new driverController.DriverCtrl().Show();
            },
            goViewDriver() {
                new driverController.DriverCtrl().GetAll();
            },
            goGraveyard() {
                new graveyardController.GraveyardCtrl().Show();
            },
            goViewGraveyard() {
                new graveyardController.GraveyardCtrl().GetAll();
            },
            goTown() {
                new townController.TownCtrl().Show();
            },
            goViewTown() {
                new townController.TownCtrl().GetAll();
            },
            goUnionCouncil() {
                new unionCouncilController.UnionCouncilCtrl().Show();
            },
            goViewUnionCouncil() {
                new unionCouncilController.UnionCouncilCtrl().GetAll();
            },
            goLandmark() {
                new landmarkController.LandmarkCtrl().Show();
            },
            goViewLandmark() {
                new landmarkController.LandmarkCtrl().GetAll();
            },
            goPaymentType() {
                new paymentTypeController.PaymentTypeCtrl().Show();
            },
            goViewPaymentType() {
                new paymentTypeController.PaymentTypeCtrl().GetAll();
            },
            goRefundType() {
                new refundTypeController.RefundTypeCtrl().Show();
            },
            goViewRefundType() {
                new refundTypeController.RefundTypeCtrl().GetAll();
            },
            goVisitType() {
                new visitTypeController.VisitTypeCtrl().Show();
            },
            goViewVisitType() {
                new visitTypeController.VisitTypeCtrl().GetAll();
            },
            goCauseOfDeath() {
                new causeOfDeathController.CauseOfDeathCtrl().Show();
            },
            goViewCauseOfDeath() {
                new causeOfDeathController.CauseOfDeathCtrl().GetAll();
            },
            goViewTest() {
            new koBindingController.KoBindingCtrl().Show();
            },
            goTrackingDevice() {
                new trackingDeviceController.TrackingDeviceCtrl().Show();
            },
            goViewTrackingDevice() {
                new trackingDeviceController.TrackingDeviceCtrl().GetAll();
            },
            defaultRoute() {
                //layout.MainRegion.close();
                //layout.DetailRegion.close();
                self.ContainerRegion.reset();
                self.ContainerRegion.show(layout);
                // this.LoginRegion.show(loginView);
                loginCtrl.Load();
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
