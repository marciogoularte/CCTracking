/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports) {
    (function (Models) {
        var LoginDto = (function (_super) {
            __extends(LoginDto, _super);
            function LoginDto() {
                _super.apply(this, arguments);
            }
            LoginDto.prototype.default = function () {
                return {
                    id: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                    nic: "",
                    userName: "",
                    password: "",
                    resetPassword: "",
                    isAdmin: false,
                    authenticationToken: "",
                    errorMessage: ""
                };
            };
            return LoginDto;
        })(Backbone.Model);
        Models.LoginDto = LoginDto;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=LoginDto.js.map

/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "CCTracking.WebClient/DAL/AjaxRequest", "CCTracking.WebClient/Dtos/LoginDto"], function(require, exports, baseDAL, loginDto) {
    var LoginDal = (function (_super) {
        __extends(LoginDal, _super);
        function LoginDal() {
            _super.call(this, this);
        }
        LoginDal.prototype.getResponse = function () {
            return new loginDto.Models.LoginDto();
        };
        return LoginDal;
    })(baseDAL.BaseDto);
    exports.LoginDal = LoginDal;

    function Login(loginDto) {
        var o = new LoginDal();
        return o.doAjaxRequest(loginDto, "POST", "Login");
    }
    exports.Login = Login;

    function ChangePasswrd(loginDto) {
        var o = new LoginDal();
        return o.doAjaxRequest(loginDto, "POST", "ChangePassword");
    }
    exports.ChangePasswrd = ChangePasswrd;
});
//# sourceMappingURL=Login.js.map

/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "../App", "marionette", "jquery", "knockout", "text!./Login.html"], function(require, exports, helper, APP) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./Login.html"/>
    var _ = require('underscore');

    var templateView = require("text!./Login.html");

    // View Model
    var LoginViewModel = (function (_super) {
        __extends(LoginViewModel, _super);
        function LoginViewModel(model, controller) {
            _super.call(this, model, controller);
        }
        return LoginViewModel;
    })(helper.ViewModel);
    exports.LoginViewModel = LoginViewModel;

    var LoginView = (function (_super) {
        __extends(LoginView, _super);
        function LoginView(options) {
            this.template = templateView;
            this.events = {
                "submit": "Login"
            };
            this.App = APP.Application.getInstance();

            //this.App.vent.on("LoginCallback", this.Authenticated1);
            //this.App.reqres.setHandler("AppGlobalSetting", this.ConfigureGlobalSetting);
            _super.call(this, options);
        }
        LoginView.prototype.Login = function (e) {
            e.preventDefault();
            this.trigger("LoginUser");
        };
        return LoginView;
    })(helper.Views.MvvmView);
    exports.LoginView = LoginView;
});

