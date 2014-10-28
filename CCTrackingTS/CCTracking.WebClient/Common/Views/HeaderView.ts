/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/Header.html"/>
var templateView = require("text!CCTracking.WebClient/Common/Templates/Header.html");
import helper = require("../../Helper");
var app = require("../../App");

export class HeaderItemView extends Marionette.ItemView {
    //appObj:any;
    constructor(options?) {
        if (!options)
            options = {};
        options.template = templateView.getOuterHTML("#SiteHeader");
        //this.appObj = app.request("AppGlobalSetting");
        //station.set("modifiedBy", appObj.get("isAdmin"));

        //console.log("ddddd" + options);
        
        templateHelpers : ()=> {
            return {
                isAdminRole: () => app.request("AppGlobalSetting").get("isAdmin")

            }
        }
        super(options);
    }
}
//aaa