/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import busDto = require("CCTracking.WebClient/Dtos/BusDto");


export class BusDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new busDto.Models.BusResponse();
    }
}

export function Save(busRequest: busDto.Models.BusRequest) {
    var o: baseDAL.BaseDto = new BusDal();
    return o.doAjaxRequest(busRequest, "POST", "Bus");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new BusDal();
    return o.doAjaxRequest(null, "GET", "Bus");
}

//aaa


