/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/NearestCentreDto", "jquery"], function(require, exports, baseDAL, nearestCentreSetupDto) {
    var $ = require("jquery");

    var NearestCentreSetupDal = (function (_super) {
        __extends(NearestCentreSetupDal, _super);
        function NearestCentreSetupDal() {
            _super.call(this, this);
        }
        NearestCentreSetupDal.prototype.getResponse = function () {
            return new nearestCentreSetupDto.Models.NearestCentreDto();
        };
        return NearestCentreSetupDal;
    })(baseDAL.BaseDto);
    exports.NearestCentreSetupDal = NearestCentreSetupDal;

    function Load() {
        var o = new NearestCentreSetupDal();
        return o.doAjaxRequest(null, "GET", "NearestCentreSetup");
    }
    exports.Load = Load;

    function Save(stationDto) {
        var o = new NearestCentreSetupDal();
        return o.doAjaxRequest(stationDto, "POST", "NearestCentreSetup");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new NearestCentreSetupDal();
        return o.doAjaxRequest(null, "GET", "NearestCentreSetup?idAll=a");
    }
    exports.GetAll = GetAll;
    function GetById(id) {
        var o = new NearestCentreSetupDal();
        return o.doAjaxRequest(null, "GET", "NearestCentreSetup?id=" + id);
    }
    exports.GetById = GetById;
});
