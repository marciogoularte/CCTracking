/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./PaymentTmpl.html"/>
/// <amd-dependency path="text!./PaymentGrid.html"/>

var _ = require('underscore');
import helper = require("../Helper");
import bookingDto = require("CCTracking.WebClient/Dtos/BookingDto");
import paymentCtrl = require("./PaymentCtrl");

var templateView = require("text!./PaymentTmpl.html");
var templateGrid = require("text!./PaymentGrid.html");

import application = require("../App");
var app;


export class PaymentViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

export class PaymentView extends helper.Views.MvvmView {
    
    constructor(options?) {
        app = application.Application.getInstance();
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsAddMore": "AddMore"
        }
        super(options);
    }
    
    AddMore() {        
        //var a = this.$el.find("#ddlCentre")        
        this.trigger("BusVisitAddItem",
            this.viewModel.bbModel.get("bookingId"),
            this.viewModel.bbModel.get("alkhidmatCentreSelected"),
            this.viewModel.bbModel.get("driverSelected"),
            this.viewModel.bbModel.get("busSelected")
            );
        ////app.vent.trigger("BusVisitItem:Add", this.busVisitCollection);
    }

    Save(e) {
        e.preventDefault();                        
        this.trigger("PaymentSave", this.viewModel.bbModel);
    }

    SaveCompleted(paymentResponse: bookingDto.Models.BookingResponse) {
        //console.log(loginResponse);
        if (paymentResponse == undefined) {
            alert("Payment have not been saved successfully!");
        }
        else {
            alert("Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
        }
    }
}

export class BusVisitCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        app = application.Application.getInstance();
        options.itemView = BusVisitItemView;
        options.template = templateGrid.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "tbody";
        super(options);
    }
}

export class BusVisitItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateGrid.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "mouseover .jsShowDetail": "ShowDetail",
            "click .jsShowDetail": "ShowDetail",
            "click .jsRemoveItem": ()=> this.RemoveItem()
        };
        super(options);
    }
    RemoveItem() {        
        this.trigger("BusVisitRemoveItem", this.model.get("busId"), this.model.get("centreId"), this.model.get("driverId"));
        //this.trigger("BusVisitRemoveItem", this.model.get("busVisitId"));
    }
    ShowDetail() {
        //new userCtrl.UserCtrl().ShowDetail(this.model);
    }
}

