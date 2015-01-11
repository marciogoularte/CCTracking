/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../Helper", "marionette", "jquery", "knockout", "text!./NearestCentreSetupTmpl.html", "text!./NearestCentreSetupGrid.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./NearestCentreSetupTmpl.html"/>
    /// <amd-dependency path="text!./NearestCentreSetupGrid.html"/>
    var _ = require('underscore');

    var templateView = require("text!./NearestCentreSetupTmpl.html");
    var templateGrid = require("text!./NearestCentreSetupGrid.html");

    var app;

    // View Model
    var NearestCentreSetupViewModel = (function (_super) {
        __extends(NearestCentreSetupViewModel, _super);
        function NearestCentreSetupViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return NearestCentreSetupViewModel;
    })(helper.ViewModel);
    exports.NearestCentreSetupViewModel = NearestCentreSetupViewModel;

    // View
    var NearestCentreSetupView = (function (_super) {
        __extends(NearestCentreSetupView, _super);
        function NearestCentreSetupView(options) {
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
            //this.listenTo(this, "TestEvent", () => this.TestFunction());
        }
        NearestCentreSetupView.prototype.close = function () {
            //alert("closeing this view");
            //this.off("SaveNearestCentreSetup");
        };
        NearestCentreSetupView.prototype.Cancel = function () {
            this.trigger("CancelForm");
        };
        NearestCentreSetupView.prototype.TestFunction = function () {
            alert("test function");
        };
        NearestCentreSetupView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("SaveNearestCentreSetup");
        };
        return NearestCentreSetupView;
    })(helper.Views.MvvmView);
    exports.NearestCentreSetupView = NearestCentreSetupView;

    var NearestCentreSetupCollectionView = (function (_super) {
        __extends(NearestCentreSetupCollectionView, _super);
        function NearestCentreSetupCollectionView(options) {
            options.itemView = NearestCentreSetupItemView;
            options.template = templateGrid.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "tbody";
            this.events = {
                "click .jsSearch": "Search",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        NearestCentreSetupCollectionView.prototype.Search = function (e) {
            //alert(this.model.get("alkhidmatCentreSelected").id);
            e.preventDefault();
            this.trigger("Event:SearchNearestCentre", this.model.get("alkhidmatCentreSelected").id);
        };
        return NearestCentreSetupCollectionView;
    })(helper.Views.CompositeView);
    exports.NearestCentreSetupCollectionView = NearestCentreSetupCollectionView;

    var NearestCentreSetupItemView = (function (_super) {
        __extends(NearestCentreSetupItemView, _super);
        function NearestCentreSetupItemView(options) {
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
        NearestCentreSetupItemView.prototype.ShowDetail = function () {
            this.trigger("ShowDetail");
        };
        return NearestCentreSetupItemView;
    })(helper.Views.ItemView);
    exports.NearestCentreSetupItemView = NearestCentreSetupItemView;
});
