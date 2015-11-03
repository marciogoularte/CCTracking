/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>

var $ = require("jquery");

import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import nearestCentreSetupDto = require("CCTracking.WebClient/Dtos/NearestCentreDto");


export class NearestCentreSetupDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new nearestCentreSetupDto.Models.NearestCentreDto();
    }
}

export function Load() {
    var o: baseDAL.BaseDto = new NearestCentreSetupDal();
    return o.doAjaxRequest(null, "GET", "NearestCentreSetup");
}

export function Save(stationDto: nearestCentreSetupDto.Models.NearestCentreDto) {
    var o: baseDAL.BaseDto = new NearestCentreSetupDal();
    return o.doAjaxRequest(stationDto, "POST", "NearestCentreSetup");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new NearestCentreSetupDal();
    return o.doAjaxRequest(null, "GET", "NearestCentreSetup?idAll=a");
}
export function GetById(id) {
    var o: baseDAL.BaseDto = new NearestCentreSetupDal();
    return o.doAjaxRequest(null, "GET", "NearestCentreSetup?id=" + id);
}
