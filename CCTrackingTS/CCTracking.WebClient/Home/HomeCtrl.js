﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
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
define(["require", "exports", "../App", "../Helper", "./HomeView", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views) {
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var HomeCtrl = (function (_super) {
        __extends(HomeCtrl, _super);
        function HomeCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.homeItemView = new views.HomeItemView();
        }
        HomeCtrl.prototype.Show = function () {
            //alert("show");
            //select centre, count(BookingId) BokingCount, sum(FuelAmount) BookingAmount from AdminSummary_View group by centre, VisitTypeId having VisitTypeId = 2
            //select centre, count(BookingId) BokingCount, sum(FuelAmount) Expenditure from AdminSummary_View group by centre, VisitTypeId  having VisitTypeId< > 2
            this.app.MainRegion.show(this.homeItemView);
            this.ShowChart();
        };
        HomeCtrl.prototype.ShowChart = function () {
            //alert(this.$el.find("#container").text());
            var centreName = ['Tariq Rd', 'Nomayesh', 'Joher', 'Korangi', 'Landhi'];
            var bookingData = [18500, 11300, 13700, 22400, 6200];
            var expenditureData = [9000, 5700, 6500, 10200, 3000];
            var receivableData = [3350, 2500, 4000, 6500, 2000];
            var profitData = [9500, 5600, 7200, 12200, 3200];

            this.homeItemView.$el.find("#container").highcharts({
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
                        text: 'Number of fruits'
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
                        name: 'Expenditure',
                        data: expenditureData,
                        stack: 'Expenditure'
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
        };
        return HomeCtrl;
    })(helper.Controller);
    exports.HomeCtrl = HomeCtrl;
});
//# sourceMappingURL=HomeCtrl.js.map
