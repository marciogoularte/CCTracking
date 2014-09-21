/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "knockout", "text!./SearchTmpl.html", "text!./SearchGrid.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./SearchTmpl.html"/>
    /// <amd-dependency path="text!./SearchGrid.html"/>
    var _ = require('underscore');

    var templateView = require("text!./SearchTmpl.html");
    var templateGrid = require("text!./SearchGrid.html");

    var app;

    var SearchViewModel = (function (_super) {
        __extends(SearchViewModel, _super);
        function SearchViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return SearchViewModel;
    })(helper.ViewModel);
    exports.SearchViewModel = SearchViewModel;

    var SearchView = (function (_super) {
        __extends(SearchView, _super);
        function SearchView(options) {
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        SearchView.prototype.Cancel = function () {
            this.trigger("CancelForm");
        };

        SearchView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("SearchBooking");
        };
        return SearchView;
    })(helper.Views.MvvmView);
    exports.SearchView = SearchView;

    var SearchCollectionView = (function (_super) {
        __extends(SearchCollectionView, _super);
        function SearchCollectionView(options) {
            options.itemView = SearchItemView;
            options.template = templateGrid.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "tbody";
            _super.call(this, options);
        }
        return SearchCollectionView;
    })(helper.Views.CollectionView);
    exports.SearchCollectionView = SearchCollectionView;

    var SearchItemView = (function (_super) {
        __extends(SearchItemView, _super);
        function SearchItemView(options) {
            if (!options)
                options = {};
            options.template = templateGrid.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "mouseover .jsShowDetail": "ShowDetail",
                "click .jsShowDetail": "ShowDetail"
            };
            _super.call(this, options);
        }
        SearchItemView.prototype.ShowDetail = function () {
            //new userCtrl.UserCtrl().ShowDetail(this.model);
        };
        return SearchItemView;
    })(helper.Views.ItemView);
    exports.SearchItemView = SearchItemView;
});
//# sourceMappingURL=SearchView.js.map
