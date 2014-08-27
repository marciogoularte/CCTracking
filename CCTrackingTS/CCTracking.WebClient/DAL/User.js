var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/UserDto", "jquery"], function(require, exports, baseDAL, userDto) {
    /// <reference path="../../Scripts/typings/require/require.d.ts" />
    /// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
    /// <amd-dependency path="jquery"/>
    var $ = require("jquery");

    var UserDal = (function (_super) {
        __extends(UserDal, _super);
        function UserDal() {
            _super.call(this, this);
        }
        UserDal.prototype.getResponse = function () {
            return new userDto.Models.UserResponse();
        };
        return UserDal;
    })(baseDAL.BaseDto);
    exports.UserDal = UserDal;

    function Save(userRequest) {
        var o = new UserDal();
        return o.doAjaxRequest(userRequest, "POST", "User");
    }
    exports.Save = Save;

    function GetAll() {
        var o = new UserDal();
        return o.doAjaxRequest(null, "GET", "User");
    }
    exports.GetAll = GetAll;
});
//aaa
//# sourceMappingURL=User.js.map
