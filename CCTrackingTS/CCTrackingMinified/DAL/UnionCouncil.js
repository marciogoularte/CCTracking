var __extends=this.__extends||function(n,e){function t(){this.constructor=n}for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);t.prototype=e.prototype,n.prototype=new t};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/UnionCouncilDto"],function(n,e,t,o){function i(){var n=new c;return n.doAjaxRequest(null,"GET","UnionCouncil")}function r(n){var e=new c;return e.doAjaxRequest(n,"POST","UnionCouncil")}function u(){var n=new c;return n.doAjaxRequest(null,"GET","UnionCouncil?a=a")}function a(n){var e=new c;return e.doAjaxRequest(null,"GET","UnionCouncil?id="+n)}var c=function(n){function e(){n.call(this,this)}return __extends(e,n),e.prototype.getResponse=function(){return new o.Models.UnionCouncilDto},e}(t.BaseDto);e.UnionCouncilDal=c,e.Load=i,e.Save=r,e.GetAll=u,e.GetById=a});