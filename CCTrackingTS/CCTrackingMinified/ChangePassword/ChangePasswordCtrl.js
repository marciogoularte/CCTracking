var __extends=this.__extends||function(e,s){function o(){this.constructor=e}for(var t in s)s.hasOwnProperty(t)&&(e[t]=s[t]);o.prototype=s.prototype,e.prototype=new o};define(["require","exports","../App","../Helper","./ChangePasswordView","../Dtos/LoginDto","../DAL/Login","marionette","jquery","knockout","text!./ChangePassword.html"],function(e,s,o,t,a,r,n){var d=(e("underscore"),e("knockout"),e("knockback"),function(e){function s(){e.call(this),this.app=o.Application.getInstance(),this.backboneModel=new r.Models.LoginDto,this.changePasswordViewModel=new a.ChangePasswordViewModel(this.backboneModel,this),this.changePasswordView=new a.ChangePasswordView({viewModel:this.changePasswordViewModel})}return __extends(s,e),s.prototype.Load=function(){var e=this;this.changePasswordView=new a.ChangePasswordView;this.app.AppLayout;this.app.MainRegion.show(this.changePasswordView),this.changePasswordView.on("ChangePassword",function(){return e.ChangePassword(e.changePasswordViewModel.bbModel)})},s.prototype.ChangePassword=function(e){var s=this,o=$("#txtPassword").val(),a=$("#txtResetPassword").val(),r=$("#txtReEnterPassword").val();if(a!=r)return void t.ShowModalPopup("danger","Reset Password","New Password and Re-Enter Password are not same.<br>Please enter same password.");var d=this.app.request("AppGlobalSetting");e.set("userName",d.get("UserName")),e.set("password",o),e.set("changePassword",a);var i=n.ChangePasswrd(e);i.done(function(e){return s.Authenticated(e)})},s.prototype.Authenticated=function(e){var s=new Backbone.Model(e);return void 0==s?void t.ShowModalPopup("danger","Reset Password","Due to some technical reason password have not been reset successfully!<br> Pelase try later"):void 0!=s.get("errorMessage")&&""!=s.get("errorMessage").trim()?void t.ShowModalPopup("danger","Reset Password",s.get("errorMessage")):void t.ShowModalPopup("success","Reset Password","Password has been reset successfully")},s}(t.Controller));s.ChangePasswordCtrl=d});