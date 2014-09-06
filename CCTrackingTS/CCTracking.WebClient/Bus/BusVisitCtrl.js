/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./BusVisitView", "../Dtos/BusVisitDto", "../DAL/BusVisit", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var BusVisitCtrl = (function (_super) {
        __extends(BusVisitCtrl, _super);
        function BusVisitCtrl() {
            _super.call(this);

            //alert("constructor");
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.BusVisitDto();
            this.viewModel = new views.BusVisitViewModel(this.backboneModel, this);
            this.view = new views.BusVisitView({ viewModel: this.viewModel });

            //this.stationView.on("Event:SaveForm", () => this.Save(this.stationView.model));
            //this.collection = new dto.Models.BusVisitCollection({});
            this.collection = new dto.Models.BusVisitCollection({ id: "", busDesc: "", visitTypeDesc: "", initialReading: "", finalReading: "" });
            this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
            this.compositeModel = new Backbone.Model();
            //this.events.listento
        }
        BusVisitCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;
            if (url.indexOf("id=") > -1) {
                var id = (url.substring(url.indexOf("id=") + 3, url.length));
                var deferredById = DAL.GetById(id);
                deferredById.done(function (p) {
                    return _this.GetByIdCompleted(p);
                });
            } else {
                this.Load();
            }
        };

        BusVisitCtrl.prototype.SimpleLoad = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.compositeModel.set("busList", lookupResponse.bus);
            this.compositeModel.set("busSelected", "");
            this.collectionView.model = this.compositeModel;

            //this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
            this.collectionView.listenTo(this.collectionView, "Event:SearchVisit", function (busId) {
                return _this.SearchVisit(busId);
            });
            this.app.MainRegion.show(this.collectionView);

            var vm = kb.viewModel(this.compositeModel);
            var element = $('#ddlBusDetails')[0];
            ko.cleanNode(element);
            ko.applyBindings(vm, element);
        };

        BusVisitCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            //var model = new dto.Models.StationDto();
            var model = this.backboneModel;
            this.viewModel.bbModel = model;
            this.viewModel.model = kb.viewModel(model);

            model.set("outTimeSlotList", lookupResponse.timeSlot);
            model.set("outTimeSlotSelected", "");
            model.set("reutrnTimeSlotList", lookupResponse.timeSlot);
            model.set("returnTimeSlotSelected", "");

            model.set("busList", lookupResponse.bus);
            model.set("busSelected", "");
            model.set("driverList", lookupResponse.driver);
            model.set("driverSelected", "");
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("alkhidmatCentreSelected", "");
            model.set("visitTypeList", lookupResponse.visitType);
            model.set("visitTypeSelected", "");

            model.set("centreId", "");
            model.set("busId", "");
            model.set("driverId", "");
            model.set("visitTypeId", lookupResponse.landmark);
            model.set("bookingId", "");
            model.set("inchargeName", "");
            model.set("visitDate", "");
            model.set("readingWhenFilling", "");
            model.set("pumpLocation", "");
            model.set("fuelRate", "");
            model.set("fuelAmount", "");
            model.set("isBookingCompleted", "");
            model.set("description", "");
            model.set("initialReading", "");
            model.set("finalReading", "");
            model.set("isActive", "");
            model.set("modifiedBy", "");

            this.viewModel = new views.BusVisitViewModel(model, this);
            this.view = new views.BusVisitView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.viewModel.bbModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.view);
        };

        BusVisitCtrl.prototype.GetAll = function () {
            var _this = this;
            var deferred = DAL.GetAll(-1);
            deferred.done(function (p) {
                return _this.GetAllCompleted1(p);
            });
        };

        BusVisitCtrl.prototype.GetByIdCompleted = function (dto) {
            var _this = this;
            //alert("GetByIdCompleted..");
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.backboneModel = new Backbone.Model(dto["busVisitModel"]);
            var model = this.backboneModel;

            model.set("outTimeSlotList", lookupResponse.timeSlot);
            var outTime = _.filter(lookupResponse.timeSlot, function (p) {
                return p.id == model.get("outTime");
            });
            model.set("outTimeSlotSelected", outTime[0]);

            model.set("reutrnTimeSlotList", lookupResponse.timeSlot);
            var inTime = _.filter(lookupResponse.timeSlot, function (p) {
                return p.id == model.get("returnTime");
            });
            model.set("returnTimeSlotSelected", inTime[0]);

            model.set("busList", lookupResponse.bus);
            var bus = _.filter(lookupResponse.bus, function (p) {
                return p.id == model.get("busId");
            });
            model.set("busSelected", bus[0]);

            model.set("driverList", lookupResponse.driver);
            var driver = _.filter(lookupResponse.driver, function (p) {
                return p.id == model.get("driverId");
            });
            model.set("driverSelected", driver[0]);

            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            var centre = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                return p.id == model.get("centreId");
            });
            model.set("alkhidmatCentreSelected", centre[0]);

            model.set("visitTypeList", lookupResponse.visitType);
            var visitType = _.filter(lookupResponse.visitType, function (p) {
                return p.id == model.get("visitTypeId");
            });
            model.set("visitTypeSelected", visitType[0]);

            this.viewModel = new views.BusVisitViewModel(model, this);
            this.view = new views.BusVisitView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.viewModel.bbModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });

            //this.UIBinding(model);
            this.app.MainRegion.show(this.view);
        };

        BusVisitCtrl.prototype.Save = function (model) {
            var _this = this;
            var appObj = this.app.request("AppGlobalSetting");
            model.set("modifiedBy", appObj.get("Id"));
            model.set("centreId", model.get("alkhidmatCentreSelected").id);
            model.set("driverId", model.get("driverSelected").id);
            model.set("busId", model.get("busSelected").id);
            model.set("outTime", model.get("outTimeSlotSelected").id);
            model.set("returnTime", model.get("returnTimeSlotSelected").id);
            model.set("visitTypeId", model.get("visitTypeSelected").id);

            model.set("isActive", model.get("isActive") == "1" ? true : false);
            var deferred = DAL.Save(model);
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };

        BusVisitCtrl.prototype.GetAllCompleted = function (model) {
            this.collection.reset(model["busVisitList"]);
            //this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
            //this.collectionView.listenTo(this.collectionView.model, "Event:SearchVisit", (busId) => this.SearchVisit(busId));
        };

        BusVisitCtrl.prototype.GetAllCompleted1 = function (model) {
            var _this = this;
            this.compositeModel = new Backbone.Model();
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.compositeModel.set("busList", lookupResponse.bus);
            this.compositeModel.set("busSelected", "");
            this.collection = new Backbone.Collection(model["busVisitList"]);

            this.collectionView = new views.BusVisitCollectionView({ collection: this.collection, model: this.compositeModel });
            this.collectionView.on("itemview:ShowDetail", function (view) {
                return _this.GetByIdCompleted(view.model);
            });
            this.collectionView.listenTo(this.collectionView, "Event:SearchVisit", function (busId) {
                return _this.SearchVisit(busId);
            });
            this.app.MainRegion.show(this.collectionView);

            var vm = kb.viewModel(this.compositeModel);
            var element = $('#ddlBusDetails')[0];
            ko.cleanNode(element);
            ko.applyBindings(vm, element);
        };

        BusVisitCtrl.prototype.SearchVisit = function (busId) {
            var _this = this;
            var deferred = DAL.GetAll(busId);
            deferred.done(function (p) {
                return _this.GetAllCompleted(p);
            });
        };

        BusVisitCtrl.prototype.SaveCompleted = function (dto) {
            this.backboneModel = new Backbone.Model(dto);
            var model = this.backboneModel;

            //console.log(loginResponse);
            if (dto == undefined) {
                alert("Alkhidmat Centre have not been saved successfully!");
            } else {
                alert("Record has been saved successfully with Alkhidmat Centre ID : " + dto["id"]);

                //this.UIBinding(model);
                this.Cancel();
            }
        };

        BusVisitCtrl.prototype.Cancel = function () {
            window.location.href = "#viewBusVisit";
        };

        BusVisitCtrl.prototype.UIBinding = function (model) {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            model.set("landmarkList", lookupResponse.landmark);
            var landmark = _.filter(lookupResponse.landmark, function (p) {
                return p.id == model.get("landmarkId");
            });
            model.set("landmarkIdSelected", landmark[0]);

            //model.set("isActive", model.get("isActive") ? "1" : "0");
            //model.set("isCoPartner", model.get("isCoPartner") ? "1" : "0");
            this.viewModel.bbModel = model;
            //this.viewModel.model = kb.viewModel(model);
            //ko.cleanNode($(this.view.el)[0]);
            //ko.applyBindings(this.viewModel, this.view.el);
            //this.stationView = new views.StationView({ viewModel: this.stationViewModel });
            //this.stationView.on("Event:SaveForm", () => this.Save(this.stationViewModel.bbModel));
        };
        return BusVisitCtrl;
    })(helper.Controller);
    exports.BusVisitCtrl = BusVisitCtrl;
});
//# sourceMappingURL=BusVisitCtrl.js.map
