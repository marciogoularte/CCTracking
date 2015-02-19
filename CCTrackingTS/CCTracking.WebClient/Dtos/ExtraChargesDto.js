/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports) {
    (function (Models) {
        var ExtraChargesDto = (function () {
            function ExtraChargesDto() {
            }
            ExtraChargesDto.prototype.default = function () {
                return {
                    id: "",
                    bookingId: "",
                    actualBookingAmount: "",
                    extraAmountCharge: "",
                    extraAmountReason: "",
                    extraAmountReceipt: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return ExtraChargesDto;
        })();
        Models.ExtraChargesDto = ExtraChargesDto;
        var ExtraChargesCollection = (function (_super) {
            __extends(ExtraChargesCollection, _super);
            function ExtraChargesCollection(options) {
                this.model = ExtraChargesDto;
                _super.call(this, options);
            }
            return ExtraChargesCollection;
        })(Backbone.Collection);
        Models.ExtraChargesCollection = ExtraChargesCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=ExtraChargesDto.js.map
