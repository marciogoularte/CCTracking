/// <reference path="../../../../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../../../../Scripts/typings/marionette/marionette.d.ts" />

/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>


var _ = require("underscore");
var ko = require("knockout");
var kb = require("knockback");
import application = require("../../../../App");
import helper = require("../../../../Helper");
import views = require("./AuditBusVisitView");
import dto = require("../../../../Dtos/BusVisitDto");
import DAL = require("../../../../DAL/BusVisit");

export class AuditBusVisitCtrl extends helper.Controller {
    app: any;
    backboneModel: Backbone.Model;
    backboneCollection: Backbone.Collection;
    collectionView: views.AuditBusVisitCollectionView;
    compositeModel: Backbone.Model;
    constructor() {
        super();
        this.app = application.Application.getInstance();
        this.backboneModel = new dto.Models.AuditBusVisit();
        this.compositeModel = new Backbone.Model();
        this.backboneCollection = new Backbone.Collection([]);
        this.collectionView = new views.AuditBusVisitCollectionView({ collection: this.backboneCollection });
        this.backboneCollection.reset([]);
    }

    Show() {
        var model = this.backboneModel;
        model.set("fromDate", helper.FormatDateString(Date.now()));
        model.set("toDate", helper.FormatDateString(Date.now()));
        this.compositeModel = model;
        this.collectionView.model = model;

        //var deferred = DAL.GetAllAuditBusVisit(null);
        //deferred.done(p=> this.AuditBusVisitCompleted(p));
        this.app.MainRegion.show(this.collectionView);
        this.collectionView.listenTo(this.collectionView, "Event:AuditBusVisit", (auditRequest) => this.GetAuditBusVisitDetial(auditRequest));

        var vm = kb.viewModel(this.compositeModel);

        var fromDate = $('#txtFromDate')[0];
        ko.cleanNode(fromDate);
        ko.applyBindings(vm, fromDate);

        var toDate = $('#txtToDate')[0];
        ko.cleanNode(toDate);
        ko.applyBindings(vm, toDate);

    }

    GetAuditBusVisitDetial(auditRequest: any) {
        var request = new Backbone.Model(auditRequest);
        if (request.get("fromDate") == "" || request.get("toDate") == "") {
            helper.ShowModalPopup("danger", "Audit Booking", "Please enter valid search criteria");
            return;
        }
        var deferred = DAL.GetAllAuditBusVisit(request);
        deferred.done(p=> this.AuditBusVisitCompleted(p));
    }
    AuditBusVisitCompleted(auditDto: dto.Models.AuditBusVisitResponseCollection) {
        //TODO:Hack - need rework
        var result = auditDto["auditBusVisitDisplayList"];
        var summary = [];
        for (var i = 0; i < result.length; i++) {
            summary[i] = { bookingId: result[i].bookingId, userName: result[i].userName, propertyName: result[i].propertyName, oldValue: result[i].oldValue, newValue: result[i].newValue, actualModifiedDate: helper.FormatDateString(result[i].actualModifiedDate), rowCounter: result[i].rowCounter };
        }
        this.backboneCollection.reset(summary);
    }

}