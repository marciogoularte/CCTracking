/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./ExtraCharge.html"/>

var _ = require('underscore');
var ko = require("knockout");
import helper = require("../Helper");
import homeCtrl = require("./ExtraChargeCtrl");
var templateView = require("text!./ExtraCharge.html");
import application = require("../App");
var app;



// View Model
export class ExtraChargeViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

// View
export class ExtraChargeView extends helper.Views.ItemView { 
    viewModel: ViewModel;
    bbModel: Backbone.Model;
    constructor(options?) {
        app = application.Application.getInstance();
        this.template = templateView;
        this.viewModel = new ViewModel(options);
        this.bbModel = new Backbone.Model();
        this.events = {
            "submit": "Save",
            "click .jsAddMore": "AddMore"
        }
        super(options);
    }

    Save(e) {
        e.preventDefault();
        this.bbModel.set("id", this.viewModel.Id());
        this.bbModel.set("bookingId", this.viewModel.bookingId());
        this.bbModel.set("actualBookingAmount", this.viewModel.actualBookingAmount());
        this.bbModel.set("busId", this.viewModel.busSelected().id);
        this.bbModel.set("extraAmountCharge", this.viewModel.extraAmountCharge());
        this.bbModel.set("extraAmountReason", this.viewModel.extraAmountReason());
        this.bbModel.set("extraAmountReceipt", this.viewModel.extraAmountReceipt());
        this.trigger("ExtraChargesSave", this.bbModel);
    }

    SaveCompleted(extraChargeResponse: any) {
        var result = new Backbone.Model(extraChargeResponse);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
            helper.ShowModalPopup("danger", "Extra Charge", "Due to some technical reason payment have not been saved successfully!<br> Pelase try later");
        }
        else {
            helper.ShowModalPopup("success", "Extra Charge", "Record has been saved successfully with Payment ID : " + extraChargeResponse["id"]);
            //alert("Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
            location.href = "#viewBooking";
        }
        //app.vent.trigger("Event:UpdateSummary");
    }
    onShow() {
        ko.applyBindings(this.viewModel, this.el);
    }

    onClose() {
        //app.vent.off("Event:UpdateSummary");
    }
}

export class ViewModel {
    Id: any;
    bookingId: any;
    actualBookingAmount:any;
    extraAmountCharge: any;
    extraAmountReason: any;
    extraAmountReceipt: any;
    busList: any;
    busSelected:any;

    constructor(model) {
        
        if (model == undefined) {
            this.Id = ko.observable();
            this.bookingId = ko.observable();
            this.actualBookingAmount = ko.observable();
            this.extraAmountCharge = ko.observable();
            this.extraAmountReason = ko.observable();
            this.extraAmountReceipt = ko.observable();
        }
        else {
            this.Id = ko.observable(model.get("id"));
            this.busList = ko.observableArray(model.get("busList"));
            this.busSelected = ko.observable(model.get("busId"));
            this.bookingId = ko.observable(model.get("bookingId"));
            this.actualBookingAmount = ko.observable(model.get("actualBookingAmount"));
            this.extraAmountCharge = ko.observable(model.get("extraAmountCharge"));
            this.extraAmountReason = ko.observable(model.get("extraAmountReason"));
            this.extraAmountReceipt = ko.observable(model.get("extraAmountReceipt"));
        }

        this.busSelected.subscribe(() => {
            var booking = _.filter(model.get("extraChargesCollection"), (p) => { return p.busId == this.busSelected().id; });
            UIBinding(this, booking[0]);
        });
    }
}

function UIBinding(self, model) {
    self.bookingId(model.bookingId);
    self.extraAmountCharge(model.extraAmountCharge);
    self.extraAmountReason(model.extraAmountReason);
    self.extraAmountReceipt(model.extraAmountReceipt);
    self.actualBookingAmount(model.actualBookingAmount);
    self.Id(model.id);
}
