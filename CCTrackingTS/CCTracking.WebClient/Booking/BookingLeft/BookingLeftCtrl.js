/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../App", "../../Helper", "./BookingLeftView", "../../Dtos/BookingLeftDto", "../../DAL/BookingLeft", "../../DAL/ReceiptContent", "../BookingCtrl", "marionette", "jquery", "knockout", "text!./BookingLeftTmpl.html", "jsPDF"], function(require, exports, application, helper, views, dto, DAL, RDAL, bookingCtrl) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./BookingLeftTmpl.html"/>
    /// <amd-dependency path="jsPDF"/>
    var _ = require("underscore");
    var ko = require("knockout");
    var kb = require("knockback");

    var jsPDF = require('jsPDF');

    var BookingLeftCtrl = (function (_super) {
        __extends(BookingLeftCtrl, _super);
        //collection: dto.Models.BookingLeftCollection;
        //collectionView: views.BookingLeftCollectionView;
        function BookingLeftCtrl() {
            _super.call(this);

            this.app = application.Application.getInstance();
            this.backboneModel = new dto.Models.BookingLeftDto();
            this.bookingLeftViewModel = new views.BookingLeftViewModel(this.backboneModel, this);
            this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel });
            // this.collection = new dto.Models.BookingLeftCollection({});
            //this.collectionView = new views.BookingLeftCollectionView({ collection: this.collection });
        }
        BookingLeftCtrl.prototype.Show = function () {
            var _this = this;
            // debugger;
            var appObj = this.app.request("AppGlobalSetting");
            var model = new dto.Models.BookingLeftDto();
            model.set("officerId", appObj.get("Id"));
            var deferredById = DAL.GetByCriteria(model);
            deferredById.done(function (p) {
                return _this.GetByCriteriaCompleted(p);
            });
        };

        BookingLeftCtrl.prototype.GetByCriteriaCompleted = function (bookingLeftDto) {
            var _this = this;
            //alert("GetByIdCompleted..");
            this.backboneModel = new Backbone.Model(bookingLeftDto["bookingLeftModel"]);
            var model = this.backboneModel;

            this.UIBinding(model);

            //this.bookingLeftView.viewModel = this.bookingLeftViewModel;
            this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel });

            this.bookingLeftView.on("ShowTotalBooking", function () {
                return _this.ShowTotalBooking();
            });
            this.bookingLeftView.on("ShowPaidBooking", function () {
                return _this.ShowPaidBooking();
            });
            this.bookingLeftView.on("ShowUnpaidBooking", function () {
                return _this.ShowUnpaidBooking();
            });
            this.bookingLeftView.on("ShowTodayBooking", function () {
                return _this.ShowTodayBooking();
            });

            //app = application.Application.getInstance();
            this.app.LeftRegion.show(this.bookingLeftView);
            //this.bookingLeftView = new views.BookingLeftView({ viewModel: this.bookingLeftViewModel });
        };

        BookingLeftCtrl.prototype.ShowTotalBooking = function () {
            new bookingCtrl.BookingCtrl().GetAll(1);
        };

        BookingLeftCtrl.prototype.ShowPaidBooking = function () {
            new bookingCtrl.BookingCtrl().GetAll(2);
        };

        BookingLeftCtrl.prototype.ShowUnpaidBooking = function () {
            new bookingCtrl.BookingCtrl().GetAll(3);
        };
        BookingLeftCtrl.prototype.ShowTodayBooking = function () {
            new bookingCtrl.BookingCtrl().GetAll(4);
        };

        BookingLeftCtrl.prototype.UIBinding = function (model) {
            this.bookingLeftViewModel.bbModel = model;
            this.bookingLeftViewModel.model = kb.viewModel(model);
            ko.cleanNode($(this.bookingLeftView.el)[0]);
            ko.applyBindings(this.bookingLeftViewModel, this.bookingLeftView.el);
        };
        BookingLeftCtrl.prototype.ShowProgressbar = function () {
            var currentView = this.app.ModalRegion.currentView;

             {
                 {
                    var alertModel = new Backbone.Model({ type: 'btn-', title: 'title', message: 'message' });
                    var pview = new views.ProgressbarView({ model: alertModel });
                    if (this.app.ModalRegion.currentView == undefined) {
                        this.app.ModalRegion.show(pview);
                    }
                }
            }
        };

        BookingLeftCtrl.prototype.HideProgressbar = function () {
            //debugger;
            var currentView = this.app.ModalRegion.currentView;

             {
                this.app.ModalRegion.close();
                $(".modal-backdrop").remove();
            }
            //debugger;
        };

        BookingLeftCtrl.prototype.ShowModalPopup = function (type, title, message) {
            //if (this.app.ModalRegion != undefined && this.app.ModalRegion.currentView != undefined) {
            //this.app.ModalRegion.stopListening();
            //this.app.ModalRegion.close();
            //this.app.ModalRegion.$el.modal('hide');
            //this.app.ModalAlertRegion.close();
            //this.app.ModalRegion.reset();
            //}
            //this.app.ModalRegion.close();
            //$(".modal-backdrop").remove();
            var alertModel = new Backbone.Model({ type: 'btn-' + type, title: title, message: message });
            var view = new views.ModalPopupView({ model: alertModel });

             {
                this.app.ModalAlertRegion.show(view);
            }
        };

        BookingLeftCtrl.prototype.PrintReceipt = function (id) {
            var _this = this;
            //var receiptView = new views.ReceiptLayoutItemView({ model: model });
            //this.app.SubRegion.show(receiptView);
            ////this.app.ModalAlertRegion.show(receiptView);
            //receiptView.ExportToPdf();
            //var collection = new Backbone.Collection({
            //    centreDesc: "Head Office - Noor-ul-Huda Centre, Near Numayesh Chorangi",
            //    receiptNo: "112345",
            //    printDateAndTime: helper.FormatDateString(Date.now()),
            //    bookingId: "140",
            //    bookingDate: "01/01/2015",
            //    cashReceivedFrom: "Mr abc",
            //    totalAmountDue: helper.FormatMoney("2500"),
            //    userName: "Current logged in user",
            //});
            //var id = 148;
            var deferred = RDAL.GetById(id);
            deferred.done(function (p) {
                return _this.GetReceiptContentCompleted(p);
            });
            //this.ExportToPdf(receiptView.$el.find('#ReceiptLayout')[0]);
            //this.app.ModalAlertRegion.show(receiptView);
            //receiptView.ExportToPdf();
        };

        BookingLeftCtrl.prototype.GetReceiptContentCompleted = function (response) {
            var _this = this;
            var collection = _.map(response["receiptContentList"], function (item) {
                var aDate = new Date(item.printDateTime);
                var appObj = _this.app.request("AppGlobalSetting");

                item.bookingDate = helper.FormatDateString(item.bookingDate);
                item.printDateTime = helper.FormatDateString(item.printDateTime) + '    ' + aDate.getHours() + ':' + aDate.getMinutes();
                item.bookingAmount = helper.FormatMoney(item.bookingAmount);
                item.userName = appObj.get("FirstName") + ',' + appObj.get("LastName");
                return item;
            });

            var list = new Backbone.Collection(collection);
            var receiptView = new views.ReceiptLayoutCollectionView({ collection: list });
            this.app.ModalAlertRegion.show(receiptView);
            receiptView.on("Event-PrintReceipt", function () {
                _this.ExportToPdf(receiptView.$el.find('#ReceiptLayout')[0]);
                _this.app.ModalAlertRegion.close();
            });
        };

        BookingLeftCtrl.prototype.ExportToPdf = function (printSelector) {
            //debugger;
            var pdf = new jsPDF('p', 'pt', 'a4');

            //var source = this.$el.find('#ReceiptLayout')[0];
            var source = printSelector;

            //, specialElementHandlers = {
            //    '#bypassme': function (element, renderer) {
            //        return true;
            //    }
            //}
            var margins = {
                top: 20,
                bottom: 60,
                left: 20,
                width: 522
            };
            pdf.fromHTML(source, margins.left, margins.top, {
                'width': margins.width
            }, function (dispose) {
                // dispose: object with X, Y of the last line add to the PDF
                //          this allow the insertion of new lines after html
                pdf.save('CCTRacking-Receipt.pdf');
            }, margins);
        };
        return BookingLeftCtrl;
    })(helper.Controller);
    exports.BookingLeftCtrl = BookingLeftCtrl;
});
