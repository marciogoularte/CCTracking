/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "./UserView", "CCTracking.WebClient/Dtos/UserDto", "../DAL/User", "marionette", "jquery", "knockout", "text!./User.html"], function(require, exports, application, helper, views, dto, DAL) {
    var app;
    var UserCtrl = (function (_super) {
        __extends(UserCtrl, _super);
        function UserCtrl() {
            app = application.Application.getInstance();
            _super.call(this);
        }
        UserCtrl.prototype.Show = function () {
            //this is for knockout testing purpose...
            var model = new dto.Models.UserResponse();
            model.set("FirstName", "user first name");
            model.set("LastName", "user last name");
            this.userViewModel = new views.UserViewModel(model, this);
            this.userView = new views.UserView({ viewModel: this.userViewModel });

            //this.layout = app.AppLayout;
            app.AppLayout.MainRegion.show(this.userView);
            //app.MainRegion.show(this.userView);
        };
        UserCtrl.prototype.ShowDetail = function (model) {
            this.userViewModel = new views.UserViewModel(model, this);
            this.userView = new views.UserView({ viewModel: this.userViewModel });

            //this.layout = app.AppLayout;
            app.AppLayout.MainRegion.show(this.userView);
            //app.MainRegion.show(this.userView);
        };

        UserCtrl.prototype.Get = function () {
        };
        UserCtrl.prototype.GetAll = function () {
            var deferred = DAL.GetAll();
            deferred.done(function (p) {
                return new views.UserView().GetAllCompleted(p);
            });
            //console.log('GetAll');
        };
        UserCtrl.prototype.Add = function (user) {
            var deferred = DAL.Save(user);

            //TODO: call controller from here...
            deferred.done(function (p) {
                return new views.UserView().SaveCompleted(p);
            });
        };
        UserCtrl.prototype.Update = function () {
        };
        return UserCtrl;
    })(helper.Controller);
    exports.UserCtrl = UserCtrl;
});
//aaa
//# sourceMappingURL=UserCtrl.js.map
