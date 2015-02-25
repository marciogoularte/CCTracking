/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./SearchView", "CCTracking.WebClient/Dtos/SearchDto", "../DAL/Search", "marionette", "jquery", "knockout", "text!./SearchTmpl.html"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./SearchTmpl.html"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var SearchCtrl = (function (_super) {
        __extends(SearchCtrl, _super);
        function SearchCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.searchFromLayout = new views.SearchFormLayoutView;
            this.searchModel = new dto.Models.SearchDto();
            this.searchFormView = new views.SearchFormItemView();
            this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
        }
        SearchCtrl.prototype.Show = function () {
            this.Load();
        };

        SearchCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = this.searchModel;
            model.set("graveyardList", lookupResponse.graveyard);
            model.set("graveyardIdSelected", "");
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("alkhidmatCentreSelected", "");
            model.set("busList", lookupResponse.bus);
            model.set("busSelected", "");
            model.set("genderId", "");
            model.set("contactInfo", "");
            model.set("deseasedInfo", "");
            model.set("paymentStatusId", "");
            model.set("bookingDate", "");

            this.searchFormView.listenTo(this.searchFormView, "SearchBooking", function () {
                return _this.GetByCriteria(model);
            });
            this.searchFormView.on("CancelForm", function () {
                return _this.Cancel();
            });

            this.app.MainRegion.show(this.searchFromLayout);
            this.searchFromLayout.SearchRegion.show(this.searchFormView);

            this.KOBinding(model);
        };

        SearchCtrl.prototype.GetByCriteria = function (searchDto) {
            var _this = this;
            searchDto.set("genderId", searchDto.get("genderId").toString());
            searchDto.set("paymentStatusId", searchDto.get("paymentStatusId").toString());
            if (searchDto.get("bookingDate").trim() != "") {
                searchDto.set("bookingDate", helper.FormatDateString(searchDto.get("bookingDate")));
            }
            if (searchDto.get("graveyardIdSelected") != undefined) {
                searchDto.set("greveyardId", searchDto.get("graveyardIdSelected").id);
            }
            if (searchDto.get("alkhidmatCentreSelected") != undefined) {
                searchDto.set("centreId", searchDto.get("alkhidmatCentreSelected").id);
            }
            if (searchDto.get("busSelected") != undefined) {
                searchDto.set("busId", searchDto.get("busSelected").id);
            }
            var deferred = DAL.GetByCriteria(this.GetMinimalRequest(searchDto));
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        SearchCtrl.prototype.GetMinimalRequest = function (searchDto) {
            var request = new dto.Models.SearchDto();
            request.set("bookingDate", searchDto.get("bookingDate"));
            request.set("busId", searchDto.get("busId"));
            request.set("centreId", searchDto.get("centreId"));
            request.set("contactInfo", searchDto.get("contactInfo"));
            request.set("deseasedInfo", searchDto.get("deseasedInfo"));
            request.set("genderId", searchDto.get("genderId"));
            request.set("greveyardId", searchDto.get("greveyardId"));
            request.set("paymentStatusId", searchDto.get("paymentStatusId"));
            return request;
        };

        SearchCtrl.prototype.GetByCriteriaCompleted = function (searchDto) {
            var list = _.map(searchDto["bookingList"], function (item) {
                if (item.pickupDate != "0001-01-01T00:00:00")
                    item.pickupDate = helper.FormatDateString(item.pickupDate);
                else
                    item.pickupDate = "";
                if (item.status) {
                    item.status = "Paid";
                } else {
                    item.status = "Unpaid";
                }
                return item;
            });
            var searchCollection = new Backbone.Collection(list);
            var collectionView = new views.SearchCollectionView({ collection: searchCollection });
            this.searchFromLayout.ContentRegion.show(collectionView);
            //this.collection.reset(list);
        };

        SearchCtrl.prototype.KOBinding = function (model) {
            var vm = kb.viewModel(model);
            var currentView = this.searchFormView.$el;

            var element = currentView.find('#ddlGraveyard')[0];
            ko.cleanNode(element);
            ko.applyBindings(vm, element);
            var centre = currentView.find('#ddlCentre')[0];
            ko.cleanNode(centre);
            ko.applyBindings(vm, centre);

            //debugger;
            var bus = currentView.find('#ddlBusDetails')[0];
            ko.cleanNode(bus);
            ko.applyBindings(vm, bus);

            var contactInfo = currentView.find('#txtContactInfo')[0];
            ko.cleanNode(contactInfo);
            ko.applyBindings(vm, contactInfo);

            var deseasedInfo = currentView.find('#txtDeseasedInfo')[0];
            ko.cleanNode(deseasedInfo);
            ko.applyBindings(vm, deseasedInfo);

            var gender = currentView.find('.jsGender')[0];
            ko.cleanNode(gender);
            ko.applyBindings(vm, gender);
            gender = currentView.find('.jsGender')[1];
            ko.cleanNode(gender);
            ko.applyBindings(vm, gender);

            var paymentStatus = currentView.find('.jsPaymentStatus')[0];
            ko.cleanNode(paymentStatus);
            ko.applyBindings(vm, paymentStatus);
            paymentStatus = currentView.find('.jsPaymentStatus')[1];
            ko.cleanNode(paymentStatus);
            ko.applyBindings(vm, paymentStatus);

            var bookingDate = currentView.find('#txtBookingDate')[0];
            ko.cleanNode(bookingDate);
            ko.applyBindings(vm, bookingDate);
        };

        SearchCtrl.prototype.Cancel = function () {
            var model = this.searchModel;
            model.set("graveyardIdSelected", "");
            model.set("alkhidmatCentreSelected", "");
            model.set("busSelected", "");
            model.set("genderId", "");
            model.set("contactInfo", "");
            model.set("deseasedInfo", "");
            model.set("paymentStatusId", "");
            model.set("bookingDate", "");
        };
        return SearchCtrl;
    })(helper.Controller);
    exports.SearchCtrl = SearchCtrl;
});
//# sourceMappingURL=SearchCtrl.js.map
