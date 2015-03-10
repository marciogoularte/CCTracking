/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import extraChargesDto = require("../Dtos/ExtraChargesDto");


export class ExtraChargesDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new extraChargesDto.Models.ExtraChargesDto();
    }
}


export function Load() {
    var o: baseDAL.BaseDto = new ExtraChargesDal();
    return o.doAjaxRequest(null, "GET", "ExtraCharges");
}

export function Save(extraChargesDto: extraChargesDto.Models.ExtraChargesDto) {
    var o: baseDAL.BaseDto = new ExtraChargesDal();
    return o.doAjaxRequest(extraChargesDto, "POST", "ExtraCharges");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new ExtraChargesDal();
    return o.doAjaxRequest(null, "GET", "ExtraCharges?a=a");
}

export function GetById(id) {
    var o: baseDAL.BaseDto = new ExtraChargesDal();
    return o.doAjaxRequest(null, "GET", "ExtraCharges?id=" + id);
}

//aaa


