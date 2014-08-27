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
            this.collection = new dto.Models.BusVisitCollection({});
            this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
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

        BusVisitCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            //var model = new dto.Models.StationDto();
            var model = this.backboneModel;
            this.viewModel.bbModel = model;
            this.viewModel.model = kb.viewModel(model);

            model.set("centreId", "");
            model.set("busId", "");
            model.set("driverId", "");
            model.set("visitTypeId", lookupResponse.landmark);
            model.set("bookingId", "");
            model.set("isAvailableForBooking", "");
            model.set("isAvailableForFutureBooking", "");
            model.set("initialReading", "");
            model.set("finalReading", "");
            model.set("isActive", "");

            this.viewModel = new views.BusVisitViewModel(model, this);
            this.view = new views.BusVisitView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.view.model);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });

            //this.layout = app.AppLayout;
            this.app.MainRegion.show(this.view);
            //this.GetAll();
        };

        BusVisitCtrl.prototype.GetAll = function () {
            var _this = this;
            var deferred = DAL.GetAll();
            deferred.done(function (p) {
                return _this.GetAllCompleted(p);
            });
        };

        BusVisitCtrl.prototype.GetByIdCompleted = function (dto) {
            var _this = this;
            //alert("GetByIdCompleted..");
            this.backboneModel = new Backbone.Model(dto["centreModel"]);
            var model = this.backboneModel;

            this.UIBinding(model);

            this.view = new views.BusVisitView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.viewModel.bbModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });

            //this.stationView.trigger("TestEvent");
            //app = application.Application.getInstance();
            this.app.MainRegion.show(this.view);
            //this.GetAll();
            //this.GetAllCompletedNew(this.collection);
        };

        BusVisitCtrl.prototype.Save = function (model) {
            var _this = this;
            var appObj = this.app.request("AppGlobalSetting");
            model.set("modifiedBy", appObj.get("Id"));
            model.set("landmarkId", model.get("landmarkIdSelected").id);
            model.set("isActive", model.get("isActive") == "1" ? true : false);
            model.set("isCoPartner", model.get("isCoPartner") == "1" ? true : false);
            var deferred = DAL.Save(model);
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };

        BusVisitCtrl.prototype.GetAllCompleted = function (model) {
            var _this = this;
            //app = application.Application.getInstance();
            this.collection.reset(model["centreList"]);
            this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
            this.collectionView.on("itemview:ShowDetail", function (view) {
                return _this.GetByIdCompleted(view.model);
            });
            this.app.MainRegion.show(this.collectionView);
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
            this.viewModel.model = kb.viewModel(model);
            ko.cleanNode($(this.view.el)[0]);
            ko.applyBindings(this.viewModel, this.view.el);
            //this.stationView = new views.StationView({ viewModel: this.stationViewModel });
            //this.stationView.on("Event:SaveForm", () => this.Save(this.stationViewModel.bbModel));
        };
        return BusVisitCtrl;
    })(helper.Controller);
    exports.BusVisitCtrl = BusVisitCtrl;
});
//# sourceMappingURL=BusVisitCtrl.js.map
