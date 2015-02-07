var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./AuditBusVisit.html"], function(require, exports, helper) {
    var _ = require('underscore');

    var templateView = require("text!./AuditBusVisit.html");

    var app;

    var AuditBusVisitCollectionView = (function (_super) {
        __extends(AuditBusVisitCollectionView, _super);
        function AuditBusVisitCollectionView(options) {
            options.itemView = AuditBusVisitItemView;
            options.template = templateView.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "#tblAuditBusVisit tbody";
            this.events = {
                "click .jsSearchAuditBusVisit": "Search",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        AuditBusVisitCollectionView.prototype.Search = function (e) {
            e.preventDefault();
            this.trigger("Event:AuditBusVisit", { fromDate: this.model.get("fromDate"), toDate: this.model.get("toDate") });
        };

        AuditBusVisitCollectionView.prototype.Cancel = function (e) {
            e.preventDefault();
            this.model.set("fromDate", "");
            this.model.set("toDate", "");
        };
        return AuditBusVisitCollectionView;
    })(helper.Views.CompositeView);
    exports.AuditBusVisitCollectionView = AuditBusVisitCollectionView;

    var AuditBusVisitItemView = (function (_super) {
        __extends(AuditBusVisitItemView, _super);
        function AuditBusVisitItemView(options) {
            if (!options)
                options = {};
            options.template = templateView.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            if (options.model.get("rowCounter") % 2 == 0) {
                options.className = "info";
            } else {
                options.className = "warning";
            }

            _super.call(this, options);
        }
        AuditBusVisitItemView.prototype.ShowDetail = function (id) {
        };
        return AuditBusVisitItemView;
    })(helper.Views.ItemView);
    exports.AuditBusVisitItemView = AuditBusVisitItemView;
});
