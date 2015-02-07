var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "../Dtos/HomeDto"], function(require, exports, baseDAL, homeDto) {
    var HomeDal = (function (_super) {
        __extends(HomeDal, _super);
        function HomeDal() {
            _super.call(this, this);
        }
        HomeDal.prototype.getResponse = function () {
            return new homeDto.Models.HomeDto();
        };
        return HomeDal;
    })(baseDAL.BaseDto);
    exports.HomeDal = HomeDal;

    function Load() {
        var o = new HomeDal();
        return o.doAjaxRequest(null, "GET", "Home");
    }
    exports.Load = Load;

    function Save(homeDto) {
        var o = new HomeDal();
        return o.doAjaxRequest(homeDto, "POST", "Home");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new HomeDal();
        return o.doAjaxRequest(null, "GET", "Home?a=a");
    }
    exports.GetAll = GetAll;

    function GetById(id) {
        var o = new HomeDal();
        return o.doAjaxRequest(null, "GET", "Home?id=" + id);
    }
    exports.GetById = GetById;

    function GetByCriteria(homeDto) {
        var o = new HomeDal();
        return o.doAjaxRequest(homeDto, "POST", "Home");
    }
    exports.GetByCriteria = GetByCriteria;
});
