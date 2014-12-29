/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./ExtraCharge.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "../App", "marionette", "jquery", "jqueryUI", "knockout", "text!./ExtraCharge.html"], function(require, exports, helper, application) {
    var _ = require('underscore');
    var ko = require("knockout");

    var templateView = require("text!./ExtraCharge.html");

    var app;

    // View Model
    var ExtraChargeViewModel = (function (_super) {
        __extends(ExtraChargeViewModel, _super);
        function ExtraChargeViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return ExtraChargeViewModel;
    })(helper.ViewModel);
    exports.ExtraChargeViewModel = ExtraChargeViewModel;

    // View
    var ExtraChargeView = (function (_super) {
        __extends(ExtraChargeView, _super);
        function ExtraChargeView(options) {
            app = application.Application.getInstance();
            this.template = templateView;
            this.viewModel = new ViewModel(options);
            this.bbModel = new Backbone.Model();
            this.events = {
                "submit": "Save",
                "click .jsAddMore": "AddMore"
            };
            _super.call(this, options);
        }
        ExtraChargeView.prototype.Save = function (e) {
            e.preventDefault();
            this.bbModel.set("id", this.viewModel.Id());
            this.bbModel.set("bookingId", this.viewModel.bookingId());
            this.bbModel.set("actualBookingAmount", this.viewModel.actualBookingAmount());
            this.bbModel.set("busId", this.viewModel.busSelected().id);
            this.bbModel.set("extraAmountCharge", this.viewModel.extraAmountCharge());
            this.bbModel.set("extraAmountReason", this.viewModel.extraAmountReason());
            this.bbModel.set("extraAmountReceipt", this.viewModel.extraAmountReceipt());
            this.trigger("ExtraChargesSave", this.bbModel);
        };

        ExtraChargeView.prototype.SaveCompleted = function (extraChargeResponse) {
            var result = new Backbone.Model(extraChargeResponse);
            if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
                helper.ShowModalPopup("danger", "Extra Charge", "Due to some technical reason payment have not been saved successfully!<br> Pelase try later");
            } else {
                helper.ShowModalPopup("success", "Extra Charge", "Record has been saved successfully with Payment ID : " + extraChargeResponse["id"]);

                //alert("Record has been saved successfully with Payment ID : " + paymentResponse["id"]);
                location.href = "#viewBooking";
            }
            //app.vent.trigger("Event:UpdateSummary");
        };
        ExtraChargeView.prototype.onShow = function () {
            ko.applyBindings(this.viewModel, this.el);
        };

        ExtraChargeView.prototype.onClose = function () {
            //app.vent.off("Event:UpdateSummary");
        };
        return ExtraChargeView;
    })(helper.Views.ItemView);
    exports.ExtraChargeView = ExtraChargeView;

    var ViewModel = (function () {
        function ViewModel(model) {
            var _this = this;
            if (model == undefined) {
                this.Id = ko.observable();
                this.bookingId = ko.observable();
                this.actualBookingAmount = ko.observable();
                this.extraAmountCharge = ko.observable();
                this.extraAmountReason = ko.observable();
                this.extraAmountReceipt = ko.observable();
            } else {
                this.Id = ko.observable(model.get("id"));
                this.busList = ko.observableArray(model.get("busList"));
                this.busSelected = ko.observable(model.get("busId"));
                this.bookingId = ko.observable(model.get("bookingId"));
                this.actualBookingAmount = ko.observable(model.get("actualBookingAmount"));
                this.extraAmountCharge = ko.observable(model.get("extraAmountCharge"));
                this.extraAmountReason = ko.observable(model.get("extraAmountReason"));
                this.extraAmountReceipt = ko.observable(model.get("extraAmountReceipt"));
            }

            this.busSelected.subscribe(function () {
                var booking = _.filter(model.get("extraChargesCollection"), function (p) {
                    return p.busId == _this.busSelected().id;
                });
                UIBinding(_this, booking[0]);
            });
        }
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;

    function UIBinding(self, model) {
        self.bookingId(model.bookingId);
        self.extraAmountCharge(model.extraAmountCharge);
        self.extraAmountReason(model.extraAmountReason);
        self.extraAmountReceipt(model.extraAmountReceipt);
        self.actualBookingAmount(model.actualBookingAmount);
        self.Id(model.id);
    }
});
//# sourceMappingURL=ExtraChargeView.js.map
