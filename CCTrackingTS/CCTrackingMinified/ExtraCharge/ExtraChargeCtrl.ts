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
import views = require("./ExtraChargeView");
import dto = require("../Dtos/ExtraChargesDto");
import DAL = require("../DAL/ExtraCharges");

var app;
export class ExtraChargeCtrl extends helper.Controller {
    view: views.ExtraChargeView;
    backboneModel: Backbone.Model;
    collection: dto.Models.ExtraChargesCollection;

    constructor() {
        app = application.Application.getInstance();
        super();
    }
    //Show() {
    //    var url = window.location.href;
    //    var id = "0";
    //    //update payment
    //    if (url.indexOf("id=") > -1) {
    //        id = (url.substring(url.indexOf("id=") + 3, url.length));
    //    }
    //    var deferred = DAL.GetById(id);
    //    deferred.done(p => {
    //        this.GetByIdCompleted(p);
    //    });
    //    //this.GetByIdCompleted(null);
    //}

    EditExtraCharge(id: number) {
        var deferred = DAL.GetById(id);
        deferred.done(p => { this.GetByIdCompleted(p); });
    }

    GetByIdCompleted(extraChargeDto: any) {
        this.collection = extraChargeDto["extraChargesList"];
        this.backboneModel = new Backbone.Model(this.collection[0]);

        var model = this.backboneModel;
        var url = window.location.href;
        var id = (url.substring(url.indexOf("id=") + 3, url.length));
        if (model.get("id") === undefined || model.get("id") === 0) {
            this.InitalizeKoBinding(model);
        }
        model.set("bookingId", id);
        //model.set("actualBookingAmount", id);
        model.set("busList", model.get("busList"));
        model.set("busSelected", "");

        this.view = new views.ExtraChargeView(model);
        this.view.on("ExtraChargesSave", (bbmodel) => this.Save(bbmodel));
        model.set("extraChargesCollection", this.collection);
        app.MainRegion.show(this.view);
    }
    InitalizeKoBinding(model) {
        model.set("extraAmountCharge", "");
        model.set("extraAmountReason", "");
        model.set("extraAmountReceipt", "");
    }
    Save(extraCharges: any) {
        var appObj = app.request("AppGlobalSetting");
        extraCharges.set("modifiedBy", appObj.get("Id"));
        //if (extraCharges.get("busSelected") == undefined) {
        //    extraCharges.set("busId", extraCharges.get("busId"));
        //}
        //else {
        //    extraCharges.set("busId", extraCharges.get("busSelected").id);
        //}
        extraCharges.set("id", $("#hdnExtraChargeId").val());
        //alert($("#hdnExtraChargeId").val());
        var deferred = DAL.Save(extraCharges);
        deferred.done(p=> this.SaveCompleted(p));
    }
    SaveCompleted(extraChargeResponse: any) {
        var result = new Backbone.Model(extraChargeResponse);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
            helper.ShowModalPopup("danger", "Extra Charge", "Due to some technical reason payment have not been saved successfully!<br> Pelase try later");
        }
        else {
            helper.ShowModalPopup("success", "Extra Charge", "Record has been saved successfully with Extra Charge ID : " + extraChargeResponse["id"]);
            location.href = "#viewBooking";
        }
        //app.vent.trigger("Event:UpdateSummary");
    }
} 