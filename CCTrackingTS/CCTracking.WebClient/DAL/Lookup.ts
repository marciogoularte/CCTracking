/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="jquery"/>

var $ = require("jquery");

import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");


export class LookupDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return null;
    }
}

export function Load() {
    var o: baseDAL.BaseDto = new LookupDal();
    return o.doAjaxRequest(null, "GET", "Lookup");
}