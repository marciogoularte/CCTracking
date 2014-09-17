/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "CCTracking.WebClient/Dtos/UserDto", "./UserCtrl", "../App", "backbone", "knockout", "jqueryValidate", "jqueryUnobtrusive", "jqueryUnobtrusiveAjax", "datatables", "datatablesBootstrap", "text!CCTracking.WebClient/User/User.html", "text!CCTracking.WebClient/User/UserGrid.html", "text!CCTracking.WebClient/User/UserGridRow.html", "text!./SuccessModal.html"], function(require, exports, helper, userDto, userCtrl, application) {
    var templateView = require("text!CCTracking.WebClient/User/User.html");

    var templateGrid = require("text!CCTracking.WebClient/User/UserGrid.html");
    var templateRow = require("text!CCTracking.WebClient/User/UserGridRow.html");
    var successModal = require("text!./SuccessModal.html");

    var ko = require("knockout");

    var app;

    var UserViewModel = (function (_super) {
        __extends(UserViewModel, _super);
        function UserViewModel(model, controller) {
            //this.ErrorMessage = ko.observable<string>("");
            _super.call(this, model, controller);
            //this.model.FirstName = ko.observable().extend({ required: true });
            //this.model.LastName = ko.observable().extend({ required: true });
            //this.model.FirstName.extend({ required: true });
            //this.model.LastName.extend({ required: true });
            //this.model = ko.validatedObservable({
            //    FirstName: ko.observable().extend({ required: true }),
            //    LastName: ko.observable().extend({ required: true })
            //});
            //debugger;
            //this.Errors = ko["validation"].group(this.model);
        }
        return UserViewModel;
    })(helper.ViewModel);
    exports.UserViewModel = UserViewModel;
    var SuccessModalView = (function (_super) {
        __extends(SuccessModalView, _super);
        function SuccessModalView(options) {
            this.template = successModal.getOuterHTML("#SuccessModal");
            _super.call(this, options);
        }
        return SuccessModalView;
    })(helper.Views.ItemView);
    exports.SuccessModalView = SuccessModalView;

    var UserView = (function (_super) {
        __extends(UserView, _super);
        function UserView(options) {
            //if (!options) options = {};
            this.template = templateView;
            this.events = {
                //"click .jsBtnSaveUser1": "Save",
                "submit": "Save",
                "click .jsBtnModal": "ShowModal"
            };
            _super.call(this, options);
        }
        UserView.prototype.ShowModal = function () {
            app = application.Application.getInstance();

            //var alertModel = new Backbone.Model({ type:"btn-danger", title: "some title", message: "body goes here" });
            //var view = new helper.ModalPopupView({ model: alertModel });
            //app.ModalRegion.show(view);
            helper.ShowModalPopup("warning", "Test Title", "Test Message");
        };

        //TODO: must remove this method if knockout binding works
        UserView.prototype.Save = function (e) {
            e.preventDefault();
            new userCtrl.UserCtrl().Add(this.viewModel.bbModel);
            //var txtFirstName = $(this.el).find("#txtFirstName").val();
            //var txtLastName = $(this.el).find("#txtLastName").val();
            ////var txtLastName = $(this.el).find("#txtLastName").val();
            //var txtEmail = $(this.el).find("#txtEmail").val();
            //var txtMobile = $(this.el).find("#txtMobile").val();
            //var txtNic = $(this.el).find("#txtNic").val();
            //var txtRelashonship = $(this.el).find("#txtRelashonship").val();
            ////TODO: apply validation if any
            ////alert("inside save user");
            //var User = new userDto.Models.UserRequest();
            //User.set("firstName", txtFirstName);
            //User.set("lastName", txtLastName);
            ////User.set("userName", txtu);
            //User.set("isAdmin", false);
            //User.set("email", txtEmail);
            //User.set("mobile", txtMobile);
            //User.set("nic", txtNic);
            //var deferred = DAL.Save(User);
            //TODO: call controller from here...
            //deferred.done(p=> this.Save(p));
        };

        UserView.prototype.SaveCompleted = function (userResponse) {
            //console.log(loginResponse);
            if (userResponse == undefined) {
                alert("User name or password is wrong..");
            }

            //if (userResponse.has("authenticationErrorMessage")) {
            //    alert(userResponse.get("authenticationErrorMessage"));
            //}
            if (userResponse.get("AuthenticationErrorMessage") !== null) {
                alert(userResponse.get("AuthenticationErrorMessage"));
            } else {
                //debugger;
                //alert("First Name : " + userResponse.FirstName + " Last Name: " + userResponse.LastName);
                //this.GetAll();
                new userCtrl.UserCtrl().GetAll();
            }
        };

        //GetAll() {
        //    new userCtrl.Controller().GetAll();
        //}
        UserView.prototype.GetAllCompleted = function (userResponse) {
            var a = templateGrid;
            app = application.Application.getInstance();

            //var userCollection = JSON.stringify(userResponse);
            //var userCollection: userDto.Models.UserResponseCollection = new userDto.Models.UserResponseCollection(userResponse);
            var userCollection = new userDto.Models.UserResponseCollection(userResponse);
            var collectionView = new UserCollectionView({ collection: userCollection });

            var userGrid = collectionView.$("#tblUser");

            //userGrid.find("#tblUser").dataTable();
            app.AppLayout.DetailRegion.show(collectionView);
        };
        return UserView;
    })(helper.Views.MvvmView);
    exports.UserView = UserView;

    var UserCollectionView = (function (_super) {
        __extends(UserCollectionView, _super);
        function UserCollectionView(options) {
            //if (!options)
            //    options = {};
            options.itemView = UserItemView;

            //options.template = "#gridTemplate"; //_.template(templateGrid); //"#gridTemplate";
            options.template = templateGrid.getOuterHTML("#gridTemplate");
            options.itemViewContainer = "tbody";
            _super.call(this, options);
        }
        //initialize() {
        //    //alert('initialize');
        //    $(window).bind('resize', function () {
        //        //alert('resize');
        //        //this.dataTable.fnAdjustColumnSizing();
        //        console.log('redraw');
        //        this.dataTable.fnDraw();
        //    });
        //}
        UserCollectionView.prototype.onShow = function () {
            //alert('show');
            //debugger;
            //this.dataTable = this.$el.find("#tblUser").dataTable({
            //    "autoWidth": false,
            //    "info": true,
            //    "processing": true,
            //    "scrollY": "500px",
            //    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            //    "language": {
            //        "paginate": {
            //            "next": "Next",
            //            "previous": "Prev"
            //        },
            //        "emptyTable": "No record found!",
            //        //"info": "Dispalying page _PAGE_ of _PAGES_",
            //        "infoEmpty": "No record found!",
            //        "zeroRecords": "kuch nahi milla"
            //    }
            //    //"pageLength": 50,
            //    //"lengthChange": false
            //    //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]
            //});
        };
        return UserCollectionView;
    })(helper.Views.CompositeView);
    exports.UserCollectionView = UserCollectionView;
    var UserItemView = (function (_super) {
        __extends(UserItemView, _super);
        function UserItemView(options) {
            if (!options)
                options = {};

            //options.template = _.template(templateRow); //"#rowTemplate";
            options.template = templateRow.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "mouseover .jsShowDetail": "ShowDetail",
                "click .jsShowDetail": "ShowDetail"
            };
            _super.call(this, options);
        }
        UserItemView.prototype.ShowDetail = function () {
            //new UserView().ShowDetail(this.model);
            new userCtrl.UserCtrl().ShowDetail(this.model);
        };
        return UserItemView;
    })(helper.Views.ItemView);
    exports.UserItemView = UserItemView;
});
//bbb
//# sourceMappingURL=UserView.js.map
