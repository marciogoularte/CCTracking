/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>
var $ = require("jquery");
import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import userDto = require("CCTracking.WebClient/Dtos/UserDto");


export class UserDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new userDto.Models.UserResponse();
    }
}

export function Save(userRequest: userDto.Models.UserRequest) {
    var o: baseDAL.BaseDto = new UserDal();
    return o.doAjaxRequest(userRequest, "POST", "User");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new UserDal();
    return o.doAjaxRequest(null, "GET", "User");
}

//aaa


