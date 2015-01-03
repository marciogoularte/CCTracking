/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/BookingSummaryDto", "jquery"], function(require, exports, baseDAL, searchDto) {
    var $ = require("jquery");

    var BusCentreReportDal = (function (_super) {
        __extends(BusCentreReportDal, _super);
        function BusCentreReportDal() {
            _super.call(this, this);
        }
        BusCentreReportDal.prototype.getResponse = function () {
            return new searchDto.Models.BookingSummaryDto();
        };
        return BusCentreReportDal;
    })(baseDAL.BaseDto);
    exports.BusCentreReportDal = BusCentreReportDal;

    function Load() {
        var o = new BusCentreReportDal();
        return o.doAjaxRequest(null, "GET", "BusCentreReport");
    }
    exports.Load = Load;

    function Save(searchDto) {
        var o = new BusCentreReportDal();
        return o.doAjaxRequest(searchDto, "POST", "BusCentreReport");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new BusCentreReportDal();
        return o.doAjaxRequest(null, "GET", "BusCentreReport?a=a");
    }
    exports.GetAll = GetAll;
    function GetById(id) {
        var o = new BusCentreReportDal();
        return o.doAjaxRequest(null, "GET", "BusCentreReport?id=" + id);
    }
    exports.GetById = GetById;

    function GetByCriteria(searchDto) {
        var o = new BusCentreReportDal();
        return o.doAjaxRequest(searchDto, "POST", "BusCentreReport");
    }
    exports.GetByCriteria = GetByCriteria;
});
//# sourceMappingURL=BusCentreReport.js.map
