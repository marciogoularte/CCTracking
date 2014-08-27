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
import views = require("./BusVisitView");
import dto = require("../Dtos/BusVisitDto");
import DAL = require("../DAL/BusVisit");

export class BusVisitCtrl extends helper.Controller {
    app: any;
    viewModel: views.BusVisitViewModel;
    view: views.BusVisitView;
    backboneModel: Backbone.Model;
    collection: dto.Models.BusVisitCollection;
    collectionView: views.BusVisitCollectionView;

    constructor() {
        super();
        //alert("constructor");
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.BusVisitDto()
        this.viewModel = new views.BusVisitViewModel(this.backboneModel, this);
        this.view = new views.BusVisitView({ viewModel: this.viewModel });
        //this.stationView.on("Event:SaveForm", () => this.Save(this.stationView.model));        
        this.collection = new dto.Models.BusVisitCollection({});
        this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
        //this.events.listento

    }

    Show() {
        var url = window.location.href;
        if (url.indexOf("id=") > -1) {            
            var id = (url.substring(url.indexOf("id=") + 3, url.length));
            var deferredById = DAL.GetById(id);
            deferredById.done(p=> this.GetByIdCompleted(p));

        }
        else {
            this.Load();
        }
    }

    Load() {

        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        //var model = new dto.Models.StationDto();
        var model = this.backboneModel;
        this.viewModel.bbModel = model;
        this.viewModel.model = kb.viewModel(model);

        model.set("centreId", "");
        model.set("busId", "");
        model.set("driverId", "");
        model.set("visitTypeId", lookupResponse.landmark);
        model.set("bookingId", "");
        model.set("isAvailableForBooking", "");
        model.set("isAvailableForFutureBooking", "");
        model.set("initialReading", "");
        model.set("finalReading", "");
        model.set("isActive", "");

        this.viewModel = new views.BusVisitViewModel(model, this);
        this.view = new views.BusVisitView({ viewModel: this.viewModel });
        this.view.on("Event:SaveForm", () => this.Save(this.view.model));
        this.view.on("Event:CancelForm", () => this.Cancel());
        //this.layout = app.AppLayout;
        this.app.MainRegion.show(this.view);
        //this.GetAll();
    }

    GetAll() {
        var deferred = DAL.GetAll();
        deferred.done(p=> this.GetAllCompleted(p));
    }

    GetByIdCompleted(dto: dto.Models.BusVisitDto) {
        //alert("GetByIdCompleted..");
        this.backboneModel = new Backbone.Model(dto["centreModel"]);
        var model = this.backboneModel;

        this.UIBinding(model);

        this.view = new views.BusVisitView({ viewModel: this.viewModel });
        this.view.on("Event:SaveForm", () => this.Save(this.viewModel.bbModel));
        this.view.on("Event:CancelForm", () => this.Cancel());
        //this.stationView.trigger("TestEvent");

        //app = application.Application.getInstance();
        this.app.MainRegion.show(this.view);

        //this.GetAll();
        //this.GetAllCompletedNew(this.collection);

    }

    Save(model: any) {
        var appObj = this.app.request("AppGlobalSetting");
        model.set("modifiedBy", appObj.get("Id"));
        model.set("landmarkId", model.get("landmarkIdSelected").id);
        model.set("isActive", model.get("isActive") == "1" ? true : false);
        model.set("isCoPartner", model.get("isCoPartner") == "1" ? true : false);
        var deferred = DAL.Save(model);
        deferred.done(p=> this.SaveCompleted(p));
    }

    GetAllCompleted(model: dto.Models.BusVisitDto) {
        //app = application.Application.getInstance();
        this.collection.reset(model["centreList"]);
        this.collectionView = new views.BusVisitCollectionView({ collection: this.collection });
        this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
        this.app.MainRegion.show(this.collectionView);
    }

    SaveCompleted(dto: dto.Models.BusVisitDto) {
        this.backboneModel = new Backbone.Model(dto);
        var model = this.backboneModel;
        //console.log(loginResponse);        
        if (dto == undefined) {
            alert("Alkhidmat Centre have not been saved successfully!");
        }
        else {
            alert("Record has been saved successfully with Alkhidmat Centre ID : " + dto["id"]);
            //this.UIBinding(model);
            this.Cancel();
        }
    }

    Cancel() {
        window.location.href = "#viewBusVisit";
    }

    UIBinding(model: any) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        model.set("landmarkList", lookupResponse.landmark);
        var landmark = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("landmarkId"); });
        model.set("landmarkIdSelected", landmark[0]);

        //model.set("isActive", model.get("isActive") ? "1" : "0");
        //model.set("isCoPartner", model.get("isCoPartner") ? "1" : "0");

        this.viewModel.bbModel = model;
        this.viewModel.model = kb.viewModel(model);
        ko.cleanNode($(this.view.el)[0]);
        ko.applyBindings(this.viewModel, this.view.el);

        //this.stationView = new views.StationView({ viewModel: this.stationViewModel });
        //this.stationView.on("Event:SaveForm", () => this.Save(this.stationViewModel.bbModel));
    }

    //GetAllCompletedNew(station: dto.Models.StationCollection) {
    //    //this.collection = new dto.Models.StationCollection(station["centreList"]);
    //    //this.collection.collection = station["centreList"];
    //    //this.collection.reset(station);
    //    this.collectionView.collection = this.collection;
    //    this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
    //    app.MainRegion.show(this.collectionView);

    //}



}
