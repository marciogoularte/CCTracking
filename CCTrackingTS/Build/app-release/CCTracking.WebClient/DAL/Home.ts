/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import homeDto = require("../Dtos/HomeDto");


export class HomeDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new homeDto.Models.HomeDto();
    }
}


export function Load() {
    var o: baseDAL.BaseDto = new HomeDal();
    return o.doAjaxRequest(null, "GET", "Home");
}

export function Save(homeDto: homeDto.Models.HomeDto) {
    var o: baseDAL.BaseDto = new HomeDal();
    return o.doAjaxRequest(homeDto, "POST", "Home");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new HomeDal();
    return o.doAjaxRequest(null, "GET", "Home?a=a");
}

export function GetById(id) {
    var o: baseDAL.BaseDto = new HomeDal();
    return o.doAjaxRequest(null, "GET", "Home?id=" + id);
}

export function GetByCriteria(homeDto: homeDto.Models.HomeDto) {
    var o: baseDAL.BaseDto = new HomeDal();
    return o.doAjaxRequest(homeDto, "POST", "Home");
}

//aaa


