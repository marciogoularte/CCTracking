/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>

var $ = require("jquery");

import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import searchDto = require("CCTracking.WebClient/Dtos/BookingSummaryDto");

export class BusFuelingReportDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new searchDto.Models.BookingSummaryDto();
    }
}

export function Load() {
    var o: baseDAL.BaseDto = new BusFuelingReportDal();
    return o.doAjaxRequest(null, "GET", "BusFuelingReport");
}

export function Save(searchDto: searchDto.Models.BookingSummaryDto) {
    var o: baseDAL.BaseDto = new BusFuelingReportDal();
    return o.doAjaxRequest(searchDto, "POST", "BusFuelingReport");
}

export function GetAll() {
    var o: baseDAL.BaseDto = new BusFuelingReportDal();
    return o.doAjaxRequest(null, "GET", "BusFuelingReport?a=a");
}
export function GetById(id) {
    var o: baseDAL.BaseDto = new BusFuelingReportDal();
    return o.doAjaxRequest(null, "GET", "BusFuelingReport?id=" + id);
}

export function GetByCriteria(searchDto: searchDto.Models.BookingSummaryDto) {
    var o: baseDAL.BaseDto = new BusFuelingReportDal();
    return o.doAjaxRequest(searchDto, "POST", "BusFuelingReport");
}



