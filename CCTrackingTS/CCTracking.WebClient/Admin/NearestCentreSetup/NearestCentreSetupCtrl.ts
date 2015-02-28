/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./NearestCentreSetupTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./NearestCentreSetupView");
import dto = require("../../Dtos/NearestCentreDto");
import DAL = require("../../DAL/NearestCentreSetup");

export class NearestCentreSetupCtrl extends helper.Controller {
    app: any;
    nearestCentreSetupViewModel: views.NearestCentreSetupViewModel;
    nearestCentreSetupView: views.NearestCentreSetupView;
    backboneModel: Backbone.Model;
    collection: dto.Models.NearestCentreDtoCollection;
    collectionView: views.NearestCentreSetupCollectionView;
    allCollection: dto.Models.NearestCentreDtoCollection;
    compositeModel: Backbone.Model;
    constructor() {
        super();

        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.NearestCentreDto();
        this.nearestCentreSetupViewModel = new views.NearestCentreSetupViewModel(this.backboneModel, this);
        this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });
        
        this.compositeModel = new Backbone.Model();
    }

    Show() {
        var url = window.location.href;
        if (url.indexOf("id=") > -1) {
            //alert(url.substring(url.indexOf("id=") + 3, url.length));
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
        var model = this.backboneModel;
        this.nearestCentreSetupViewModel.bbModel = model;
        this.nearestCentreSetupViewModel.model = kb.viewModel(model);

       
        // debugger;
        
        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        model.set("alkhidmatCentreSelected", "");        
        model.set("nearestCentreSelected", "");        
        model.set("nearestLevel", "");   
        model.set("isActive", "1");

        this.nearestCentreSetupViewModel = new views.NearestCentreSetupViewModel(model, this);
        this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });
        
        this.nearestCentreSetupView.on("SaveNearestCentreSetup", () => this.Save(this.nearestCentreSetupViewModel.bbModel));

      

        this.nearestCentreSetupView.on("CancelForm", () => this.Cancel());
        //this.layout = app.AppLayout;
        this.app.MainRegion.show(this.nearestCentreSetupView);
        //this.GetAll();
    }

    GetAll() {   

        var deferred = DAL.GetAll();
        deferred.done(p=> this.GetAllCompleted(p));
    }


    GetByCriteria(centreId: any, nearestCollection:any) {

        var a = nearestCollection;
        var b = this.collection;
        var centres = _.filter(nearestCollection.models, (p) => {            
            return p.get("centreId") == centreId;
        });
        this.collection.reset(centres);
    }


    GetByIdCompleted(nearestCentreSetupDto: dto.Models.NearestCentreDto) {

        this.backboneModel = new Backbone.Model(nearestCentreSetupDto["nearestCentreModel"]);
        var model = this.backboneModel;

        this.UIBinding(model);

        this.nearestCentreSetupView = new views.NearestCentreSetupView({ viewModel: this.nearestCentreSetupViewModel });
        this.nearestCentreSetupView.on("SaveNearestCentreSetup", () => this.Save(this.nearestCentreSetupViewModel.bbModel));
        this.nearestCentreSetupView.on("CancelForm", () => this.Cancel());
        this.app.MainRegion.show(this.nearestCentreSetupView);

    }
    
    GetAllCompleted(nearestCentreSetup: dto.Models.NearestCentreDto) {
        //app = application.Application.getInstance();

        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        this.compositeModel.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        this.compositeModel.set("alkhidmatCentreSelected", "");
        
        
        this.collection = new Backbone.Collection(nearestCentreSetup["nearestCentreList"]);
        this.collectionView = new views.NearestCentreSetupCollectionView({ collection: this.collection, model: this.compositeModel });
        this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
        this.collectionView.on("Event:SearchNearestCentre", (centreId) => this.GetByCriteria(centreId,this.allCollection));
        this.allCollection = new Backbone.Collection(nearestCentreSetup["nearestCentreList"]);

        this.app.MainRegion.show(this.collectionView);

        var currentView = this.collectionView.$el;
        var vm = kb.viewModel(this.compositeModel);
        var element = currentView.find('#ddlCentre')[0];
        ko.cleanNode(element);
        ko.applyBindings(vm, element);

    }

    Save(nearestCentreSetup: any) {

        var appObj = this.app.request("AppGlobalSetting");
        nearestCentreSetup.set("modifiedBy", appObj.get("Id"));
        nearestCentreSetup.set("centreId", nearestCentreSetup.get("alkhidmatCentreSelected").id);
        nearestCentreSetup.set("nearestCentreId", nearestCentreSetup.get("nearestCentreSelected").id);
        nearestCentreSetup.set("isActive", nearestCentreSetup.get("isActive") == "1" ? true : false);
        var deferred = DAL.Save(this.GetMinimalRequest(nearestCentreSetup));
        deferred.done(p=> this.SaveCompleted(p));
    }

    GetMinimalRequest(model) {
        var request = new dto.Models.NearestCentreDto();
        request.set("id", model.get("id"));
        request.set("centreId", model.get("centreId"));
        request.set("nearestCentreId", model.get("nearestCentreId"));
        request.set("isActive", model.get("isActive"));
        request.set("createdBy", model.get("createdBy"));
        request.set("createdDate", model.get("createdDate"));
        request.set("modifiedBy", model.get("modifiedBy"));
        request.set("modifiedDate", model.get("modifiedDate"));
        return request;
    }


    SaveCompleted(nearestCentreSetupDto: dto.Models.NearestCentreDto) {
         var result = new Backbone.Model(nearestCentreSetupDto);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "")  {
            helper.ShowModalPopup("danger", "Nearest Centre Setup", "Due to some technical reason Nearest Centre Setup have not been saved successfully!<br> Pelase try later");
        }
        else if ( nearestCentreSetupDto["id"] == -1) {
            helper.ShowModalPopup("danger", "Nearest Centre Setup", "Current association already exists!<br> Pelase use a different combination");
        }
        else {
            helper.ShowModalPopup("success", "Nearest Centre Setup", "Record has been saved successfully with ID : " + nearestCentreSetupDto["id"]);
            this.Cancel();
        }
    }

    Cancel() {
        window.location.href = "#viewNearestCentreSetup";
    }

    UIBinding(model: any) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        var centre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("centreId"); });
        model.set("alkhidmatCentreSelected", centre[0]);
                
        var nearestCentre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("nearestCentreId"); });
        model.set("nearestCentreSelected", nearestCentre[0]);

        model.set("isActive", model.get("isActive") ? "1" : "0");

        this.nearestCentreSetupViewModel.bbModel = model;
        this.nearestCentreSetupViewModel.model = kb.viewModel(model);

        ko.cleanNode($(this.nearestCentreSetupView.el)[0]);
        ko.applyBindings(this.nearestCentreSetupViewModel, this.nearestCentreSetupView.el);
    }


}
