var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../../../App", "../../../../Helper", "./AuditBusVisitView", "../../../../Dtos/BusVisitDto", "../../../../DAL/BusVisit", "marionette", "jquery", "knockout"], function(require, exports, application, helper, views, dto, DAL) {
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var AuditBusVisitCtrl = (function (_super) {
        __extends(AuditBusVisitCtrl, _super);
        function AuditBusVisitCtrl() {
            _super.call(this);
            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.AuditBusVisit();
            this.compositeModel = new Backbone.Model();
            this.backboneCollection = new Backbone.Collection([]);
            this.collectionView = new views.AuditBusVisitCollectionView({ collection: this.backboneCollection });
            this.backboneCollection.reset([]);
        }
        AuditBusVisitCtrl.prototype.Show = function () {
            var _this = this;
            var model = this.backboneModel;
            model.set("fromDate", helper.FormatDateString(Date.now()));
            model.set("toDate", helper.FormatDateString(Date.now()));
            this.compositeModel = model;
            this.collectionView.model = model;

            this.app.MainRegion.show(this.collectionView);
            this.collectionView.listenTo(this.collectionView, "Event:AuditBusVisit", function (auditRequest) {
                return _this.GetAuditBusVisitDetial(auditRequest);
            });

            var vm = kb.viewModel(this.compositeModel);

            var fromDate = $('#txtFromDate')[0];
            ko.cleanNode(fromDate);
            ko.applyBindings(vm, fromDate);

            var toDate = $('#txtToDate')[0];
            ko.cleanNode(toDate);
            ko.applyBindings(vm, toDate);
        };

        AuditBusVisitCtrl.prototype.GetAuditBusVisitDetial = function (auditRequest) {
            var _this = this;
            var request = new Backbone.Model(auditRequest);
            if (request.get("fromDate") == "" || request.get("toDate") == "") {
                helper.ShowModalPopup("danger", "Audit Booking", "Please enter valid search criteria");
                return;
            }
            var deferred = DAL.GetAllAuditBusVisit(request);
            deferred.done(function (p) {
                return _this.AuditBusVisitCompleted(p);
            });
        };
        AuditBusVisitCtrl.prototype.AuditBusVisitCompleted = function (auditDto) {
            var result = auditDto["auditBusVisitDisplayList"];
            var summary = [];
            for (var i = 0; i < result.length; i++) {
                summary[i] = { bookingId: result[i].bookingId, userName: result[i].userName, propertyName: result[i].propertyName, oldValue: result[i].oldValue, newValue: result[i].newValue, actualModifiedDate: helper.FormatDateString(result[i].actualModifiedDate), rowCounter: result[i].rowCounter };
            }
            this.backboneCollection.reset(summary);
        };
        return AuditBusVisitCtrl;
    })(helper.Controller);
    exports.AuditBusVisitCtrl = AuditBusVisitCtrl;
});
