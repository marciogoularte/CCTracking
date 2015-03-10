/// <reference path="../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../App", "../../../Helper", "./BusFuelingReportView", "../../../Dtos/BookingSummaryDto", "../../../Dtos/ReportDto", "../../../DAL/BusFuelingReport", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, reportDto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var app;

    var BusFuelingReportCtrl = (function (_super) {
        __extends(BusFuelingReportCtrl, _super);
        function BusFuelingReportCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.BookingSummaryDto();
            this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);

            //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
            this.compositeModel = new Backbone.Model();
            this.backboneCollection = new Backbone.Collection([]);
            this.collectionView = new views.SearchCollectionView({ collection: this.backboneCollection, model: this.compositeModel });
            this.backboneCollection.reset([]);
        }
        BusFuelingReportCtrl.prototype.Show = function () {
            this.Load();
        };

        BusFuelingReportCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            var model = this.backboneModel;

            //var reportFilter = this.app.request("ReportFilterSetting");
            model.set("fromBookingDate", helper.FormatDateString(Date.now()));
            model.set("toBookingDate", helper.FormatDateString(Date.now()));
            model.set("busList", lookupResponse.bus);
            model.set("busSelected", "");

            //model.set("fromBookingDate", reportFilter.get("fromDate"));
            //model.set("toBookingDate", reportFilter.get("toDate"));
            //model.set("busId", reportFilter.get("busId"));
            this.compositeModel = model;

            this.collectionView.listenTo(this.collectionView, "BusFuelingReport", function () {
                return _this.GetByCriteria(_this.searchViewModel.bbModel);
            });
            this.collectionView.listenTo(this.collectionView, "itemview:BusVisitDetails", function (view, id) {
                _this.ShowBusVisitDetails(id, model);
            });

            this.collectionView.on("CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.collectionView);

            var currentView = this.collectionView.$el;
            var vm = kb.viewModel(this.compositeModel);

            var fromBookingDate = currentView.find('#txtFromBookingDate')[0];
            ko.cleanNode(fromBookingDate);
            ko.applyBindings(vm, fromBookingDate);

            var toBookingDate = currentView.find('#txtToBookingDate')[0];
            ko.cleanNode(toBookingDate);
            ko.applyBindings(vm, toBookingDate);

            var bus = currentView.find('#ddlBusDetails')[0];
            ko.cleanNode(bus);
            ko.applyBindings(vm, bus);
            //var bookingSumaryDto = new dto.Models.BookingSummaryDto();
            //bookingSumaryDto.set('busId', reportFilter.get("busId"));
            //bookingSumaryDto.set('fromBookingDate', reportFilter.get("fromDate"));
            //bookingSumaryDto.set('toBookingDate', reportFilter.get("toDate"));
            //var deferred = DAL.GetByCriteria(bookingSumaryDto);
            //deferred.done(p=> this.GetByCriteriaCompleted(p));
        };

        BusFuelingReportCtrl.prototype.ShowBusVisitDetails = function (id, searchModel) {
            //alert(searchModel.get("fromBookingDate"));
            var dto = new reportDto.Models.ReportDto();
            dto.set("fromDate", searchModel.get("fromBookingDate"));
            dto.set("toDate", searchModel.get("toBookingDate"));
            dto.set("busId", id);
            this.app.reqres.setHandler("ReportFilterSetting", function () {
                return dto;
            }, this);
            location.href = "#busMilageReport";
        };

        BusFuelingReportCtrl.prototype.GetByCriteria = function (bookingSummaryDto) {
            var _this = this;
            if (bookingSummaryDto.get("fromBookingDate").trim() != "") {
                bookingSummaryDto.set("fromBookingDate", helper.FormatDateString(bookingSummaryDto.get("fromBookingDate")));
            }
            if (bookingSummaryDto.get("toBookingDate").trim() != "") {
                bookingSummaryDto.set("toBookingDate", helper.FormatDateString(bookingSummaryDto.get("toBookingDate")));
            }
            if (bookingSummaryDto.get("busSelected") != undefined) {
                bookingSummaryDto.set("busId", bookingSummaryDto.get("busSelected").id);
            }
            var deferred = DAL.GetByCriteria(this.GetMinimalRequest(bookingSummaryDto));
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        BusFuelingReportCtrl.prototype.GetMinimalRequest = function (model) {
            var request = new dto.Models.BookingSummaryDto();
            request.set("fromBookingDate", model.get("fromBookingDate"));
            request.set("toBookingDate", model.get("toBookingDate"));
            request.set("busSelected", model.get("busSelected"));
            request.set("busId", model.get("busId"));
            return request;
        };

        BusFuelingReportCtrl.prototype.GetByCriteriaCompleted = function (bookingSummaryDto) {
            //TODO:Hack - need rework
            var result = bookingSummaryDto["bookingSummaryList"];
            var summary = [];
            for (var i = 0; i < result.length; i++) {
                summary[i] = {
                    alkhidmatCentre: result[i].alkhidmatCentre,
                    bookingAmount: helper.FormatMoney(result[i].bookingAmount),
                    bookingMilage: helper.FormatMoney(result[i].bookingMilage),
                    busNo: result[i].busNo,
                    busId: result[i].busId,
                    currentReading: helper.FormatMoney(result[i].currentReading),
                    previusReading: helper.FormatMoney(result[i].previusReading),
                    fuelQuantity: helper.FormatMoney(result[i].fuelQuantity),
                    fuelRate: helper.FormatMoney(result[i].fuelRate),
                    averageMilage: helper.FormatMoney(result[i].averageMilage),
                    pumpLocation: result[i].pumpLocation,
                    visitType: result[i].visitType,
                    visitDate: helper.FormatDateString(result[i].visitDate),
                    outTime: result[i].outTime,
                    inTime: result[i].inTime,
                    timeTaken: result[i].timeTaken,
                    driver: result[i].driver,
                    fuelingReceipt: result[i].fuelingReceipt
                };
            }
            this.backboneCollection.reset(summary);
        };

        BusFuelingReportCtrl.prototype.Cancel = function () {
            window.location.href = "#busCentreReport";
        };
        return BusFuelingReportCtrl;
    })(helper.Controller);
    exports.BusFuelingReportCtrl = BusFuelingReportCtrl;
});
