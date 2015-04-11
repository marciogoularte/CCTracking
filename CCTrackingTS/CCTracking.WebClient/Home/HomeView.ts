/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="jsPDF"/>
/// <amd-dependency path="text!./Home.html"/>

var _ = require('underscore');
var jsPDF = require('jsPDF');
import helper = require("../Helper");
import homeCtrl = require("./HomeCtrl");
import printCtrl = require("../Print/PrintCtrl");
var templateView = require("text!./Home.html");
import application = require("../App");
var app;

export class HomeItemView extends helper.Views.ItemView {
    //viewModel: ViewModel;
    //bbModel: Backbone.Model;
    constructor(options?) {
        this.template = templateView.getOuterHTML("#Home");
        //this.viewModel = new ViewModel(options);
        //this.bbModel = new Backbone.Model();
        //var model = new helper.ReceiptLayoutDto({
        //    centreDesc: "Head Office - Noor-ul-Huda Centre, Near Numayesh Chorangi",
        //    receiptNo: "112345",
        //    printDateAndTime: helper.FormatDateString(Date.now()),
        //    bookingId: "140",
        //    bookingDate: "01/01/2015",
        //    cashReceivedFrom: "Mr abc",
        //    totalAmountDue: helper.FormatMoney("2500"),
        //    userName: "Current logged in user",
        //});
        
        var collection = new Backbone.Collection({
            centreDesc: "Head Office - Noor-ul-Huda Centre, Near Numayesh Chorangi",
            receiptNo: "112345",
            printDateAndTime: helper.FormatDateString(Date.now()),
            bookingId: "140",
            bookingDate: "01/01/2015",
            cashReceivedFrom: "Mr abc",
            totalAmountDue: helper.FormatMoney("2500"),
            userName: "Current logged in user",
        });

        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel",
            "click .jsPrintReceipt": () => {
                helper.PrintReceipt(collection);
                //alert('print');
                //this.ExportToPdf();
            }
        }
        super(options);
    }
    //ExportToPdf() {
    //    var pdf = new jsPDF('p', 'pt', 'letter');
    //    var source = this.$el.find('#receiptLayout')[0];


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
    //        function(dispose) {
    //            // dispose: object with X, Y of the last line add to the PDF 
    //            //          this allow the insertion of new lines after html
    //            pdf.save('Test.pdf');
    //        },
    //        margins
    //    );
    //}
}

export class SearchCollectionView extends helper.Views.CompositeView {
    datatable: any;
    constructor(options?) {
        //debugger;
        this.itemView = SearchItemView;
        //this.model = new Backbone.Model({ "getPropA": 12345 });
        this.template = templateView.getOuterHTML("#gridTemplate");
        this.itemViewContainer = "#tblSearch tbody";
        this.events = {
            "click .jsSearch": "Search",
            "click .jsCancel": "Cancel",
            "click .jsPrintDocument": "PrintDoc"
        }
        this.templateHelpers = {
            getTotalAmount: () => {
                    return "1111";
            }
        }
        super(options);
    }

    PrintDoc() {
        //helper.PrintDocumentNew();
        this.trigger("Event:PrintReport");
    }


    Search(e) {
        e.preventDefault();
        //this.trigger("AdminSearchBooking");
    }
    
}

export class SearchItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        //if (!options) options = {};
        this.template = templateView.getOuterHTML("#rowTemplate");
        this.tagName = "tr";
        //options.className = "jsRowClick";
        //this.events = {
            //"mouseover .jsShowDetail": "ShowDetail",
            //"click .jsShowDetail": () => { this.trigger("CentreBusSummary", this.model.get("alkhidmatCentreId")); }
        //};

       
        super(options);
    }
    ShowDetail() {
        //this.trigger("ShowDetail");
    }
}