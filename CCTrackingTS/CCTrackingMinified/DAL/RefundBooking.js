var __extends=this.__extends||function(n,e){function t(){this.constructor=n}for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);t.prototype=e.prototype,n.prototype=new t};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/RefundBookingDto","jquery"],function(n,e,t,o){function u(){var n=new a;return n.doAjaxRequest(null,"GET","RefundBooking")}function r(n){var e=new a;return e.doAjaxRequest(n,"POST","RefundBooking")}function i(n){var e=new a;return e.doAjaxRequest(null,"GET","RefundBooking?id="+n)}function d(n){var e=new a;return e.doAjaxRequest(n,"POST","AuditRefundBooking")}var a=(n("jquery"),function(n){function e(){n.call(this,this)}return __extends(e,n),e.prototype.getResponse=function(){return new o.Models.RefundBookingDto},e}(t.BaseDto));e.RefundBookingDal=a,e.Load=u,e.Save=r,e.GetById=i,e.GetAllAuditRefundBooking=d});