/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../App", "../../../../Helper", "./BusCentreReportView", "../../../../Dtos/BookingSummaryDto", "../../../../Dtos/ReportDto", "../../../../DAL/BusCentreReport", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, reportDto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var app;

    var BusCentreReportCtrl = (function (_super) {
        __extends(BusCentreReportCtrl, _super);
        function BusCentreReportCtrl() {
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
        BusCentreReportCtrl.prototype.Show = function () {
            this.Load();
        };

        BusCentreReportCtrl.prototype.Load = function () {
            var _this = this;
            var model = this.backboneModel;
            var reportFilter = this.app.request("ReportFilterSetting");

            //model.set("fromBookingDate", helper.FormatDateString(Date.now()));
            //model.set("toBookingDate", helper.FormatDateString(Date.now()));
            model.set("fromBookingDate", reportFilter.get("fromDate"));
            model.set("toBookingDate", reportFilter.get("toDate"));
            model.set("centreId", reportFilter.get("centreId"));

            this.compositeModel = model;

            this.collectionView.listenTo(this.collectionView, "BusCentreReport", function () {
                return _this.GetByCriteria(_this.searchViewModel.bbModel);
            });
            this.collectionView.listenTo(this.collectionView, "itemview:BusVisitDetails", function (view, id) {
                _this.ShowBusVisitDetails(id, model);
            });

            this.collectionView.on("CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.collectionView);

            var vm = kb.viewModel(this.compositeModel);

            var fromBookingDate = $('#txtFromBookingDate')[0];
            ko.cleanNode(fromBookingDate);
            ko.applyBindings(vm, fromBookingDate);

            var toBookingDate = $('#txtToBookingDate')[0];
            ko.cleanNode(toBookingDate);
            ko.applyBindings(vm, toBookingDate);

            var bookingSumaryDto = new dto.Models.BookingSummaryDto();
            bookingSumaryDto.set('centreId', reportFilter.get("centreId"));
            bookingSumaryDto.set('fromBookingDate', reportFilter.get("fromDate"));
            bookingSumaryDto.set('toBookingDate', reportFilter.get("toDate"));

            var deferred = DAL.GetByCriteria(bookingSumaryDto);
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        BusCentreReportCtrl.prototype.ShowBusVisitDetails = function (id, searchModel) {
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

        BusCentreReportCtrl.prototype.GetByCriteria = function (bookingSummaryDto) {
            var _this = this;
            if (bookingSummaryDto.get("fromBookingDate").trim() != "") {
                bookingSummaryDto.set("fromBookingDate", helper.FormatDateString(bookingSummaryDto.get("fromBookingDate")));
            }
            if (bookingSummaryDto.get("toBookingDate").trim() != "") {
                bookingSummaryDto.set("toBookingDate", helper.FormatDateString(bookingSummaryDto.get("toBookingDate")));
            }
            var deferred = DAL.GetByCriteria(this.GetMinimalRequest(bookingSummaryDto));
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        BusCentreReportCtrl.prototype.GetMinimalRequest = function (model) {
            var request = new dto.Models.BookingSummaryDto();
            request.set("busId", model.get("busId"));
            request.set("fromBookingDate", model.get("fromBookingDate"));
            request.set("toBookingDate", model.get("toBookingDate"));
            return request;
        };

        BusCentreReportCtrl.prototype.GetByCriteriaCompleted = function (bookingSummaryDto) {
            //TODO:Hack - need rework
            var result = bookingSummaryDto["bookingSummaryList"];
            var summary = [];
            for (var i = 0; i < result.length; i++) {
                summary[i] = {
                    alkhidmatCentre: result[i].alkhidmatCentre, alkhidmatCentreId: result[i].alkhidmatCentreId,
                    bookingAmount: result[i].bookingAmount, bookingMilage: result[i].bookingMilage,
                    bookings: result[i].bookings, receivables: result[i].receivables,
                    busNo: result[i].busNo, busId: result[i].busId
                };
            }
            this.backboneCollection.reset(summary);
        };

        BusCentreReportCtrl.prototype.Cancel = function () {
            window.location.href = "#busCentreReport";
        };
        return BusCentreReportCtrl;
    })(helper.Controller);
    exports.BusCentreReportCtrl = BusCentreReportCtrl;
});
