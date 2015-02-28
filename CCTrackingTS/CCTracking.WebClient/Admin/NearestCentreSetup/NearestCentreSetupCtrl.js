/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../App", "../../Helper", "./NearestCentreSetupView", "../../Dtos/NearestCentreDto", "../../DAL/NearestCentreSetup", "marionette", "jquery", "knockout", "text!./NearestCentreSetupTmpl.html"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./NearestCentreSetupTmpl.html"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var NearestCentreSetupCtrl = (function (_super) {
        __extends(NearestCentreSetupCtrl, _super);
        function NearestCentreSetupCtrl() {
            _super.call(this);

            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.NearestCentreDto();
            this.nearestCentreSetupViewModel = new views.NearestCentreSetupViewModel(this.backboneModel, this);
            this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });

            this.compositeModel = new Backbone.Model();
        }
        NearestCentreSetupCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;
            if (url.indexOf("id=") > -1) {
                //alert(url.substring(url.indexOf("id=") + 3, url.length));
                var id = (url.substring(url.indexOf("id=") + 3, url.length));
                var deferredById = DAL.GetById(id);
                deferredById.done(function (p) {
                    return _this.GetByIdCompleted(p);
                });
            } else {
                this.Load();
            }
        };

        NearestCentreSetupCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = this.backboneModel;
            this.nearestCentreSetupViewModel.bbModel = model;
            this.nearestCentreSetupViewModel.model = kb.viewModel(model);

            // debugger;
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("alkhidmatCentreSelected", "");
            model.set("nearestCentreSelected", "");
            model.set("nearestLevel", "");
            model.set("isActive", "1");

            this.nearestCentreSetupViewModel = new views.NearestCentreSetupViewModel(model, this);
            this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });

            this.nearestCentreSetupView.on("SaveNearestCentreSetup", function () {
                return _this.Save(_this.nearestCentreSetupViewModel.bbModel);
            });

            this.nearestCentreSetupView.on("CancelForm", function () {
                return _this.Cancel();
            });

            //this.layout = app.AppLayout;
            this.app.MainRegion.show(this.nearestCentreSetupView);
            //this.GetAll();
        };

        NearestCentreSetupCtrl.prototype.GetAll = function () {
            var _this = this;
            var deferred = DAL.GetAll();
            deferred.done(function (p) {
                return _this.GetAllCompleted(p);
            });
        };

        NearestCentreSetupCtrl.prototype.GetByCriteria = function (centreId, nearestCollection) {
            var a = nearestCollection;
            var b = this.collection;
            var centres = _.filter(nearestCollection.models, function (p) {
                return p.get("centreId") == centreId;
            });
            this.collection.reset(centres);
        };

        NearestCentreSetupCtrl.prototype.GetByIdCompleted = function (nearestCentreSetupDto) {
            var _this = this;
            this.backboneModel = new Backbone.Model(nearestCentreSetupDto["nearestCentreModel"]);
            var model = this.backboneModel;

            this.UIBinding(model);

            this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });
            this.nearestCentreSetupView.on("SaveNearestCentreSetup", function () {
                return _this.Save(_this.nearestCentreSetupViewModel.bbModel);
            });
            this.nearestCentreSetupView.on("CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.nearestCentreSetupView);
        };

        NearestCentreSetupCtrl.prototype.GetAllCompleted = function (nearestCentreSetup) {
            //app = application.Application.getInstance();
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.compositeModel.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            this.compositeModel.set("alkhidmatCentreSelected", "");

            this.collection = new Backbone.Collection(nearestCentreSetup["nearestCentreList"]);
            this.collectionView = new views.NearestCentreSetupCollectionView({ collection: this.collection, model: this.compositeModel });
            this.collectionView.on("itemview:ShowDetail", function (view) {
                return _this.GetByIdCompleted(view.model);
            });
            this.collectionView.on("Event:SearchNearestCentre", function (centreId) {
                return _this.GetByCriteria(centreId, _this.allCollection);
            });
            this.allCollection = new Backbone.Collection(nearestCentreSetup["nearestCentreList"]);

            this.app.MainRegion.show(this.collectionView);

            var currentView = this.collectionView.$el;
            var vm = kb.viewModel(this.compositeModel);
            var element = currentView.find('#ddlCentre')[0];
            ko.cleanNode(element);
            ko.applyBindings(vm, element);
        };

        NearestCentreSetupCtrl.prototype.Save = function (nearestCentreSetup) {
            var _this = this;
            var appObj = this.app.request("AppGlobalSetting");
            nearestCentreSetup.set("modifiedBy", appObj.get("Id"));
            nearestCentreSetup.set("centreId", nearestCentreSetup.get("alkhidmatCentreSelected").id);
            nearestCentreSetup.set("nearestCentreId", nearestCentreSetup.get("nearestCentreSelected").id);
            nearestCentreSetup.set("isActive", nearestCentreSetup.get("isActive") == "1" ? true : false);
            var deferred = DAL.Save(this.GetMinimalRequest(nearestCentreSetup));
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };

        NearestCentreSetupCtrl.prototype.GetMinimalRequest = function (model) {
            var request = new dto.Models.NearestCentreDto();
            request.set("id", model.get("id"));
            request.set("centreId", model.get("centreId"));
            request.set("nearestCentreId", model.get("nearestCentreId"));
            request.set("isActive", model.get("isActive"));
            request.set("createdBy", model.get("createdBy"));
            request.set("createdDate", model.get("createdDate"));
            request.set("modifiedBy", model.get("modifiedBy"));
            request.set("modifiedDate", model.get("modifiedDate"));
            return request;
        };

        NearestCentreSetupCtrl.prototype.SaveCompleted = function (nearestCentreSetupDto) {
            var result = new Backbone.Model(nearestCentreSetupDto);
            if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
                helper.ShowModalPopup("danger", "Nearest Centre Setup", "Due to some technical reason Nearest Centre Setup have not been saved successfully!<br> Pelase try later");
            } else if (nearestCentreSetupDto["id"] == -1) {
                helper.ShowModalPopup("danger", "Nearest Centre Setup", "Current association already exists!<br> Pelase use a different combination");
            } else {
                helper.ShowModalPopup("success", "Nearest Centre Setup", "Record has been saved successfully with ID : " + nearestCentreSetupDto["id"]);
                this.Cancel();
            }
        };

        NearestCentreSetupCtrl.prototype.Cancel = function () {
            window.location.href = "#viewNearestCentreSetup";
        };

        NearestCentreSetupCtrl.prototype.UIBinding = function (model) {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            var centre = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                return p.id == model.get("centreId");
            });
            model.set("alkhidmatCentreSelected", centre[0]);

            var nearestCentre = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                return p.id == model.get("nearestCentreId");
            });
            model.set("nearestCentreSelected", nearestCentre[0]);

            model.set("isActive", model.get("isActive") ? "1" : "0");

            this.nearestCentreSetupViewModel.bbModel = model;
            this.nearestCentreSetupViewModel.model = kb.viewModel(model);

            ko.cleanNode($(this.nearestCentreSetupView.el)[0]);
            ko.applyBindings(this.nearestCentreSetupViewModel, this.nearestCentreSetupView.el);
        };
        return NearestCentreSetupCtrl;
    })(helper.Controller);
    exports.NearestCentreSetupCtrl = NearestCentreSetupCtrl;
});
