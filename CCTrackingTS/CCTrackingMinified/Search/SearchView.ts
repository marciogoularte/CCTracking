/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="text!./SearchTmpl.html"/>

var _ = require('underscore');
import helper = require("../Helper");
//import searchDto = require("CCTracking.WebClient/Dtos/searchDto");
import searchCtrl = require("./SearchCtrl");
var templateView = require("text!./SearchTmpl.html");
import application = require("../App");

export class SearchViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
    }
}

export class SearchCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?) {
        options.itemView = SearchItemView;
        options.template = templateView.getOuterHTML("#gridTemplate");
        options.itemViewContainer ="#tblSearch tbody";
        super(options);
    }
    onShow() {

        this.dataTable = this.$el.find("#tblSearch")["dataTable"]({
            "autoWidth": false,
            "info": true,
            "processing": true,
            //"scrollY": "500px",
            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            "language": {
                "paginate": {
                    "next": "Next",
                    "previous": "Prev"
                },
                "emptyTable": "",
                //"info": "Dispalying page _PAGE_ of _PAGES_",
                "infoEmpty": "",
                "zeroRecords": "No record found!"
            },
            "pageLength": helper.GetPageSize()

            //"lengthChange": false

            //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]

        });
    }
}

export class SearchItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        if (!options) options = {};
        options.template = templateView.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            //"mouseover .jsShowDetail": "ShowDetail",
            "click .jsShowDetail": "ShowDetail"
        };
        super(options);
    }
    ShowDetail() {
        window.location.href = "#editBooking";
        require(['../Booking/BookingCtrl'], (p) => { new p.BookingCtrl().EditBooking(this.model.get("id")); });
    }
}


export class SearchFormLayoutView extends Marionette.Layout {
    SearchRegion: Marionette.Region;
    ContentRegion:Marionette.Region;
    constructor(options?) {
        this.template = templateView.getOuterHTML("#SearchFromLayout");
        this.regions= {
            SearchRegion: {
                selector:".rgnSearch"
            },
            ContentRegion: {
                selector: ".rgnContent"
            }
        }
        super(options);
    }
}

export class SearchFormItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        this.template = templateView.getOuterHTML("#searchForm");
        this.events = {
            "click .jsSearch": "Search",
            "click .jsCancel": "Cancel"
        }
        super(options);
    }
    Search(e) {
        e.preventDefault();
        this.trigger("SearchBooking");
    }
    Cancel(e) {
        e.preventDefault();
        this.trigger("CancelForm");
    }
   
}