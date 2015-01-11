/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./PaymentTmpl.html"/>
/// <amd-dependency path="text!./PaymentGrid.html"/>

var _ = require('underscore');
var ko = require("knockout");
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
        this.model.paymentTypeSelected.subscribe(() => {
            if (this.model.paymentTypeSelected().id == 1) {
                this.model.isCash = true;
            } else {
                this.model.isCash = false;
            }
        });
    }

}

export class PaymentView extends helper.Views.ItemView { //helper.Views.MvvmView {    
    viewModel: ViewModel;
    bbModel: Backbone.Model;
    //availabilityList:any;
    constructor(busList?,options? ) {

        app = application.Application.getInstance();
        this.template = templateView;
        //this.availabilityList = [{}];
        this.viewModel = new ViewModel(busList, options);
        
        this.bbModel = new Backbone.Model();
        this.events = {
            "submit": "Save",
            "click .jsAddMore": "AddMore"
        }
        super(options);
    }
    
    

    AddMore() {
        //var a = this.$el.find("#ddlCentre")        
        this.trigger("BusVisitAddItem",
            this.viewModel.bookingId(),
            this.viewModel.alkhidmatCentreSelected(),
            this.viewModel.driverSelected(),
            this.viewModel.busSelected(),
            this.viewModel.fuelAmount()
            );
        ////app.vent.trigger("BusVisitItem:Add", this.busVisitCollection);
    }

    Save(e) {
        e.preventDefault();

        this.bbModel.set("id", this.viewModel.Id());
        this.bbModel.set("bookingId", this.viewModel.bookingId());
        this.bbModel.set("paymentType", this.viewModel.paymentType());
        this.bbModel.set("pricing", this.viewModel.pricing());
        this.bbModel.set("amount", this.viewModel.amount());
        this.bbModel.set("paymentLocation", this.viewModel.paymentLocation());
        this.bbModel.set("officerId", this.viewModel.officerId());
        this.bbModel.set("receiptNo", this.viewModel.receiptNo());
        this.bbModel.set("extraAmountCharge", this.viewModel.extraAmountCharge());
        this.bbModel.set("extraAmountReason", this.viewModel.extraAmountReason());
        this.bbModel.set("extraAmountReceipt", this.viewModel.extraAmountReceipt());
        this.bbModel.set("isReferralBooking", this.viewModel.isReferralBooking() == "1" ? true : false);
        this.bbModel.set("isReferralBookingPaid", this.viewModel.isReferralBookingPaid() == "1" ? true : false);
        this.bbModel.set("referralPaymentDate", this.viewModel.referralPaymentDate());
        this.bbModel.set("easyPaisaTranNo", this.viewModel.easyPaisaTranNo());

        this.bbModel.set("bus", this.viewModel.busSelected().id);
        this.bbModel.set("driver", this.viewModel.driverSelected().id);
        this.bbModel.set("alkhidmatCentre", this.viewModel.alkhidmatCentreSelected().id);
        this.bbModel.set("paymentLocation", this.viewModel.paymentLocationSelected().id);
        this.bbModel.set("officerId", this.viewModel.cashierSelected().id);
        this.bbModel.set("paymentType", this.viewModel.paymentTypeSelected().id);
        this.bbModel.set("fuelAmount", this.viewModel.fuelAmount());


        this.trigger("PaymentSave", this.bbModel);
    }

    SaveCompleted(paymentResponse: any) {
        var result = new Backbone.Model(paymentResponse);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
            helper.ShowModalPopup("danger", "Payment", "Due to some technical reason payment have not been saved successfully!<br> Pelase try later");
        }
        else {
            helper.ShowModalPopup("success", "Payment", "Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
            //alert("Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
            location.href = "#viewBooking";
        }
        app.vent.trigger("Event:UpdateSummary");
    }
    onShow() {
        ko.applyBindings(this.viewModel, this.el);
    }

    onClose() {
        app.vent.off("Event:UpdateSummary");
    }
}

export class ViewModel {
    Id: any;
    bookingId: any;
    paymentType: any;
    pricing: any;
    amount: any;
    paymentLocation: any;
    officerId: any;
    receiptNo: any;
    extraAmountCharge: any;
    extraAmountReason: any;
    extraAmountReceipt: any;
    isReferral :  any;
    isReferralBooking: any;
    isReferralBookingPaid: any;
    referralPaymentDate: any;
    paymentStatus: any;
    easyPaisaTranNo: any;

