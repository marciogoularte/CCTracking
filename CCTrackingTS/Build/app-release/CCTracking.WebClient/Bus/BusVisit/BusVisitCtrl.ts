/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./BusVisitView");
import dto = require("../../Dtos/BusVisitDto");
import DAL = require("../../DAL/BusVisit");

export class BusVisitCtrl extends helper.Controller {
    app: any;
    currentLayout: views.SearchBusVisitLayoutView;
    collection: dto.Models.BusVisitCollection;
    collectionView: views.BusVisitCollectionView;
    searchView: views.BusVisitSearchItemView;
    compositeModel: Backbone.Model;
    view: views.BusVisitView;

    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.currentLayout = new views.SearchBusVisitLayoutView();
        this.searchView = new views.BusVisitSearchItemView();
        this.compositeModel = new Backbone.Model();
    }

    //Show() {
    //    var url = window.location.href;
    //    if (url.indexOf("id=") > -1) {
    //        var id = (url.substring(url.indexOf("id=") + 3, url.length));
    //        var deferredById = DAL.GetById(id);
    //        deferredById.done(p=> this.GetByIdCompleted(p));
    //    }
    //    else {
    //        this.Load();
    //    }
    //}

    Load() {

        //var model = this.backboneModel;
        this.view = new views.BusVisitView();
        this.view.on("Event:SaveForm", (busVisitModel) => this.Save(busVisitModel));
        this.view.on("Event:CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.view);

    }

    EditForm(id: number) {
        var deferredById = DAL.GetById(id);
        deferredById.done(p=> this.GetByIdCompleted(p));
    }

    SimpleLoad() {

        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        this.compositeModel.set("busList", lookupResponse.bus);
        this.compositeModel.set("busSelected", "");


        this.app.MainRegion.show(this.currentLayout);
        this.searchView.model = this.compositeModel;
        this.searchView.on("Event:SearchVisit", (busId) => { this.SearchVisit(busId); });
        this.currentLayout.SearchRegion.show(this.searchView);


        var vm = kb.viewModel(this.compositeModel);
        var element = $('#ddlBuses')[0];
        ko.cleanNode(element);
        ko.applyBindings(vm, element);
    }

    SearchVisit(busId) {
        var deferred = DAL.GetAll(busId);
        deferred.done(p=> this.GetAllCompleted(p));
    }

    GetAllCompleted(model: dto.Models.BusVisitDto) {
        var busVisits = _.map(model["busVisitList"], (item) => {
            item.visitDate = helper.FormatDateTimeString(item.visitDate);
            if (item.returnDate != undefined)
                item.returnDate = helper.FormatDateTimeString(item.returnDate);
            return item;
        });

        this.collection = new Backbone.Collection(busVisits);
        this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
        this.collectionView.on("itemview:Event:EditForm", (currentView, id) => this.EditForm(id));
        this.currentLayout.ContentRegion.show(this.collectionView);
    }

    GetByIdCompleted(dto: any) {
        //var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        //this.backboneModel = new Backbone.Model(dto["busVisitModel"]);
        var model = new Backbone.Model(dto["busVisitModel"]);

        if (model.get("visitDate") != null && model.get("visitDate").trim() != "")
            model.set("visitDate", helper.FormatDateString(model.get("visitDate")));
        if (model.get("returnDate") != null && model.get("returnDate").trim() != "")
            model.set("returnDate", helper.FormatDateString(model.get("returnDate")));

        this.view = new views.BusVisitView(model);
        this.view.on("Event:SaveForm", (busVisitModel) => this.Save(busVisitModel));
        this.view.on("Event:CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.view);
    }

    Save(model: any) {
        var appObj = this.app.request("AppGlobalSetting");
        model.set("modifiedBy", appObj.get("Id"));
        model.set("isBookingCompleted", model.get("isBookingCompleted") == "1" ? true : false);
        var deferred = DAL.Save(model);
        deferred.done(p=> this.SaveCompleted(p));
    }

    Cancel() {
        window.location.href = "#viewBusVisit";
    }

    SaveCompleted(dto: dto.Models.BusVisitDto) {
        //this.backboneModel = new Backbone.Model(dto);
        //var model = this.backboneModel;
        //console.log(loginResponse);        
        if (dto == undefined) {
            helper.ShowModalPopup("danger", "Bus Visit", "Bus visit have not been saved successfully!");
        }
        else {
            helper.ShowModalPopup("success", "Bus Visit", "Record has been saved successfully with Bus Visit ID : " + dto["id"]);
            //this.UIBinding(model);
            this.Cancel();
        }
        //this.app.vent.trigger("Event:UpdateSummary");
    }

}