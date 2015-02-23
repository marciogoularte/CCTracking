/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./PaymentTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../App");
import helper = require("../Helper");
import views = require("./PaymentView");
import dto = require("CCTracking.WebClient/Dtos/PaymentDto");
import busVisitDto = require("CCTracking.WebClient/Dtos/BusVisitDto");
import DAL = require("../DAL/Payment");

var app;


export class PaymentCtrl extends helper.Controller {
    private paymentViewModel: views.PaymentViewModel;
    paymentView: views.PaymentView;
    busVisitCollection: any;
    backboneCollection: any;
    busVisitCollectionView: views.BusVisitCollectionView;
    idCounter: number;
    constructor() {
        app = application.Application.getInstance();
        super();
        //this.busVisitCollection = [
        //    //{ busVisitId: 1, centreId: 'center-b', busId: 'bus-b', driverId: 'driver-b' },
        //    //{ busVisitId: 2, centreId: 'center-c', busId: 'bus-c', driverId: 'driver-c' }
        //];
        this.backboneCollection = new busVisitDto.Models.BusVisitCollection();
        //this.busVisitCollection.push({ busVisitId:3,  centreId: 'center-a', busId: 'bus-a', driverId: 'driver-a' });
        this.backboneCollection = this.busVisitCollection;
        this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
        this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", (currentView, busId, centreId, driverId) => this.RemoveBusVisitItem(busId, centreId, driverId));
        this.busVisitCollectionView.on("itemview:UpdateBusVisitItem", (currentView, model) => {
            this.UpdateBusVisitItem(model);
            var selectedBus = this.paymentView.viewModel.busList();
            var bus = _.filter(selectedBus, (p) => { return p.id == model.get("busId"); });
            this.paymentView.viewModel.busSelected(bus[0]);
        });
        //this.paymentViewModel = new views.PaymentViewModel(new Backbone.Model(), this);
        this.idCounter = 1;
    }

    //Show() {
    //    var url = window.location.href;
    //    var id = "0";
    //    //update payment
    //    if (url.indexOf("id=") > -1) {
    //        //alert(url.substring(url.indexOf("id=") + 3, url.length));
    //        id = (url.substring(url.indexOf("id=") + 3, url.length));
    //    }
    //    var deferredBusAvailability = DAL.GetBusAvialability(id);
    //    deferredBusAvailability.done(p => {
    //        this.FillBusAvailability(p, id);
    //    });
    //    //add payment
    //    //else {
    //    //    var deferredBusAvailability = DAL.GetBusAvialability(0);
    //    //    deferredBusAvailability.done(p => {
    //    //        this.LoadCompleted();    
    //    //    });
            
    //    //}
    //}

    EditPayment(id: number) {
        //alert("aaa" + id);
        var deferredBusAvailability = DAL.GetBusAvialability(id);
        deferredBusAvailability.done(p => { this.FillBusAvailability(p, id); });
    }

