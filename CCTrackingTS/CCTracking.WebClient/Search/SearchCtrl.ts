﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../App");
import helper = require("../Helper");
import views = require("./SearchView");
import dto = require("CCTracking.WebClient/Dtos/SearchDto");
import DAL = require("../DAL/Search");

var app;

export class SearchCtrl extends helper.Controller {
    app: any;
    searchViewModel: views.SearchViewModel;
    //searchView: views.SearchView;
    backboneModel: Backbone.Model;
    collection: dto.Models.SearchDtoResponseCollection;
    collectionView: views.SearchCollectionView;
    compositeModel: Backbone.Model;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.SearchDto();
        this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
        //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        this.compositeModel = new Backbone.Model();
        //this.collection = new dto.Models.SearchDtoResponse({ id: "", contactName: "", contactMobile: "", contactNic: "", deseasedName: "", pickupDate: "", status: "" });
        this.collection = new dto.Models.SearchDtoResponseCollection();
        this.collectionView = new views.SearchCollectionView({ collection: this.collection, model: this.compositeModel });

    }

    Show() {
        this.Load();
    }

    Load() {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var model = this.backboneModel;
        model.set("graveyardList", lookupResponse.graveyard);
        model.set("graveyardIdSelected", "");
        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        model.set("alkhidmatCentreSelected", "");
        model.set("busList", lookupResponse.bus);
        model.set("busSelected", "");
        model.set("genderId", "");
        model.set("contactInfo", "");
        model.set("deseasedInfo", "");
        model.set("paymentStatusId", "");
        model.set("bookingDate", "");
        this.compositeModel = model;

        //this.searchViewModel = new views.SearchViewModel(this.compositeModel, this);
        //this.collectionView = new views.SearchCollectionView({ viewModel: this.searchViewModel, collection: null, model: this.compositeModel });

        //this.collectionView.collection = this.collection;
        //this.collectionView.model = this.compositeModel;

        //this.collectionView.on("SearchBooking", () => this.GetByCriteria(this.searchViewModel.bbModel));
        this.collectionView.listenTo(this.collectionView, "SearchBooking", () => this.GetByCriteria(this.searchViewModel.bbModel));

        this.collectionView.on("CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.collectionView);

        var vm = kb.viewModel(this.compositeModel);
        var currentView = this.collectionView.$el;
        //vm.setOptionDisable = this.collectionView.setOptionDisable;
        var element = currentView.find('#ddlGraveyard')[0];
        ko.cleanNode(element);
        ko.applyBindings(vm, element);
        var centre = currentView.find('#ddlCentre')[0];
        ko.cleanNode(centre);
        ko.applyBindings(vm, centre);
        //debugger;
        var bus = currentView.find('#ddlBusDetails')[0];
        ko.cleanNode(bus);
        ko.applyBindings(vm, bus);

        var contactInfo = currentView.find('#txtContactInfo')[0];
        ko.cleanNode(contactInfo);
        ko.applyBindings(vm, contactInfo);

        var deseasedInfo = currentView.find('#txtDeseasedInfo')[0];
        ko.cleanNode(deseasedInfo);
        ko.applyBindings(vm, deseasedInfo);

        var gender = currentView.find('.jsGender')[0];
        ko.cleanNode(gender);
        ko.applyBindings(vm, gender);
        gender = currentView.find('.jsGender')[1];
        ko.cleanNode(gender);
        ko.applyBindings(vm, gender);

        var paymentStatus = currentView.find('.jsPaymentStatus')[0];
        ko.cleanNode(paymentStatus);
        ko.applyBindings(vm, paymentStatus);
        paymentStatus = currentView.find('.jsPaymentStatus')[1];
        ko.cleanNode(paymentStatus);
        ko.applyBindings(vm, paymentStatus);

        var bookingDate = currentView.find('#txtBookingDate')[0];
        ko.cleanNode(bookingDate);
        ko.applyBindings(vm, bookingDate);



        //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        //this.searchView.on("SearchBooking", () => this.GetByCriteria(this.searchViewModel.bbModel));
        //this.searchView.on("CancelForm", () => this.Cancel());
        //this.app.MainRegion.show(this.searchView);


    }

    GetByCriteria(searchDto: any) {
        searchDto.set("genderId", searchDto.get("genderId").toString());
        searchDto.set("paymentStatusId", searchDto.get("paymentStatusId").toString());
        if (searchDto.get("bookingDate").trim() != "") {
            searchDto.set("bookingDate", helper.FormatDateString(searchDto.get("bookingDate")));
        }
        if (searchDto.get("graveyardIdSelected") != undefined) {
            searchDto.set("greveyardId", searchDto.get("graveyardIdSelected").id);
        }
        if (searchDto.get("alkhidmatCentreSelected") != undefined) {
            searchDto.set("centreId", searchDto.get("alkhidmatCentreSelected").id);
        }
        if (searchDto.get("busSelected") != undefined) {
            searchDto.set("busId", searchDto.get("busSelected").id);
        }
        var deferred = DAL.GetByCriteria(this.GetMinimalRequest(searchDto));
        deferred.done(p=> this.GetByCriteriaCompleted(p));
    }

    GetMinimalRequest(searchDto:any) {
        var request = new dto.Models.SearchDto();
        request.set("bookingDate", searchDto.get("bookingDate"));
        request.set("busId", searchDto.get("busId"));
        request.set("centreId", searchDto.get("centreId"));
        request.set("contactInfo", searchDto.get("contactInfo"));
        request.set("deseasedInfo", searchDto.get("deseasedInfo"));
        request.set("genderId", searchDto.get("genderId"));
        request.set("greveyardId", searchDto.get("greveyardId"));
        request.set("paymentStatusId", searchDto.get("paymentStatusId"));
        return request;
    }

    GetByCriteriaCompleted(searchDto: dto.Models.SearchDto) {
        var list = _.map(searchDto["bookingList"], (item) => {
            if (item.pickupDate != "0001-01-01T00:00:00")
                item.pickupDate = helper.FormatDateString(item.pickupDate);
            else
                item.pickupDate = "";
            if (item.status) {
                item.status = "Paid";
            } else {
                item.status = "Unpaid";
            }
            return item;
        });
        this.collection.reset(list);
    }

    Cancel() {
        this.Load();
    }
}