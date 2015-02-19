/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "knockout", "text!./RefundBookingTmpl.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./RefundBookingTmpl.html"/>
    var _ = require('underscore');

    var templateView = require("text!./RefundBookingTmpl.html");

    var app;

    var RefundBookingViewModel = (function (_super) {
        __extends(RefundBookingViewModel, _super);
        function RefundBookingViewModel(model, controller) {
            var _this = this;
            _super.call(this, model, controller);
            this.model.busSelected.subscribe(function () {
                var booking = _.filter(_this.model.refundBookings(), function (p) {
                    return p.busId == _this.model.busSelected().id;
                });
                UIBinding(_this, booking[0]);
            });
        }
        return RefundBookingViewModel;
    })(helper.ViewModel);
    exports.RefundBookingViewModel = RefundBookingViewModel;

    var RefundBookingView = (function (_super) {
        __extends(RefundBookingView, _super);
        function RefundBookingView(options) {
            this.template = templateView;
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        RefundBookingView.prototype.Cancel = function () {
            this.trigger("Event:CancelForm");
        };
        RefundBookingView.prototype.Save = function (e) {
            e.preventDefault();
            this.trigger("Event:SaveForm");
        };
        return RefundBookingView;
    })(helper.Views.MvvmView);
    exports.RefundBookingView = RefundBookingView;

    function UIBinding(self, refundModel) {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        self.model.actualBookingAmount(refundModel.actualBookingAmount);
        self.model.refundReason(refundModel.refundReason);
        self.model.refundAmount(refundModel.refundAmount);
        self.model.amountDeducted(refundModel.amountDeducted);
        self.model.refundReceipt(refundModel.refundReceipt);

        var refundType = _.filter(lookupResponse.refundType, function (p) {
            return p.id == refundModel.refundTypeId;
        });

        if (refundType.length > 0) {
            self.model.refundTypeSelectedDesc(refundType[0].description);
        } else {
            self.model.refundTypeSelectedDesc("");
        }

        var officeLocation = _.filter(lookupResponse.alkhidmatCentre, function (p) {
            return p.id == refundModel.refundOfficeLocation;
        });
        if (officeLocation.length > 0) {
            self.model.refundFromOfficeDesc(officeLocation[0].description);
        } else {
            self.model.refundFromOfficeDesc("");
        }

        var cashier = _.filter(lookupResponse.cashier, function (p) {
            return p.id == refundModel.refundOfficer;
        });
        if (cashier.length > 0) {
            self.model.refundCashierDesc(cashier[0].description);
        } else {
            self.model.refundCashierDesc("");
        }

        self.model.id(refundModel.id);
        //self.bbModel = new Backbone.Model(refundModel);
    }
});
//# sourceMappingURL=RefundBookingView.js.map
