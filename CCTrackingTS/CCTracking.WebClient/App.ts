/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="datatablesBootstrap"/>

//import menu = require("CCTracking.WebClient/Common/views/HeaderView");
//import summary = require("CCTracking.WebClient/Booking/views/BookingLeftView");
//import main = require("CCTracking.WebClient/Booking/views/BookingMainView");

import login = require("../CCTracking.WebClient/Login/Views/LoginView");
import adminLeft = require("../CCTracking.WebClient/Common/Views/AdminLeftView");
import modalHelper = require("./ModalHelper");
import busController = require("./Bus/BusCtrl");
import userController = require("./User/UserCtrl");
import bookingController = require("./Booking/BookingCtrl");
import paymentController = require("./Payment/PaymentCtrl");
import stationController = require("./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl");
import refundBookingController = require("./RefundBooking/RefundBookingCtrl");
import busVisitController = require("./Bus/BusVisitCtrl");
import adminBusController = require("./Admin/Bus/BusCtrl");

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
                'editBusVisit': 'goEditBusVisit',
                'viewBusVisit': 'goViewBusVisit',
                'adminBus': 'goAdminBus',
                'viewAdminBus': 'goViewAdminBus',
                '*other': 'defaultRoute'
            },
            goUser() {
                new userController.UserCtrl().Show();
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
                new busVisitController.BusVisitCtrl().SimpleLoad();
            },
            gobusVisit() {
                new busVisitController.BusVisitCtrl().Show();
            },
            goEditBusVisit() {
                new busVisitController.BusVisitCtrl().Show();
            },
            goAdminBus(){
                new adminBusController.BusCtrl().Show();
            },
            goViewAdminBus() {
                new adminBusController.BusCtrl().GetAll();
            },
            defaultRoute() {
                //layout.MainRegion.close();
                //layout.DetailRegion.close();
                self.ContainerRegion.reset();
                self.ContainerRegion.show(layout);
                this.LoginRegion.show(loginView);
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
