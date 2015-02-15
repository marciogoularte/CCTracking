/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path ="text!./Common/Templates/ModalPopup.html"/>
/// <amd-dependency path ="text!./Common/Templates/Progressbar.html"/>
/// <amd-dependency path ="text!./Common/Templates/BusDetailModalPopup.html"/>

/// <amd-dependency path="underscore"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="knockback"/>
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="backbone"/>
/// <amd-dependency path="accounting"/>


import APP = require("./App");
var $ = require("jquery");
var accounting = require("accounting");
var ko = require("knockout");
var kb = require("knockback");



//var pbarView = require("text!./Common/Templates/Progressbar.html");

//var Marionette = require("marionette");
//var Backbone = require("backbone");

String.prototype["getOuterHTML"] = function (selector) {
    return $(this.toString()).find(selector)[0].outerHTML;
}

APP.Application.getInstance().vent.on("Event:UpdateSummary", () => {
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().Show();
    });
});

$.extend(true, $.fn.dataTable.defaults, {
    "sDom":
    "<'row'<'col-md-12 hidden'l><'col-xs-12 col-md-12 text-right'f>r>" +
    "t" +
    "<'row'<'col-md-12'i><'col-xs-12 col-md-12 text-center'p>>",
    "language": {
        "search": "Filter: "
    },

});



/*
DEFAULT ACCOUNTING SETTINGS
*/

accounting.settings = {
    currency: {
        symbol: "",   // default currency symbol is '$'
        format: "%s%v", // controls output: %s = symbol, %v = value/number (can be object: see below)
        decimal: ".",  // decimal point separator
        thousand: ",",  // thousands separator
        precision: 2   // decimal places
    },
    number: {
        precision: 0,  // default precision on numbers is 0
        thousand: ",",
        decimal: "."
    }
}


export class Controller {
    layout: Marionette.Layout;
}

export class ViewModel {
    controller: any;
    model: any;
    bbModel: Backbone.Model;
    constructor(model: Backbone.Model, controller: any) {
        this.model = kb.viewModel(model);
        this.bbModel = model;
        this.controller = controller;
    }
}

export class ReceiptLayoutDto extends Backbone.Model {
    default() {
        return {
            centreDesc: "",
            receiptNo: "",
            printDateAndTime: "",
            bookingId: "",
            bookingDate: "",
            cashReceivedFrom: "",
            totalAmountDue: "",
            userName: "",
            isActive: "",
            createdBy: "",
            createdDate: "",
            modifiedBy: "",
            modifiedDate: ""
        };
    }
}
export class ReceiptLayoutCollection extends Backbone.Collection {
    constructor(options?: any) {
        this.model = ReceiptLayoutDto;
        super(options);
    }
}


export module Views {
    export class CollectionView extends Marionette.CollectionView {
        constructor(options?) {
            super(options);
        }
    }
    export class CompositeView extends Marionette.CompositeView {
        constructor(options?: any) {
            if (!options)
                options = {};
            //options.template = "#navBarCollectionViewTemplate";
            super(options);
            //this.itemView = NavBarItemView;
        }
    }
    export class ItemView extends Marionette.ItemView {
        constructor(options?) {
            if (!options)
                options = {};
            super(options);
        }
    }
    export class MvvmView extends ItemView {
        viewModel: ViewModel;
        //template: string;
        constructor(options?) {
            //if (!options) options = {};
            super(options);
        }
        initialize(options) {
            if (options.viewModel !== undefined) {
                this.viewModel = options.viewModel;
                options.model = this.viewModel.model;
            }
        }
        onShow() {
            ko.applyBindings(this.viewModel, this.el);
        }
        onClose() {
            ko.cleanNode($(this.el)[0]);
        }
    }
    
}



/*
type value can be:
1- default
2- primary
3- success
4- info
5- warning
6- danger
*/
export function ShowModalPopup(type, title, message) {
    //var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
    //var view = new this.ModalPopupView({ model: alertModel });
    //var app = APP.Application.getInstance();
    //app.ModalRegion.show(view);
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().ShowModalPopup(type, title, message);
    });
}
export function ShowProgressbar() {
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().ShowProgressbar();
    });
}
export function HideProgressbar() {
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().HideProgressbar();
    });
}
export function PrintReceipt(id) {
    //var receiptView = new Views.ReceiptLayoutItemView();
    //receiptView.$el.find(".jsExportPdf").click();
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().PrintReceipt(id);
    });
}

