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

    String.prototype["getOuterHTML"] = function (selector) {
        return $(this.toString()).find(selector)[0].outerHTML;
    };

    APP.Application.getInstance().vent.on("Event:UpdateSummary", function () {
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().Show();
        });
    });

    $.extend(true, $.fn.dataTable.defaults, {
        "sDom": "<'row'<'col-md-12 hidden'l><'col-xs-12 col-md-12 text-right'f>r>" + "t" + "<'row'<'col-md-12'i><'col-xs-12 col-md-12 text-center'p>>",
        "language": {
            "search": "Filter: "
        }
    });

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

                _super.call(this, options);
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
            function MvvmView(options) {
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

    function ShowModalPopup(type, title, message) {
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
        require(['./Booking/BookingLeft/BookingLeftCtrl'], function (p) {
            new p.BookingLeftCtrl().PrintReceipt(id);
        });
    }
    exports.PrintReceipt = PrintReceipt;

    function ShowBusDetailModalPopup(busDetialDto, busDetailCollection) {
        var view = null;
        require(['./Booking/BookingLeft/BookingLeftView'], function (p) {
            view = new p.BusDetailModalPopupCollectionView({ collection: busDetailCollection, model: busDetialDto });
            var app = APP.Application.getInstance();
            app.ModalAlertRegion.show(view);
        });
    }
    exports.ShowBusDetailModalPopup = ShowBusDetailModalPopup;

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
            elementCount = 0;
            if (formSelector.indexOf('#') === -1) {
                formSelector = '#' + formSelector;
            }

            return $(formSelector)[0].checkValidity();
        };
        return { validate: validate };
    }
    exports.ValidationUtility = ValidationUtility;

    function AddItem(busVisitCollection) {
        var app = APP.Application.getInstance();
        busVisitCollection.push({ centreId: 'center-d', busId: 'bus-d', driverId: 'driver-d' });
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

    function GetPageSize() {
        return 50;
    }
    exports.GetPageSize = GetPageSize;

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
                if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true) || (event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) || (event.keyCode >= 35 && event.keyCode <= 39)) {
                    return;
                } else {
                    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                        event.preventDefault();
                    }
                }
            });
        }
    };
});
