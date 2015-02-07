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
        function HomeItemView(options) {
            this.template = templateView.getOuterHTML("#Home");

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
            this.itemView = SearchItemView;

            this.template = templateView.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "#tblSearch tbody";
            this.events = {
                "click .jsSearch": "Search",
                "click .jsCancel": "Cancel"
            };
            this.templateHelpers = {
                getTotalAmount: function () {
                    return "1111";
                }
            };
            _super.call(this, options);
        }
        SearchCollectionView.prototype.Search = function (e) {
            e.preventDefault();
        };
        return SearchCollectionView;
    })(helper.Views.CompositeView);
    exports.SearchCollectionView = SearchCollectionView;

    var SearchItemView = (function (_super) {
        __extends(SearchItemView, _super);
        function SearchItemView(options) {
            this.template = templateView.getOuterHTML("#rowTemplate");
            this.tagName = "tr";

            _super.call(this, options);
        }
        SearchItemView.prototype.ShowDetail = function () {
        };
        return SearchItemView;
    })(helper.Views.ItemView);
    exports.SearchItemView = SearchItemView;
});
