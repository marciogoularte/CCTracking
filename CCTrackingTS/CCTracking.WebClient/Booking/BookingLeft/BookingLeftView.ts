/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="text!CCTracking.WebClient/Booking/BookingLeft/BookingLeftTmpl.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/ModalPopup.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/Progressbar.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/BusDetailModalPopup.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/ReceiptLayout.html"/>
/// <amd-dependency path="marionette"/>


//var Marionette = require("marionette");

import APP = require("../../App");
var _ = require('underscore');
import helper = require("../../Helper");
var templateView = require("text!CCTracking.WebClient/Booking/BookingLeft/BookingLeftTmpl.html");
var popupView = require("text!CCTracking.WebClient/Common/Templates/ModalPopup.html");
var pbarView = require("text!CCTracking.WebClient/Common/Templates/Progressbar.html");
var busDeatilView = require("text!CCTracking.WebClient/Common/Templates/BusDetailModalPopup.html");
var receiptLayoutView = require("text!CCTracking.WebClient/Common/Templates/ReceiptLayout.html");

var app;


// View Model
export class BookingLeftViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

export class BookingLeftView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;
        app = APP.Application.getInstance();
        this.events = {
            "click .jsTodayBooking": "ShowTodayBooking",
            "click .jsTotalBooking": "ShowTotalBooking",
            "click .jsPaidBooking": "ShowPaidBooking",
            "click .jsUnpaidBooking": "ShowUnpaidBooking",
        }
        //app.vent.on("Event:UpdateSummary", () => {
        //    alert("updated...");
        //});
        super(options);
        //this.listenTo(this, "TestEvent", () => this.TestFunction());
    }

    ShowTotalBooking(e) {
       // new bookingCtrl.BookingCtrl().GetAll(1);
        e.preventDefault();
        this.trigger("ShowTotalBooking");
    }

    ShowPaidBooking(e) {
        //new bookingCtrl.BookingCtrl().GetAll(2);
        e.preventDefault();
        this.trigger("ShowPaidBooking");
    }

    ShowUnpaidBooking(e) {
       // new bookingCtrl.BookingCtrl().GetAll(3);
        e.preventDefault();
        this.trigger("ShowUnpaidBooking");
    }
    ShowTodayBooking(e) {
       // new bookingCtrl.BookingCtrl().GetAll(4);
        e.preventDefault();
        this.trigger("ShowTodayBooking");
    }
}

export class ModalPopupView extends helper.Views.ItemView {
    constructor(options?) {
        //debugger;
        //var modalPopupView = require("text!./Common/Templates/ModalPopup.html");
        this.template = popupView.getOuterHTML("#Modal");
        super(options);
        //this.model = options.model;
    }
}

export class ProgressbarView extends helper.Views.ItemView {
    constructor(options?) {
        //var progressBarView = require("text!./Common/Templates/Progressbar.html");
        this.template = pbarView.getOuterHTML("#Progressbar");
        super(options);
        //this.model = options.model;
    }
}

export class BusDetailModalPopupCollectionView extends helper.Views.CompositeView {
    constructor(options?) {
        this.itemView = BusDetailModalPopupView;
        //var girdTemplate = busDeatilView
        this.template = busDeatilView.getOuterHTML("#ModalGrid");
        this.itemViewContainer = "#ItemContainer";
        super(options);
    }
}

export class BusDetailModalPopupView extends helper.Views.ItemView {
    constructor(options?) {
        //var modalPopupView = require("text!./Common/Templates/BusDetailModalPopup.html");
        this.template = busDeatilView.getOuterHTML("#Modal");
        this.tagName = "div";
        super(options);
        //this.model = options.model;
    }
}

export class ReceiptLayoutCollectionView extends helper.Views.CompositeView {
    constructor(options?) {
        this.itemView = ReceiptLayoutItemView;
        this.template = receiptLayoutView.getOuterHTML("#ReceiptTemplate");
        this.itemViewContainer = "#ItemContainer";
        this.events = {
            "click .jsPrintDocument": () => {                
                helper.PrintDocument();
                this.close();
            },
            "click .jsPDFReceipt": () => {
                this.trigger("Event-PrintPDFReceipt");
            }
        }
        super(options);
    }
}


export class ReceiptLayoutItemView extends helper.Views.ItemView {
    constructor(options?) {
        this.template = receiptLayoutView.getOuterHTML("#ReceiptContainer");
        super(options);
    }
    
    //ExportToPdf() {
    //    var pdf = new jsPDF('p', 'pt', 'letter');
    //    var source = this.$el.find('#ReceiptLayout')[0];


    //    //, specialElementHandlers = {

    //    //    '#bypassme': function (element, renderer) {
    //    //        return true;
    //    //    }
    //    //}

    //    var margins = {
    //        top: 80,
    //        bottom: 60,
    //        left: 40,
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

