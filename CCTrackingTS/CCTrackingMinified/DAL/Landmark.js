var __extends=this.__extends||function(n,e){function t(){this.constructor=n}for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);t.prototype=e.prototype,n.prototype=new t};define(["require","exports","CCTracking.WebClient/DAL/AjaxRequest","CCTracking.WebClient/Dtos/LandmarkDto"],function(n,e,t,r){function a(){var n=new s;return n.doAjaxRequest(null,"GET","Landmark")}function o(n){var e=new s;return e.doAjaxRequest(n,"POST","Landmark")}function u(){var n=new s;return n.doAjaxRequest(null,"GET","Landmark?a=a")}function i(n){var e=new s;return e.doAjaxRequest(null,"GET","Landmark?id="+n)}var s=function(n){function e(){n.call(this,this)}return __extends(e,n),e.prototype.getResponse=function(){return new r.Models.LandmarkDto},e}(t.BaseDto);e.LandmarkDal=s,e.Load=a,e.Save=o,e.GetAll=u,e.GetById=i});