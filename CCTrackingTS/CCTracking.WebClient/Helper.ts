﻿/// <reference path="../Scripts/typings/require/require.d.ts" />
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
var appInstance = APP.Application.getInstance();


//var pbarView = require("text!./Common/Templates/Progressbar.html");

//var Marionette = require("marionette");
//var Backbone = require("backbone");

String.prototype["getOuterHTML"] = function (selector) {
    return $(this.toString()).find(selector)[0].outerHTML;
}

appInstance.vent.on("Event:UpdateSummary", () => {
    require(['./Booking/BookingLeft/BookingLeftCtrl'], (p) => {
        new p.BookingLeftCtrl().Show();
    });
});


appInstance.vent.on("Event-PrintDocument", () => {
    PrintDocumentHandler();
});

appInstance.vent.on("Event-BackToLogin", (showError) => {
    if (appInstance.reqres.hasHandler("AppGlobalSetting")) {
        appInstance.reqres.setHandler("AppGlobalSetting", null, null);
        appInstance.reqres.removeHandler("AppGlobalSetting");
    } 

    if (showError) {
        ShowModalPopup("danger", "Un-Authorize Access", "You are not authorize to access the page.");
        setTimeout(function () {
            window.location.href = "";
        }, 3000);
    }
    else {
        window.location.href = "";
    }
});

$.extend(true, $.fn.dataTable.defaults, {
    "sDom":
    "<'row'<'col-xs-12 col-sm-12 col-md-12 hidden'l><'col-xs-12 col-sm-12 col-md-12 text-right'f>r>" +
    "t" +
    "<'row'<'col-xs-12 col-sm-12 col-md-12'i><'col-xs-12 col-sm-12 col-md-12 text-center'p>>",
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
        //var app = APP.Application.getInstance();
        appInstance.ModalAlertRegion.show(view);
    });
    //debugger;
    //var view = new this.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
    
}

//var app = APP.Application.getInstance();
/// Adds Authentication Token to each outgoing call if there is an AppGlobalSetting present
$.ajaxSetup({
    'beforeSend': function (xhr) {
        ShowProgressbar();
        //var app = APP.Application.getInstance();
        if (appInstance.reqres.hasHandler("AppGlobalSetting")) {
            
            xhr.setRequestHeader("AuthenticationToken", appInstance.request("AppGlobalSetting").get("AuthenticationToken"));
            //xhr.setRequestHeader("AuthenticationToken", "V1pXQm50MC9ZVENRVm55c3dSSzR1a0RpbGxMMVJneURmOGJwOG84ZXRJellnd3ZlVXRQQTR3PT787801");
            //xhr.setRequestHeader("If-None-Match", "W/\"fe0fb066ec674d1dac7a9b6588828807\"");
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
$(document).ajaxError((event, jqXHR, ajaxSettings, thrownError) => {
    //if (ajaxSettings["consumeError"] != null && ajaxSettings["consumeError"] == true)
    //    return;
    //if (jqXHR.status == 403) {
    //    app.vent.trigger("BackToLogin");
    //}
    //ShowError(jqXHR.responseText == "" ? thrownError : jqXHR.responseText);

    if (jqXHR.status == 401)
    {
        appInstance.vent.trigger("Event-BackToLogin", true);
        //ShowModalPopup("danger", "Un-Authorize Access", "You are not authorize to access the page.");        
    }

    //alert('hello');
});


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
    //var app = APP.Application.getInstance();
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

export function GetNoOfDaysConfiguration() {
    return 60;
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

export function PrintDocument()
{
    appInstance.vent.trigger("Event-PrintDocument");
}
export function PrintReport(itemList, headerList, reportTitle,reportName) {
    //todo: replace with above method once dev done;
    //appInstance.vent.trigger("Event-PrintDocument");
    require(['./Print/PrintCtrl'], (p) => {
        var ctrl = new p.PrintCtrl();
        appInstance.ModalRegion.show(ctrl.getPrintReportView(itemList, headerList, reportTitle, reportName));
    });
}


function PrintDocumentHandler()
    {
    var keepAttr = [];
    var print = $(".PrintArea");
    var mode = "popup";
    var close = mode == "popup" && true;
    var extraCss = "";
    keepAttr: ["class", "id", "style", "on"];
        var headElements = '<meta charset="utf-8" />,<meta http-equiv="X - UA - Compatible" content="IE = edge"/>';
        var options = { mode: mode, popClose: close, extraCss: extraCss, retainAttr: keepAttr, extraHead: headElements };

    $(print)["printArea"](options);
}


