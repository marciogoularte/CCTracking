var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "jquery"], function(require, exports, baseDAL) {
    /// <reference path="../../Scripts/typings/require/require.d.ts" />
    /// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
    /// <amd-dependency path="jquery"/>
    var $ = require("jquery");

    (function (Models) {
        var LoginRequest = (function (_super) {
            __extends(LoginRequest, _super);
            function LoginRequest() {
                _super.apply(this, arguments);
            }
            LoginRequest.prototype.default = function () {
                return {
                    userName: "",
                    password: ""
                };
            };
            return LoginRequest;
        })(Backbone.Model);
        Models.LoginRequest = LoginRequest;
        var LoginResponse = (function (_super) {
            __extends(LoginResponse, _super);
            function LoginResponse() {
                _super.call(this, this);
            }
            LoginResponse.prototype.getResponse = function () {
                return new Models.LoginResponse();
                //return this;
            };

            //public setServerResponse(response) {
            //    var loginResponse = new Models.LoginResponse();
            //    loginResponse = response;
            //    //loginResponse.id = response.Id;
            //    //loginResponse.userName = response.UserName;
            //    //loginResponse.password = response.Password;
            //    //loginResponse.authenticationToken = response.AuthenticationToken;
            //    return loginResponse;
            //}
            LoginResponse.prototype.default = function () {
                return {
                    id: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    nic: "",
                    userName: "",
                    password: "",
                    isAdmin: false,
                    authenticationToken: "",
                    errorMessage: ""
                };
            };
            return LoginResponse;
        })(baseDAL.BaseDto);
        Models.LoginResponse = LoginResponse;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;

    function Login(loginRequest) {
        var o = new Models.LoginResponse();
        return o.doAjaxRequest(loginRequest, "GET", "User");
    }
    exports.Login = Login;
    function Login1(loginRequest) {
        var _this = this;
        var deferred = $.Deferred();

        //setTimeout(function () {
        //    console.log('counter..');
        //    deferred.reject("show message....");
        //}, 5000);
        var request, requestType, actionUrl;
        request = loginRequest;
        requestType = 'GET';
        actionUrl = 'User';
        var webApiUrl = 'http://localhost/CCTracking.Api/api/' + actionUrl;
        var postData = null;
        if (request != null) {
            postData = request.toJSON();
        }
        $.ajax({
            type: requestType,
            datatype: 'json',
            url: webApiUrl,
            //data: { userName: loginRequest.get("userName"), password: loginRequest.get("password") }
            data: postData
        }).done(function (loginResponse) {
            var response = loginResponse;
            if (loginResponse == undefined) {
                deferred.reject(null);
            } else {
                response = _this.ajaxRequest.getResponse();
                response = loginResponse;
                deferred.resolve(response);
            }
        }).fail(function (e) {
            var response = _this.ajaxRequest.getResponse();
            response.errorMessage = e.responseText.toString();
            deferred.reject(response);
        });

        return deferred.promise();
    }
    exports.Login1 = Login1;
});
//aaa
//# sourceMappingURL=Login.js.map
