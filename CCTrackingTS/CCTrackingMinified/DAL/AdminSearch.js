var __extends=this.__extends||function(e,n){function t(){this.constructor=e}for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o]);t.prototype=n.prototype,e.prototype=new t};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/BookingSummaryDto","jquery"],function(e,n,t,o){function r(){var e=new c;return e.doAjaxRequest(null,"GET","BookingSummary")}function u(e){var n=new c;return n.doAjaxRequest(e,"POST","BookingSummary")}function a(){var e=new c;return e.doAjaxRequest(null,"GET","BookingSummary?a=a")}function i(e){var n=new c;return n.doAjaxRequest(null,"GET","BookingSummary?id="+e)}function s(e){var n=new c;return n.doAjaxRequest(e,"POST","BookingSummary")}var c=(e("jquery"),function(e){function n(){e.call(this,this)}return __extends(n,e),n.prototype.getResponse=function(){return new o.Models.BookingSummaryDto},n}(t.BaseDto));n.AdminSearchDal=c,n.Load=r,n.Save=u,n.GetAll=a,n.GetById=i,n.GetByCriteria=s});