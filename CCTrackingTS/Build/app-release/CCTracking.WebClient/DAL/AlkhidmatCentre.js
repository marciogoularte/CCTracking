var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/AlkhidmatCentreDto","jquery"],function(e,t,n,r){function o(){var e=new s;return e.doAjaxRequest(null,"GET","AlkhidmatCentre")}function u(e){var t=new s;return t.doAjaxRequest(e,"POST","AlkhidmatCentre")}function a(){var e=new s;return e.doAjaxRequest(null,"GET","AlkhidmatCentre?a=a")}function f(e){var t=new s;return t.doAjaxRequest(null,"GET","AlkhidmatCentre?id="+e)}var i=e("jquery"),s=function(e){function t(){e.call(this,this)}return __extends(t,e),t.prototype.getResponse=function(){return new r.Models.StationDto},t}(n.BaseDto);t.StationDal=s,t.Load=o,t.Save=u,t.GetAll=a,t.GetById=f});