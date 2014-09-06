/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "knockout", "text!./BusVisit.html", "text!./BusVisitGrid.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./BusVisit.html"/>
    /// <amd-dependency path="text!./BusVisitGrid.html"/>
    var _ = require('underscore');

    var templateView = require("text!./BusVisit.html");
    var templateGrid = require("text!./BusVisitGrid.html");

    var app;

    // View Model
    var BusVisitViewModel = (function (_super) {
        __extends(BusVisitViewModel, _super);
        function BusVisitViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return BusVisitViewModel;
    })(helper.ViewModel);
    exports.BusVisitViewModel = BusVisitViewModel;

    // View
    var BusVisitView = (function (_super) {
        __extends(BusVisitView, _super);
        function BusVisitView(options) {
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        BusVisitView.prototype.close = function () {
            //alert("closeing this view");
            this.off("Event:SaveForm");
            this.off("Event:CancelForm");
        };
        BusVisitView.prototype.Cancel = function () {
            this.trigger("Event:CancelForm");
        };
        BusVisitView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("Event:SaveForm");
        };
        return BusVisitView;
    })(helper.Views.MvvmView);
    exports.BusVisitView = BusVisitView;

    var BusVisitCollectionView = (function (_super) {
        __extends(BusVisitCollectionView, _super);
        function BusVisitCollectionView(options) {
            options.itemView = BusVisitItemView;
            options.template = templateGrid.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "tbody";
            options.events = {
                "click .jsSearchVisit": "SearchVisit"
            };
            _super.call(this, options);
        }
        BusVisitCollectionView.prototype.SearchVisit = function (e) {
            e.preventDefault();
            this.trigger("Event:SearchVisit", this.model.get("busSelected").id);
        };

        BusVisitCollectionView.prototype.setOptionDisable = function (option, item) {
            alert("dddddd");
        };
        return BusVisitCollectionView;
    })(helper.Views.CompositeView);
    exports.BusVisitCollectionView = BusVisitCollectionView;

    var BusVisitItemView = (function (_super) {
        __extends(BusVisitItemView, _super);
        function BusVisitItemView(options) {
            if (!options)
                options = {};
            options.template = templateGrid.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "click .jsShowDetail": "ShowDetail"
            };
            _super.call(this, options);
        }
        BusVisitItemView.prototype.ShowDetail = function () {
            this.trigger("ShowDetail");
        };
        return BusVisitItemView;
    })(helper.Views.ItemView);
    exports.BusVisitItemView = BusVisitItemView;
});
//# sourceMappingURL=BusVisitView.js.map
