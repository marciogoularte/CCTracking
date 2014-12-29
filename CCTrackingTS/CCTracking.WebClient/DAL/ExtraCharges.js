var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "../Dtos/ExtraChargesDto"], function(require, exports, baseDAL, extraChargesDto) {
    var ExtraChargesDal = (function (_super) {
        __extends(ExtraChargesDal, _super);
        function ExtraChargesDal() {
            _super.call(this, this);
        }
        ExtraChargesDal.prototype.getResponse = function () {
            return new extraChargesDto.Models.ExtraChargesDto();
        };
        return ExtraChargesDal;
    })(baseDAL.BaseDto);
    exports.ExtraChargesDal = ExtraChargesDal;

    function Load() {
        var o = new ExtraChargesDal();
        return o.doAjaxRequest(null, "GET", "ExtraCharges");
    }
    exports.Load = Load;

    function Save(extraChargesDto) {
        var o = new ExtraChargesDal();
        return o.doAjaxRequest(extraChargesDto, "POST", "ExtraCharges");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new ExtraChargesDal();
        return o.doAjaxRequest(null, "GET", "ExtraCharges?a=a");
    }
    exports.GetAll = GetAll;

    function GetById(id) {
        var o = new ExtraChargesDal();
        return o.doAjaxRequest(null, "GET", "ExtraCharges?id=" + id);
    }
    exports.GetById = GetById;
});
//aaa
//# sourceMappingURL=ExtraCharges.js.map
