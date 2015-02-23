﻿/// <reference path="../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../Scripts/typings/marionette/marionette.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../../Helper", "marionette", "jquery", "knockout", "text!./BusVisit.html", "text!./BusVisitGrid.html"], function(require, exports, helper) {
    /// <amd-dependency path="marionette"/>
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="knockout"/>
    /// <amd-dependency path="text!./BusVisit.html"/>
    /// <amd-dependency path="text!./BusVisitGrid.html"/>
    var _ = require('underscore');
    var ko = require("knockout");

    var templateView = require("text!./BusVisit.html");
    var templateGrid = require("text!./BusVisitGrid.html");

    var SearchBusVisitLayoutView = (function (_super) {
        __extends(SearchBusVisitLayoutView, _super);
        function SearchBusVisitLayoutView(options) {
            this.template = templateGrid.getOuterHTML("#BusVisitLayout");
            this.regions = {
                SearchRegion: {
                    selector: ".rgnSearch"
                },
                ContentRegion: {
                    selector: ".rgnContent"
                }
            };
            _super.call(this, options);
        }
        return SearchBusVisitLayoutView;
    })(Marionette.Layout);
    exports.SearchBusVisitLayoutView = SearchBusVisitLayoutView;

    var BusVisitCollectionView = (function (_super) {
        __extends(BusVisitCollectionView, _super);
        function BusVisitCollectionView(options) {
            this.itemView = BusVisitItemView;
            this.template = templateGrid.getOuterHTML("#gridTemplate");
            this.itemViewContainer = "tbody";
            _super.call(this, options);
        }
        //setOptionDisable(option, item) {
        //    //debugger;
        //    //if (item.otherDetail.toLowerCase()==="true") {
        //    //    ko.applyBindingsToNode(option, { disable: true, text: item.description + ' - Maintenance' }, item);
        //    //}
        //}
        BusVisitCollectionView.prototype.onShow = function () {
            this.dataTable = this.$el.find("#tblStation")["dataTable"]({
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
            });
        };
        return BusVisitCollectionView;
    })(helper.Views.CompositeView);
    exports.BusVisitCollectionView = BusVisitCollectionView;

    var BusVisitItemView = (function (_super) {
        __extends(BusVisitItemView, _super);
        function BusVisitItemView(options) {
            if (!options)
                options = {};
            options.template = templateGrid.getOuterHTML("#rowTemplate");
            options.tagName = "tr";
            options.className = "jsRowClick";
            options.events = {
                "click .jsShowDetail": "EditBusVisit"
            };

            _super.call(this, options);
        }
        BusVisitItemView.prototype.EditBusVisit = function () {
            window.location.href = "#editBusVisit";
            this.trigger("Event:EditForm", this.model.get("id"));
        };
        return BusVisitItemView;
    })(helper.Views.ItemView);
    exports.BusVisitItemView = BusVisitItemView;

    var BusVisitSearchItemView = (function (_super) {
        __extends(BusVisitSearchItemView, _super);
        function BusVisitSearchItemView(options) {
            this.template = templateGrid.getOuterHTML("#SearchPanel");

            //this.tagName = "tr";
            //this.className = "jsRowClick";
            this.events = {
                "click .jsSearchVisit": "SearchVisit"
            };
            _super.call(this, options);
        }
        BusVisitSearchItemView.prototype.SearchVisit = function (e) {
            e.preventDefault();

            //alert(this.model.get("busSelected").id);
            this.trigger("Event:SearchVisit", this.model.get("busSelected").id);
        };
        return BusVisitSearchItemView;
    })(helper.Views.ItemView);
    exports.BusVisitSearchItemView = BusVisitSearchItemView;

    //BusVisit Edit View
    var BusVisitView = (function (_super) {
        __extends(BusVisitView, _super);
        function BusVisitView(options) {
            this.template = templateView;
            this.viewModel = new ViewModel(options);
            this.bbModel = new Backbone.Model();
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        BusVisitView.prototype.close = function () {
        };
        BusVisitView.prototype.Cancel = function () {
            this.trigger("Event:CancelForm");
        };
        BusVisitView.prototype.Save = function (e) {
            e.preventDefault();
            if (!this.viewModel.isValidReading()) {
                helper.ShowModalPopup("danger", "Bus Visit", "Please enter valid reading! Final reading should be greather than the Initial reading!");
                return false;
            }
            if (this.viewModel.isBookingCompleted() == "1") {
                if (this.viewModel.returnDate() == undefined || this.viewModel.returnDate() == "") {
                    helper.ShowModalPopup("danger", "Bus Visit", "Please enter valid return date to complete the booking.");
                    return false;
                } else if (this.viewModel.finalReading() == undefined || this.viewModel.finalReading() == "" || this.viewModel.finalReading() == 0) {
                    helper.ShowModalPopup("danger", "Bus Visit", "Please enter valid final reading to complete the booking.");
                    return false;
                }
            }

            this.bbModel.set("id", this.viewModel.id());
            this.bbModel.set("isActive", this.viewModel.isActive() == "1" ? true : false);

            //this.bbModel.set("centreId", this.viewModel.centreId());
            //this.bbModel.set("busId", this.viewModel.busId());
            //this.bbModel.set("driverId", this.viewModel.driverId());
            //this.bbModel.set("visitTypeId", this.viewModel.visitTypeId());
            this.bbModel.set("bookingId", this.viewModel.bookingId());
            this.bbModel.set("inchargeName", this.viewModel.inchargeName());
            this.bbModel.set("visitDate", this.viewModel.visitDate());
            this.bbModel.set("returnDate", this.viewModel.returnDate());

            //this.bbModel.set("outTime", this.viewModel.outTime());
            //this.bbModel.set("returnTime", this.viewModel.returnTime());
            this.bbModel.set("readingWhenFilling", this.viewModel.readingWhenFilling());
            this.bbModel.set("pumpLocation", this.viewModel.pumpLocation());
            this.bbModel.set("fuelRate", this.viewModel.fuelRate());
            this.bbModel.set("fuelQuantity", this.viewModel.fuelQuantity());
            this.bbModel.set("fuelAmount", this.viewModel.fuelAmount());
            this.bbModel.set("fuelingReceipt", this.viewModel.fuelingReceipt());

            this.bbModel.set("isBookingCompleted", this.viewModel.isBookingCompleted());
            this.bbModel.set("description", this.viewModel.description());
            this.bbModel.set("initialReading", this.viewModel.initialReading());
            this.bbModel.set("finalReading", this.viewModel.finalReading());
            this.bbModel.set("busDesc", this.viewModel.busDesc());
            this.bbModel.set("centreDesc", this.viewModel.centreDesc());
            this.bbModel.set("driverDesc", this.viewModel.driverDesc());
            this.bbModel.set("visitTypeDesc", this.viewModel.visitTypeDesc());

            this.bbModel.set("centreId", this.viewModel.alkhidmatCentreSelected().id);
            this.bbModel.set("driverId", this.viewModel.driverSelected().id);
            this.bbModel.set("busId", this.viewModel.busSelected().id);
            this.bbModel.set("outTime", this.viewModel.outTimeSlotSelected().id);
            this.bbModel.set("returnTime", this.viewModel.returnTimeSlotSelected().id);
            this.bbModel.set("visitTypeId", this.viewModel.visitTypeSelected().id);

            this.trigger("Event:SaveForm", this.bbModel);
        };
        BusVisitView.prototype.onShow = function () {
            ko.applyBindings(this.viewModel, this.el);
        };
        return BusVisitView;
    })(helper.Views.ItemView);
    exports.BusVisitView = BusVisitView;

    var ViewModel = (function () {
        function ViewModel(model) {
            var _this = this;
            var lookupResponse = JSON.parse(localStorage.getItem('lookupResponse'));
            this.outTimeSlotList = ko.observableArray(lookupResponse.timeSlot);
            this.reutrnTimeSlotList = ko.observableArray(lookupResponse.timeSlot);
            this.busList = ko.observableArray(lookupResponse.bus);
            this.driverList = ko.observableArray(lookupResponse.driver);
            this.alkhidmatCentreList = ko.observableArray(lookupResponse.alkhidmatCentre);
            this.visitTypeList = ko.observableArray(lookupResponse.visitType);

            if (model == undefined) {
                this.id = ko.observable();
                this.isEdit = ko.observable(false);
                this.isActive = ko.observable("1");
                this.centreId = ko.observable();
                this.busId = ko.observable();
                this.driverId = ko.observable();
                this.visitTypeId = ko.observable();
                this.bookingId = ko.observable();
                this.inchargeName = ko.observable();
                this.visitDate = ko.observable();
                this.outTime = ko.observable();
                this.returnTime = ko.observable();
                this.returnDate = ko.observable();
                this.readingWhenFilling = ko.observable();

                //only for fueling
                this.pumpLocation = ko.observable();
                this.fuelRate = ko.observable();
                this.fuelAmount = ko.observable(); //update
                this.fuelQuantity = ko.observable();
                this.fuelingReceipt = ko.observable();

                //for booking only
                this.isBookingCompleted = ko.observable();

                this.description = ko.observable();
                this.initialReading = ko.observable();
                this.finalReading = ko.observable();
                this.busDesc = ko.observable();
                this.centreDesc = ko.observable();
                this.driverDesc = ko.observable();
                this.visitTypeDesc = ko.observable();

                this.outTimeSlotSelected = ko.observable();
                this.returnTimeSlotSelected = ko.observable();
                this.busSelected = ko.observable();
                this.driverSelected = ko.observable();
                this.alkhidmatCentreSelected = ko.observable();
                this.visitTypeSelected = ko.observable();

                this.isPatrolPump = ko.computed({
                    owner: this,
                    read: function () {
                        if (_this.visitTypeSelected() != undefined && helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[1 /* PatrolPump */]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
                this.isMaintenance = ko.computed({
                    owner: this,
                    read: function () {
                        if (_this.visitTypeSelected() != undefined && helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[3 /* Maintenance */]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
                this.isBooking = ko.computed({
                    owner: this,
                    read: function () {
                        //if (this.visitTypeSelected() != undefined && (helper.VisitTypes[this.visitTypeSelected().id] == helper.VisitTypes[helper.VisitTypes.Booking] || helper.VisitTypes[this.visitTypeSelected().id] == helper.VisitTypes[helper.VisitTypes.Maintenance])) {
                        if (_this.visitTypeSelected() != undefined && (helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[2 /* Booking */])) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
            } else {
                this.id = ko.observable(model.get("id"));

                //var editFlag = model.get("visitTypeId") == 3 ? false : true;
                this.isEdit = ko.observable(true);
                this.isActive = ko.observable(model.get("isActive"));
                this.centreId = ko.observable(model.get("centreId"));
                this.busId = ko.observable(model.get("busId"));
                this.driverId = ko.observable(model.get("drvierId"));
                this.visitTypeId = ko.observable(model.get("visitTypeId"));
                this.bookingId = ko.observable(model.get("bookingId"));
                this.inchargeName = ko.observable(model.get("inchargeName"));
                this.visitDate = ko.observable(model.get("visitDate"));
                this.outTime = ko.observable(model.get("outTime"));
                this.returnTime = ko.observable(model.get("returnTime"));
                this.returnDate = ko.observable(model.get("returnDate"));
                this.readingWhenFilling = ko.observable(model.get("readingWhenFilling"));

                //only for fueling
                if (model.get("pumpLocation") != undefined && model.get("pumpLocation").trim() == "")
                    this.pumpLocation = ko.observable();
                else
                    this.pumpLocation = ko.observable(model.get("pumpLocation"));

                if (model.get("fuelRate") != undefined && model.get("fuelRate") == "0")
                    this.fuelRate = ko.observable();
                else
                    this.fuelRate = ko.observable(model.get("fuelRate"));
                if (model.get("fuelAmount") != undefined && model.get("fuelAmount") == "0")
                    this.fuelAmount = ko.observable();
                else
                    this.fuelAmount = ko.observable(model.get("fuelAmount"));
                if (model.get("fuelQuantity") != undefined && model.get("fuelQuantity") == "0")
                    this.fuelQuantity = ko.observable();
                else
                    this.fuelQuantity = ko.observable(model.get("fuelQuantity"));
                if (model.get("fuelingReceipt") != undefined && model.get("fuelingReceipt") == "")
                    this.fuelingReceipt = ko.observable();
                else
                    this.fuelingReceipt = ko.observable(model.get("fuelingReceipt"));

                //for booking only
                var flag = model.get("isBookingCompleted") == true ? "1" : "0";
                this.isBookingCompleted = ko.observable(flag); //ko.observable(model.get("isBookingCompleted"));

                this.description = ko.observable(model.get("description"));
                this.initialReading = ko.observable(model.get("initialReading"));
                this.finalReading = ko.observable(model.get("finalReading"));
                this.busDesc = ko.observable(model.get("busDesc"));
                this.centreDesc = ko.observable(model.get("centreDesc"));
                this.driverDesc = ko.observable(model.get("driverDesc"));
                this.visitTypeDesc = ko.observable(model.get("visitTypeDesc"));

                var outTime = _.filter(lookupResponse.timeSlot, function (p) {
                    return p.id == model.get("outTime");
                });
                var inTime = _.filter(lookupResponse.timeSlot, function (p) {
                    return p.id == model.get("returnTime");
                });
                var bus = _.filter(lookupResponse.bus, function (p) {
                    return p.id == model.get("busId");
                });
                var driver = _.filter(lookupResponse.driver, function (p) {
                    return p.id == model.get("driverId");
                });
                var centre = _.filter(lookupResponse.alkhidmatCentre, function (p) {
                    return p.id == model.get("centreId");
                });
                var visitType = _.filter(lookupResponse.visitType, function (p) {
                    return p.id == model.get("visitTypeId");
                });

                this.outTimeSlotSelected = ko.observable(outTime[0]);
                this.returnTimeSlotSelected = ko.observable(inTime[0]);
                this.busSelected = ko.observable(bus[0]);
                this.driverSelected = ko.observable(driver[0]);
                this.alkhidmatCentreSelected = ko.observable(centre[0]);
                this.visitTypeSelected = ko.observable(visitType[0]);
                this.isPatrolPump = ko.computed({
                    owner: this,
                    read: function () {
                        if (_this.visitTypeSelected() != undefined && helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[1 /* PatrolPump */]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
                this.isMaintenance = ko.computed({
                    owner: this,
                    read: function () {
                        if (_this.visitTypeSelected() != undefined && helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[3 /* Maintenance */]) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
                this.isBooking = ko.computed({
                    owner: this,
                    read: function () {
                        //if (this.visitTypeSelected() != undefined && (helper.VisitTypes[this.visitTypeSelected().id] == helper.VisitTypes[helper.VisitTypes.Booking] || helper.VisitTypes[this.visitTypeSelected().id] == helper.VisitTypes[helper.VisitTypes.Maintenance])) {
                        if (_this.visitTypeSelected() != undefined && (helper.VisitTypes[_this.visitTypeSelected().id] == helper.VisitTypes[2 /* Booking */])) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                });
            }
            this.isValidReading = ko.computed({
                owner: this,
                read: function () {
                    if (_this.finalReading() != undefined && _this.finalReading() == 0) {
                        return true;
                    } else if (_this.initialReading() != undefined && _this.finalReading() != undefined) {
                        if (parseInt(_this.initialReading()) > parseInt(_this.finalReading())) {
                            //alert("Please enter valid reading! Final reading should be greather than the Initial reading");
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            });
        }
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
});
//# sourceMappingURL=BusVisitView.js.map
