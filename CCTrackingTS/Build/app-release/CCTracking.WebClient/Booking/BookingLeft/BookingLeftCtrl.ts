/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./BookingLeftTmpl.html"/>

/// <amd-dependency path="printArea"/>


var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../App");
import helper = require("../../Helper");
import views = require("./BookingLeftView");
import dto = require("../../Dtos/BookingLeftDto");
import DAL = require("../../DAL/BookingLeft");
import RDto = require("../../Dtos/ReceiptContentDto");
import RDAL = require("../../DAL/ReceiptContent");

var printArea = require('printArea');

import bookingCtrl = require("../BookingCtrl");

export class BookingLeftCtrl extends helper.Controller {
    app: any;
    bookingLeftViewModel: views.BookingLeftViewModel;
    bookingLeftView: views.BookingLeftView;
    backboneModel: Backbone.Model;
    //collection: dto.Models.BookingLeftCollection;
    //collectionView: views.BookingLeftCollectionView;

    constructor() {
        super();
        
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.BookingLeftDto();
        this.bookingLeftViewModel = new views.BookingLeftViewModel(this.backboneModel, this);
        this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel });
              
       // this.collection = new dto.Models.BookingLeftCollection({});
        //this.collectionView = new views.BookingLeftCollectionView({ collection: this.collection });

    }

    Show() {
       // debugger;
       var appObj = this.app.request("AppGlobalSetting");
       var model = new dto.Models.BookingLeftDto();
       model.set("officerId", appObj.get("Id"));
       var deferredById = DAL.GetByCriteria(model);
            deferredById.done(p=> this.GetByCriteriaCompleted(p));      
    }

   

    GetByCriteriaCompleted(bookingLeftDto: dto.Models.BookingLeftDto) {
        //alert("GetByIdCompleted..");
        this.backboneModel = new Backbone.Model(bookingLeftDto["bookingLeftModel"]);
        var model = this.backboneModel;

        this.UIBinding(model);
        //this.bookingLeftView.viewModel = this.bookingLeftViewModel;
        this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel});

        this.bookingLeftView.on("ShowTotalBooking", () => this.ShowTotalBooking());
        this.bookingLeftView.on("ShowPaidBooking", () => this.ShowPaidBooking());
        this.bookingLeftView.on("ShowUnpaidBooking", () => this.ShowUnpaidBooking());
        this.bookingLeftView.on("ShowTodayBooking", () => this.ShowTodayBooking());
        //app = application.Application.getInstance();
        this.app.LeftRegion.show(this.bookingLeftView);

        //this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel });
    }

    ShowTotalBooking() {
        new bookingCtrl.BookingCtrl().GetAll(1);
    }

    ShowPaidBooking() {
        new bookingCtrl.BookingCtrl().GetAll(2);
    }

    ShowUnpaidBooking() {
        new bookingCtrl.BookingCtrl().GetAll(3);
    }
    ShowTodayBooking() {
        new bookingCtrl.BookingCtrl().GetAll(4);
    }

    UIBinding(model: any) {       
        this.bookingLeftViewModel.bbModel = model;
        this.bookingLeftViewModel.model = kb.viewModel(model);
        ko.cleanNode($(this.bookingLeftView.el)[0]);
        ko.applyBindings(this.bookingLeftViewModel, this.bookingLeftView.el);
    }
    ShowProgressbar() {
        var currentView = this.app.ModalRegion.currentView;
        //debugger;
        //if (this.app.ModalRegion != undefined && currentView != undefined)
        {
            //if (currentView.$el.find(".jsModal").length > 0) {

            //}
            //else
            {
                var alertModel = new Backbone.Model({ type: 'btn-', title: 'title', message: 'message' });
                var pview = new views.ProgressbarView({ model: alertModel });
                if (this.app.ModalRegion.currentView == undefined)
                {
                    this.app.ModalRegion.show(pview);
                }
            }

        }
    }

    HideProgressbar() {
        //debugger;
        var currentView = this.app.ModalRegion.currentView;
        //if (this.app.ModalRegion != undefined && currentView != undefined && currentView.$el.find(".jsProgressbar").length > 0)
        {
            this.app.ModalRegion.close();
            $(".modal-backdrop").remove();
        }
        //debugger;
        

    }

    ShowModalPopup(type, title, message) {
        //if (this.app.ModalRegion != undefined && this.app.ModalRegion.currentView != undefined) {
            //this.app.ModalRegion.stopListening();
            //this.app.ModalRegion.close();
            //this.app.ModalRegion.$el.modal('hide');
            //this.app.ModalAlertRegion.close();
            //this.app.ModalRegion.reset();
        //}
        //this.app.ModalRegion.close();
        //$(".modal-backdrop").remove();
        var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
        var view = new views.ModalPopupView({ model: alertModel });
        //this.app.ModalRegion.currentView = view;
        //if (this.app.ModalAlertRegion.currentView == undefined)
        {
            this.app.ModalAlertRegion.show(view);
        }
        

    }

    PrintReceipt(id) {
        //var receiptView = new views.ReceiptLayoutItemView({ model: model });
        //this.app.SubRegion.show(receiptView);
        ////this.app.ModalAlertRegion.show(receiptView);
        //receiptView.ExportToPdf();
        //var collection = new Backbone.Collection({
        //    centreDesc: "Head Office - Noor-ul-Huda Centre, Near Numayesh Chorangi",
        //    receiptNo: "112345",
        //    printDateAndTime: helper.FormatDateString(Date.now()),
        //    bookingId: "140",
        //    bookingDate: "01/01/2015",
        //    cashReceivedFrom: "Mr abc",
        //    totalAmountDue: helper.FormatMoney("2500"),
        //    userName: "Current logged in user",
        //});
        //var id = 148;
        var deferred= RDAL.GetById(id);
        deferred.done(p=> this.GetReceiptContentCompleted(p));      

        
        
        
        //this.ExportToPdf(receiptView.$el.find('#ReceiptLayout')[0]);
        //this.app.ModalAlertRegion.show(receiptView);
        //receiptView.ExportToPdf();
    }

    GetReceiptContentCompleted(response) {
        
        var collection = _.map(response["receiptContentList"], (item) => {
            var aDate = new Date(item.printDateTime);
            var appObj = this.app.request("AppGlobalSetting");

            item.bookingDate = helper.FormatDateString(item.bookingDate);
            item.printDateTime = helper.FormatDateString(item.printDateTime) + '    ' + aDate.getHours() + ':' + aDate.getMinutes();
            item.bookingAmount = helper.FormatMoney(item.bookingAmount);
            item.userName = appObj.get("FirstName") + ',' + appObj.get("LastName");
            return item;
        });
        
        var list = new Backbone.Collection(collection);
        var receiptView = new views.ReceiptLayoutCollectionView({ collection: list });
        this.app.ModalAlertRegion.show(receiptView);
       

        this.app.ModalAlertRegion.show(receiptView); receiptView.on("Event-PrintPDFReceipt", () => {
            this.ExportToPdf(receiptView.$el.find('#ReceiptLayout')[0]);
            this.app.ModalAlertRegion.close();
        });
    }  

    //ExportToPdf(printSelector) {
    //    //debugger;
    //    var pdf = new jsPDF('p', 'pt', 'a4');
    //    //var source = this.$el.find('#ReceiptLayout')[0];
    //    var source = printSelector;


    //    //, specialElementHandlers = {

    //    //    '#bypassme': function (element, renderer) {
    //    //        return true;
    //    //    }
    //    //}

    //    var margins = {
    //        top: 20,
    //        bottom: 60,
    //        left: 20,
    //        width: 522
    //    };
    //    pdf.fromHTML(
    //        source // HTML string or DOM elem ref.
    //        , margins.left // x coord
    //        , margins.top // y coord
    //        , {
    //            'width': margins.width // max width of content on PDF
    //            //, 'elementHandlers': specialElementHandlers
    //        },
    //        function (dispose) {
    //            // dispose: object with X, Y of the last line add to the PDF 
    //            //          this allow the insertion of new lines after html
    //            pdf.save('CCTRacking-Receipt.pdf');
    //        },
    //        margins
    //        );
    //}
}
