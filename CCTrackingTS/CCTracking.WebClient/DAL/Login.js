/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/LoginDto"], function(require, exports, baseDAL, loginDto) {
    var LoginDal = (function (_super) {
        __extends(LoginDal, _super);
        function LoginDal() {
            _super.call(this, this);
        }
        LoginDal.prototype.getResponse = function () {
            return new loginDto.Models.LoginDto();
        };
        return LoginDal;
    })(baseDAL.BaseDto);
    exports.LoginDal = LoginDal;

    function Login(loginDto) {
        var o = new LoginDal();
        return o.doAjaxRequest(loginDto, "GET", "User");
    }
    exports.Login = Login;
});
//export function Login1(loginRequest: loginDto.Models.LoginDto) {
//    var deferred = $.Deferred();
//    //setTimeout(function () {
//    //    console.log('counter..');
//    //    deferred.reject("show message....");
//    //}, 5000);
//    var request: any, requestType: string, actionUrl: string
//    request = loginRequest;
//    requestType = 'GET';
//    actionUrl = 'User';
//    var webApiUrl = 'http://localhost/CCTracking.Api/api/' + actionUrl;
//    var postData = null;
//    if (request != null) {
//        postData = request.toJSON();
//    }
//    $.ajax({
//        type: requestType,
//        datatype: 'json',
//        url: webApiUrl,
//        //data: { userName: loginRequest.get("userName"), password: loginRequest.get("password") }
//        data: postData
//    }).done(loginDto=> {
//            var response = loginDto;
//        if (loginDto == undefined) {
//                deferred.reject(null);
//            }
//            else {
//                response = this.ajaxRequest.getResponse();
//                response = loginDto;
//                deferred.resolve(response);
//            }
//        })
//        .fail(e=>{
//            var response = this.ajaxRequest.getResponse();
//            response.errorMessage = e.responseText.toString();
//            deferred.reject(response);
//        })
//    return deferred.promise();
//}
//aaa
//# sourceMappingURL=Login.js.map
