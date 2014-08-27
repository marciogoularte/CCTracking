/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>
var $ = require("jquery");

import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");


export module Models {
    export class LoginRequest extends Backbone.Model {
        default() {
            return {
                userName: "",
                password: ""
            };
        }
    }
    export class LoginResponse extends baseDAL.BaseDto implements baseDAL.IBaseDto {
        constructor() {
            super(this);
        }
        public getResponse() {
            return new Models.LoginResponse();
            //return this;
        }
        //public setServerResponse(response) {
        //    var loginResponse = new Models.LoginResponse();            
        //    loginResponse = response;            
        //    //loginResponse.id = response.Id;
        //    //loginResponse.userName = response.UserName;
        //    //loginResponse.password = response.Password;
        //    //loginResponse.authenticationToken = response.AuthenticationToken;
        //    return loginResponse;
        //}
        default() {
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
                authenticationErrorMessage: ""
            }
        }

    }
}

export function Login(loginRequest: Models.LoginRequest) {
    var o: baseDAL.BaseDto = new Models.LoginResponse();
    return o.doAjaxRequest(loginRequest, "GET", "User");
}
export function Login1(loginRequest: Models.LoginRequest) {
    var deferred = $.Deferred();
    //setTimeout(function () {
    //    console.log('counter..');
    //    deferred.reject("show message....");
    //}, 5000);
    var request: any, requestType: string, actionUrl: string
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
    }).done(loginResponse=> {
                
            var response = loginResponse;
            if (loginResponse == undefined) {
                deferred.reject(null);
            }
            else {
                response = this.ajaxRequest.getResponse();
                response = loginResponse;
                deferred.resolve(response);
            }
            
        })
        .fail(e=>{
            var response = this.ajaxRequest.getResponse();
            response.AuthenticationErrorMessage = e.responseText.toString();
            deferred.reject(response);
        })

    return deferred.promise();
}


//aaa