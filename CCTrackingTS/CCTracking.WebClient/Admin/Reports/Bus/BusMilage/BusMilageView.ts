/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./BusMilageTmpl.html"/>

var _ = require('underscore');
import helper = require("../../../../Helper");
import searchCtrl = require("./BusMilageCtrl");
var templateView = require("text!./BusMilageTmpl.html");
import application = require("../../../../App");
var app;

export class BusMilageViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}
export class BusMilageView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;//templateView.getOuterHTML("#searchFilter");
        //this.events = {
        //    "click .jsSearch": "Search",
        //    "click .jsCancel": "Cancel"
        //}
        super(options);
    }
    onDomRefresh() {
    }

}
export class BusMilageCollectionView extends helper.Views.CompositeView {
    datatable: any;
    constructor(options?) {
        options.itemView = BusMilageItemView;
        options.template = templateView.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "#tblSearch tbody";
        this.events = {
            "click .jsSearch": "Search",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }
    Search(e) {
        e.preventDefault();
        this.trigger("BusCentreReport");
    }

    //initialize() {
    //    alert('initialize..');
    //    $("#txtBookingDate").datepicker();
    //}

}

export class BusMilageItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateView.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            //"mouseover .jsShowDetail": "ShowDetail",
            // "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        //this.trigger("ShowDetail");
    }
}