    busList: any;
    fuelAmount :any;
    busSelected: any;
    driverList: any;
    driverSelected: any;
    alkhidmatCentreList: any;
    alkhidmatCentreSelected: any;
    paymentLocationList: any;
    paymentLocationSelected: any;
    cashierList: any;
    cashierSelected: any;
    paymentTypeList: any;
    paymentTypeSelected: any;
    isPaid: boolean;
    isCash: any;
    isEasyPaisa: any;
    paymentStatusDesc:any;
    isCancel: any;
    currentDisplay:any;

    constructor(busLsit, model) {
        if (model == undefined) {
            this.Id = ko.observable();
            this.bookingId = ko.observable();
            this.paymentType = ko.observable();
            this.pricing = ko.observable();
            this.amount = ko.observable();
            this.paymentLocation = ko.observable();
            this.officerId = ko.observable();
            this.receiptNo = ko.observable();
            this.extraAmountCharge = ko.observable();
            this.extraAmountReason = ko.observable();
            this.extraAmountReceipt = ko.observable();
            this.isReferralBooking = ko.observable();
            
            this.isReferralBookingPaid = ko.observable();
            this.referralPaymentDate = ko.observable();
            this.paymentStatus = ko.observable();
            
            this.isReferral = ko.computed({
                owner: this,
                read: () => {
                    if (this.isReferralBooking() == 1 && this.paymentStatus() != 1)
                        return true;
                    else
                        return false;
                }
            });

            this.easyPaisaTranNo = ko.observable();

            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            this.busList = ko.observableArray(busLsit);
            this.fuelAmount = ko.observable();
            this.busSelected = ko.observable();
            this.driverList = ko.observableArray(lookupResponse.driver);
            this.driverSelected = ko.observable();
            this.alkhidmatCentreList = ko.observableArray(lookupResponse.alkhidmatCentre);
            this.alkhidmatCentreSelected = ko.observable();
            this.paymentLocationList = ko.observableArray(lookupResponse.alkhidmatCentre);
            this.paymentLocationSelected = ko.observable();
            this.cashierList = ko.observableArray(lookupResponse.cashier);
            this.cashierSelected = ko.observable();
            this.paymentTypeList = ko.observableArray(lookupResponse.paymentType);
            this.paymentTypeSelected = ko.observable();
            this.currentDisplay = ko.observable();
            this.isEasyPaisa = ko.computed({
                owner: this,
                read: () => {
                    if (this.paymentTypeSelected() != undefined && this.paymentTypeSelected().id === 2 && this.easyPaisaTranNo().trim() == "") {
                        //this.paymentStatus("0");
                        return true;
                    } else {
                        //this.paymentStatus("1");
                        return false;
                    }
                }
            });
            this.isPaid = ko.computed({
                owner: this,
                read: () => {
                    //if paid
                    if (this.paymentStatus() == "1") {
                        return true;
                    } else {
                        return false;
                    }
                }
            });
            this.isCancel = ko.computed({
                owner: this,
                read: () => {
                    //if cancel
                    if (this.paymentStatus() == "2") {
                        return true;
                    } else {
                        return false;
                    }
                }
            });
            this.paymentStatusDesc = ko.computed({
                owner: this,
                read: () => {
                    //if paid
                    if (this.paymentStatus() == "1") {
                        this.currentDisplay("panel panel-default");
                        return "Paid";
                    }
                    else if (this.paymentStatus() == "2") {
                        this.currentDisplay("panel panel-danger");
                        return "Cancel";
                    }
                    else {
                        this.currentDisplay("panel panel-warning");
                        return "Unpaid";
                    }
                }
            });
            //this.amount = ko.computed({
            //    owner: this,
            //    read: () => {
            //        return 0;
            //    },
            //    write: (a) => {
            //        //return 0;
            //    }
            //});
        }
        else {
            this.Id = ko.observable(model.get("id"));
            this.bookingId = ko.observable(model.get("bookingId"));
            this.paymentType = ko.observable();
            this.pricing = ko.observable();
            this.amount = ko.observable(model.get("amount"));
            this.paymentLocation = ko.observable();
            this.officerId = ko.observable();
            this.receiptNo = ko.observable(model.get("receiptNo"));
            this.extraAmountCharge = ko.observable(model.get("extraAmountCharge"));
            this.extraAmountReason = ko.observable(model.get("extraAmountReason"));
            this.extraAmountReceipt = ko.observable(model.get("extraAmountReceipt"));
            this.isReferralBooking = ko.observable(model.get("isReferralBooking") ? "1" : "0");
            
            this.isReferralBookingPaid = ko.observable(model.get("isReferralBookingPaid") ? "1" : "0");

            if (model.get("referralPaymentDate") != "0001-01-01T00:00:00")
                this.referralPaymentDate = ko.observable(helper.FormatDateString(model.get("referralPaymentDate")));
            else
                this.referralPaymentDate  = ko.observable("");

            //this.referralPaymentDate = ko.observable(model.get("referralPaymentDate"));
            this.paymentStatus = ko.observable(model.get("paymentStatus"));

            this.isReferral = ko.computed({
                owner: this,
                read: () => {
                    if (this.isReferralBooking() == 1 && this.paymentStatus() != 1)
                        return true;
                    else
                        return false;
                }
            });

            this.easyPaisaTranNo = ko.observable(model.get("easyPaisaTranNo"));

            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            this.busList = ko.observableArray(busLsit);
            this.fuelAmount = ko.observable(model.get("fuelAmoun"));
            this.busSelected = ko.observable();
            this.driverList = ko.observableArray(lookupResponse.driver);
            this.driverSelected = ko.observable();
            this.alkhidmatCentreList = ko.observableArray(lookupResponse.alkhidmatCentre);
            this.alkhidmatCentreSelected = ko.observable();
            this.paymentLocationList = ko.observableArray(lookupResponse.alkhidmatCentre);

            var paymentLocation = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("paymentLocation") });
            //model.set("paymentLocationSelected", paymentLocation[0]);
            var paymentType = _.filter(lookupResponse.paymentType, (p) => { return p.id == model.get("paymentType") });
            //model.set("paymentTypeSelected", paymentType[0]);
            var cashier = _.filter(lookupResponse.cashier, (p) => { return p.id == model.get("officerId") });
            //model.set("cashierSelected", cashier[0]);

