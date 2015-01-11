/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./NearestCentreSetupTmpl.html"/>
/// <amd-dependency path="text!./NearestCentreSetupGrid.html"/>

var _ = require('underscore');
import helper = require("../../Helper");
var templateView = require("text!./NearestCentreSetupTmpl.html");
var templateGrid = require("text!./NearestCentreSetupGrid.html");

import application = require("../../App");
var app;



// View Model
export class NearestCentreSetupViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

// View
export class NearestCentreSetupView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel"

        }
        super(options);
        //this.listenTo(this, "TestEvent", () => this.TestFunction());
    }
    close() {
        //alert("closeing this view");
        //this.off("SaveNearestCentreSetup");
    }
    Cancel() {
        this.trigger("CancelForm");
    }
    TestFunction() {
        alert("test function");
    }
    Save(e) {
        e.preventDefault();
        this.trigger("SaveNearestCentreSetup");
    }
}

export class NearestCentreSetupCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        options.itemView = NearestCentreSetupItemView;
        options.template = templateGrid.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "tbody";
        this.events = {
            "click .jsSearch": "Search",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }

    Search(e) {
        //alert(this.model.get("alkhidmatCentreSelected").id);
        e.preventDefault();
        this.trigger("Event:SearchNearestCentre", this.model.get("alkhidmatCentreSelected").id);
    }
}

export class NearestCentreSetupItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateGrid.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        this.trigger("ShowDetail");
    }
}

