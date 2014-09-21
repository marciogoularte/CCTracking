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
define(["require", "exports", "../CCTracking.WebClient/Login/Views/LoginView", "./ModalHelper", "./Bus/BusCtrl", "./User/UserCtrl", "./Booking/BookingCtrl", "./Payment/PaymentCtrl", "./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl", "./RefundBooking/RefundBookingCtrl", "./Admin/Bus/BusCtrl", "./Admin/Driver/DriverCtrl", "./Admin/Graveyard/GraveyardCtrl", "./Admin/Town/TownCtrl", "./Admin/UnionCouncil/UnionCouncilCtrl", "./Admin/Landmark/LandmarkCtrl", "./Admin/PaymentType/PaymentTypeCtrl", "./Admin/RefundType/RefundTypeCtrl", "./Admin/VisitType/VisitTypeCtrl", "./Admin/CauseOfDeath/CauseOfDeathCtrl", "./Admin/TrackingDevice/TrackingDeviceCtrl", "marionette", "datatablesBootstrap"], function(require, exports, login, modalHelper, busController, userController, bookingController, paymentController, stationController, refundBookingController, adminBusController, driverController, graveyardController, townController, unionCouncilController, landmarkController, paymentTypeController, refundTypeController, visitTypeController, causeOfDeathController, trackingDeviceController) {
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
                    'trackingDevice': 'goTrackingDevice',
                    'viewTrackingDevice': 'goViewTrackingDevice',
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
                    new adminBusController.BusCtrl().Show();
                },
                goViewAdminBus: function () {
                    new adminBusController.BusCtrl().GetAll();
                },
                goSearchBooking: function () {
                    require(['./Search/SearchCtrl'], function (p) {
                        new p.SearchCtrl().Show();
                    });
                },
                goDriver: function () {
                    new driverController.DriverCtrl().Show();
                },
                goViewDriver: function () {
                    new driverController.DriverCtrl().GetAll();
                },
                goGraveyard: function () {
                    new graveyardController.GraveyardCtrl().Show();
                },
                goViewGraveyard: function () {
                    new graveyardController.GraveyardCtrl().GetAll();
                },
                goTown: function () {
                    new townController.TownCtrl().Show();
                },
                goViewTown: function () {
                    new townController.TownCtrl().GetAll();
                },
                goUnionCouncil: function () {
                    new unionCouncilController.UnionCouncilCtrl().Show();
                },
                goViewUnionCouncil: function () {
                    new unionCouncilController.UnionCouncilCtrl().GetAll();
                },
                goLandmark: function () {
                    new landmarkController.LandmarkCtrl().Show();
                },
                goViewLandmark: function () {
                    new landmarkController.LandmarkCtrl().GetAll();
                },
                goPaymentType: function () {
                    new paymentTypeController.PaymentTypeCtrl().Show();
                },
                goViewPaymentType: function () {
                    new paymentTypeController.PaymentTypeCtrl().GetAll();
                },
                goRefundType: function () {
                    new refundTypeController.RefundTypeCtrl().Show();
                },
                goViewRefundType: function () {
                    new refundTypeController.RefundTypeCtrl().GetAll();
                },
                goVisitType: function () {
                    new visitTypeController.VisitTypeCtrl().Show();
                },
                goViewVisitType: function () {
                    new visitTypeController.VisitTypeCtrl().GetAll();
                },
                goCauseOfDeath: function () {
                    new causeOfDeathController.CauseOfDeathCtrl().Show();
                },
                goViewCauseOfDeath: function () {
                    new causeOfDeathController.CauseOfDeathCtrl().GetAll();
                },
                goTrackingDevice: function () {
                    new trackingDeviceController.TrackingDeviceCtrl().Show();
                },
                goViewTrackingDevice: function () {
                    new trackingDeviceController.TrackingDeviceCtrl().GetAll();
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