/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../App", "../Helper", "../Dtos/AppObjectDto", "../DAL/AjaxRequest", "marionette", "jquery", "knockout", "text!./Login.html"], function(require, exports, application, helper, appObjectDto, baseDAL) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./Login.html"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var LoginCtrl = (function (_super) {
        __extends(LoginCtrl, _super);
        function LoginCtrl() {
            _super.call(this);

            //alert("constructor");
            this.app = application.Application.getInstance();
            this.backboneModel = new LoginModule.Models.LoginDto();
            this.loginViewModel = new LoginModule.Views.LoginViewModel(this.backboneModel, this);
            this.loginView = new LoginModule.Views.LoginView({ viewModel: this.loginViewModel });
        }
        LoginCtrl.prototype.Load = function () {
            var _this = this;
            this.loginView = new LoginModule.Views.LoginView();

            //var layout = this.app.AppLayout;
            //this.ContainerRegion.show(layout);
            this.app.LoginRegion.show(this.loginView);
            this.loginView.on("LoginUser", function () {
                return _this.Login(_this.loginViewModel.bbModel);
            });
        };

        LoginCtrl.prototype.Login = function (login) {
            var _this = this;
            //debugger;
            //this.ShowOverlay();
            var appObj = this.app.request("AppGlobalSetting");
            login.set("userName", $("#txtUserName").val());
            login.set("password", $("#txtPassword").val());
            var promise = LoginModule.Dal.Login(login);

            promise.done(function (p) {
                return _this.Authenticated(p);
            });
        };

        //TODO: this method should be inside controller
        LoginCtrl.prototype.Authenticated = function (loginDto) {
            var _this = this;
            //console.log(loginResponse);
            var lblLoginMessage = $("#lblLoginMessage");
            if (loginDto == undefined) {
                helper.ShowModalPopup("danger", "Authentication", "User name or password is wrong..!<br> Pelase try again");
                return;
            }

            if (loginDto["errorMessage"] !== null) {
                helper.ShowModalPopup("danger", "Authentication", loginDto["errorMessage"]);
            } else {
                var appObject = new appObjectDto.Models.AppObject();

                appObject.set("Id", loginDto["id"]);
                appObject.set("FirstName", loginDto["firstName"]);
                appObject.set("LastName", loginDto["lastName"]);
                appObject.set("UserName", loginDto["userName"]);
                appObject.set("IsAdmin", loginDto["isAdmin"]);
                appObject.set("AuthenticationToken", loginDto["authenticationToken"]);

                this.app.reqres.setHandler("AppGlobalSetting", function () {
                    return appObject;
                }, this);

                this.app.LoginRegion.close();

                var appObj = this.app.request("AppGlobalSetting");
                var headerModel = new Backbone.Model({ firstName: appObj.get("FirstName"), lastName: appObj.get("LastName"), userName: appObj.get("UserName") });

                require(["../Common/Views/HeaderView"], function (p) {
                    var headerView = new p.HeaderItemView({
                        model: headerModel
                    });
                    _this.app.HeaderRegion.show(headerView);
                });

                //if (loginDto["isAdmin"]) {
                //    //admin view
                //    this.app.AdminLeftRegion.show(new adminLeft.AdminLeftItemView());
                //}
                //new bookingLeftCtrl.BookingLeftCtrl().Show();
                require(['../Bus/BusAvailabilityCtrl'], function (p) {
                    new p.BusAvailabilityCtrl().Show();
                });

                //new busAvailabilityCtrl.BusAvailabilityCtrl().Show();
                if (appObj.get("IsAdmin")) {
                    require(["../Home/HomeCtrl"], function (p) {
                        new p.HomeCtrl().Show();
                    });

                    //var home = new homeCtrl.HomeCtrl();
                    //home.Show();
                    this.app.applyRouting(this.app, this.app.AppLayout);
                } else {
                    require(['../Booking/BookingCtrl'], function (p) {
                        new p.BookingCtrl().GetAll(1);
                    });
                    this.app.applyRoutingForOperator(this.app, this.app.AppLayout);
                }
            }
        };
        LoginCtrl.prototype.Cancel = function () {
            window.location.href = "#viewLogin";
        };
        return LoginCtrl;
    })(helper.Controller);
    exports.LoginCtrl = LoginCtrl;

    (function (LoginModule) {
        (function (Views) {
            var templateView = require("text!./Login.html");

            //import APP = require("../App");
            // View Model
            var LoginViewModel = (function (_super) {
                __extends(LoginViewModel, _super);
                function LoginViewModel(model, controller) {
                    _super.call(this, model, controller);
                }
                return LoginViewModel;
            })(helper.ViewModel);
            Views.LoginViewModel = LoginViewModel;

            var LoginView = (function (_super) {
                __extends(LoginView, _super);
                function LoginView(options) {
                    this.template = templateView;
                    this.events = {
                        "submit": "Login"
                    };
                    this.App = application.Application.getInstance();

                    //this.App.vent.on("LoginCallback", this.Authenticated1);
                    //this.App.reqres.setHandler("AppGlobalSetting", this.ConfigureGlobalSetting);
                    _super.call(this, options);
                }
                LoginView.prototype.Login = function (e) {
                    e.preventDefault();
                    this.trigger("LoginUser");
                };
                return LoginView;
            })(helper.Views.MvvmView);
            Views.LoginView = LoginView;
        })(LoginModule.Views || (LoginModule.Views = {}));
        var Views = LoginModule.Views;

        (function (Models) {
            var LoginDto = (function (_super) {
                __extends(LoginDto, _super);
                function LoginDto() {
                    _super.apply(this, arguments);
                }
                LoginDto.prototype.default = function () {
                    return {
                        id: "",
                        firstName: "",
                        lastName: "",
                        email: "",
                        mobile: "",
                        nic: "",
                        userName: "",
                        password: "",
                        resetPassword: "",
                        isAdmin: false,
                        authenticationToken: "",
                        errorMessage: ""
                    };
                };
                return LoginDto;
            })(Backbone.Model);
            Models.LoginDto = LoginDto;
        })(LoginModule.Models || (LoginModule.Models = {}));
        var Models = LoginModule.Models;

        (function (Dal) {
            var LoginDal = (function (_super) {
                __extends(LoginDal, _super);
                function LoginDal() {
                    _super.call(this, this);
                }
                LoginDal.prototype.getResponse = function () {
                    return new LoginModule.Models.LoginDto();
                };
                return LoginDal;
            })(baseDAL.BaseDto);
            Dal.LoginDal = LoginDal;

            function Login(loginDto) {
                var o = new LoginDal();
                return o.doAjaxRequest(loginDto, "POST", "Login");
            }
            Dal.Login = Login;

            function ChangePasswrd(loginDto) {
                var o = new LoginDal();
                return o.doAjaxRequest(loginDto, "POST", "ChangePassword");
            }
            Dal.ChangePasswrd = ChangePasswrd;
        })(LoginModule.Dal || (LoginModule.Dal = {}));
        var Dal = LoginModule.Dal;
    })(exports.LoginModule || (exports.LoginModule = {}));
    var LoginModule = exports.LoginModule;
});