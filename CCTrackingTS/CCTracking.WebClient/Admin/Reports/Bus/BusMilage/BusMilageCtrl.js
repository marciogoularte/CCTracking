/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../App", "../../../../Helper", "./BusMilageView", "../../../../Dtos/BookingSummaryDto", "../../../../DAL/BusMilage", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var BusMilageCtrl = (function (_super) {
        __extends(BusMilageCtrl, _super);
        function BusMilageCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.BookingSummaryDto();
            this.searchViewModel = new views.BusMilageViewModel(this.backboneModel, this);

            //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
            this.compositeModel = new Backbone.Model();
            this.backboneCollection = new Backbone.Collection([]);
            this.collectionView = new views.BusMilageCollectionView({ collection: this.backboneCollection, model: this.compositeModel });
            this.backboneCollection.reset([]);
        }
        BusMilageCtrl.prototype.Show = function () {
            var _this = this;
            var busMilageDto;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            var model = this.backboneModel;

            //debugger;
            //model.set("fromVisitDate", helper.FormatDateString( Date.now()));
            //model.set("toVisitDate", helper.FormatDateString(Date.now()));
            var reportFilter = this.app.request("ReportFilterSetting");
            model.set("busList", lookupResponse.bus);

            if (reportFilter != undefined) {
                model.set("fromBookingDate", reportFilter.get("fromDate"));
                model.set("toBookingDate", reportFilter.get("toDate"));
                var selectedBus = _.filter(lookupResponse.bus, function (p) {
                    return p.id == reportFilter.get("busId");
                });

                model.set("busSelected", selectedBus[0]);

                busMilageDto = new dto.Models.BookingSummaryDto();
                busMilageDto.set('busSelected', selectedBus[0]);
                busMilageDto.set('fromBookingDate', reportFilter.get("fromDate"));
                busMilageDto.set('toBookingDate', reportFilter.get("toDate"));
            } else {
                model.set("fromBookingDate", helper.FormatDateString(Date.now()));
                model.set("toBookingDate", helper.FormatDateString(Date.now()));
                model.set("busSelected", "");
            }

            this.compositeModel = model;

            this.collectionView.model = this.compositeModel;
            this.collectionView.listenTo(this.collectionView, "BusMilage", function () {
                return _this.BusMilage(model);
            });
            this.app.MainRegion.show(this.collectionView);

            var currentView = this.collectionView.$el;

            var vm = kb.viewModel(this.compositeModel);

            var fromVisitDate = currentView.find('#txtFromBookingDate')[0];
            ko.cleanNode(fromVisitDate);
            ko.applyBindings(vm, fromVisitDate);

            var toVisitDate = currentView.find('#txtToBookingDate')[0];
            ko.cleanNode(toVisitDate);
            ko.applyBindings(vm, toVisitDate);

            var bus = currentView.find('#ddlBusDetails')[0];
            ko.cleanNode(bus);
            ko.applyBindings(vm, bus);

            if (busMilageDto != undefined) {
                this.BusMilage(busMilageDto);
            }
        };

        BusMilageCtrl.prototype.BusMilage = function (busMilageDto) {
            var _this = this;
            if (busMilageDto.get("busSelected") != undefined && busMilageDto.get("busSelected").id != undefined) {
                busMilageDto.set("busId", busMilageDto.get("busSelected").id);
            } else if (busMilageDto.get("busSelected") != undefined) {
                busMilageDto.set("busId", busMilageDto.get("busSelected"));
            }

            this.app.request("ReportFilterSetting", '');
            var deferred = DAL.GetByCriteria(this.GetMinimalRequest(busMilageDto));
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        BusMilageCtrl.prototype.GetMinimalRequest = function (model) {
            var request = new dto.Models.BookingSummaryDto();
            request.set("fromBookingDate", model.get("fromBookingDate"));
            request.set("toBookingDate", model.get("toBookingDate"));
            request.set("busSelected", model.get("busSelected"));
            request.set("busId", model.get("busId"));
            return request;
        };

        BusMilageCtrl.prototype.GetByCriteriaCompleted = function (bookingSummaryDto) {
            // debugger;
            var result = bookingSummaryDto["bookingSummaryList"];
            var summary = [];
            for (var i = 0; i < result.length; i++) {
                summary[i] = {
                    alkhidmatCentre: result[i].alkhidmatCentre, alkhidmatCentreId: result[i].alkhidmatCentreId,
                    bookingAmount: result[i].bookingAmount, bookingMilage: result[i].bookingMilage,
                    busNo: result[i].busNo, busId: result[i].busId, visitType: result[i].visitType,
                    visitDate: helper.FormatDateString(result[i].visitDate), outTime: result[i].outTime,
                    inTime: result[i].inTime, timeTaken: result[i].timeTaken, driver: result[i].driver
                };
            }
            this.backboneCollection.reset(summary);
        };

        BusMilageCtrl.prototype.Cancel = function () {
            window.location.href = "#busMilageReport";
        };

        BusMilageCtrl.prototype.UIBinding = function (model) {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            model.set("landmarkList", lookupResponse.landmark);
            var landmark = _.filter(lookupResponse.landmark, function (p) {
                return p.id == model.get("landmarkId");
            });
            model.set("landmarkIdSelected", landmark[0]);
            //this.viewModel.bbModel = model;
        };
        return BusMilageCtrl;
    })(helper.Controller);
    exports.BusMilageCtrl = BusMilageCtrl;
});
