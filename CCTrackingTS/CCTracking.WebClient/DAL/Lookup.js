/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "jquery"], function(require, exports, baseDAL) {
    var $ = require("jquery");

    var LookupDal = (function (_super) {
        __extends(LookupDal, _super);
        function LookupDal() {
            _super.call(this, this);
        }
        LookupDal.prototype.getResponse = function () {
            return null;
        };
        return LookupDal;
    })(baseDAL.BaseDto);
    exports.LookupDal = LookupDal;

    function Load() {
        var o = new LookupDal();
        return o.doAjaxRequest(null, "GET", "Lookup");
    }
    exports.Load = Load;
});
