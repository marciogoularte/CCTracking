/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./AuditBooking.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./AuditBooking.html"], function(require, exports, helper) {
    var _ = require('underscore');

    //import searchCtrl = require("./AuditBookingCtrl");
    var templateView = require("text!./AuditBooking.html");

    var app;

    var AuditBookingCollectionView = (function (_super) {
        __extends(AuditBookingCollectionView, _super);
        function AuditBookingCollectionView(options) {
            options.itemView = AuditBookingItemView;
            options.template = templateView.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "#tblAuditBooking tbody";
            this.events = {
                "click .jsSearchAuditBooking": "Search",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        AuditBookingCollectionView.prototype.Search = function (e) {
            e.preventDefault();
            this.trigger("Event:AuditBooking", { fromDate: this.model.get("fromDate"), toDate: this.model.get("toDate") });
        };

        AuditBookingCollectionView.prototype.Cancel = function (e) {
            e.preventDefault();
            this.model.set("fromDate", "");
            this.model.set("toDate", "");
        };
        AuditBookingCollectionView.prototype.onShow = function () {
            this.dataTable = this.$el.find("#tblBooking")["dataTable"]({
                "autoWidth": false,
                "info": true,
                "processing": true,
                //"scrollY": "500px",
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                "language": {
                    "paginate": {
                        "next": "Next",
                        "previous": "Prev"
                    },
                    "emptyTable": "No record found!",
                    //"info": "Dispalying page _PAGE_ of _PAGES_",
                    "infoEmpty": "No record found!",
                    "zeroRecords": "No record found!"
                },
                "pageLength": helper.GetPageSize()
            });
        };
        return AuditBookingCollectionView;
    })(helper.Views.CompositeView);
    exports.AuditBookingCollectionView = AuditBookingCollectionView;

    var AuditBookingItemView = (function (_super) {
        __extends(AuditBookingItemView, _super);
        function AuditBookingItemView(options) {
            if (!options)
                options = {};
            options.template = templateView.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            if (options.model.get("rowCounter") % 2 == 0) {
                options.className = "info";
            } else {
                options.className = "warning";
            }

            //options.events = {
            //    "click .jsShowDetail": () => { this.ShowDetail(this.model.get("driverId")); }
            //};
            _super.call(this, options);
        }
        AuditBookingItemView.prototype.ShowDetail = function (id) {
            //this.trigger("DriverSummaryDetail", id);
        };
        return AuditBookingItemView;
    })(helper.Views.ItemView);
    exports.AuditBookingItemView = AuditBookingItemView;
});
//# sourceMappingURL=AuditBookingView.js.map
