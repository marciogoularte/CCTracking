/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./BookingTmpl.html", "text!./BookingGrid.html", "text!./BokingGridRow.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="jqueryUI"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./BookingTmpl.html"/>
    /// <amd-dependency path="text!./BookingGrid.html"/>
    /// <amd-dependency path="text!./BokingGridRow.html"/>
    var _ = require('underscore');

    var templateView = require("text!./BookingTmpl.html");
    var templateGrid = require("text!./BookingGrid.html");
    var templateRow = require("text!./BokingGridRow.html");

    var app;

    var BookingViewModel = (function (_super) {
        __extends(BookingViewModel, _super);
        function BookingViewModel(model, controller) {
            var _this = this;
            _super.call(this, model, controller);
            this.model.busPointSelected.subscribe(function () {
                //debugger;
                var list = GetUcList(_this.model.busPointSelected().parentId);
                _this.model.unionCouncilList(list);
            });

            this.model.unionCouncilIdSelected.subscribe(function () {
                var list = GetTownList(_this.model.unionCouncilIdSelected().parentId);
                _this.model.townList(list);
            });
        }
        return BookingViewModel;
    })(helper.ViewModel);
    exports.BookingViewModel = BookingViewModel;

    var BookingView = (function (_super) {
        __extends(BookingView, _super);
        function BookingView(options) {
            //if (!options)
            //    options = {};
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        BookingView.prototype.Cancel = function () {
            window.location.href = "#viewBooking";
        };
        BookingView.prototype.onDomRefresh = function () {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            //var busPoint = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("busPoint") });
            var arr = _.map(lookupResponse.landmark, function (item) {
                return { value: item.id, text: item.description, parentId: item.parentId };
            });
            var $select = this.$el.find("#ddlBusPoint")["selectize"]({
                //options: [
                //    { text: 'one', value: '1' },
                //    { text: 'two', value: '2' },
                //    { text: 'one one', value: '11' },
                //    { text: 'two two', value: '22' },
                //    { text: 'one two three', value: '123' }
                //],
                options: arr,
                create: false,
                sortField: {
                    field: 'text',
                    direction: 'asc'
                },
                dropdownParent: 'body'
            });
            var self = this;
            this.$el.find("#ddlBusPoint").on("change", function (e) {
                var busPoint = _.filter(lookupResponse.landmark, function (p) {
                    return p.id == $select[0].value;
                });

                //var parentId = self.viewModel.model.busPointSelected().parentId;
                if (busPoint[0] != undefined) {
                    self.viewModel.model.busPointSelected(busPoint[0]);
                    var list = GetUcList(busPoint[0].parentId);
                    self.viewModel.model.unionCouncilList(list);
                }
            });
            //$select.selectize.setValue(504);
        };

        BookingView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("SaveBooking");
        };

        BookingView.prototype.ExportToPdf = function (id) {
            helper.PrintReceipt(id);
        };
        return BookingView;
    })(helper.Views.MvvmView);
    exports.BookingView = BookingView;

    var BookingCollectionView = (function (_super) {
        __extends(BookingCollectionView, _super);
        function BookingCollectionView(options) {
            this.itemView = BookingItemView;
            this.template = templateGrid.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "tbody";

            _super.call(this, options);
        }
        BookingCollectionView.prototype.onShow = function () {
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
        return BookingCollectionView;
    })(helper.Views.CompositeView);
    exports.BookingCollectionView = BookingCollectionView;

    var BookingItemView = (function (_super) {
        __extends(BookingItemView, _super);
        function BookingItemView(options) {
            var _this = this;
            //if (!options) options = {};
            options.template = templateRow.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "mouseover .jsShowDetail": "ShowDetail",
                "click .jsExportToPdf": function () {
                    _this.trigger("ExportToPdf", _this.model.get("id"));
                },
                "click .jsShowDetail": "ShowDetail",
                "click .jsEditBooking": "EditBooking",
                "click .jsEditPayment": "EditPayment",
                "click .jsEditRefund": "EditRefund",
                "click .jsEditExtraCharge": "EditExtraCharge"
            };

            _super.call(this, options);
        }
        BookingItemView.prototype.EditBooking = function (e) {
            e.preventDefault();
            window.location.href = "#editBooking";
            this.trigger("Event:EditBooking", this.model.get("id"));
        };

        BookingItemView.prototype.EditPayment = function (e) {
            e.preventDefault();
            window.location.href = "#editPayment";
            this.trigger("Event:EditPayment", this.model.get("id"));
        };
        BookingItemView.prototype.EditRefund = function (e) {
            e.preventDefault();
            window.location.href = "#editRefund";
            this.trigger("Event:EditRefund", this.model.get("id"));
        };
        BookingItemView.prototype.EditExtraCharge = function (e) {
            e.preventDefault();
            window.location.href = "#editExtraCharge";
            this.trigger("Event:EditExtraCharge", this.model.get("id"));
        };

        BookingItemView.prototype.ShowDetail = function () {
            //new userCtrl.UserCtrl().ShowDetail(this.model);
        };
        return BookingItemView;
    })(helper.Views.ItemView);
    exports.BookingItemView = BookingItemView;

    function GetUcList(landmarkId) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var ucList = _.filter(lookupResponse.unionCouncil, function (item) {
            return item.id == landmarkId;
        });
        return ucList;
    }

    function GetTownList(ucId) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        var townList = _.filter(lookupResponse.town, function (item) {
            return item.id == ucId;
        });
        return townList;
    }
});
