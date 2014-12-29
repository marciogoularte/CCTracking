/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./ExtraChargeView", "../DAL/ExtraCharges", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, DAL) {
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var app;
    var ExtraChargeCtrl = (function (_super) {
        __extends(ExtraChargeCtrl, _super);
        function ExtraChargeCtrl() {
            app = application.Application.getInstance();
            _super.call(this);
        }
        ExtraChargeCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;
            var id = "0";

            //update payment
            if (url.indexOf("id=") > -1) {
                id = (url.substring(url.indexOf("id=") + 3, url.length));
            }
            var deferred = DAL.GetById(id);
            deferred.done(function (p) {
                _this.GetByIdCompleted(p);
            });
            //this.GetByIdCompleted(null);
        };

        ExtraChargeCtrl.prototype.GetByIdCompleted = function (extraChargeDto) {
            var _this = this;
            this.collection = extraChargeDto["extraChargesList"];
            this.backboneModel = new Backbone.Model(this.collection[0]);

            var model = this.backboneModel;
            var url = window.location.href;
            var id = (url.substring(url.indexOf("id=") + 3, url.length));
            if (model.get("id") === undefined || model.get("id") === 0) {
                this.InitalizeKoBinding(model);
            }
            model.set("bookingId", id);

            //model.set("actualBookingAmount", id);
            model.set("busList", model.get("busList"));
            model.set("busSelected", "");

            this.view = new views.ExtraChargeView(model);
            this.view.on("ExtraChargesSave", function (bbmodel) {
                return _this.Save(bbmodel);
            });
            model.set("extraChargesCollection", this.collection);
            app.MainRegion.show(this.view);
        };
        ExtraChargeCtrl.prototype.InitalizeKoBinding = function (model) {
            model.set("extraAmountCharge", "");
            model.set("extraAmountReason", "");
            model.set("extraAmountReceipt", "");
        };
        ExtraChargeCtrl.prototype.Save = function (extraCharges) {
            var _this = this;
            var appObj = app.request("AppGlobalSetting");
            extraCharges.set("modifiedBy", appObj.get("Id"));

            //if (extraCharges.get("busSelected") == undefined) {
            //    extraCharges.set("busId", extraCharges.get("busId"));
            //}
            //else {
            //    extraCharges.set("busId", extraCharges.get("busSelected").id);
            //}
            extraCharges.set("id", $("#hdnExtraChargeId").val());

            //alert($("#hdnExtraChargeId").val());
            var deferred = DAL.Save(extraCharges);
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };
        ExtraChargeCtrl.prototype.SaveCompleted = function (extraChargeResponse) {
            var result = new Backbone.Model(extraChargeResponse);
            if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
                helper.ShowModalPopup("danger", "Extra Charge", "Due to some technical reason payment have not been saved successfully!<br> Pelase try later");
            } else {
                helper.ShowModalPopup("success", "Extra Charge", "Record has been saved successfully with Extra Charge ID : " + extraChargeResponse["id"]);
                location.href = "#viewBooking";
            }
            //app.vent.trigger("Event:UpdateSummary");
        };
        return ExtraChargeCtrl;
    })(helper.Controller);
    exports.ExtraChargeCtrl = ExtraChargeCtrl;
});
//# sourceMappingURL=ExtraChargeCtrl.js.map
