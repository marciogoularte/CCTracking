/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "jquery", "backbone"], function(require, exports) {
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="backbone"/>
    (function (Models) {
        var UserRequest = (function (_super) {
            __extends(UserRequest, _super);
            function UserRequest() {
                _super.apply(this, arguments);
            }
            //default() {
            //    return {
            //        userName: "",
            //        password: ""
            //    };
            //}
            UserRequest.prototype.default = function () {
                return {
                    Id: "",
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Mobile: "",
                    Nic: "",
                    UserName: "",
                    Password: "",
                    IsAdmin: false,
                    AuthenticationToken: "",
                    AuthenticationErrorMessage: ""
                };
            };
            return UserRequest;
        })(Backbone.Model);
        Models.UserRequest = UserRequest;
        var UserResponse = (function (_super) {
            __extends(UserResponse, _super);
            function UserResponse() {
                _super.apply(this, arguments);
            }
            UserResponse.prototype.default = function () {
                return {
                    Id: "",
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Mobile: "",
                    Nic: "",
                    UserName: "",
                    Password: "",
                    IsAdmin: false,
                    AuthenticationToken: "",
                    AuthenticationErrorMessage: ""
                };
            };
            return UserResponse;
        })(Backbone.Model);
        Models.UserResponse = UserResponse;
        var UserResponseCollection = (function (_super) {
            __extends(UserResponseCollection, _super);
            function UserResponseCollection(options) {
                this.model = UserResponse;
                _super.call(this, options);
            }
            return UserResponseCollection;
        })(Backbone.Collection);
        Models.UserResponseCollection = UserResponseCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//aaa
//# sourceMappingURL=UserDto.js.map
