/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./BusVisit.html"/>
/// <amd-dependency path="text!./BusVisitGrid.html"/>

var _ = require('underscore');
import helper = require("../Helper");
var templateView = require("text!./BusVisit.html");
var templateGrid = require("text!./BusVisitGrid.html");
import application = require("../App");
var app;

// View Model
export class BusVisitViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

// View
export class BusVisitView extends helper.Views.MvvmView {
    constructor(options?) {
        this.template = templateView;
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel"

        }
        super(options);
    }
    close() {
        //alert("closeing this view");
        //this.off("SaveAlkhidmatCentre");
    }
    Cancel() {
        this.trigger("Event:CancelForm");
    }
    Save(e) {
        e.preventDefault();
        this.trigger("Event:SaveForm");
    }
}

export class BusVisitCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        options.itemView = BusVisitItemView;
        options.template = templateGrid.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "tbody";
        super(options);
    }
    //onShow() {

    //    this.dataTable = this.$el.find("#tblBooking").dataTable({
    //        "autoWidth": false,
    //        "info": true,
    //        "processing": true,
    //        //"scrollY": "500px",
    //        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
    //        "language": {
    //            "paginate": {
    //                "next": "Next",
    //                "previous": "Prev"
    //            },
    //            "emptyTable": "No record found!",
    //            //"info": "Dispalying page _PAGE_ of _PAGES_",
    //            "infoEmpty": "No record found!",
    //            "zeroRecords": "kuch nahi milla"
    //        }
    //        //"pageLength": 50,

    //        //"lengthChange": false

    //        //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]

    //    });
    //}
}

export class BusVisitItemView extends helper.Views.ItemView {
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

