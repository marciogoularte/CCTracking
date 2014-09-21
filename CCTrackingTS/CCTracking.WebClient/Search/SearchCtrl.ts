/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
import application = require("../App");
import helper = require("../Helper");
import views = require("./SearchView");
import dto = require("CCTracking.WebClient/Dtos/SearchDto");
import DAL = require("../DAL/Search");

var app;

export class SearchCtrl extends helper.Controller {
    app: any;
    searchViewModel: views.SearchViewModel;
    searchView: views.SearchView;
    backboneModel: Backbone.Model;
    collection: dto.Models.SearchCollection;
    collectionView: views.SearchCollectionView;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.SearchDto();
        this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
        this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        this.collection = new dto.Models.SearchCollection({});
        this.collectionView = new views.SearchCollectionView({ collection: this.collection });
    }

    Show() {
        this.Load();
    }

    Load() {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var model = this.backboneModel;
        model.set("graveyardList", lookupResponse.graveyard);
        model.set("graveyardSelected", "");
        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        model.set("alkhidmatCentreSelected", "");
        model.set("busList", lookupResponse.bus);
        model.set("busSelected", "");

        this.searchViewModel = new views.SearchViewModel(model, this);
        this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
        this.searchView.on("SearchBooking", () => this.GetByCriteria(this.searchViewModel.bbModel));

        this.searchView.on("CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.searchView);
    }

    GetByCriteria(searchDto: any) {
        debugger;
        var searchRequest = new Backbone.Model();
        //searchRequest.set("contactInfo", )
        //searchRequest.set("deseasedInfo", )
        //searchRequest.set("gender", )
        //searchRequest.set("paymentStatus", )
        //searchRequest.set("bookingDate", )
        //searchRequest.set("greveyard", )
        //searchRequest.set("centre", )
        //searchRequest.set("bus", )
        var deferred = DAL.GetByCriteria(searchDto);
        deferred.done(p=> this.GetByCriteriaCompleted(p));
    }

    GetByCriteriaCompleted(searchDto: dto.Models.SearchDto) {
        this.collection.reset(searchDto["searchList"]);
        this.collectionView = new views.SearchCollectionView({ collection: this.collection });
        //this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
        this.app.MainRegion.show(this.collectionView);
    }

    Cancel() {
        window.location.href = "#searchBooking";
    }
}