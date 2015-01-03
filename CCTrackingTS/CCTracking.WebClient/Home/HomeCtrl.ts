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

import dto = require("../Dtos/HomeDto");
import DAL = require("../DAL/Home");

export class HomeCtrl extends helper.Controller {
    homeItemView: views.HomeItemView;
    app: any;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.homeItemView = new views.HomeItemView();
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

        var item = this.homeItemView.$el.find("text")[this.homeItemView.$el.find("text").length - 1];
        if (item != undefined) {
            item.innerHTML = "";
        }


    }

    
}

