var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/ReceiptContentDto"], function(require, exports, baseDAL, receiptContentDto) {
    var ReceiptContentDal = (function (_super) {
        __extends(ReceiptContentDal, _super);
        function ReceiptContentDal() {
            _super.call(this, this);
        }
        ReceiptContentDal.prototype.getResponse = function () {
            return new receiptContentDto.Models.ReceiptContentDto();
        };
        return ReceiptContentDal;
    })(baseDAL.BaseDto);
    exports.ReceiptContentDal = ReceiptContentDal;

    function GetById(id) {
        var o = new ReceiptContentDal();
        return o.doAjaxRequest(null, "GET", "ReceiptContent?id=" + id);
    }
    exports.GetById = GetById;
});
