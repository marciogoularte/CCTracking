var __extends=this.__extends||function(n,e){function t(){this.constructor=n}for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o]);t.prototype=e.prototype,n.prototype=new t};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/TownDto"],function(n,e,t,o){function r(){var n=new s;return n.doAjaxRequest(null,"GET","Town")}function u(n){var e=new s;return e.doAjaxRequest(n,"POST","Town")}function a(){var n=new s;return n.doAjaxRequest(null,"GET","Town?a=a")}function i(n){var e=new s;return e.doAjaxRequest(null,"GET","Town?id="+n)}var s=function(n){function e(){n.call(this,this)}return __extends(e,n),e.prototype.getResponse=function(){return new o.Models.TownDto},e}(t.BaseDto);e.TownDal=s,e.Load=r,e.Save=u,e.GetAll=a,e.GetById=i});