/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>

var _ = require("underscore");
import application = require("../App");
import helper = require("../Helper");
import views = require("./PrintView");

export class PrintCtrl extends helper.Controller {
    //printItemView: views.PrintItemView;
    //printCollectionView: views.PrintCollectionView;
    //collection:Backbone.Collection;
    constructor() {
        super();
        //this.printItemView = new views.PrintItemView();
        //this.collection = new Backbone.Collection([{ columnHeader: 'col1' }, { columnHeader: 'col2' }, { columnHeader: 'col3' }]);
        
    }

    getPrintReportView(itemList, headerList, reportTitle, reportName) {
        //var view = new views.PrintHeaderCollectionView({ collection: headerList });
        //["alkhidmatCentre", "alkhidmatCentreId", "bookingAmount", "maintenance", "bookingMilage", "bookings", "receivables"]

        var headerModel = new Backbone.Model({ headerList: headerList, reportTitle: reportTitle, reportName: reportName });
        var view = new views.PrintCollectionView({ collection: itemList, model: headerModel });
        return view;
    }
} 