//export function ShowBusDetailModalPopup(busDetialDto, type, title, message) {
export function ShowBusDetailModalPopup(busDetialDto, busDetailCollection) {
    //var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
    //var view = new this.BusDetailModalPopupView({ model: busDetialDto});
    //debugger;
    var view = null;
    require(['./Booking/BookingLeft/BookingLeftView'], (p) => {
        //debugger;
        //alert(p);
        view = new p.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
        var app = APP.Application.getInstance();
        app.ModalAlertRegion.show(view);
    });
    //debugger;
    //var view = new this.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
    
}

//var app = APP.Application.getInstance();
/// Adds Authentication Token to each outgoing call if there is an AppGlobalSetting present
$.ajaxSetup({
    'beforeSend': function (xhr) {
        ShowProgressbar();
        var app = APP.Application.getInstance();
        if (app.reqres.hasHandler("AppGlobalSetting")) {
            xhr.setRequestHeader("AuthenticationToken", app.request("AppGlobalSetting").get("AuthenticationToken"));
        }
    },
    'complete': function (xhr, status) {
        HideProgressbar();
    }

});

//$(document).ajaxComplete((xhr, response) => {
//    //debugger;
//    var title, msgSuccess, msgFailure;
//    var isBooking = false;
//    if (response != undefined && response.responseJSON != null && response.responseJSON.entityType == "Booking") {
//        isBooking = true;
//    }
//    //isBooking = xhr.currentTarget.URL.indexOf("#payment?id") > 0;
//    if (isBooking) {
//        title = "Booking";
//        msgSuccess = "Record has been saved successfully with Booking ID : ";
//        msgFailure = "Due to some technical reason booking have not been saved successfully!<br> Pelase try later";
//    }
//    if (response.errorMessage != null && response.errorMessage.trim()!="") {
//        ShowModalPopup("danger", title, msgFailure);
//    }
//    else if (isBooking && response.status == 200) {
//        ShowModalPopup("success", title, msgSuccess + response.responseJSON.id);
//        location.href = "#payment?id=" + response.responseJSON.id;
//    }

////    alert('donee');
//});
/// Handles all error scenarios coming from the server
//$(document).ajaxError((event, jqXHR, ajaxSettings, thrownError) => {
//    if (ajaxSettings["consumeError"] != null && ajaxSettings["consumeError"] == true)
//        return;
//    if (jqXHR.status == 403) {
//        app.vent.trigger("BackToLogin");
//    }
//    ShowError(jqXHR.responseText == "" ? thrownError : jqXHR.responseText);

//});


export function ValidationUtility() {
    var validationElements = $('[data-role="validate"]'), elementCount = 0;
    validationElements.popover({ placement: 'bottom' });
    validationElements.on('invalid', function () {
        if (elementCount === 0) {
            $('#' + this.id).popover('show');
            elementCount++;
        }
    });

    validationElements.on('blur', function () {
        $('#' + this.id).popover('hide');
    });

    var validate = function (formSelector) {
        //debugger;
        elementCount = 0;
        if (formSelector.indexOf('#') === -1) {
            formSelector = '#' + formSelector;
        }
        //$(formSelector)[0][0].setCustomValidity('ssss');
        //debugger;
        return $(formSelector)[0].checkValidity();
    };
    return { validate: validate };
}


//export function SubscribeApplicationEventListener() {    
//    var app = APP.Application.getInstance();
//    app.vent.on("BusVisitItem:Add", (busVisitCollection) => AddItem(busVisitCollection));
//    app.vent.on("BusVisitItem:Remove", RemoveItem);
//}
function AddItem(busVisitCollection) {
    //alert('added');
    var app = APP.Application.getInstance();
    busVisitCollection.push({ centreId: 'center-d', busId: 'bus-d', driverId: 'driver-d' });
    //var collectionView = new BusVisitCollectionView({ collection: items });
    //app.SubRegion.show(collectionView);
}
function RemoveItem() {
    alert('remove');
}

export function FormatDateString(aDate) {
    return new Date(aDate).toLocaleDateString();
}
export function GetParameterByName(paramName, locationHref) {
    paramName = paramName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + paramName + "=([^&#]*)"),
        results = regex.exec(locationHref);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export function FormatMoney(aMoney) {
    return accounting.formatMoney(aMoney);
}

export function GetPageSize() {
    return 50;
}


export enum VisitTypes {
    PatrolPump = 1,
    Booking = 2,
    Maintenance = 3,
    Others = 4
}
ko.bindingHandlers.numeric = {
    init: function (element, valueAccessor) {
        $(element).on("keydown", function (event) {
            // Allow: backspace, delete, tab, escape, and enter
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                // Allow: . ,
                (event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||
                // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    }
};

