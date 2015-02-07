/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
// // <amd-dependency path="selectize"/>

/// <amd-dependency path="text!./BookingTmpl.html"/>
/// <amd-dependency path="text!./BookingGrid.html"/>
/// <amd-dependency path="text!./BokingGridRow.html"/>



var _ = require('underscore');
//var Selectize = require("selectize");
import helper = require("../Helper");
import bookingDto = require("CCTracking.WebClient/Dtos/BookingDto");
import bookingCtrl = require("./BookingCtrl");
var templateView = require("text!./BookingTmpl.html");
var templateGrid = require("text!./BookingGrid.html");
var templateRow = require("text!./BokingGridRow.html");
import application = require("../App");
var app;

export class BookingViewModel extends helper.ViewModel {
    constructor(model: any, controller: any) {
        super(model, controller);
        this.model.busPointSelected.subscribe(() => {
            //debugger;
            var list = GetUcList(this.model.busPointSelected().parentId);
            this.model.unionCouncilList(list);
        });

        this.model.unionCouncilIdSelected.subscribe(() => {
            var list = GetTownList(this.model.unionCouncilIdSelected().parentId);
            this.model.townList(list);
        });

    }
}

export class BookingView extends helper.Views.MvvmView {
    constructor(options?) {
        //if (!options)
        //    options = {};
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
    onDomRefresh() {
        var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
        //var busPoint = _.filter(lookupResponse.landmark, (p) => { return p.id == model.get("busPoint") });
        
        var arr = _.map(lookupResponse.landmark, (item) => {
            return { value: item.id, text: item.description,parentId:item.parentId };
        });
       var $select= this.$el.find("#ddlBusPoint")["selectize"]({
            //options: [
            //    { text: 'one', value: '1' },
            //    { text: 'two', value: '2' },
            //    { text: 'one one', value: '11' },
            //    { text: 'two two', value: '22' },
            //    { text: 'one two three', value: '123' }
            //],
            options: arr,
            create: false,
            sortField: {
                field: 'text',
                direction: 'asc'
            }
           //,render: {
           //    option: (item, escape) => {
           //        //debugger;
           //        //return '<div>' + escape(item.title) + '</div>';
           //        return "<div data-value='165' class='item'>GHOUSIA COONY</div>";
           //    }
           //}
            ,dropdownParent: 'body'
        });
        var self = this;
        this.$el.find("#ddlBusPoint").on("change", (e) => {
            var busPoint = _.filter(lookupResponse.landmark, (p) => { return p.id == $select[0].value; });
            //var parentId = self.viewModel.model.busPointSelected().parentId;
            if (busPoint[0] != undefined) {
                self.viewModel.model.busPointSelected(busPoint[0]);
                var list = GetUcList(busPoint[0].parentId);
                self.viewModel.model.unionCouncilList(list);
            }
        });

        //$select.selectize.setValue(504);

    }

    
    Save(e) {
        e.preventDefault();
        //alert(this.viewModel.bbModel.get("causeOfDeathSelected").idd);
        //alert(this.viewModel.bbModel.get("contactName"));
        new bookingCtrl.BookingCtrl().Save(this.viewModel.bbModel);
    }



    GetAllCompleted(bookingResponse: bookingDto.Models.BookingResponseCollection) {
        
        //var a = templateGrid;
        app = application.Application.getInstance();
        var bookings = _.map(bookingResponse["bookingList"], (item) => {
            if (item.pickupDate != "0001-01-01T00:00:00")
                item.pickupDate = helper.FormatDateString(item.pickupDate);
            else
                item.pickupDate = "";
            return item;
        });
        var bookingCollection = new bookingDto.Models.BookingResponseCollection(bookings);
        //var model = new Backbone.Model();
        //model.set("itemCount", bookingCollection.length);
        var collectionView: BookingCollectionView = new BookingCollectionView({ collection: bookingCollection });
        collectionView.listenTo(collectionView, "itemview:ExportToPdf", (view, id) => {
            this.ExportToPdf(id);
        });
        //var bookingGrid = collectionView.$("#tblBooking");
        app.MainRegion.show(collectionView);
    }

    ExportToPdf(id) {
        helper.PrintReceipt(id);

    }
}

export class BookingCollectionView extends helper.Views.CompositeView {
    dataTable: any;
    constructor(options?: any) {
        this.itemView = BookingItemView;
        this.template = templateGrid.getOuterHTML("#gridTemplate");
        this.itemViewContainer = "tbody";
        
        super(options);
    }
    onShow() {

        this.dataTable = this.$el.find("#tblBooking")["dataTable"]({
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
                "emptyTable": "No record found!",
                //"info": "Dispalying page _PAGE_ of _PAGES_",
                "infoEmpty": "No record found!",
                "zeroRecords": "No record found!"
            },
            "pageLength": helper.GetPageSize()

            //"lengthChange": false

            //"lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]]

        });
    }


}

export class BookingItemView extends helper.Views.ItemView {
    constructor(options?: any) {
        //if (!options) options = {};
        options.template = templateRow.getOuterHTML("#rowTemplate");
        options.tagName = "tr";
        options.className = "jsRowClick";
        options.events = {
            "mouseover .jsShowDetail": "ShowDetail",
            "click .jsExportToPdf": () => {
                this.trigger("ExportToPdf", this.model.get("id")); 
            },
            "click .jsShowDetail": "ShowDetail"
        };
        
        super(options);
    }
    ShowDetail() {
        //new userCtrl.UserCtrl().ShowDetail(this.model);
    }
}


function GetUcList(landmarkId) {
    var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
    var ucList = _.filter(lookupResponse.unionCouncil, (item) => { return item.id == landmarkId });
    return ucList;
}

function GetTownList(ucId) {
    var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
    var townList = _.filter(lookupResponse.town, (item) => { return item.id == ucId });
    return townList;
}