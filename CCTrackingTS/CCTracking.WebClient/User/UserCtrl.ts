/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./User.html"/>
import application = require("../App");
import helper = require("../Helper");
import views = require("./UserView");
import dto = require("CCTracking.WebClient/Dtos/UserDto");
import DAL = require("../DAL/User");

var app;
export class UserCtrl extends helper.Controller {
    userViewModel: views.UserViewModel;
    userView: views.UserView;
    constructor() {
        app = application.Application.getInstance();
        super();
    }
    Show() {
        //this is for knockout testing purpose...
        var model = new dto.Models.UserResponse();
        model.set("FirstName", "user first name");
        model.set("LastName", "user last name");
        this.userViewModel = new views.UserViewModel(model, this);
        this.userView = new views.UserView({ viewModel: this.userViewModel });
        //this.layout = app.AppLayout;
        app.AppLayout.MainRegion.show(this.userView);
        //app.MainRegion.show(this.userView);

    }
    ShowDetail(model: any) {
        this.userViewModel = new views.UserViewModel(model, this);
        this.userView = new views.UserView({ viewModel: this.userViewModel });
        //this.layout = app.AppLayout;
        app.AppLayout.MainRegion.show(this.userView);
        //app.MainRegion.show(this.userView);
    }

    Get() {

    }
    GetAll() {
        var deferred = DAL.GetAll();
        deferred.done(p=> new views.UserView().GetAllCompleted(p));
        //console.log('GetAll');
    }
    Add(user: any) {
        var deferred = DAL.Save(user);
        //TODO: call controller from here...
        deferred.done(p=> new views.UserView().SaveCompleted(p));
    }
    Update() {

    }
}
//aaa




