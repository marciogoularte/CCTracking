﻿/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./AuditBusVisit.html"/>



var _ = require('underscore');
import helper = require("../../../../Helper");
//import searchCtrl = require("./AuditBusVisitCtrl");
var templateView = require("text!./AuditBusVisit.html");

import application = require("../../../../App");
var app;

export class AuditBusVisitCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?) {
        options.itemView = AuditBusVisitItemView;
        options.template = templateView.getOuterHTML("#gridTemplate");
        options.itemViewContainer = "#tblAuditBusVisit tbody";
        this.events = {
            "click .jsSearchAuditBusVisit": "Search",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }

    //onShow() {
    //    //alert('dddd');
    //    this.dataTable = this.$el.find("#tblBooking")["dataTable"]({
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
    //            "zeroRecords": "No record found!"
    //        },
    //        "pageLength": 3

    //        //"lengthChange": false

    //        //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]
            
    //    });
        
    //}

    Search(e) {
        e.preventDefault();
        this.trigger("Event:AuditBusVisit", {fromDate: this.model.get("fromDate"),toDate:this.model.get("toDate")});
    }

    Cancel(e) {
        e.preventDefault();
        this.model.set("fromDate", "");
        this.model.set("toDate", "");
    }

}

export class AuditBusVisitItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateView.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        if (options.model.get("rowCounter") % 2 == 0) {
            options.className = "info";
        } else {
            options.className = "warning";
        }
        //options.events = {
        //    "click .jsShowDetail": () => { this.ShowDetail(this.model.get("driverId")); }
        //};
        super(options);
    }
    ShowDetail(id: number) {
        //this.trigger("DriverSummaryDetail", id);
    }
}

