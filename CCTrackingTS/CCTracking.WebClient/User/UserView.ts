/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />


/// <amd-dependency path="backbone"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="jqueryValidate"/>
/// <amd-dependency path="jqueryUnobtrusive"/>
/// <amd-dependency path="jqueryUnobtrusiveAjax"/>
///// <amd-dependency path="knockback"/>
///// <amd-dependency path="knockoutvalidation"/>


/// <amd-dependency path="datatables"/>
/// <amd-dependency path="datatablesBootstrap"/>
/// <amd-dependency path="text!CCTracking.WebClient/User/User.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/User/UserGrid.html"/>
/// <amd-dependency path="text!CCTracking.WebClient/User/UserGridRow.html"/>
/// <amd-dependency path="text!./SuccessModal.html"/>



import helper = require("../Helper");
var templateView = require("text!CCTracking.WebClient/User/User.html");
import userDto = require("CCTracking.WebClient/Dtos/UserDto");
import userCtrl = require("./UserCtrl");
var templateGrid = require("text!CCTracking.WebClient/User/UserGrid.html");
var templateRow = require("text!CCTracking.WebClient/User/UserGridRow.html");
var successModal = require("text!./SuccessModal.html");
import application = require("../App");
var ko: KnockoutStatic = require("knockout");


var app;



export class UserViewModel extends helper.ViewModel {
    ErrorMessage: KnockoutObservable<string>;
    Errors: any;
    
    
    constructor(model: any, controller: any) {
        //this.ErrorMessage = ko.observable<string>("");
        super(model, controller);

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
    //TODO: must remove Save() method form UserView
    //Save() {
    //    //alert('knockout save');
    //    //debugger;
    //    //var v = this.model.isValid();
        
    //    //if (this.Errors().length > 0) {
    //    //    this.Errors.showAllMessages();
    //    //    return;
    //    //}
    //    new userCtrl.UserCtrl().Add(this.bbModel);

    //}

}
export class SuccessModalView extends helper.Views.ItemView {
    constructor(options?) {
        this.template = successModal.getOuterHTML("#SuccessModal");
        super(options);
    }
}

export class UserView extends helper.Views.MvvmView {
    constructor(options?: any) {
        //if (!options) options = {};
        this.template = templateView;
        this.events = {
            //"click .jsBtnSaveUser1": "Save",
            "submit" : "Save",
            "click .jsBtnModal": "ShowModal"
        }
        super(options);
    }
    ShowModal() {
        app = application.Application.getInstance();
        app.ModalRegion.show(new helper.ModalPopupView());
        //app.LeftRegion.show(new SuccessModalView());

    }
    //TODO: must remove this method if knockout binding works
    Save(e) {
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
    }

    SaveCompleted(userResponse: userDto.Models.UserResponse) {
        //console.log(loginResponse);
        if (userResponse == undefined) {
            alert("User name or password is wrong..");
        }

        //if (userResponse.has("authenticationErrorMessage")) {
        //    alert(userResponse.get("authenticationErrorMessage"));
        //}
        if (userResponse.get("AuthenticationErrorMessage") !== null) {
            alert(userResponse.get("AuthenticationErrorMessage"));
        }
        else {
            //debugger;            
            //alert("First Name : " + userResponse.FirstName + " Last Name: " + userResponse.LastName);
            //this.GetAll();
            new userCtrl.UserCtrl().GetAll();
        }
    }

    //GetAll() {
    //    new userCtrl.Controller().GetAll();
    //}

    GetAllCompleted(userResponse: userDto.Models.UserResponseCollection) {
        var a = templateGrid;
        app = application.Application.getInstance();
        //var userCollection = JSON.stringify(userResponse);
        //var userCollection: userDto.Models.UserResponseCollection = new userDto.Models.UserResponseCollection(userResponse);
        var userCollection = new userDto.Models.UserResponseCollection(userResponse);
        var collectionView: UserCollectionView = new UserCollectionView({ collection: userCollection });

        var userGrid = collectionView.$("#tblUser"); //collectionView.$el.find("#tblUser").dataTable();
        //userGrid.find("#tblUser").dataTable();
        app.AppLayout.DetailRegion.show(collectionView);
    }
}


export class UserCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        //if (!options)
        //    options = {};
        options.itemView = UserItemView;
        //options.template = "#gridTemplate"; //_.template(templateGrid); //"#gridTemplate"; 
        options.template = templateGrid.getOuterHTML("#gridTemplate");        
        options.itemViewContainer = "tbody";
        super(options);
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
    onShow() {
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
    }


}
export class UserItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        //options.template = _.template(templateRow); //"#rowTemplate";
        options.template = templateRow.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "mouseover .jsShowDetail": "ShowDetail",
            "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        //new UserView().ShowDetail(this.model);
        new userCtrl.UserCtrl().ShowDetail(this.model);
    }
}
//bbb
