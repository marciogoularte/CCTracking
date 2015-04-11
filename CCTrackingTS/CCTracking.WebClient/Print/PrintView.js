/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./Print.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./Print.html"], function(require, exports, helper) {
    var _ = require('underscore');

    var templateView = require("text!./Print.html");

    var app;

    var PrintCollectionView = (function (_super) {
        __extends(PrintCollectionView, _super);
        function PrintCollectionView(options) {
            this.itemView = PrintItemView;
            this.itemViewOptions = {
                headerList: options
            };
            this.template = templateView.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "#tblPrint tbody";
            this.events = {
                "click .jsPrintReport": "PrintReport"
            };
            _super.call(this, options);
        }
        PrintCollectionView.prototype.PrintReport = function () {
            helper.PrintDocument();
        };
        return PrintCollectionView;
    })(helper.Views.CompositeView);
    exports.PrintCollectionView = PrintCollectionView;

    var PrintHeaderCollectionView = (function (_super) {
        __extends(PrintHeaderCollectionView, _super);
        function PrintHeaderCollectionView(options) {
            this.itemView = PrintHeaderItemView;
            this.template = templateView.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "#tblPrint tr";
            _super.call(this, options);
        }
        return PrintHeaderCollectionView;
    })(helper.Views.CompositeView);
    exports.PrintHeaderCollectionView = PrintHeaderCollectionView;

    var PrintItemView = (function (_super) {
        __extends(PrintItemView, _super);
        function PrintItemView(options) {
            this.template = templateView.getOuterHTML("#rowTemplate");
            this.tagName = "tr";
            this.reportName = options.headerList.model.get("reportName");
            _super.call(this, options);
        }
        PrintItemView.prototype.onRender = function () {
            // <td class="input-sm"><%=bookingAmount%></td>
            var arrColumnName = this.model.keys();

            //TODO: write generic implementation
            //type parameter has following values;
            //1-Dashboard Report
            //2-Booking Report
            //3-Mileage Report
            //4-Bus Fueling Report
            //5-Driver's Summary Report
            //debugger;
            arrColumnName = this.removeUnwantedColumns(this.reportName, arrColumnName);

            var htmlString = " ";
            for (var i = 0; i < arrColumnName.length; i++) {
                htmlString = htmlString + ' <td class="input-sm">' + this.model.get(arrColumnName[i]) + '</td> ';
            }

            this.$el.html(htmlString);
            return this;
        };

        PrintItemView.prototype.removeUnwantedColumns = function (reportName, arrColumnName) {
            debugger;
            if (reportName.toLowerCase() == "dashboard") {
                arrColumnName.splice(1, 1);
            } else if (reportName.toLowerCase() == "booking") {
                arrColumnName.splice(1, 1);
            } else if (reportName.toLowerCase() == "mileage") {
                arrColumnName.splice(1, 1, "busNo");
                arrColumnName.splice(6, 2);
            } else if (reportName.toLowerCase() == "busvisit") {
                arrColumnName = [
                    "busNo",
                    "visitDate",
                    "visitType",
                    "bookingAmount",
                    "bookingMilage",
                    "outTime",
                    "inTime",
                    "timeTaken",
                    "driver",
                    "alkhidmatCentre"
                ];
            }
            return arrColumnName;
        };
        return PrintItemView;
    })(helper.Views.ItemView);
    exports.PrintItemView = PrintItemView;

    var PrintHeaderItemView = (function (_super) {
        __extends(PrintHeaderItemView, _super);
        function PrintHeaderItemView(options) {
            this.template = templateView.getOuterHTML("#headerTemplate");
            this.tagName = "th";
            _super.call(this, options);
        }
        return PrintHeaderItemView;
    })(helper.Views.ItemView);
    exports.PrintHeaderItemView = PrintHeaderItemView;
});
//# sourceMappingURL=PrintView.js.map
