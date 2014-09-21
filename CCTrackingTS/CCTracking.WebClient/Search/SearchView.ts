/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>
/// <amd-dependency path="text!./SearchGrid.html"/>



var _ = require('underscore');
import helper = require("../Helper");
//import searchDto = require("CCTracking.WebClient/Dtos/searchDto");
import searchCtrl = require("./SearchCtrl");
var templateView = require("text!./SearchTmpl.html");
var templateGrid = require("text!./SearchGrid.html");
//var templateRow = require("text!./BokingGridRow.html");
import application = require("../App");
var app;

export class SearchViewModel extends helper.ViewModel {
    constructor(model:any, controller:any) {
        super(model, controller);
    }
}

export class SearchView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }

    Cancel() {
        this.trigger("CancelForm");
    }

    Save(e) {
        e.preventDefault();
        this.trigger("SearchBooking");
    }
}

export class SearchCollectionView extends helper.Views.CollectionView {
    datatable:any;
    constructor(options?) {
        options.itemView = SearchItemView;
        options.template = templateGrid.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "tbody";
        super(options);
    }
}

export class SearchItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateGrid.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "mouseover .jsShowDetail": "ShowDetail",
            "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        //new userCtrl.UserCtrl().ShowDetail(this.model);
    }
}
