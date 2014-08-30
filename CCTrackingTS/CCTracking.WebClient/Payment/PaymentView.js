/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "../App", "marionette", "jquery", "knockout", "text!./PaymentTmpl.html", "text!./PaymentGrid.html"], function(require, exports, helper, application) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./PaymentTmpl.html"/>
    /// <amd-dependency path="text!./PaymentGrid.html"/>
    var _ = require('underscore');

    var templateView = require("text!./PaymentTmpl.html");
    var templateGrid = require("text!./PaymentGrid.html");

    var app;

    var PaymentViewModel = (function (_super) {
        __extends(PaymentViewModel, _super);
        function PaymentViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return PaymentViewModel;
    })(helper.ViewModel);
    exports.PaymentViewModel = PaymentViewModel;

    var PaymentView = (function (_super) {
        __extends(PaymentView, _super);
        function PaymentView(options) {
            app = application.Application.getInstance();
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsAddMore": "AddMore"
            };
            _super.call(this, options);
        }
        PaymentView.prototype.AddMore = function () {
            //var a = this.$el.find("#ddlCentre")
            this.trigger("BusVisitAddItem", this.viewModel.bbModel.get("bookingId"), this.viewModel.bbModel.get("alkhidmatCentreSelected"), this.viewModel.bbModel.get("driverSelected"), this.viewModel.bbModel.get("busSelected"));
            ////app.vent.trigger("BusVisitItem:Add", this.busVisitCollection);
        };

        PaymentView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("PaymentSave", this.viewModel.bbModel);
        };

        PaymentView.prototype.SaveCompleted = function (paymentResponse) {
            //console.log(loginResponse);
            if (paymentResponse == undefined) {
                alert("Payment have not been saved successfully!");
            } else {
                alert("Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
            }
        };
        return PaymentView;
    })(helper.Views.MvvmView);
    exports.PaymentView = PaymentView;

    var BusVisitCollectionView = (function (_super) {
        __extends(BusVisitCollectionView, _super);
        function BusVisitCollectionView(options) {
            app = application.Application.getInstance();
            options.itemView = BusVisitItemView;
            options.template = templateGrid.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "tbody";
            _super.call(this, options);
        }
        return BusVisitCollectionView;
    })(helper.Views.CompositeView);
    exports.BusVisitCollectionView = BusVisitCollectionView;

    var BusVisitItemView = (function (_super) {
        __extends(BusVisitItemView, _super);
        function BusVisitItemView(options) {
            var _this = this;
            if (!options)
                options = {};
            options.template = templateGrid.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "mouseover .jsShowDetail": "ShowDetail",
                "click .jsShowDetail": "ShowDetail",
                "click .jsRemoveItem": function () {
                    return _this.RemoveItem();
                }
            };
            _super.call(this, options);
        }
        BusVisitItemView.prototype.RemoveItem = function () {
            this.trigger("BusVisitRemoveItem", this.model.get("busId"), this.model.get("centreId"), this.model.get("driverId"));
            //this.trigger("BusVisitRemoveItem", this.model.get("busVisitId"));
        };
        BusVisitItemView.prototype.ShowDetail = function () {
            //new userCtrl.UserCtrl().ShowDetail(this.model);
        };
        return BusVisitItemView;
    })(helper.Views.ItemView);
    exports.BusVisitItemView = BusVisitItemView;
});
//# sourceMappingURL=PaymentView.js.map
