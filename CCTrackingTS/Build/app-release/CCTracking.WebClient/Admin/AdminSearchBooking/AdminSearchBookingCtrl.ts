﻿/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>


var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./AdminSearchBookingView");
import dto = require("../../Dtos/BookingSummaryDto");
import reportDto = require("../../Dtos/ReportDto");
import DAL = require("../../DAL/AdminSearch");

var app;

export class AdminSearchBookingCtrl extends helper.Controller {
    app: any;
    searchViewModel: views.SearchViewModel;
    //searchView: views.SearchView;
    backboneModel: Backbone.Model;
    backboneCollection: Backbone.Collection;
    collectionView: views.SearchCollectionView;
    compositeModel: Backbone.Model;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.BookingSummaryDto();
        this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
        //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        this.compositeModel = new Backbone.Model();
        this.backboneCollection = new Backbone.Collection([]);
        this.collectionView = new views.SearchCollectionView({ collection: this.backboneCollection, model: this.compositeModel });
        this.backboneCollection.reset([]);
    }

    Show() {
        this.Load();
    }

    Load() {
        
        var model = this.backboneModel;
       
        model.set("fromBookingDate", helper.FormatDateString(Date.now()));
        model.set("toBookingDate", helper.FormatDateString(Date.now()));
        this.compositeModel = model;

        this.collectionView.listenTo(this.collectionView, "AdminSearchBooking", () => this.GetByCriteria(this.searchViewModel.bbModel));
        this.collectionView.listenTo(this.collectionView, "Event:PrintReport", (p) => {
            helper.PrintReport(this.backboneCollection, this.GetHeaderList(), "Centre Specific Summary Report","Booking");
        });
        this.collectionView.listenTo(this.collectionView, "itemview:CentreBusSummary", (view, id) => { this.ShowCentreBusSummary(id,model); });

        this.collectionView.on("CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.collectionView);

        var vm = kb.viewModel(this.compositeModel);
       

        var fromBookingDate = $('#txtFromBookingDate')[0];
        ko.cleanNode(fromBookingDate);
        ko.applyBindings(vm, fromBookingDate);

        var toBookingDate = $('#txtToBookingDate')[0];
        ko.cleanNode(toBookingDate);
        ko.applyBindings(vm, toBookingDate);

    }

    GetHeaderList() {
        var headerList = new Backbone.Collection([
            { columnHeader: "Centre Name" },
            { columnHeader: "Booking Amount" },
            { columnHeader: "Booking Mileage" },
            { columnHeader: "Bookings" },
            { columnHeader: "Receivables" }
        ]);
        return headerList;
    }

    ShowCentreBusSummary(id, searchModel) {
        //alert(searchModel.get("fromBookingDate"));
        var dto = new reportDto.Models.ReportDto(); //set object with parameters
        dto.set("fromDate", searchModel.get("fromBookingDate"));
        dto.set("toDate", searchModel.get("toBookingDate"));
        dto.set("centreId", id);
        this.app.reqres.setHandler("ReportFilterSetting", () => dto, this);
        location.href = "#busCentreReport";
    }

    GetByCriteria(bookingSummaryDto: any) {
        
        if (bookingSummaryDto.get("fromBookingDate").trim() != "") {
            bookingSummaryDto.set("fromBookingDate", helper.FormatDateString(bookingSummaryDto.get("fromBookingDate")));
        }
        if (bookingSummaryDto.get("toBookingDate").trim() != "") {
            bookingSummaryDto.set("toBookingDate", helper.FormatDateString(bookingSummaryDto.get("toBookingDate")));
        }
        var deferred = DAL.GetByCriteria(bookingSummaryDto);
        deferred.done(p=> this.GetByCriteriaCompleted(p));
    }

    GetByCriteriaCompleted(bookingSummaryDto: dto.Models.BookingSummaryCollection) {
        //TODO:Hack - need rework
        var result = bookingSummaryDto["bookingSummaryList"];
        var summary = [];
        for (var i = 0; i < result.length; i++) {
            summary[i] = {
                alkhidmatCentre: result[i].alkhidmatCentre, alkhidmatCentreId: result[i].alkhidmatCentreId,
                bookingAmount: helper.FormatMoney(result[i].bookingAmount), bookingMilage: result[i].bookingMilage,
                bookings: result[i].bookings, receivables: helper.FormatMoney(result[i].receivables)
            };
        }
        this.backboneCollection.reset(summary);
    }

    Cancel() {
        window.location.href = "#adminSearchBooking";
    }
}