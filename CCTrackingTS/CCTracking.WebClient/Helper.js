/// <reference path="../Scripts/typings/require/require.d.ts" />
/// <reference path="../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path ="text!./Common/Templates/ModalPopup.html"/>
/// <amd-dependency path ="text!./Common/Templates/Progressbar.html"/>
/// <amd-dependency path ="text!./Common/Templates/BusDetailModalPopup.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./App", "underscore", "jquery", "knockout", "knockback", "marionette", "backbone", "accounting"], function(require, exports, APP) {
    var $ = require("jquery");
    var accounting = require("accounting");
    var ko = require("knockout");
    var kb = require("knockback");

    //var pbarView = require("text!./Common/Templates/Progressbar.html");
    //var Marionette = require("marionette");
    //var Backbone = require("backbone");
    String.prototype["getOuterHTML"] = function (selector) {
        return $(this.toString()).find(selector)[0].outerHTML;
    };

    APP.Application.getInstance().vent.on("Event:UpdateSummary", function () {
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().Show();
        });
    });

    /*
    DEFAULT ACCOUNTING SETTINGS
    */
    accounting.settings = {
        currency: {
            symbol: "",
            format: "%s%v",
            decimal: ".",
            thousand: ",",
            precision: 2
        },
        number: {
            precision: 0,
            thousand: ",",
            decimal: "."
        }
    };

    var Controller = (function () {
        function Controller() {
        }
        return Controller;
    })();
    exports.Controller = Controller;

    var ViewModel = (function () {
        function ViewModel(model, controller) {
            this.model = kb.viewModel(model);
            this.bbModel = model;
            this.controller = controller;
        }
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;

    var ReceiptLayoutDto = (function (_super) {
        __extends(ReceiptLayoutDto, _super);
        function ReceiptLayoutDto() {
            _super.apply(this, arguments);
        }
        ReceiptLayoutDto.prototype.default = function () {
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
        };
        return ReceiptLayoutDto;
    })(Backbone.Model);
    exports.ReceiptLayoutDto = ReceiptLayoutDto;
    var ReceiptLayoutCollection = (function (_super) {
        __extends(ReceiptLayoutCollection, _super);
        function ReceiptLayoutCollection(options) {
            this.model = ReceiptLayoutDto;
            _super.call(this, options);
        }
        return ReceiptLayoutCollection;
    })(Backbone.Collection);
    exports.ReceiptLayoutCollection = ReceiptLayoutCollection;

    (function (Views) {
        var CollectionView = (function (_super) {
            __extends(CollectionView, _super);
            function CollectionView(options) {
                _super.call(this, options);
            }
            return CollectionView;
        })(Marionette.CollectionView);
        Views.CollectionView = CollectionView;
        var CompositeView = (function (_super) {
            __extends(CompositeView, _super);
            function CompositeView(options) {
                if (!options)
                    options = {};

                //options.template = "#navBarCollectionViewTemplate";
                _super.call(this, options);
                //this.itemView = NavBarItemView;
            }
            return CompositeView;
        })(Marionette.CompositeView);
        Views.CompositeView = CompositeView;
        var ItemView = (function (_super) {
            __extends(ItemView, _super);
            function ItemView(options) {
                if (!options)
                    options = {};
                _super.call(this, options);
            }
            return ItemView;
        })(Marionette.ItemView);
        Views.ItemView = ItemView;
        var MvvmView = (function (_super) {
            __extends(MvvmView, _super);
            //template: string;
            function MvvmView(options) {
                //if (!options) options = {};
                _super.call(this, options);
            }
            MvvmView.prototype.initialize = function (options) {
                if (options.viewModel !== undefined) {
                    this.viewModel = options.viewModel;
                    options.model = this.viewModel.model;
                }
            };
            MvvmView.prototype.onShow = function () {
                ko.applyBindings(this.viewModel, this.el);
            };
            MvvmView.prototype.onClose = function () {
                ko.cleanNode($(this.el)[0]);
            };
            return MvvmView;
        })(ItemView);
        Views.MvvmView = MvvmView;
    })(exports.Views || (exports.Views = {}));
    var Views = exports.Views;

    /*
    type value can be:
    1- default
    2- primary
    3- success
    4- info
    5- warning
    6- danger
    */
    function ShowModalPopup(type, title, message) {
        //var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
        //var view = new this.ModalPopupView({ model: alertModel });
        //var app = APP.Application.getInstance();
        //app.ModalRegion.show(view);
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().ShowModalPopup(type, title, message);
        });
    }
    exports.ShowModalPopup = ShowModalPopup;
    function ShowProgressbar() {
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().ShowProgressbar();
        });
    }
    exports.ShowProgressbar = ShowProgressbar;
    function HideProgressbar() {
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().HideProgressbar();
        });
    }
    exports.HideProgressbar = HideProgressbar;
    function PrintReceipt(id) {
        //var receiptView = new Views.ReceiptLayoutItemView();
        //receiptView.$el.find(".jsExportPdf").click();
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().PrintReceipt(id);
        });
    }
    exports.PrintReceipt = PrintReceipt;

    //export function ShowBusDetailModalPopup(busDetialDto, type, title, message) {
    function ShowBusDetailModalPopup(busDetialDto, busDetailCollection) {
        //var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
        //var view = new this.BusDetailModalPopupView({ model: busDetialDto});
        //debugger;
        var view = null;
        require(['./Booking/BookingLeft/BookingLeftView'], function (p) {
            //debugger;
            //alert(p);
            view = new p.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
            var app = APP.Application.getInstance();
            app.ModalAlertRegion.show(view);
        });
        //debugger;
        //var view = new this.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
    }
    exports.ShowBusDetailModalPopup = ShowBusDetailModalPopup;

    //var app = APP.Application.getInstance();
    /// Adds Authentication Token to each outgoing call if there is an AppGlobalSetting present
    $.ajaxSetup({
        'beforeSend': function (xhr) {
            exports.ShowProgressbar();
            var app = APP.Application.getInstance();
            if (app.reqres.hasHandler("AppGlobalSetting")) {
                xhr.setRequestHeader("AuthenticationToken", app.request("AppGlobalSetting").get("AuthenticationToken"));
            }
        },
        'complete': function (xhr, status) {
            exports.HideProgressbar();
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
    function ValidationUtility() {
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
    exports.ValidationUtility = ValidationUtility;

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

    function FormatDateString(aDate) {
        return new Date(aDate).toLocaleDateString();
    }
    exports.FormatDateString = FormatDateString;
    function GetParameterByName(paramName, locationHref) {
        paramName = paramName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + paramName + "=([^&#]*)"), results = regex.exec(locationHref);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    exports.GetParameterByName = GetParameterByName;

    function FormatMoney(aMoney) {
        return accounting.formatMoney(aMoney);
    }
    exports.FormatMoney = FormatMoney;

    (function (VisitTypes) {
        VisitTypes[VisitTypes["PatrolPump"] = 1] = "PatrolPump";
        VisitTypes[VisitTypes["Booking"] = 2] = "Booking";
        VisitTypes[VisitTypes["Maintenance"] = 3] = "Maintenance";
        VisitTypes[VisitTypes["Others"] = 4] = "Others";
    })(exports.VisitTypes || (exports.VisitTypes = {}));
    var VisitTypes = exports.VisitTypes;
    ko.bindingHandlers.numeric = {
        init: function (element, valueAccessor) {
            $(element).on("keydown", function (event) {
                // Allow: backspace, delete, tab, escape, and enter
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) || (event.keyCode >= 35 && event.keyCode <= 39)) {
                    // let it happen, don't do anything
                    return;
                } else {
                    // Ensure that it is a number and stop the keypress
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }
            });
        }
    };
});
//# sourceMappingURL=Helper.js.map
