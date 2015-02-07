var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "jquery", "backbone"], function(require, exports) {
    (function (Models) {
        var BusVisitDto = (function (_super) {
            __extends(BusVisitDto, _super);
            function BusVisitDto() {
                _super.apply(this, arguments);
            }
            BusVisitDto.prototype.default = function () {
                return {
                    idAttribute: "busVisitId",
                    id: "",
                    centreId: "",
                    busId: "",
                    driverId: "",
                    visitTypeId: "",
                    bookingId: "",
                    inchargeName: "",
                    visitDate: "",
                    outTime: "",
                    returnTime: "",
                    readingWhenFilling: "",
                    pumpLocation: "",
                    fuelRate: "",
                    fuelAmount: "",
                    fuelQuantity: "",
                    fuelingReceipt: "",
                    isBookingCompleted: "",
                    description: "",
                    busChangeReason: "",
                    initialReading: "",
                    finalReading: "",
                    isActive: "",
                    busDesc: "",
                    centreDesc: "",
                    driverDesc: "",
                    visitTypeDesc: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return BusVisitDto;
        })(Backbone.Model);
        Models.BusVisitDto = BusVisitDto;
        var BusVisitCollection = (function (_super) {
            __extends(BusVisitCollection, _super);
            function BusVisitCollection(options) {
                this.model = BusVisitDto;
                _super.call(this, options);
            }
            return BusVisitCollection;
        })(Backbone.Collection);
        Models.BusVisitCollection = BusVisitCollection;
        var BusVisitSummaryDto = (function (_super) {
            __extends(BusVisitSummaryDto, _super);
            function BusVisitSummaryDto() {
                _super.apply(this, arguments);
            }
            BusVisitSummaryDto.prototype.default = function () {
                return {
                    busId: "",
                    busDesc: "",
                    driverDesc: "",
                    centreDesc: "",
                    milage: "",
                    visitCount: "",
                    vehicleNo: "",
                    visitDate: "",
                    visitInterval: "",
                    bookingId: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return BusVisitSummaryDto;
        })(Backbone.Model);
        Models.BusVisitSummaryDto = BusVisitSummaryDto;
        var BusVisitSummaryCollection = (function (_super) {
            __extends(BusVisitSummaryCollection, _super);
            function BusVisitSummaryCollection(options) {
                this.model = BusVisitSummaryDto;
                _super.call(this, options);
            }
            return BusVisitSummaryCollection;
        })(Backbone.Collection);
        Models.BusVisitSummaryCollection = BusVisitSummaryCollection;

        var AuditBusVisit = (function (_super) {
            __extends(AuditBusVisit, _super);
            function AuditBusVisit() {
                _super.apply(this, arguments);
            }
            AuditBusVisit.prototype.default = function () {
                return {
                    id: "",
                    bookingId: "",
                    propertyName: "",
                    oldValue: "",
                    newValue: "",
                    modifiedDate: "",
                    createdDate: "",
                    actualModifiedDate: "",
                    userName: ""
                };
            };
            return AuditBusVisit;
        })(Backbone.Model);
        Models.AuditBusVisit = AuditBusVisit;

        var AuditBusVisitResponseCollection = (function (_super) {
            __extends(AuditBusVisitResponseCollection, _super);
            function AuditBusVisitResponseCollection(options) {
                this.model = AuditBusVisit;
                _super.call(this, options);
            }
            return AuditBusVisitResponseCollection;
        })(Backbone.Collection);
        Models.AuditBusVisitResponseCollection = AuditBusVisitResponseCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
