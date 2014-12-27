/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./RefundBookingView", "../Dtos/RefundBookingDto", "../DAL/RefundBooking", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, DAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var RefundBookingCtrl = (function (_super) {
        __extends(RefundBookingCtrl, _super);
        function RefundBookingCtrl() {
            _super.call(this);

            //alert("constructor");
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.RefundBookingDto();
            //this.viewModel = new views.RefundBookingViewModel(this.backboneModel, this);
            //this.view = new views.RefundBookingView({ viewModel: this.viewModel });
        }
        RefundBookingCtrl.prototype.Show = function () {
            var _this = this;
            var url = window.location.href;
            if (url.indexOf("id=") > -1) {
                //alert(url.substring(url.indexOf("id=") + 3, url.length));
                var id = (url.substring(url.indexOf("id=") + 3, url.length));
                var deferredById = DAL.GetById(id);
                deferredById.done(function (p) {
                    return _this.GetByIdCompleted(p);
                });
            } else {
                this.Load();
            }
        };

        RefundBookingCtrl.prototype.Load = function () {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));

            //var model = new dto.Models.StationDto();
            var refundModel = this.backboneModel;
            this.viewModel.bbModel = refundModel;
            this.viewModel.model = kb.viewModel(refundModel);

            refundModel.set("name", "");
            refundModel.set("address", "");
            refundModel.set("landmarkIdSelected", "");
            refundModel.set("landmarkList", lookupResponse.landmark);
            refundModel.set("contactNo1", "");
            refundModel.set("contactNo2", "");
            refundModel.set("isCoPartner", "");
            refundModel.set("isActive", "");

            this.viewModel = new views.RefundBookingViewModel(refundModel, this);
            this.view = new views.RefundBookingView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.view.model);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });

            //this.layout = app.AppLayout;
            this.app.MainRegion.show(this.view);
            //this.GetAll();
        };

        //GetAll() {
        //    var deferred = DAL.GetAll();
        //    deferred.done(p=> this.GetAllCompleted(p));
        //}
        RefundBookingCtrl.prototype.GetByIdCompleted = function (refundDto) {
            var _this = this;
            //alert("GetByIdCompleted..");
            //debugger;
            this.collection = refundDto["refundBookingList"];
            this.backboneModel = new Backbone.Model(refundDto["refundBookingList"][0]);
            var refundModel = this.backboneModel;

            this.UIBinding(refundModel);

            this.view = new views.RefundBookingView({ viewModel: this.viewModel });
            this.view.on("Event:SaveForm", function () {
                return _this.Save(_this.viewModel.bbModel);
            });
            this.view.on("Event:CancelForm", function () {
                return _this.Cancel();
            });

            //this.stationView.trigger("TestEvent");
            //app = application.Application.getInstance();
            this.app.MainRegion.show(this.view);
            //this.GetAll();
            //this.GetAllCompletedNew(this.collection);
        };

        RefundBookingCtrl.prototype.Save = function (refund) {
            var _this = this;
            var appObj = this.app.request("AppGlobalSetting");
            refund.set("modifiedBy", appObj.get("Id"));

            if (refund.get("refundTypeSelected") == undefined) {
                refund.set("refundTypeId", refund.get("refundTypeId"));
            } else {
                refund.set("refundTypeId", refund.get("refundTypeSelected").id);
            }

            if (refund.get("alkhidmatCentreSelected") == undefined) {
                refund.set("refundOfficeLocation", refund.get("refundOfficeLocation"));
            } else {
                refund.set("refundOfficeLocation", refund.get("alkhidmatCentreSelected").id);
            }
            if (refund.get("busSelected") == undefined) {
                refund.set("busId", refund.get("busId"));
            } else {
                refund.set("busId", refund.get("busSelected").id);
            }
            if (refund.get("cashierSelected") == undefined) {
                refund.set("refundOfficer", refund.get("refundOfficer"));
            } else {
                refund.set("refundOfficer", refund.get("cashierSelected").id);
            }
            refund.set("isActive", refund.get("isActive") == "1" ? true : false);

            //alert($("#hdnRefundId").val());
            refund.set("id", $("#hdnRefundId").val());
            var deferred = DAL.Save(refund);
            deferred.done(function (p) {
                return _this.SaveCompleted(p);
            });
        };

        RefundBookingCtrl.prototype.SaveCompleted = function (refundDto) {
            var result = new Backbone.Model(refundDto);
            if (result.get("errorMessage") != undefined && result.get("errorMessage").trim() != "") {
                helper.ShowModalPopup("danger", "Booking", "Due to some technical reason booking payment have not been saved successfully!<br> Pelase try later");
            } else {
                //alert("Record has been saved successfully with ID : " + refundDto["id"]);
                helper.ShowModalPopup("success", "Booking", "Record has been saved successfully with ID : " + refundDto["id"]);
                this.Cancel();
            }
        };

        RefundBookingCtrl.prototype.Cancel = function () {
            window.location.href = "#viewBooking";
        };

        RefundBookingCtrl.prototype.UIBinding = function (refundModel) {
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            refundModel.set("busList", refundModel.get("busList"));
            refundModel.set("busSelected", "");

            refundModel.set("alkhidmatCentreList", lookupResponse.alkhidmatCentre);
            refundModel.set("cashierList", lookupResponse.cashier);
            refundModel.set("refundTypeList", lookupResponse.refundType);

            var centre = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                return p.id == refundModel.get("refundOfficeLocation");
            });
            refundModel.set("alkhidmatCentreSelected", centre[0]);

            var cashier = _.filter(lookupResponse.cashier, function (p) {
                return p.id == refundModel.get("refundOfficer");
            });
            refundModel.set("cashierSelected", cashier[0]);

            var refundType = _.filter(lookupResponse.refundType, function (p) {
                return p.id == refundModel.get("refundTypeId");
            });
            refundModel.set("refundTypeSelected", refundType[0]);

            //var bus = _.filter(refundModel.get("busList"), (p) => { return p.id == refundModel.get("busId") });
            //refundModel.set("busId", bus[0].id);
            if (refundType.length > 0) {
                refundModel.set("refundTypeSelectedDesc", refundType[0].description);
            } else {
                refundModel.set("refundTypeSelectedDesc", "");
            }
            if (centre.length > 0) {
                refundModel.set("refundFromOfficeDesc", centre[0].description);
            } else {
                refundModel.set("refundFromOfficeDesc", "");
            }
            if (cashier.length > 0) {
                refundModel.set("refundCashierDesc", cashier[0].description);
            } else {
                refundModel.set("refundCashierDesc", "");
            }
            refundModel.set("refundBookings", this.collection);
            this.viewModel = new views.RefundBookingViewModel(refundModel, this);
            this.viewModel.bbModel = refundModel;
        };
        return RefundBookingCtrl;
    })(helper.Controller);
    exports.RefundBookingCtrl = RefundBookingCtrl;
});
//# sourceMappingURL=RefundBookingCtrl.js.map
