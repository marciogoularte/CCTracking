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

    var app;

    var SearchCtrl = (function (_super) {
        __extends(SearchCtrl, _super);
        function SearchCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.SearchDto();
            this.searchViewModel = new views.SearchViewModel(this.backboneModel, this);
            this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
            this.collection = new dto.Models.SearchCollection({});
            this.collectionView = new views.SearchCollectionView({ collection: this.collection });
        }
        SearchCtrl.prototype.Show = function () {
            this.Load();
        };

        SearchCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            var model = this.backboneModel;
            model.set("graveyardList", lookupResponse.graveyard);
            model.set("graveyardSelected", "");
            model.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            model.set("alkhidmatCentreSelected", "");
            model.set("busList", lookupResponse.bus);
            model.set("busSelected", "");

            this.searchViewModel = new views.SearchViewModel(model, this);
            this.searchView = new views.SearchView({ viewModel: this.searchViewModel });
            this.searchView.on("SearchBooking", function () {
                return _this.GetByCriteria(_this.searchViewModel.bbModel);
            });

            this.searchView.on("CancelForm", function () {
                return _this.Cancel();
            });
            this.app.MainRegion.show(this.searchView);
        };

        SearchCtrl.prototype.GetByCriteria = function (searchDto) {
            var _this = this;
            debugger;
            var searchRequest = new Backbone.Model();

            //searchRequest.set("contactInfo", )
            //searchRequest.set("deseasedInfo", )
            //searchRequest.set("gender", )
            //searchRequest.set("paymentStatus", )
            //searchRequest.set("bookingDate", )
            //searchRequest.set("greveyard", )
            //searchRequest.set("centre", )
            //searchRequest.set("bus", )
            var deferred = DAL.GetByCriteria(searchDto);
            deferred.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        SearchCtrl.prototype.GetByCriteriaCompleted = function (searchDto) {
            this.collection.reset(searchDto["searchList"]);
            this.collectionView = new views.SearchCollectionView({ collection: this.collection });

            //this.collectionView.on("itemview:ShowDetail", (view) => this.GetByIdCompleted(view.model));
            this.app.MainRegion.show(this.collectionView);
        };

        SearchCtrl.prototype.Cancel = function () {
            window.location.href = "#searchBooking";
        };
        return SearchCtrl;
    })(helper.Controller);
    exports.SearchCtrl = SearchCtrl;
});
//# sourceMappingURL=SearchCtrl.js.map
