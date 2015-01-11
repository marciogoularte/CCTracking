/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../App");
import helper = require("../Helper");
import views = require("./HomeView");
//import reportView = require("./../Admin/AdminSearchBooking/AdminSearchBookingView");

import dto = require("../Dtos/HomeDto");
import DAL = require("../DAL/Home");
import AdminDAL = require("../DAL/AdminSearch");

export class HomeCtrl extends helper.Controller {
    homeItemView: views.HomeItemView;
    app: any;
    backboneCollection: Backbone.Collection;
    collectionView:views.SearchCollectionView;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.homeItemView = new views.HomeItemView();
        //this.backboneCollection = new Backbone.Collection([]);
        
    }

    Show() {
        this.app.MainRegion.show(this.homeItemView);
        var model = new dto.Models.HomeDto();
        var today = new Date();
        var fromDate = new Date(today.setDate(today.getDate() - 30));

        model.set("fromDate", helper.FormatDateString(fromDate));
        model.set("toDate", helper.FormatDateString(new Date()));
        var deffered = DAL.GetByCriteria(model);
        deffered.done((p) => { this.ShowChart(p); });
        this.ShowCentreSummaryReport();
    }

    ShowCentreSummaryReport() {
        var model = new Backbone.Model();
        var today = new Date();
        var fromDate = new Date(today.setDate(today.getDate() - 30));

        model.set("fromBookingDate", helper.FormatDateString(fromDate));
        model.set("toBookingDate", helper.FormatDateString(new Date()));
        this.GetByCriteria(model);
    }
    GetByCriteria(bookingSummaryDto: any) {

        if (bookingSummaryDto.get("fromBookingDate").trim() != "") {
            bookingSummaryDto.set("fromBookingDate", helper.FormatDateString(bookingSummaryDto.get("fromBookingDate")));
        }
        if (bookingSummaryDto.get("toBookingDate").trim() != "") {
            bookingSummaryDto.set("toBookingDate", helper.FormatDateString(bookingSummaryDto.get("toBookingDate")));
        }
        var deferred = AdminDAL.GetByCriteria(bookingSummaryDto);
        deferred.done(p=> this.GetByCriteriaCompleted(p));
    }

    GetByCriteriaCompleted(bookingSummaryDto: any) {
        //TODO:Hack - need rework
        var result = bookingSummaryDto["bookingSummaryList"];
        var summary = [];
        var sumBookingAmount = 0, sumBookingMilage = 0, sumBookings = 0, sumReceivables = 0, sumMaintenance = 0;
        
        for (var i = 0; i < result.length; i++) {
            summary[i] = {
                alkhidmatCentre: result[i].alkhidmatCentre,
                alkhidmatCentreId: result[i].alkhidmatCentreId,
                bookingAmount: helper.FormatMoney(result[i].bookingAmount),
                maintenance: helper.FormatMoney(result[i].maintenance),
                bookingMilage: helper.FormatMoney(result[i].bookingMilage),
                bookings: result[i].bookings,
                receivables:helper.FormatMoney(result[i].receivables)
            };
            sumBookingAmount = sumBookingAmount + parseFloat(result[i].bookingAmount);
            sumMaintenance = sumMaintenance + parseFloat(result[i].maintenance);
            sumBookingMilage = sumBookingMilage + parseFloat(result[i].bookingMilage);
            sumBookings = sumBookings + parseInt(result[i].bookings);
            sumReceivables = sumReceivables + parseFloat(result[i].receivables);

        }
        var compositeModel = new Backbone.Model({
            "totalBookingAmount": helper.FormatMoney(sumBookingAmount),
            "totalBookingMilage": helper.FormatMoney(sumBookingMilage),
            "totalMaintenance": helper.FormatMoney(sumMaintenance),
            "totalBookings": sumBookings,
            "totalReceivables": helper.FormatMoney(sumReceivables)
        });
        this.collectionView = new views.SearchCollectionView({ collection: new Backbone.Collection(summary), model: compositeModel });
        this.app.SubRegion.reset();
        this.app.SubRegion.show(this.collectionView);

        //this.backboneCollection.reset(summary);
    }


    ShowChart(summaryData: any) {
        var centreName = [];
        var bookingData = [];
        var expenditureData = [];
        var receivableData = [];
        var profitData = [];
        _.map(summaryData["homeList"], (item) => {
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


    }

    
}

