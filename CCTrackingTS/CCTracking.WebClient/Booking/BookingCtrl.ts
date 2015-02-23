﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="selectize"/>
/// <amd-dependency path="text!./BookingTmpl.html"/>

var _ = require("underscore");
var ko = require("knockout");
var selectize = require("selectize");
import application = require("../App");
import helper = require("../Helper");
import views = require("./BookingView");
import dto = require("CCTracking.WebClient/Dtos/BookingDto");
import DAL = require("../DAL/Booking");

var app;
export class BookingCtrl extends helper.Controller {
    private bookingViewModel: views.BookingViewModel;
    bookingView: views.BookingView;
    constructor() {
        app = application.Application.getInstance();
        super();
    }
    //Show() {
    //    //TODO: model fill from server..        
    //    //if localStorage is empty then call from db        
    //    //var a = localStorage.getItem('lookupResponse');
        
    //    var url = window.location.href;
    //    //update booking
    //    if (url.indexOf("id=") > -1) {
    //        //alert(url.substring(url.indexOf("id=") + 3, url.length));
    //        var id = (url.substring(url.indexOf("id=") + 3, url.length));
    //        var deferredById = DAL.GetById(id);
    //        deferredById.done(p=> this.GetByIdCompleted(p));

    //    }
    //    //add booking
    //    else {
    //        this.LoadCompleted(JSON.parse(localStorage.getItem('lookupResponse')));
    //    }
    //}

    Show() {
        this.LoadCompleted(JSON.parse(localStorage.getItem('lookupResponse')));
    }

    EditBooking(id) {
        var deferredById = DAL.GetById(id);
        deferredById.done(p=> this.GetByIdCompleted(p));
    }

    GetByIdCompleted(bookingResponse: dto.Models.BookingResponse) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var model = new Backbone.Model(bookingResponse["bookingModel"]);