            this.paymentLocationSelected = ko.observable(paymentLocation[0]);
            this.cashierList = ko.observableArray(lookupResponse.cashier);
            this.cashierSelected = ko.observable(cashier[0]);
            this.paymentTypeList = ko.observableArray(lookupResponse.paymentType);
            this.paymentTypeSelected = ko.observable(paymentType[0]);
            this.currentDisplay = ko.observable();
            this.isEasyPaisa = ko.computed({
                owner: this,
                read: () => {
                    if (this.paymentTypeSelected() != undefined && this.paymentTypeSelected().id === 2 && this.easyPaisaTranNo().trim() == "") {
                        //this.paymentStatus("0");
                        return true;
                    } else {
                        //this.paymentStatus("1");
                        return false;
                    }
                }
            });
            this.isPaid = ko.computed({
                owner: this,
                read: () => {
                    //if paid
                    if (this.paymentStatus() == "1") {
                        return true;
                    } else {
                        return false;
                    }
                }
            });
            this.isCancel = ko.computed({
                owner: this,
                read: () => {
                    //if cancel
                    if (this.paymentStatus() == "2") {
                        return true;
                    } else {
                        return false;
                    }
                }
            });
            this.paymentStatusDesc = ko.computed({
                owner: this,
                read: () => {
                    //if paid
                    if (this.paymentStatus() == "1") {
                        this.currentDisplay("panel panel-default");
                        return "Paid";
                    }
                    else if (this.paymentStatus() == "2") {
                        this.currentDisplay("panel panel-danger");
                        return "Cancel";
                    }
                    else {
                        this.currentDisplay("panel panel-warning");
                        return "Unpaid";
                    }
                }
            });
            //this.amount = ko.computed({
            //    owner: this,
            //    read: () => {
            //        if (model != undefined && model.get("busVisits") != undefined && model.get("busVisits").length>0) {
            //            var sum = _.reduce(model.get("busVisits"), (memo, item) => memo + item.fuelAmount, 0);
            //            return sum;
            //        } else {
            //            return 0;
            //        }
            //    },
            //    write: (a) => {
            //        this.amount = a;
            //        //return a;
            //        //debugger;
            //        //if (model != undefined && model.get("busVisits") != undefined && model.get("busVisits").length > 0) {
            //        //    var sum = _.reduce(model.get("busVisits"), (memo, item) => memo + item.fuelAmount, 0);
            //        //    return sum;
            //        //} else {
            //        //    return 0;
            //        //}
            //    }
            //});

        }
    }

    setOptionDisable(option, item) {
        var modifiedDesc = item.description;
        if (item.description.indexOf('Booked - Paid') >= 0 || item.description.indexOf('Booked - Unpaid') >= 0) {
            modifiedDesc = item.description;
            ko.applyBindingsToNode(option, { disable: true, text: modifiedDesc }, item);
        }
        if (item.isOnMaintainance) {
            modifiedDesc = item.description + ' - Maintenance';
            ko.applyBindingsToNode(option, { disable: true, text: modifiedDesc }, item);
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
            "click .jsRemoveItem": () => this.RemoveItem()
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
