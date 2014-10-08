
/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />


import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import loginDto = require("CCTracking.WebClient/Dtos/LoginDto");


export class LoginDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new loginDto.Models.LoginDto();
    }
}


export function Login(loginDto: loginDto.Models.LoginDto) {
    var o: baseDAL.BaseDto = new LoginDal();
    return o.doAjaxRequest(loginDto, "GET", "User");
}
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