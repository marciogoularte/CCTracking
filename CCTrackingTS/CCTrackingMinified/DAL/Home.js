var __extends=this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","../Dtos/HomeDto"],function(e,t,n,o){function r(){var e=new c;return e.doAjaxRequest(null,"GET","Home")}function u(e){var t=new c;return t.doAjaxRequest(e,"POST","Home")}function a(){var e=new c;return e.doAjaxRequest(null,"GET","Home?a=a")}function i(e){var t=new c;return t.doAjaxRequest(null,"GET","Home?id="+e)}function s(e){var t=new c;return t.doAjaxRequest(e,"POST","Home")}var c=function(e){function t(){e.call(this,this)}return __extends(t,e),t.prototype.getResponse=function(){return new o.Models.HomeDto},t}(n.BaseDto);t.HomeDal=c,t.Load=r,t.Save=u,t.GetAll=a,t.GetById=i,t.GetByCriteria=s});