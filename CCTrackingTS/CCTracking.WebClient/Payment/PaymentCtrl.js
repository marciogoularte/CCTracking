/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./PaymentView", "CCTracking.WebClient/Dtos/BusVisitDto", "../DAL/Payment", "marionette", "jquery", "knockout", "text!./PaymentTmpl.html"], function(require, exports, application, helper, views, busVisitDto, DAL) {
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

            //this.busVisitCollection = [
            //    //{ busVisitId: 1, centreId: 'center-b', busId: 'bus-b', driverId: 'driver-b' },
            //    //{ busVisitId: 2, centreId: 'center-c', busId: 'bus-c', driverId: 'driver-c' }
            //];
            this.backboneCollection = new busVisitDto.Models.BusVisitCollection();

            //this.busVisitCollection.push({ busVisitId:3,  centreId: 'center-a', busId: 'bus-a', driverId: 'driver-a' });
            this.backboneCollection = this.busVisitCollection;
            this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
            this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", function (currentView, busId, centreId, driverId) {
                return _this.RemoveBusVisitItem(busId, centreId, driverId);
            });
            this.busVisitCollectionView.on("itemview:UpdateBusVisitItem", function (currentView, model) {
                return _this.UpdateBusVisitItem(model);
            });

            //this.paymentViewModel = new views.PaymentViewModel(new Backbone.Model(), this);
            this.idCounter = 1;
        }
        PaymentCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;
            var id = "0";

            //update payment
            if (url.indexOf("id=") > -1) {
                //alert(url.substring(url.indexOf("id=") + 3, url.length));
                id = (url.substring(url.indexOf("id=") + 3, url.length));
            }
            var deferredBusAvailability = DAL.GetBusAvialability(id);
            deferredBusAvailability.done(function (p) {
                _this.FillBusAvailability(p, id);
            });
            //add payment
            //else {
            //    var deferredBusAvailability = DAL.GetBusAvialability(0);
            //    deferredBusAvailability.done(p => {
            //        this.LoadCompleted();
            //    });
            //}
        };

        PaymentCtrl.prototype.FillBusAvailability = function (busList, id) {
            var _this = this;
            var busAvailability = busList["busAvailabilityList"];
            if (id > 0) {
                var deferred = DAL.GetById(id);
                deferred.done(function (p) {
                    return _this.GetByIdCompleted(p, busAvailability);
                });
            } else {
                this.LoadCompleted(busAvailability);
            }
        };

        //GetByIdCompleted(paymentResponse: dto.Models.PaymentResponse) {
        PaymentCtrl.prototype.GetByIdCompleted = function (paymentResponse, busList) {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = new Backbone.Model(paymentResponse["paymentModel"]);

            //booking id
            var url = window.location.href;
            var id = (url.substring(url.indexOf("id=") + 3, url.length));
            if (model.get("id") === undefined || model.get("id") === 0) {
                this.InitalizeKoBinding(model);
            }

            model.set("bookingId", id);
            this.layout = app.AppLayout;
            this.paymentView = new views.PaymentView(busList, model);
            var vm = this.paymentView.viewModel;

            this.paymentView.on("BusVisitAddItem", function (bookingId, alkhidmatCentre, driver, bus, fuelAmount) {
                return _this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount);
            });
            this.paymentView.on("BusVisitUpdateItem", function (bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) {
                return _this.ModifyBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason);
            });
            this.paymentView.on("PaymentSave", function (bbmodel) {
                return _this.Save(bbmodel);
            });

            this.backboneCollection = new Backbone.Collection(model.get("busVisits"));
            this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
            this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", function (currentView, busId, centreId, driverId) {
                return _this.RemoveBusVisitItem(busId, centreId, driverId);
            });
            this.busVisitCollectionView.on("itemview:UpdateBusVisitItem", function (currentView, model) {
                return _this.UpdateBusVisitItem(model);
            });

            app.MainRegion.show(this.paymentView);
            app.SubRegion.reset();
            app.SubRegion.show(this.busVisitCollectionView);
        };

        PaymentCtrl.prototype.InitalizeKoBinding = function (model) {
            model.set("amount", "");
            model.set("busChangeReason", "");
            model.set("receiptNo", "");
            model.set("easyPaisaTranNo", "");
            model.set("extraAmountCharge", "");
            model.set("extraAmountReason", "");
            model.set("extraAmountReceipt", "");
        };

        PaymentCtrl.prototype.LoadCompleted = function (busList) {
            var _this = this;
            this.layout = app.AppLayout;
            this.paymentView = new views.PaymentView(busList);

            this.paymentView.on("BusVisitAddItem", function (bookingId, alkhidmatCentre, driver, bus, fuelAmount) {
                return _this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount);
            });
            this.paymentView.on("BusVisitUpdateItem", function (bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) {
                return _this.ModifyBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason);
            });
            this.paymentView.on("PaymentSave", function (bbmodel) {
                return _this.Save(bbmodel);
            });
            app.MainRegion.show(this.paymentView);
            app.SubRegion.reset();
            app.SubRegion.show(this.busVisitCollectionView);
        };

        //LoadCompleted1() {
        //    var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'))
        //    var model = new dto.Models.PaymentResponse();
        //    //var a = _.filter(lookupResponse.unionCouncil, (p)=> { return p.id==1});
        //    model.set("bookingId", "");
        //    model.set("paymentType", "");
        //    model.set("pricing", "");
        //    model.set("amount", "");
        //    model.set("paymentLocation", "");
        //    model.set("officerId", "");
        //    model.set("receiptNo","");
        //    model.set("extraAmountCharge", "");
        //    model.set("extraAmountReason", "");
        //    model.set("extraAmountReceipt", "");
        //    model.set("paymentStatus", "");
        //    //helper.SubscribeApplicationEventListener();
        //    model.set("busList", lookupResponse.bus);
        //    model.set("busSelected", "");
        //    model.set("driverList", lookupResponse.driver);
        //    model.set("driverSelected", "");
        //    model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        //    model.set("alkhidmatCentreSelected", "");
        //    model.set("paymentLocationList", lookupResponse.alkhidmatCentre);
        //    model.set("paymentLocationSelected", "");
        //    model.set("cashierList", lookupResponse.cashier);
        //    model.set("cashierSelected", "");
        //    model.set("paymentTypeList", lookupResponse.paymentType);
        //    model.set("paymentTypeSelected", "");
        //    this.layout = app.AppLayout;
        //    this.paymentViewModel = new views.PaymentViewModel(model, this);
        //    this.paymentView = new views.PaymentView({ viewModel: this.paymentViewModel });
        //    this.paymentView.on("BusVisitAddItem", (bookingId, alkhidmatCentre, driver, bus) => this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus));
        //    this.paymentView.on("PaymentSave", (bbmodel) => this.Save(bbmodel));
        //    app.MainRegion.show(this.paymentView);
        //    app.SubRegion.reset();
        //    app.SubRegion.show(this.busVisitCollectionView);
        //}
        PaymentCtrl.prototype.AddBusVisitItem = function (bookingId, alkhidmatCentre, driver, bus, fuelAmount) {
            if (fuelAmount == "" || fuelAmount == undefined || fuelAmount === 0) {
                helper.ShowModalPopup("danger", "Bus Info", "Please enter valid amount!");
                return;
            }
            var counter = this.idCounter++;
            var busExist = this.backboneCollection.findWhere({ busId: bus.id });
            var driverExist = this.backboneCollection.findWhere({ driverId: driver.id });

            if (busExist == undefined && driverExist == undefined) {
                this.backboneCollection.push(new busVisitDto.Models.BusVisitDto({
                    busVisitId: counter,
                    centreId: alkhidmatCentre.id, centreDesc: alkhidmatCentre.description,
                    busId: bus.id, busDesc: bus.description,
                    driverId: driver.id, driverDesc: driver.description,
                    visitTypeId: "2",
                    //isAvailableForBooking: false,
                    //isAvailableForFutureBooking: false,
                    bookingId: bookingId,
                    fuelAmount: fuelAmount
                }));

                this.busVisitCollectionView.collection = this.backboneCollection;

                var sum = _.reduce(this.backboneCollection.models, function (memo, item) {
                    return memo + parseFloat(item.get("fuelAmount"));
                }, 0);
                this.paymentView.viewModel.amount(sum);
            } else {
                helper.ShowModalPopup("danger", "Bus Info", "Entry already exists!");
            }
        };

        PaymentCtrl.prototype.ModifyBusVisitItem = function (bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) {
            if (fuelAmount == "" || fuelAmount == undefined || fuelAmount === 0) {
                helper.ShowModalPopup("danger", "Bus Info", "Please enter valid amount!");
                return;
            }
            if (busChangeReason == "" || busChangeReason == undefined) {
                helper.ShowModalPopup("danger", "Bus Info", "Please enter reason for bus change!");
                return;
            }
            var counter = this.idCounter++;
            var busExist = this.backboneCollection.findWhere({ busId: bus.id });
            var driverExist = this.backboneCollection.findWhere({ driverId: driver.id });

            if (busExist != undefined && driverExist != undefined) {
                //this.backboneCollection["set"](new busVisitDto.Models.BusVisitDto({
                //    busVisitId: counter,
                //    centreId: alkhidmatCentre.id, centreDesc: alkhidmatCentre.description,
                //    busId: bus.id, busDesc: bus.description,
                //    driverId: driver.id, driverDesc: driver.description,
                //    visitTypeId: "2",
                //    //isAvailableForBooking: false,
                //    //isAvailableForFutureBooking: false,
                //    bookingId: bookingId,
                //    fuelAmount: fuelAmount
                //}));
                var arr = _.map(this.backboneCollection.models, function (item) {
                    if (item.get("busId") == bus.id && item.get("driverId") == driver.id) {
                        item.set("centreId", alkhidmatCentre.id);
                        item.set("centreDesc", alkhidmatCentre.description);
                        item.set("busId", bus.id);
                        item.set("busDesc", bus.description);
                        item.set("driverId", driver.id);
                        item.set("driverDesc", driver.description);
                        item.set("visitTypeId", "2");

                        //isAvailableForBooking: false,
                        //isAvailableForFutureBooking: false,
                        item.set("bookingId", bookingId);
                        item.set("fuelAmount", fuelAmount);
                        item.set("busChangeReason", busChangeReason);
                    }
                    return item;
                });

                //this.busVisitCollectionView.collection = this.backboneCollection;
                this.backboneCollection.reset(arr);
                this.busVisitCollectionView.collection = this.backboneCollection;

                var sum = _.reduce(this.backboneCollection.models, function (memo, item) {
                    return memo + parseFloat(item.get("fuelAmount"));
                }, 0);
                this.paymentView.viewModel.amount(sum);
            } else {
                helper.ShowModalPopup("danger", "Bus Info", "You cannot modify centre & bus info");
            }
            var currentView = this.paymentView.$el;
            currentView.find("#ddlCentre").prop("disabled", false);
            currentView.find("#ddlBusDetails").prop("disabled", false);
            currentView.find("#lnkAdd").show();
            currentView.find("#lnkUpdate").hide();
        };
        PaymentCtrl.prototype.RemoveBusVisitItem = function (busId, centreId, driverId) {
            this.backboneCollection.remove(this.backboneCollection.findWhere({ busId: busId, centreId: centreId, driverId: driverId }));
            var sum = _.reduce(this.backboneCollection.models, function (memo, item) {
                return memo + parseFloat(item.get("fuelAmount"));
            }, 0);
            this.paymentView.viewModel.amount(sum);
        };

        PaymentCtrl.prototype.UpdateBusVisitItem = function (model) {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            //debugger;
            //var centre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("centreId"); });
            var selectedCentre = this.paymentView.viewModel.alkhidmatCentreList();
            var selectedDriver = this.paymentView.viewModel.driverList();
            var selectedBus = this.paymentView.viewModel.busList();
            var centre = _.filter(selectedCentre, function (p) {
                return p.id == model.get("centreId");
            });
            var driver = _.filter(selectedDriver, function (p) {
                return p.id == model.get("driverId");
            });
            var bus = _.filter(selectedBus, function (p) {
                return p.id == model.get("busId");
            });

            //var a = this.paymentView.viewModel.alkhidmatCentreSelected().id;
            this.paymentView.viewModel.fuelAmount(model.get("fuelAmount"));
            this.paymentView.viewModel.busChangeReason(model.get("busChangeReason"));
            this.paymentView.viewModel.alkhidmatCentreSelected(centre[0]);
            this.paymentView.viewModel.driverSelected(driver[0]);
            this.paymentView.viewModel.busSelected(bus[0]);
            var currentView = this.paymentView.$el;
            currentView.find("#ddlCentre").prop("disabled", true);
            currentView.find("#ddlBusDetails").prop("disabled", true);
            currentView.find("#lnkAdd").hide();
            currentView.find("#lnkUpdate").show();
            //this.paymentView.viewModel.alkhidmatCentreSelected(this.paymentView.viewModel.alkhidmatCentreList()[3]);
        };

        //GetAll() {
        //    var deferred = DAL.GetAll();
        //    deferred.done(p=> new views.PaymentView().GetAllCompleted(p));
        //}
        //Add(booking: dto.Models.BookingRequest) {
        PaymentCtrl.prototype.Save = function (payment) {
            //reset actual id - match with DAL object's properties
            if (this.backboneCollection.length < 1) {
                helper.ShowModalPopup("danger", "Bus Details", "Please add bus details");
                return;
            }
            if (payment.get("isReferralBooking")) {
                if (payment.get("isReferralBookingPaid") && (payment.get("referralPaymentDate") == undefined || payment.get("referralPaymentDate") == "")) {
                    helper.ShowModalPopup("danger", "Bus Details", "Please enter Referral Booking date.");
                    return;
                }
            }

            //payment.set("bus", payment.get("busSelected").id);
            //payment.set("driver", payment.get("driverSelected").id);
            //payment.set("alkhidmatCentre", payment.get("alkhidmatCentreSelected").id);
            //payment.set("paymentLocation", payment.get("paymentLocationSelected").id);
            //payment.set("officerId", payment.get("cashierSelected").id);
            //payment.set("paymentType", payment.get("paymentTypeSelected").id);
            var appObj = app.request("AppGlobalSetting");
            payment.set("modifiedBy", appObj.get("Id"));

            payment.set("busVisits", this.backboneCollection.toJSON());
            var deferred = DAL.Save(payment);

            //TODO: call controller from here...
            deferred.done(function (p) {
                return new views.PaymentView(null).SaveCompleted(p);
            });
        };
        return PaymentCtrl;
    })(helper.Controller);
    exports.PaymentCtrl = PaymentCtrl;
});
//# sourceMappingURL=PaymentCtrl.js.map
