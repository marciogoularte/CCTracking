/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="jsPDF"/>
/// <amd-dependency path="text!./Home.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "jsPDF", "text!./Home.html"], function(require, exports, helper) {
    var _ = require('underscore');
    var jsPDF = require('jsPDF');

    var templateView = require("text!./Home.html");

    var app;

    var HomeItemView = (function (_super) {
        __extends(HomeItemView, _super);
        //viewModel: ViewModel;
        //bbModel: Backbone.Model;
        function HomeItemView(options) {
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
                userName: "Current logged in user"
            });

            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel",
                "click .jsPrintReceipt": function () {
                    helper.PrintReceipt(collection);
                    //alert('print');
                    //this.ExportToPdf();
                }
            };
            _super.call(this, options);
        }
        return HomeItemView;
    })(helper.Views.ItemView);
    exports.HomeItemView = HomeItemView;

    var SearchCollectionView = (function (_super) {
        __extends(SearchCollectionView, _super);
        function SearchCollectionView(options) {
            //debugger;
            this.itemView = SearchItemView;

            //this.model = new Backbone.Model({ "getPropA": 12345 });
            this.template = templateView.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "#tblSearch tbody";
            this.events = {
                "click .jsSearch": "Search",
                "click .jsCancel": "Cancel",
                "click .jsPrintDocument": "PrintDoc"
            };
            this.templateHelpers = {
                getTotalAmount: function () {
                    return "1111";
                }
            };
            _super.call(this, options);
        }
        SearchCollectionView.prototype.PrintDoc = function () {
            //helper.PrintDocumentNew();
            this.trigger("Event:PrintReport");
        };

        SearchCollectionView.prototype.Search = function (e) {
            e.preventDefault();
            //this.trigger("AdminSearchBooking");
        };
        return SearchCollectionView;
    })(helper.Views.CompositeView);
    exports.SearchCollectionView = SearchCollectionView;

    var SearchItemView = (function (_super) {
        __extends(SearchItemView, _super);
        function SearchItemView(options) {
            //if (!options) options = {};
            this.template = templateView.getOuterHTML("#rowTemplate");
            this.tagName = "tr";

            //options.className = "jsRowClick";
            //this.events = {
            //"mouseover .jsShowDetail": "ShowDetail",
            //"click .jsShowDetail": () => { this.trigger("CentreBusSummary", this.model.get("alkhidmatCentreId")); }
            //};
            _super.call(this, options);
        }
        SearchItemView.prototype.ShowDetail = function () {
            //this.trigger("ShowDetail");
        };
        return SearchItemView;
    })(helper.Views.ItemView);
    exports.SearchItemView = SearchItemView;
});
//# sourceMappingURL=HomeView.js.map
