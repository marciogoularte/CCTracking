/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../App", "../../Helper", "./BusVisitView", "../../DAL/BusVisit", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, DAL) {
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
            this.app = application.Application.getInstance();
            this.currentLayout = new views.SearchBusVisitLayoutView();
            this.searchView = new views.BusVisitSearchItemView();
            this.compositeModel = new Backbone.Model();
        }
        //Show() {
        //    var url = window.location.href;
        //    if (url.indexOf("id=") > -1) {
        //        var id = (url.substring(url.indexOf("id=") + 3, url.length));
        //        var deferredById = DAL.GetById(id);
        //        deferredById.done(p=> this.GetByIdCompleted(p));
        //    }
        //    else {
        //        this.Load();
        //    }
        //}
        BusVisitCtrl.prototype.Load = function () {
            var _this = this;
            //var model = this.backboneModel;
            this.view = new views.BusVisitView();
            this.view.on("Event:SaveForm", function (busVisitModel) {
                return _this.Save(busVisitModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.view);
        };

        BusVisitCtrl.prototype.EditForm = function (id) {
            var _this = this;
            var deferredById = DAL.GetById(id);
            deferredById.done(function (p) {
                return _this.GetByIdCompleted(p);
            });
        };

        BusVisitCtrl.prototype.SimpleLoad = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.compositeModel.set("busList", lookupResponse.bus);
            this.compositeModel.set("busSelected", "");

            this.app.MainRegion.show(this.currentLayout);
            this.searchView.model = this.compositeModel;
            this.searchView.on("Event:SearchVisit", function (busId) {
                _this.SearchVisit(busId);
            });
            this.currentLayout.SearchRegion.show(this.searchView);

            var vm = kb.viewModel(this.compositeModel);
            var element = $('#ddlBuses')[0];
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

        BusVisitCtrl.prototype.GetAllCompleted = function (model) {
            var _this = this;
            var busVisits = _.map(model["busVisitList"], function (item) {
                item.visitDate = helper.FormatDateString(item.visitDate);
                if (item.returnDate != undefined)
                    item.returnDate = helper.FormatDateString(item.returnDate);
                return item;
            });

            this.collection = new Backbone.Collection(busVisits);
            this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
            this.collectionView.on("itemview:Event:EditForm", function (currentView, id) {
                return _this.EditForm(id);
            });
            this.currentLayout.ContentRegion.show(this.collectionView);
        };

        BusVisitCtrl.prototype.GetByIdCompleted = function (dto) {
            var _this = this;
            //var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            //this.backboneModel = new Backbone.Model(dto["busVisitModel"]);
            var model = new Backbone.Model(dto["busVisitModel"]);

            if (model.get("visitDate") != null && model.get("visitDate").trim() != "")
                model.set("visitDate", helper.FormatDateString(model.get("visitDate")));
            if (model.get("returnDate") != null && model.get("returnDate").trim() != "")
                model.set("returnDate", helper.FormatDateString(model.get("returnDate")));

            this.view = new views.BusVisitView(model);
            this.view.on("Event:SaveForm", function (busVisitModel) {
                return _this.Save(busVisitModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.view);
        };

        BusVisitCtrl.prototype.Save = function (model) {
            var _this = this;
            var appObj = this.app.request("AppGlobalSetting");
            model.set("modifiedBy", appObj.get("Id"));
            model.set("isBookingCompleted", model.get("isBookingCompleted") == "1" ? true : false);
            var deferred = DAL.Save(model);
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };

        BusVisitCtrl.prototype.Cancel = function () {
            window.location.href = "#viewBusVisit";
        };

        BusVisitCtrl.prototype.SaveCompleted = function (dto) {
            //this.backboneModel = new Backbone.Model(dto);
            //var model = this.backboneModel;
            //console.log(loginResponse);
            if (dto == undefined) {
                helper.ShowModalPopup("danger", "Bus Visit", "Bus visit have not been saved successfully!");
            } else {
                helper.ShowModalPopup("success", "Bus Visit", "Record has been saved successfully with Bus Visit ID : " + dto["id"]);

                //this.UIBinding(model);
                this.Cancel();
            }
            //this.app.vent.trigger("Event:UpdateSummary");
        };
        return BusVisitCtrl;
    })(helper.Controller);
    exports.BusVisitCtrl = BusVisitCtrl;
});
//# sourceMappingURL=BusVisitCtrl.js.map