        model.set("causeOfDeathList", lookupResponse.causeOfDeath);
        model.set("landmarkList", lookupResponse.landmark);
        model.set("busPointList", lookupResponse.landmark);
        model.set("unionCouncilList", lookupResponse.unionCouncil);
        model.set("townList", lookupResponse.town);
        model.set("graveyardList", lookupResponse.graveyard);
        model.set("busDetailsList", lookupResponse.bus);
        model.set("pickupTimeSlotList", lookupResponse.timeSlot);
        model.set("returnTimeSlotList", lookupResponse.timeSlot);
        model.set("prayersList", lookupResponse.prayers);
        model.set("prayersList", lookupResponse.prayers);
        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);


        var causeOfDeath = _.filter(lookupResponse.causeOfDeath, (p) => { return p.id == model.get("causeOfDeath") });
        var landmark = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("landmarkId") });
        var busPoint = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("busPoint") });
        var unionCouncil = _.filter(lookupResponse.unionCouncil, (p) => { return p.id == model.get("unionCouncilId") });
        var town = _.filter(lookupResponse.town, (p) => { return p.id == model.get("townId") });
        var graveyard = _.filter(lookupResponse.graveyard, (p) => { return p.id == model.get("graveyardId") });
        var busDetail = _.filter(lookupResponse.bus, (p) => { return p.id == model.get("busDetailId") });

        var pickupTime = _.filter(lookupResponse.timeSlot, (p) => { return p.id == model.get("pickupTime") });
        var returnTime = _.filter(lookupResponse.timeSlot, (p) => { return p.id == model.get("returnTime") });
        var prayer = _.filter(lookupResponse.prayers, (p) => { return p.id == model.get("namazEJanazaHeldIn") });

        var alkhidmatCentre = _.filter(lookupResponse.alkhidmatCentre, (p) => { return p.id == model.get("alkhidmatCentreId") });

        model.set("causeOfDeathSelected", causeOfDeath[0]);//model.get("causeOfDeath")
        //model.set("landmarkIdSelected", landmark[0]);
        model.set("busPointSelected", busPoint[0]);
        model.set("unionCouncilIdSelected", unionCouncil[0]);
        model.set("townIdSelected", town[0]);
        model.set("graveyardIdSelected", graveyard[0]);
        model.set("busDetailIdSelected", busDetail[0]);
        model.set("deseasedGender", model.get("deseasedGender").toString());
        model.set("alkhidmatCentreSelected", alkhidmatCentre[0]);


        model.set("pickupTimeSlotSelected", pickupTime[0]);
        model.set("returnTimeSlotSelected", returnTime[0]);
        model.set("prayersSelected", prayer[0]);

        model.set("isReferralBooking", model.get("isReferralBooking") ? "1" : "0");

        model.set("pickupDate", helper.FormatDateString(model.get("pickupDate")));
        this.bookingViewModel = new views.BookingViewModel(model, this);
        this.bookingView = new views.BookingView({ viewModel: this.bookingViewModel });
        this.bookingView.on("SaveBooking", () => this.Save(this.bookingViewModel.bbModel));
        this.layout = app.AppLayout;
        app.MainRegion.show(this.bookingView);

        if (busPoint[0] != undefined) {
            this.bookingView.$el.find("#txtBusPoint").append(busPoint[0].description);
        }
    }

    

    LoadCompleted(lookupResponse) {
        var model = new dto.Models.BookingResponse();

        model.set("contactName", "");
        model.set("contactMobile", "");
        model.set("contactNic", "");
        model.set("deseasedName", "");
        model.set("deseasedAge", "");
        model.set("deseasedGender", "");

        model.set("causeOfDeathList", lookupResponse.causeOfDeath);
        model.set("causeOfDeathSelected", "");

        model.set("address", "");
        model.set("landmarkIdSelected", "");
        model.set("landmarkList", lookupResponse.landmark);
        model.set("busPointList", lookupResponse.landmark);
        model.set("busPointSelected", "");

        model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
        model.set("alkhidmatCentreSelected", "");

        model.set("unionCouncilList", lookupResponse.unionCouncil);
        model.set("unionCouncilIdSelected", "");
        model.set("townList", lookupResponse.town);
        model.set("townIdSelected", "");
        model.set("pickupDate", "");
        model.set("pickupTime", "");
        model.set("returnTime", "");
        model.set("graveyardList", lookupResponse.graveyard);
        model.set("graveyardIdSelected", "");

        model.set("pickupTimeSlotList", lookupResponse.timeSlot);
        model.set("pickupTimeSlotSelected", "");
        model.set("returnTimeSlotList", lookupResponse.timeSlot);
        model.set("returnTimeSlotSelected", "");
        model.set("prayersList", lookupResponse.prayers);
        model.set("prayersSelected", "");

        model.set("namazEJanazaHeldIn", "");
        model.set("namazEJanazaLocation", "");
        model.set("masjidName", "");
        model.set("otherDetail", "");
        model.set("isReferralBooking", "");
        model.set("referralName", "");
        model.set("referralDetail", "");

        this.bookingViewModel = new views.BookingViewModel(model, this);
        this.bookingView = new views.BookingView({ viewModel: this.bookingViewModel });
        this.bookingView.on("SaveBooking", () => this.Save(this.bookingViewModel.bbModel));

        //this.bookingView.listenTo(this.bookingView, "ExportToPdf", (id) => { alert('id-' + id); });
        //this.bookingView.on("ExportToPdf", (id) => { alert(id); });

        this.layout = app.AppLayout;
        app.MainRegion.show(this.bookingView);

    }

    GetAll(bookingFilterType= 1) {
       
        if (bookingFilterType == undefined)
            bookingFilterType = 1; //  allbooking
        var deferred = DAL.GetAll(bookingFilterType);
        //deferred.done(p=> new views.BookingView().GetAllCompleted(p));
        deferred.done(p=> this.GetAllCompleted(p));
    }

   
    GetAllCompleted(bookingResponse: any) {
        app = application.Application.getInstance();
        var bookings = _.map(bookingResponse["bookingList"], (item) => {
            if (item.pickupDate != "0001-01-01T00:00:00")
                item.pickupDate = helper.FormatDateString(item.pickupDate);
            else
                item.pickupDate = "";
            return item;
        });
        var bookingCollection = new dto.Models.BookingResponseCollection(bookings);
        var collectionView = new views.BookingCollectionView({ collection: bookingCollection });
        collectionView.listenTo(collectionView, "itemview:ExportToPdf", (view, id) => {
            helper.PrintReceipt(id);
        });
        collectionView.listenTo(collectionView, "itemview:Event:EditBooking", (views, id) => {
            this.EditBooking(id);
        });
        collectionView.listenTo(collectionView, "itemview:Event:EditPayment", (views, id) => {
            require(['./../Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().EditPayment(id); });
        });
        collectionView.listenTo(collectionView, "itemview:Event:EditRefund", (views, id) => {
            require(['./../RefundBooking/RefundBookingCtrl'], (p) => { new p.RefundBookingCtrl().EditRefund(id); });
        });
        collectionView.listenTo(collectionView, "itemview:Event:EditExtraCharge", (views, id) => {
            require(['./../ExtraCharge/ExtraChargeCtrl'], (p) => { new p.ExtraChargeCtrl().EditExtraCharge(id); });
        });
        
        app.MainRegion.show(collectionView);
    }

    //Add(booking: dto.Models.BookingRequest) {
    Save(booking: any) {
        //console.log("Save::Start " + new Date());
        var appObj = app.request("AppGlobalSetting");
        booking.set("modifiedBy", appObj.get("Id"));
        //reset actual id - match with DAL object's properties
        booking.set("causeOfDeath", booking.get("causeOfDeathSelected").id);
        //booking.set("landmarkId", booking.get("landmarkIdSelected").id);
        booking.set("busPoint", booking.get("busPointSelected").id);
        booking.set("unionCouncilId", booking.get("unionCouncilIdSelected").id);
        booking.set("townId", booking.get("townIdSelected").id);
        booking.set("graveyardId", booking.get("graveyardIdSelected").id);

        booking.set("pickupTime", booking.get("pickupTimeSlotSelected").id);
        booking.set("returnTime", booking.get("returnTimeSlotSelected").id);
        booking.set("namazEJanazaHeldIn", booking.get("prayersSelected").id);

        booking.set("alkhidmatCentreId", booking.get("alkhidmatCentreSelected").id);
        

        if (booking.get("isReferralBooking") == "1") {
            if (booking.get("referralName").trim().length == 0) {
                helper.ShowModalPopup("danger", "Booking", "Please enter referral name.");
                return;
            }
        }
        booking.set("isReferralBooking", booking.get("isReferralBooking") == "1" ? true : false);

        var deferred = DAL.Save(this.GetMinimalRequest(booking));
        //TODO: call controller from here...
        
        deferred.done(p => {
            this.SaveCompleted(p);
        });
        //setTimeout(() => { alert('then'); }, 1000);
    }

    GetMinimalRequest(booking) {
        var request = new dto.Models.BookingRequest();
        request.set("alkhidmatCentreId", booking.get("alkhidmatCentreId"));
        request.set("address", booking.get("address"));
        request.set("busPoint", booking.get("busPoint"));
        request.set("causeOfDeath", booking.get("causeOfDeath"));
        request.set("contactMobile", booking.get("contactMobile"));
        request.set("contactName", booking.get("contactName"));
        request.set("contactNic", booking.get("contactNic"));
        request.set("createdBy", booking.get("createdBy"));
        request.set("createdDate", booking.get("createdDate"));
        request.set("deseasedAge", booking.get("deseasedAge"));
        request.set("deseasedGender", booking.get("deseasedGender"));
        request.set("deseasedName", booking.get("deseasedName"));
        
        //request.set("entityType", booking.get("entityType"));
        //request.set("errorMessage", booking.get("errorMessage"));
        request.set("graveyardId", booking.get("graveyardId"));
        request.set("id", booking.get("id"));
        request.set("isActive", booking.get("isActive"));
        request.set("isReferralBooking", booking.get("isReferralBooking"));
        request.set("landmarkId", booking.get("landmarkId"));
        request.set("masjidName", booking.get("masjidName"));
        request.set("modifiedBy", booking.get("modifiedBy"));
        request.set("modifiedDate", booking.get("modifiedDate"));
        request.set("namazEJanazaHeldIn", booking.get("namazEJanazaHeldIn"));
        request.set("namazEJanazaLocation", booking.get("namazEJanazaLocation"));
        request.set("operationType", booking.get("operationType"));
        request.set("otherDetail", booking.get("otherDetail"));
        request.set("pickupDate", booking.get("pickupDate"));
        request.set("pickupTime", booking.get("pickupTime"));
        request.set("referralDetail", booking.get("referralDetail"));
        request.set("referralName", booking.get("referralName"));
        request.set("returnTime", booking.get("returnTime"));
        request.set("townId", booking.get("townId"));
        request.set("unionCouncilId", booking.get("unionCouncilId"));

        return request;
    }

    SaveCompleted(bookingResponse: any) {
        var result = new Backbone.Model(bookingResponse);
        if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
            helper.ShowModalPopup("danger", "Booking", "Due to some technical reason booking have not been saved successfully!<br> Pelase try later");
        }
        else {
            helper.ShowModalPopup("success", "Booking", "Record has been saved successfully with Booking ID : " + bookingResponse["id"]);
            //location.href = "#payment?id=" + result.get("id");
            require(['./../Payment/PaymentCtrl'], (p) => { new p.PaymentCtrl().EditPayment(result.get("id")); });
        }
    }
}
