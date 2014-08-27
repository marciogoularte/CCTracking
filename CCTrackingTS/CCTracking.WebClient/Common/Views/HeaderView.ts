/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="text!CCTracking.WebClient/Common/Templates/Header.html"/>
var templateView = require("text!CCTracking.WebClient/Common/Templates/Header.html");
import helper = require("../../Helper");

export class HeaderItemView extends Marionette.ItemView {    
    constructor(options?) {        
        if (!options)
            options = {};
        options.template = templateView.getOuterHTML("#SiteHeader"); 
        //console.log("ddddd" + options);
        super(options);
    }
}


//aaa