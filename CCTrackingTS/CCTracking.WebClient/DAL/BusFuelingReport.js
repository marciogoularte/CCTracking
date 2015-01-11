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

    var BusFuelingReportDal = (function (_super) {
        __extends(BusFuelingReportDal, _super);
        function BusFuelingReportDal() {
            _super.call(this, this);
        }
        BusFuelingReportDal.prototype.getResponse = function () {
            return new searchDto.Models.BookingSummaryDto();
        };
        return BusFuelingReportDal;
    })(baseDAL.BaseDto);
    exports.BusFuelingReportDal = BusFuelingReportDal;

    function Load() {
        var o = new BusFuelingReportDal();
        return o.doAjaxRequest(null, "GET", "BusFuelingReport");
    }
    exports.Load = Load;

    function Save(searchDto) {
        var o = new BusFuelingReportDal();
        return o.doAjaxRequest(searchDto, "POST", "BusFuelingReport");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new BusFuelingReportDal();
        return o.doAjaxRequest(null, "GET", "BusFuelingReport?a=a");
    }
    exports.GetAll = GetAll;
    function GetById(id) {
        var o = new BusFuelingReportDal();
        return o.doAjaxRequest(null, "GET", "BusFuelingReport?id=" + id);
    }
    exports.GetById = GetById;

    function GetByCriteria(searchDto) {
        var o = new BusFuelingReportDal();
        return o.doAjaxRequest(searchDto, "POST", "BusFuelingReport");
    }
    exports.GetByCriteria = GetByCriteria;
});
