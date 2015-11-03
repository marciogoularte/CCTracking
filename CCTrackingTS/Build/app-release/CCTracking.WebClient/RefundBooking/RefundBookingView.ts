/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./RefundBookingTmpl.html"/>

var _ = require('underscore');
import helper = require("../Helper");
var templateView = require("text!./RefundBookingTmpl.html");
import application = require("../App");
var app;

export class RefundBookingViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
        this.model.busSelected.subscribe(() => {
            var booking = _.filter(this.model.refundBookings(), (p) => { return p.busId == this.model.busSelected().id; });
            UIBinding(this, booking[0]);
        });
    }
}

export class RefundBookingView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }
    Cancel() {
        this.trigger("Event:CancelForm");
    }
    Save(e) {
        e.preventDefault();
        this.trigger("Event:SaveForm");
    }
}


function UIBinding(self, refundModel: any) {
    var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
    self.model.actualBookingAmount(refundModel.actualBookingAmount);
    self.model.refundReason(refundModel.refundReason);
    self.model.refundAmount(refundModel.refundAmount);
    self.model.amountDeducted(refundModel.amountDeducted);
    self.model.refundReceipt(refundModel.refundReceipt);

    var refundType = _.filter(lookupResponse.refundType, (p) => {
        return p.id == refundModel.refundTypeId;
    });

    if (refundType.length > 0) {
        self.model.refundTypeSelectedDesc(refundType[0].description);
    
    } else {
        self.model.refundTypeSelectedDesc("");
    }

    var officeLocation = _.filter(lookupResponse.alkhidmatCentre, (p) => {
        return p.id == refundModel.refundOfficeLocation;
    });
    if (officeLocation.length > 0) {
        self.model.refundFromOfficeDesc(officeLocation[0].description);
    }
    else  {
        self.model.refundFromOfficeDesc("");
    }

    var cashier = _.filter(lookupResponse.cashier, (p) => {
        return p.id == refundModel.refundOfficer;
    });
    if (cashier.length > 0) {
        self.model.refundCashierDesc(cashier[0].description);
    }
    else  {
        self.model.refundCashierDesc("");
    }

    self.model.id(refundModel.id);
    //self.bbModel = new Backbone.Model(refundModel);
}
