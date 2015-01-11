/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./HomeView", "../Dtos/HomeDto", "../DAL/Home", "../DAL/AdminSearch", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, DAL, AdminDAL) {
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var HomeCtrl = (function (_super) {
        __extends(HomeCtrl, _super);
        function HomeCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.homeItemView = new views.HomeItemView();
            //this.backboneCollection = new Backbone.Collection([]);
        }
        HomeCtrl.prototype.Show = function () {
            var _this = this;
            this.app.MainRegion.show(this.homeItemView);
            var model = new dto.Models.HomeDto();
            var today = new Date();
            var fromDate = new Date(today.setDate(today.getDate() - 30));

            model.set("fromDate", helper.FormatDateString(fromDate));
            model.set("toDate", helper.FormatDateString(new Date()));
            var deffered = DAL.GetByCriteria(model);
            deffered.done(function (p) {
                _this.ShowChart(p);
            });
            this.ShowCentreSummaryReport();
        };

        HomeCtrl.prototype.ShowCentreSummaryReport = function () {
            var model = new Backbone.Model();
            var today = new Date();
            var fromDate = new Date(today.setDate(today.getDate() - 30));

            model.set("fromBookingDate", helper.FormatDateString(fromDate));
            model.set("toBookingDate", helper.FormatDateString(new Date()));
            this.GetByCriteria(model);
        };
        HomeCtrl.prototype.GetByCriteria = function (bookingSummaryDto) {
            var _this = this;
            if (bookingSummaryDto.get("fromBookingDate").trim() != "") {
                bookingSummaryDto.set("fromBookingDate", helper.FormatDateString(bookingSummaryDto.get("fromBookingDate")));
            }
            if (bookingSummaryDto.get("toBookingDate").trim() != "") {
                bookingSummaryDto.set("toBookingDate", helper.FormatDateString(bookingSummaryDto.get("toBookingDate")));
            }
            var deferred = AdminDAL.GetByCriteria(bookingSummaryDto);
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        HomeCtrl.prototype.GetByCriteriaCompleted = function (bookingSummaryDto) {
            //TODO:Hack - need rework
            var result = bookingSummaryDto["bookingSummaryList"];
            var summary = [];
            var sumBookingAmount = 0, sumBookingMilage = 0, sumBookings = 0, sumReceivables = 0;
            for (var i = 0; i < result.length; i++) {
                summary[i] = {
                    alkhidmatCentre: result[i].alkhidmatCentre,
                    alkhidmatCentreId: result[i].alkhidmatCentreId,
                    bookingAmount: helper.FormatMoney(result[i].bookingAmount),
                    bookingMilage: result[i].bookingMilage,
                    bookings: result[i].bookings,
                    receivables: helper.FormatMoney(result[i].receivables)
                };
                sumBookingAmount = sumBookingAmount + parseFloat(result[i].bookingAmount);
                sumBookingMilage = sumBookingMilage + parseFloat(result[i].bookingMilage);
                sumBookings = sumBookings + parseInt(result[i].bookings);
                sumReceivables = sumReceivables + parseFloat(result[i].receivables);
            }
            var compositeModel = new Backbone.Model({
                "totalBookingAmount": helper.FormatMoney(sumBookingAmount),
                "totalBookingMilage": sumBookingMilage,
                "totalBookings": sumBookings,
                "totalReceivables": helper.FormatMoney(sumReceivables)
            });
            this.collectionView = new views.SearchCollectionView({ collection: new Backbone.Collection(summary), model: compositeModel });
            this.app.SubRegion.reset();
            this.app.SubRegion.show(this.collectionView);
            //this.backboneCollection.reset(summary);
        };

        HomeCtrl.prototype.ShowChart = function (summaryData) {
            var centreName = [];
            var bookingData = [];
            var expenditureData = [];
            var receivableData = [];
            var profitData = [];
            _.map(summaryData["homeList"], function (item) {
                //debugger
                centreName.push(item.centreDesc);
                bookingData.push(item.bookingAmount);
                expenditureData.push(item.maintenance);
                receivableData.push(item.receivable);
                profitData.push(item.profit);
                return item;
            });

            //var centreName = ['Tariq Rd', 'Nomayesh', 'Joher', 'Korangi', 'Landhi'];
            //var bookingData = [18500, 11300, 13700, 22400, 6200];
            //var expenditureData = [9000, 5700, 6500, 10200, 3000];
            //var receivableData = [3350, 2500, 4000, 6500, 2000];
            //var profitData = [9500, 5600, 7200, 12200, 3200];
            //this.homeItemView.$el.find("#container").highcharts({
            this.homeItemView.$el.find("#container")["highcharts"]({
                chart: {
                    type: 'column',
                    backgroundColor: 'transparent',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 25,
                        depth: 40
                    },
                    marginTop: 80,
                    marginRight: 40
                },
                title: {
                    text: 'Booking Summary Report - Centre Wise',
                    style: {
                        color: 'grey'
                    }
                },
                xAxis: {
                    categories: centreName
                },
                legend: {
                    //layout: 'horizontal',
                    itemStyle: {
                        color: 'grey'
                    }
                },
                yAxis: {
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Amount in Rs'
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y}'
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        depth: 40
                    }
                },
                series: [
                    {
                        name: 'Booking',
                        data: bookingData,
                        stack: 'Booking'
                    }, {
                        name: 'Maintenance',
                        data: expenditureData,
                        stack: 'Maintenance'
                    }, {
                        name: 'Receivable',
                        data: receivableData,
                        stack: 'Receivable'
                    }, {
                        name: 'Profit',
                        data: profitData,
                        stack: 'Profit'
                    }]
            });

            var item = this.homeItemView.$el.find("text")[this.homeItemView.$el.find("text").length - 1];
            if (item != undefined) {
                item.innerHTML = "";
            }
        };
        return HomeCtrl;
    })(helper.Controller);
    exports.HomeCtrl = HomeCtrl;
});
//# sourceMappingURL=HomeCtrl.js.map
