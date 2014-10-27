/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./AdminSearchBookingView");
import dto = require("../../Dtos/SearchDto");
import DAL = require("../../DAL/AdminSearch");

var app;

export class AdminSearchBookingCtrl extends helper.Controller {
    app: any;
    searchViewModel: views.SearchViewModel;
    //searchView: views.SearchView;
    backboneModel: Backbone.Model;
    collection: dto.Models.SearchCollection;
    collectionView: views.SearchCollectionView;
    compositeModel: Backbone.Model;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.SearchDto();
        this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
        //this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        this.compositeModel = new Backbone.Model();
        this.collection = new dto.Models.SearchCollection({id:"", contactName: "", contactMobile: "", contactNic: "", deseasedName: "", address: "", status: "" });
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
        model.set("bookingDate", "10/10/2000");
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
        //vm.setOptionDisable = this.collectionView.setOptionDisable;
        var element = $('#ddlGraveyard')[0];
        ko.cleanNode(element);
        ko.applyBindings(vm, element);
        var centre = $('#ddlCentre')[0];
        ko.cleanNode(centre);
        ko.applyBindings(vm, centre);
        var bus  = $('#ddlBusDetails')[0];
        ko.cleanNode(bus);
        ko.applyBindings(vm, bus);

        var contactInfo = $('#txtContactInfo')[0];
        ko.cleanNode(contactInfo);
        ko.applyBindings(vm, contactInfo);

        var deseasedInfo = $('#txtDeseasedInfo')[0];
        ko.cleanNode(deseasedInfo);
        ko.applyBindings(vm, deseasedInfo);

        var gender = $('.jsGender')[0];
        ko.cleanNode(gender);
        ko.applyBindings(vm, gender);
        gender = $('.jsGender')[1];
        ko.cleanNode(gender);
        ko.applyBindings(vm, gender);

        var paymentStatus = $('.jsPaymentStatus')[0];
        ko.cleanNode(paymentStatus);
        ko.applyBindings(vm, paymentStatus);
        paymentStatus = $('.jsPaymentStatus')[1];
        ko.cleanNode(paymentStatus);
        ko.applyBindings(vm, paymentStatus);

        var bookingDate = $('#txtBookingDate')[0];
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
        searchDto.set("bookingDate", Date.now());
        searchDto.set("greveyardId", searchDto.get("graveyardIdSelected").id);
        searchDto.set("centreId", searchDto.get("alkhidmatCentreSelected").id);
        searchDto.set("busId", searchDto.get("busSelected").id);
        var deferred = DAL.GetByCriteria(searchDto);
        deferred.done(p=> this.GetByCriteriaCompleted(p));
    }

    GetByCriteriaCompleted(searchDto: dto.Models.SearchDto) {
        //this.collection.reset();
        //debugger;
        //this.collectionView.collection.reset();
        this.collection.reset(searchDto["bookingList"]);


        //this.collectionView = new views.SearchCollectionView({ collection: this.collection });

        //this.app.MainRegion.show(this.collectionView);
    }

    Cancel() {
        window.location.href = "#adminSearchBooking";
    }
}