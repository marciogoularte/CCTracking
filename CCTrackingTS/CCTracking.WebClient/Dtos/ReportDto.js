var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports) {
    (function (Models) {
        var ReportDto = (function (_super) {
            __extends(ReportDto, _super);
            function ReportDto() {
                _super.apply(this, arguments);
            }
            ReportDto.prototype.default = function () {
                return {
                    fromDate: "",
                    toDate: "",
                    centreId: "",
                    busId: ""
                };
            };
            return ReportDto;
        })(Backbone.Model);
        Models.ReportDto = ReportDto;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
