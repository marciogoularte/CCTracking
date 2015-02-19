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
        var ReceiptContentDto = (function (_super) {
            __extends(ReceiptContentDto, _super);
            function ReceiptContentDto() {
                _super.apply(this, arguments);
            }
            ReceiptContentDto.prototype.default = function () {
                return {
                    bookingId: "",
                    centreDesc: "",
                    contactName: "",
                    bookingReceipt: "",
                    bookingDate: "",
                    bookingAmount: "",
                    userName: "",
                    printDateTime: ""
                };
            };
            return ReceiptContentDto;
        })(Backbone.Model);
        Models.ReceiptContentDto = ReceiptContentDto;
        var ReceiptContentCollection = (function (_super) {
            __extends(ReceiptContentCollection, _super);
            function ReceiptContentCollection(options) {
                this.model = ReceiptContentDto;
                _super.call(this, options);
            }
            return ReceiptContentCollection;
        })(Backbone.Collection);
        Models.ReceiptContentCollection = ReceiptContentCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=ReceiptContentDto.js.map
