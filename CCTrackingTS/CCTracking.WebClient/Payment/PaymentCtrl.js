﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./PaymentView", "CCTracking.WebClient/Dtos/PaymentDto", "../DAL/Payment", "marionette", "jquery", "knockout", "text!./PaymentTmpl.html"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./PaymentTmpl.html"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var app;

    var PaymentCtrl = (function (_super) {
        __extends(PaymentCtrl, _super);
        function PaymentCtrl() {
            var _this = this;
            app = application.Application.getInstance();
            _super.call(this);
            this.busVisitCollection = [];

            //this.busVisitCollection.push({ busVisitId:3,  centreId: 'center-a', busId: 'bus-a', driverId: 'driver-a' });
            this.backboneCollection = new Backbone.Collection(this.busVisitCollection);
            this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
            this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", function (currentView, busId, centreId, driverId) {
                return _this.RemoveBusVisitItem(busId, centreId, driverId);
            });

            //this.paymentViewModel = new views.PaymentViewModel(new Backbone.Model(), this);
            this.idCounter = 1;
        }
        PaymentCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;

            //update payment
            if (url.indexOf("id=") > -1) {
                //alert(url.substring(url.indexOf("id=") + 3, url.length));
                var id = (url.substring(url.indexOf("id=") + 3, url.length));
                var deferred = DAL.GetById(id);
                deferred.done(function (p) {
                    return _this.GetByIdCompleted(p);
                });
            } else {
                this.LoadCompleted();
            }
        };

        PaymentCtrl.prototype.GetByIdCompleted = function (paymentResponse) {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = new Backbone.Model(paymentResponse["paymentModel"]);

            //this.paymentViewModel.model= kb.viewModel(model);
            //booking id
            var url = window.location.href;
            var id = (url.substring(url.indexOf("id=") + 3, url.length));
            if (model.get("id") === undefined || model.get("id") === 0) {
                this.InitalizeKoBinding(model);
            }
            model.set("bookingId", id);
            model.set("busList", lookupResponse.bus);
            model.set("driverList", lookupResponse.driver);
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("paymentLocationList", lookupResponse.alkhidmatCentre);
            model.set("paymentTypeList", lookupResponse.paymentType);
            model.set("cashierList", lookupResponse.cashier);

            model.set("busSelected", "");
            model.set("driverSelected", "");
            model.set("alkhidmatCentreSelected", "");
            model.set("isCash", false);

            //debugger;
            //model.set("causeOfDeathList", lookupResponse.causeOfDeath);
            var paymentLocation = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                return p.id == model.get("paymentLocation");
            });
            model.set("paymentLocationSelected", paymentLocation[0]);

            var paymentType = _.filter(lookupResponse.paymentType, function (p) {
                return p.id == model.get("paymentType");
            });
            model.set("paymentTypeSelected", paymentType[0]);

            var cashier = _.filter(lookupResponse.cashier, function (p) {
                return p.id == model.get("officerId");
            });
            model.set("cashierSelected", cashier[0]);

            //var centre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("centreId") });
            //model.set("alkhidmatCentreSelected", centre[0]);
            //var driver = _.filter(lookupResponse.driver, (p) => { return p.id == model.get("driverId") });
            //model.set("driverSelected", driver[0]);
            //var bus = _.filter(lookupResponse.bus, (p) => { return p.id == model.get("budId") });
            //model.set("busSelected", bus[0]);
            //if (model.get("paymentTypeSelected").id == 1)
            //    model.set("isCash", true);
            //else {
            //    model.set("isCash", false);
            //}
            //debugger;
            //var vm = kb.viewModel(model);
            //vm.isCash = ko.computed(() => {
            //    if (vm.paymentType() == 1) {
            //        return true;
            //    } else {
            //        return false;
            //    }
            //}, vm);
            this.layout = app.AppLayout;
            this.paymentViewModel = new views.PaymentViewModel(model, this);
            this.paymentView = new views.PaymentView({ viewModel: this.paymentViewModel });
            this.paymentView.on("BusVisitAddItem", function (bookingId, alkhidmatCentre, driver, bus) {
                return _this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus);
            });
            this.paymentView.on("PaymentSave", function (bbmodel) {
                return _this.Save(bbmodel);
            });

            this.backboneCollection = new Backbone.Collection(model.get("busVisits"));
            this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
            this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", function (currentView, busId, centreId, driverId) {
                return _this.RemoveBusVisitItem(busId, centreId, driverId);
            });

            app.MainRegion.show(this.paymentView);

            app.SubRegion.reset();
            app.SubRegion.show(this.busVisitCollectionView);
            //var trnNo = $('#txtEasyPaisaTranNo')[0];
            //ko.cleanNode(trnNo);
            //ko.applyBindings(vm, trnNo);
            //ko.clear();
            //ko.applyBindings(vm);
            //var b = vm;
        };

        //GetBusDesc(lookupResponse, id) {
        //    var item = _.filter(lookupResponse.bus, (p) => { return p.id == id });
        //    return item[0].description;
        //}
        //GetDriverDesc(lookupResponse, id) {
        //    var item = _.filter(lookupResponse.driver, (p) => { return p.id == id });
        //    return item[0].description;
        //}
        //GetCentreDesc(lookupResponse, id) {
        //    var item = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == id });
        //    return item[0].description;
        //}
        PaymentCtrl.prototype.InitalizeKoBinding = function (model) {
            model.set("amount", "");
            model.set("busChangeReason", "");
            model.set("receiptNo", "");
            model.set("easyPaisaTranNo", "");
            model.set("extraAmountCharge", "");
            model.set("extraAmountReason", "");
            model.set("extraAmountReceipt", "");
        };

        PaymentCtrl.prototype.LoadCompleted = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = new dto.Models.PaymentResponse();

            //var a = _.filter(lookupResponse.unionCouncil, (p)=> { return p.id==1});
            model.set("bookingId", "");
            model.set("paymentType", "");
            model.set("pricing", "");
            model.set("amount", "");
            model.set("paymentLocation", "");
            model.set("officerId", "");

            model.set("receiptNo", "");
            model.set("extraAmountCharge", "");

            model.set("extraAmountReason", "");
            model.set("extraAmountReceipt", "");
            model.set("paymentStatus", "");

            //helper.SubscribeApplicationEventListener();
            model.set("busList", lookupResponse.bus);
            model.set("busSelected", "");
            model.set("driverList", lookupResponse.driver);
            model.set("driverSelected", "");
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("alkhidmatCentreSelected", "");

            model.set("paymentLocationList", lookupResponse.alkhidmatCentre);
            model.set("paymentLocationSelected", "");
            model.set("cashierList", lookupResponse.cashier);
            model.set("cashierSelected", "");
            model.set("paymentTypeList", lookupResponse.paymentType);
            model.set("paymentTypeSelected", "");

            this.layout = app.AppLayout;
            this.paymentViewModel = new views.PaymentViewModel(model, this);
            this.paymentView = new views.PaymentView({ viewModel: this.paymentViewModel });
            this.paymentView.on("BusVisitAddItem", function (bookingId, alkhidmatCentre, driver, bus) {
                return _this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus);
            });
            this.paymentView.on("PaymentSave", function (bbmodel) {
                return _this.Save(bbmodel);
            });
            app.MainRegion.show(this.paymentView);
            app.SubRegion.reset();
            app.SubRegion.show(this.busVisitCollectionView);
        };

        PaymentCtrl.prototype.AddBusVisitItem = function (bookingId, alkhidmatCentre, driver, bus) {
            var counter = this.idCounter++;
            var busExist = this.backboneCollection.findWhere({ busId: bus.id });
            var driverExist = this.backboneCollection.findWhere({ driverId: driver.id });

            //var alreadyExist = this.backboneCollection.findWhere({ centreId: alkhidmatCentre.id, busId: bus.id, driverId: driver.id });
            //var alreadyExist = _.filter(this.backboneCollection, (item) => {
            //    debugger;
            //    return (item.busId == bus.id || item.driverId == driver.id);
            //});
            if (busExist == undefined && driverExist == undefined) {
                this.backboneCollection.push(new Backbone.Model({
                    busVisitId: counter,
                    centreId: alkhidmatCentre.id, centreDesc: alkhidmatCentre.description,
                    busId: bus.id, busDesc: bus.description,
                    driverId: driver.id, driverDesc: driver.description,
                    visitTypeId: "2",
                    isAvailableForBooking: false,
                    isAvailableForFutureBooking: false,
                    bookingId: bookingId
                }));
                this.busVisitCollectionView.collection = this.backboneCollection;
            } else {
                alert("Already exists!");
            }
        };
        PaymentCtrl.prototype.RemoveBusVisitItem = function (busId, centreId, driverId) {
            this.backboneCollection.remove(this.backboneCollection.findWhere({ busId: busId, centreId: centreId, driverId: driverId }));
        };

        //GetAll() {
        //    var deferred = DAL.GetAll();
        //    deferred.done(p=> new views.PaymentView().GetAllCompleted(p));
        //}
        //Add(booking: dto.Models.BookingRequest) {
        PaymentCtrl.prototype.Save = function (payment) {
            //reset actual id - match with DAL object's properties
            if (this.backboneCollection.length < 1) {
                alert("Please add bus details");
                return;
            }
            payment.set("bus", payment.get("busSelected").id);
            payment.set("driver", payment.get("driverSelected").id);
            payment.set("alkhidmatCentre", payment.get("alkhidmatCentreSelected").id);
            payment.set("paymentLocation", payment.get("paymentLocationSelected").id);
            payment.set("officerId", payment.get("cashierSelected").id);
            payment.set("paymentType", payment.get("paymentTypeSelected").id);

            payment.set("busVisits", this.backboneCollection.toJSON());
            var deferred = DAL.Save(payment);

            //TODO: call controller from here...
            deferred.done(function (p) {
                return new views.PaymentView().SaveCompleted(p);
            });
        };
        return PaymentCtrl;
    })(helper.Controller);
    exports.PaymentCtrl = PaymentCtrl;
});
//# sourceMappingURL=PaymentCtrl.js.map
