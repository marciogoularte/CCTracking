/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./SearchTmpl.html"], function(require, exports, helper) {
    var _ = require('underscore');

    var templateView = require("text!./SearchTmpl.html");

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
            this.template = templateView; //templateView.getOuterHTML("#searchFilter");

            //this.events = {
            //    "click .jsSearch": "Search",
            //    "click .jsCancel": "Cancel"
            //}
            _super.call(this, options);
        }
        return SearchView;
    })(helper.Views.MvvmView);
    exports.SearchView = SearchView;

    var SearchCollectionView = (function (_super) {
        __extends(SearchCollectionView, _super);
        function SearchCollectionView(options) {
            options.itemView = SearchItemView;
            options.template = templateView.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "#tblSearch tbody";
            this.events = {
                "click .jsSearch": "Search",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        //onShow() {
        //    debugger;
        //    this.dataTable = this.$el.find("#tblSearch")["dataTable"]({
        //        "autoWidth": false,
        //        "info": true,
        //        "processing": true,
        //        //"scrollY": "500px",
        //        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        //        "language": {
        //            "paginate": {
        //                "next": "Next",
        //                "previous": "Prev"
        //            },
        //            "emptyTable": "No record found!",
        //            //"info": "Dispalying page _PAGE_ of _PAGES_",
        //            "infoEmpty": "No record found!",
        //            "zeroRecords": "No record found!"
        //        },
        //        "pageLength": helper.GetPageSize()
        //        //"lengthChange": false
        //        //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]
        //    });
        //}
        SearchCollectionView.prototype.Search = function (e) {
            e.preventDefault();
            this.trigger("SearchBooking");
        };
        SearchCollectionView.prototype.Cancel = function (e) {
            e.preventDefault();
            this.trigger("CancelForm");
        };
        return SearchCollectionView;
    })(helper.Views.CompositeView);
    exports.SearchCollectionView = SearchCollectionView;

    var SearchItemView = (function (_super) {
        __extends(SearchItemView, _super);
        function SearchItemView(options) {
            if (!options)
                options = {};
            options.template = templateView.getOuterHTML("#rowTemplate");
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
