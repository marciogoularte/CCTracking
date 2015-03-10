var __extends=this.__extends||function(e,t){function o(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);o.prototype=t.prototype,e.prototype=new o};define(["require","exports","../App","../Helper","./LoginView","../Dtos/LoginDto","../DAL/Login","../Common/Views/HeaderView","../Dtos/AppObjectDto","../Bus/BusAvailabilityCtrl","../Home/HomeCtrl","marionette","jquery","knockout","text!./Login.html"],function(e,t,o,i,n,s,a,r,p,l,g){var u=(e("underscore"),e("knockout"),e("knockback"),function(t){function u(){t.call(this),this.app=o.Application.getInstance(),this.backboneModel=new s.Models.LoginDto,this.loginViewModel=new n.LoginViewModel(this.backboneModel,this),this.loginView=new n.LoginView({viewModel:this.loginViewModel})}return __extends(u,t),u.prototype.Load=function(){var e=this;this.loginView=new n.LoginView,this.app.LoginRegion.show(this.loginView),this.loginView.on("LoginUser",function(){return e.Login(e.loginViewModel.bbModel)})},u.prototype.Login=function(e){{var t=this;this.app.request("AppGlobalSetting")}e.set("userName",$("#txtUserName").val()),e.set("password",$("#txtPassword").val());var o=a.Login(e);o.done(function(e){return t.Authenticated(e)})},u.prototype.Authenticated=function(t){$("#lblLoginMessage");if(void 0==t)return void i.ShowModalPopup("danger","Authentication","User name or password is wrong..!<br> Pelase try again");if(null!==t.errorMessage)i.ShowModalPopup("danger","Authentication",t.errorMessage);else{var o=new p.Models.AppObject;o.set("Id",t.id),o.set("FirstName",t.firstName),o.set("LastName",t.lastName),o.set("UserName",t.userName),o.set("IsAdmin",t.isAdmin),o.set("AuthenticationToken",t.authenticationToken),this.app.reqres.setHandler("AppGlobalSetting",function(){return o},this),this.app.LoginRegion.close();var n=this.app.request("AppGlobalSetting"),s=new Backbone.Model({firstName:n.get("FirstName"),lastName:n.get("LastName"),userName:n.get("UserName")}),a=new r.HeaderItemView({model:s});if(this.app.HeaderRegion.show(a),(new l.BusAvailabilityCtrl).Show(),n.get("IsAdmin")){var u=new g.HomeCtrl;u.Show(),this.app.applyRouting(this.app,this.app.AppLayout)}else e(["../Booking/BookingCtrl"],function(e){(new e.BookingCtrl).GetAll(1)}),this.app.applyRoutingForOperator(this.app,this.app.AppLayout)}},u.prototype.Cancel=function(){window.location.href="#viewLogin"},u}(i.Controller));t.LoginCtrl=u});