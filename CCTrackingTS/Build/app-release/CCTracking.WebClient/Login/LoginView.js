var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../Helper","../App","marionette","jquery","knockout","text!./Login.html"],function(e,t,n,r){var i=e("underscore"),s=e("text!./Login.html"),o=function(e){function t(t,n){e.call(this,t,n)}return __extends(t,e),t}(n.ViewModel);t.LoginViewModel=o;var u=function(e){function t(t){this.template=s,this.events={submit:"Login"},this.App=r.Application.getInstance(),e.call(this,t)}return __extends(t,e),t.prototype.Login=function(e){e.preventDefault(),this.trigger("LoginUser")},t}(n.Views.MvvmView);t.LoginView=u});