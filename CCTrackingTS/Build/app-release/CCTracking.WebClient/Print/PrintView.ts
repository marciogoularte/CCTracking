/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./Print.html"/>

var _ = require('underscore');
import helper = require("../Helper");
import printCtrl = require("./PrintCtrl");
var templateView = require("text!./Print.html");
import application = require("../App");
var app;

export class PrintCollectionView extends helper.Views.CompositeView {
    constructor(options?) {
        this.itemView = PrintItemView;
        this.itemViewOptions = {
            headerList: options

        };
        this.template = templateView.getOuterHTML("#gridTemplate");
        this.itemViewContainer = "#tblPrint tbody";
        this.events = {
            "click .jsPrintReport": "PrintReport"
        }
        super(options);
    }
    
    PrintReport() {
        helper.PrintDocument();
    }
}

export class PrintHeaderCollectionView extends helper.Views.CompositeView {
    constructor(options?) {
        this.itemView = PrintHeaderItemView;
        this.template = templateView.getOuterHTML("#gridTemplate");
        this.itemViewContainer = "#tblPrint tr";
        super(options);
    }
}

export class PrintItemView extends helper.Views.ItemView {
    reportName:string;
    constructor(options?) {

        this.template = templateView.getOuterHTML("#rowTemplate");
        this.tagName = "tr";
        this.reportName = options.headerList.model.get("reportName");
        super(options);
    }
    onRender() {
        // <td class="input-sm"><%=bookingAmount%></td>
        var arrColumnName = this.model.keys();
        //TODO: write generic implementation
        //type parameter has following values;
        //1-Dashboard Report
        //2-Booking Report
        //3-Mileage Report
        //4-Bus Fueling Report
        //5-Driver's Summary Report 
        //debugger;
        arrColumnName = this.removeUnwantedColumns(this.reportName, arrColumnName);
        
        var htmlString = " ";
        for (var i = 0; i < arrColumnName.length; i++) {
            htmlString = htmlString + ' <td class="input-sm">' +this.model.get(arrColumnName[i]) + '</td> ';
        }
        
        this.$el.html(htmlString);
        return this;
    }

    removeUnwantedColumns(reportName, arrColumnName) {
        debugger;
        if (reportName.toLowerCase() == "dashboard") {
            arrColumnName.splice(1, 1);
        }
        else if (reportName.toLowerCase() == "booking") {
            arrColumnName.splice(1, 1);
        }
        else if (reportName.toLowerCase() == "mileage") {
            arrColumnName.splice(1, 1, "busNo");
            arrColumnName.splice(6, 2);
        }
        else if (reportName.toLowerCase() == "busvisit") {
            arrColumnName = [
                "busNo",
                "visitDate",
                "visitType",
                "bookingAmount",
                "bookingMilage",
                "outTime",
                "inTime",
                "timeTaken",
                "driver",
                "alkhidmatCentre"
            ];

            
        }
        return arrColumnName;
    }
}


export class PrintHeaderItemView extends helper.Views.ItemView {
    constructor(options?) {
        this.template = templateView.getOuterHTML("#headerTemplate");
        this.tagName = "th";
        super(options);
    }
}


