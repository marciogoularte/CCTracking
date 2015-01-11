/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
import baseDAL = require("CCTracking.WebClient/DAL/AjaxRequest");
import receiptContentDto = require("CCTracking.WebClient/Dtos/ReceiptContentDto");


export class ReceiptContentDal extends baseDAL.BaseDto implements baseDAL.IBaseDto {
    constructor() {
        super(this);
    }
    public getResponse() {
        return new receiptContentDto.Models.ReceiptContentDto();
    }
}

export function GetById(id) {
    var o: baseDAL.BaseDto = new ReceiptContentDal();
    return o.doAjaxRequest(null, "GET", "ReceiptContent?id=" + id);
}