    FillBusAvailability(busList: any, id) {
        var busAvailability = busList["busAvailabilityList"];
        if (id > 0) {
            var deferred = DAL.GetById(id);
            deferred.done(p => this.GetByIdCompleted(p, busAvailability));
        } else {
            this.LoadCompleted(busAvailability);    
        }

    }

//GetByIdCompleted(paymentResponse: dto.Models.PaymentResponse) {
    GetByIdCompleted(paymentResponse: any,busList) {
        //var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var model = new Backbone.Model(paymentResponse["paymentModel"]);
        //booking id
        
        //var url = window.location.href;
        //var id = (url.substring(url.indexOf("id=") + 3, url.length));
        //if (model.get("id") === undefined || model.get("id") === 0) {
        //    this.InitalizeKoBinding(model);
        //}

        model.set("bookingId", model.get("bookingId"));
        this.layout = app.AppLayout;
        this.paymentView = new views.PaymentView(busList,model);
        //var vm = this.paymentView.viewModel;

        this.paymentView.on("BusVisitAddItem", (bookingId, alkhidmatCentre, driver, bus, fuelAmount) => this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount));
        this.paymentView.on("BusVisitUpdateItem", (bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) => this.ModifyBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason));
        this.paymentView.on("PaymentSave", (bbmodel) => this.Save(bbmodel));
        //var visits = model.get("busVisits");
        var visits = _.map(model.get("busVisits"), (item) => {
            item.fuelAmount = helper.FormatMoney(item.fuelAmount);
            return item;
        });
        this.backboneCollection = new Backbone.Collection(visits);

        this.busVisitCollectionView = new views.BusVisitCollectionView({ collection: this.backboneCollection });
        this.busVisitCollectionView.on("itemview:BusVisitRemoveItem", (currentView, busId, centreId, driverId) => this.RemoveBusVisitItem(busId, centreId, driverId));
        this.busVisitCollectionView.on("itemview:UpdateBusVisitItem", (currentView, amodel) => {
            this.UpdateBusVisitItem(amodel);
            var selectedBus = this.paymentView.viewModel.busList();
            var bus = _.filter(selectedBus, (p) => { return p.id == amodel.get("busId"); });
            this.paymentView.viewModel.busSelected(bus[0]);
        });

        app.MainRegion.show(this.paymentView);
        app.SubRegion.reset();
        app.SubRegion.show(this.busVisitCollectionView);
    }

    InitalizeKoBinding(model) {
        model.set("amount", "");
        model.set("busChangeReason", "");
        model.set("receiptNo", "");
        model.set("easyPaisaTranNo", "");
        model.set("extraAmountCharge", "");
        model.set("extraAmountReason", "");
        model.set("extraAmountReceipt", "");
    }

    LoadCompleted(busList:any) {

        this.layout = app.AppLayout;
        this.paymentView = new views.PaymentView(busList);

        this.paymentView.on("BusVisitAddItem", (bookingId, alkhidmatCentre, driver, bus, fuelAmount) => this.AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount));
        this.paymentView.on("BusVisitUpdateItem", (bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) => this.ModifyBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason));
        this.paymentView.on("PaymentSave", (bbmodel) => this.Save(bbmodel));
        app.MainRegion.show(this.paymentView);
        app.SubRegion.reset();
        app.SubRegion.show(this.busVisitCollectionView);
    }

    

    AddBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount) {
        if (bus == undefined || bus.length <= 0) {
            helper.ShowModalPopup("danger", "Bus Info", "Please enter valid  vehicle no.!");
            return;
        }
        else if (fuelAmount == "" || fuelAmount == undefined || fuelAmount === 0) {
            helper.ShowModalPopup("danger", "Bus Info", "Please enter valid amount!");
            return;
        }
        
        var counter = this.idCounter++;
        var busExist = this.backboneCollection.findWhere({ busId: bus.id });
        var driverExist = this.backboneCollection.findWhere({ driverId: driver.id });

        

        if (busExist == undefined && driverExist == undefined) {
            this.backboneCollection.push(new busVisitDto.Models.BusVisitDto({
                busVisitId: counter,
                centreId: alkhidmatCentre.id, centreDesc: alkhidmatCentre.description,
                busId: bus.id, busDesc: bus.description,
                driverId: driver.id, driverDesc: driver.description,
                visitTypeId: "2",
                //isAvailableForBooking: false,
                //isAvailableForFutureBooking: false,
                bookingId: bookingId,
                fuelAmount: fuelAmount.replace(",","")
            }));
            
            this.busVisitCollectionView.collection = this.backboneCollection;

            var sum = _.reduce(this.backboneCollection.models, (memo, item) => memo + parseFloat(item.get("fuelAmount").replace(",","")), 0);
            this.paymentView.viewModel.amount(helper.FormatMoney(sum));
        }
        else {
            helper.ShowModalPopup("danger", "Bus Info", "Entry already exists!");
        }

    }

    ModifyBusVisitItem(bookingId, alkhidmatCentre, driver, bus, fuelAmount, busChangeReason) {
        if (bus == undefined || bus.length <= 0) {
            helper.ShowModalPopup("danger", "Bus Info", "Please enter valid  vehicle no.!");
            return;
        }
        else if (fuelAmount == "" || fuelAmount == undefined || fuelAmount === 0) {
            helper.ShowModalPopup("danger", "Bus Info", "Please enter valid amount!");
            return;
        }
        if (busChangeReason == "" || busChangeReason == undefined) {
            helper.ShowModalPopup("danger", "Bus Info", "Please enter reason for bus change!");
            return;
        }
        var counter = this.idCounter++;
        var busExist = this.backboneCollection.findWhere({ busId: bus.id });
        var driverExist = this.backboneCollection.findWhere({ driverId: driver.id });
        

        if (busExist != undefined && driverExist != undefined) {
           var arr = _.map(this.backboneCollection.models, (item) => {
                if (item.get("busId") == bus.id && item.get("driverId") == driver.id) {
                    item.set("centreId",alkhidmatCentre.id);
                    item.set("centreDesc",alkhidmatCentre.description);
                    item.set("busId", bus.id);
                    item.set("busDesc",bus.description);
                    item.set("driverId",driver.id);
                    item.set("driverDesc", driver.description);
                    item.set("visitTypeId","2");
                    //isAvailableForBooking: false,
                    //isAvailableForFutureBooking: false,
                    item.set("bookingId",bookingId);
                    item.set("fuelAmount", fuelAmount.replace(",", ""));
                    item.set("busChangeReason", busChangeReason);
                }
                return item;
            });
            //this.busVisitCollectionView.collection = this.backboneCollection;
            this.backboneCollection.reset(arr);
            this.busVisitCollectionView.collection = this.backboneCollection;

            var sum = _.reduce(this.backboneCollection.models, (memo, item) => memo + parseFloat(item.get("fuelAmount").replace(",","")), 0);
            this.paymentView.viewModel.amount(helper.FormatMoney(sum));
        }
        else {
            helper.ShowModalPopup("danger", "Bus Info", "You cannot modify centre & bus info");
        }
        var currentView = this.paymentView.$el;
        currentView.find("#ddlCentre").prop("disabled", false);
        currentView.find("#ddlBusDetails").prop("disabled", false);
        currentView.find("#lnkAdd").show();
        currentView.find("#lnkUpdate").hide();
        this.paymentView.viewModel.busChangeReason("");


    }
    RemoveBusVisitItem(busId, centreId, driverId) {
        this.backboneCollection.remove(this.backboneCollection.findWhere({ busId: busId, centreId: centreId, driverId: driverId }));
        var sum = _.reduce(this.backboneCollection.models, (memo, item) => memo + parseFloat(item.get("fuelAmount").replace(",","")), 0);
        this.paymentView.viewModel.amount(helper.FormatMoney(sum));
    }

    UpdateBusVisitItem(model) {
        
        //var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        //debugger;
        //var centre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("centreId"); });
        var selectedCentre = this.paymentView.viewModel.alkhidmatCentreList();
        var selectedDriver = this.paymentView.viewModel.driverList();
        var selectedBus = this.paymentView.viewModel.busList();
        var centre = _.filter(selectedCentre, (p) => { return p.id == model.get("centreId"); });
        var driver = _.filter(selectedDriver, (p) => { return p.id == model.get("driverId"); });
        

        //var a = this.paymentView.viewModel.alkhidmatCentreSelected().id;
        this.paymentView.viewModel.fuelAmount(model.get("fuelAmount"));
        this.paymentView.viewModel.busChangeReason(model.get("busChangeReason"));
        this.paymentView.viewModel.driverSelected(driver[0]);
        this.paymentView.viewModel.alkhidmatCentreSelected(centre[0]);
        //setTimeout(() => {
        //    this.paymentView.viewModel.busSelected(bus[0]);
        //}, 1000);
        var currentView = this.paymentView.$el;
        currentView.find("#ddlCentre").prop("disabled", true);
        currentView.find("#ddlBusDetails").prop("disabled", true);
        currentView.find("#lnkAdd").hide();
        currentView.find("#lnkUpdate").show();
        //this.paymentView.viewModel.alkhidmatCentreSelected(this.paymentView.viewModel.alkhidmatCentreList()[3]);
    }

  
    Save(payment: any) {
        
        //reset actual id - match with DAL object's properties
        if (this.backboneCollection.length < 1) {
            helper.ShowModalPopup("danger", "Bus Details", "Please add bus details");
            return;
        }
        if (payment.get("isReferralBooking"))
        {
            if (payment.get("isReferralBookingPaid") && (payment.get("referralPaymentDate") == undefined || payment.get("referralPaymentDate") == ""))
            {
                helper.ShowModalPopup("danger", "Bus Details", "Please enter Referral Booking date.");
                return;
            }
        }
        var appObj = app.request("AppGlobalSetting");
        payment.set("modifiedBy", appObj.get("Id"));

        //remove formatting from amount
        payment.set("amount", payment.get("amount").replace(",", ""));
        //payment.set("fuelAmount", payment.get("fuelAmount").replace(",", ""));
        var visitCollection = this.RemoveAmountFormatting(this.backboneCollection.toJSON());
        

        payment.set("busVisits", visitCollection);
        //payment.set("busVisits", this.backboneCollection.toJSON());
        //payment.set("busVisits", this.GetMinimalRequest());
        
        var deferred = DAL.Save(payment);

        //TODO: call controller from here...
        //deferred.done(p=> new views.PaymentView(null).SaveCompleted(p));
        deferred.done(p=> this.SaveCompleted(p));
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
        //app.vent.trigger("Event:UpdateSummary");
    }

    RemoveAmountFormatting(aCollection) {
        var visits = null;
        if (aCollection != undefined) {
            visits = _.map(aCollection, (item) => {
                item.fuelAmount = item.fuelAmount.replace(",", "");
                return item;
            });
        }
        return visits;
    }


    GetMinimalRequest() {
        //var visits = this.backboneCollection.toJSON();
        var visits = [];
        for(var i=0;i<this.backboneCollection.length;i++) {
            var visit = {
                centreId: this.backboneCollection.models[i].get("centreId"), 
                busId: this.backboneCollection.models[i].get("busId"), 
                driverId: this.backboneCollection.models[i].get("driverId"), 
                visitTypeId: this.backboneCollection.models[i].get("visitTypeId"), 
                bookingId: this.backboneCollection.models[i].get("bookingId"), 
                fuelAmount: this.backboneCollection.models[i].get("fuelAmount")
            };
            visits.push(visit);
        }
        return visits;
    }
}