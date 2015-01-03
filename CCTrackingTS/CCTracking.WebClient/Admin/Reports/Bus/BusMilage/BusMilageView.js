/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./BusMilageTmpl.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./BusMilageTmpl.html"], function(require, exports, helper) {
    var _ = require('underscore');

    var templateView = require("text!./BusMilageTmpl.html");

    var app;

    var BusMilageViewModel = (function (_super) {
        __extends(BusMilageViewModel, _super);
        function BusMilageViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return BusMilageViewModel;
    })(helper.ViewModel);
    exports.BusMilageViewModel = BusMilageViewModel;
    var BusMilageView = (function (_super) {
        __extends(BusMilageView, _super);
        function BusMilageView(options) {
            this.template = templateView; //templateView.getOuterHTML("#searchFilter");

            //this.events = {
            //    "click .jsSearch": "Search",
            //    "click .jsCancel": "Cancel"
            //}
            _super.call(this, options);
        }
        BusMilageView.prototype.onDomRefresh = function () {
        };
        return BusMilageView;
    })(helper.Views.MvvmView);
    exports.BusMilageView = BusMilageView;
    var BusMilageCollectionView = (function (_super) {
        __extends(BusMilageCollectionView, _super);
        function BusMilageCollectionView(options) {
            options.itemView = BusMilageItemView;
            options.template = templateView.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "#tblSearch tbody";
            this.events = {
                "click .jsSearch": "Search",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        BusMilageCollectionView.prototype.Search = function (e) {
            e.preventDefault();
            this.trigger("BusCentreReport");
        };
        return BusMilageCollectionView;
    })(helper.Views.CompositeView);
    exports.BusMilageCollectionView = BusMilageCollectionView;

    var BusMilageItemView = (function (_super) {
        __extends(BusMilageItemView, _super);
        function BusMilageItemView(options) {
            if (!options)
                options = {};
            options.template = templateView.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {};
            _super.call(this, options);
        }
        BusMilageItemView.prototype.ShowDetail = function () {
            //this.trigger("ShowDetail");
        };
        return BusMilageItemView;
    })(helper.Views.ItemView);
    exports.BusMilageItemView = BusMilageItemView;
});
