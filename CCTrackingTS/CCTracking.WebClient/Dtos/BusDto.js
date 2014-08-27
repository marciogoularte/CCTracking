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
        var BusRequest = (function (_super) {
            __extends(BusRequest, _super);
            function BusRequest() {
                _super.apply(this, arguments);
            }
            BusRequest.prototype.default = function () {
                return {
                    id: '',
                    name: ''
                };
            };
            return BusRequest;
        })(Backbone.Model);
        Models.BusRequest = BusRequest;
        var BusResponse = (function (_super) {
            __extends(BusResponse, _super);
            function BusResponse() {
                _super.apply(this, arguments);
            }
            BusResponse.prototype.default = function () {
                return {
                    id: '',
                    name: ''
                };
            };
            return BusResponse;
        })(Backbone.Model);
        Models.BusResponse = BusResponse;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=BusDto.js.map
