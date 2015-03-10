var __extends=this.__extends||function(e,o){function t(){this.constructor=e}for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n]);t.prototype=o.prototype,e.prototype=new t};define(["require","exports","../../../../App","../../../../Helper","./AuditRefundBookingView","../../../../Dtos/RefundBookingDto","../../../../DAL/RefundBooking","marionette","jquery","knockout"],function(e,o,t,n,i,a,r){var l=(e("underscore"),e("knockout")),d=e("knockback"),u=function(e){function o(){e.call(this),this.app=t.Application.getInstance(),this.backboneModel=new a.Models.AuditRefundBooking,this.compositeModel=new Backbone.Model,this.backboneCollection=new Backbone.Collection([]),this.collectionView=new i.AuditRefundBookingCollectionView({collection:this.backboneCollection}),this.backboneCollection.reset([])}return __extends(o,e),o.prototype.Show=function(){var e=this,o=this.backboneModel;o.set("fromDate",n.FormatDateString(Date.now())),o.set("toDate",n.FormatDateString(Date.now())),this.compositeModel=o,this.collectionView.model=o,this.app.MainRegion.show(this.collectionView),this.collectionView.listenTo(this.collectionView,"Event:AuditRefundBooking",function(o){return e.GetAuditRefundBookingDetial(o)});var t=d.viewModel(this.compositeModel),i=$("#txtFromDate")[0];l.cleanNode(i),l.applyBindings(t,i);var a=$("#txtToDate")[0];l.cleanNode(a),l.applyBindings(t,a)},o.prototype.GetAuditRefundBookingDetial=function(e){var o=this,t=new Backbone.Model(e);if(""==t.get("fromDate")||""==t.get("toDate"))return void n.ShowModalPopup("danger","Audit Refund Booking","Please enter valid search criteria");var i=r.GetAllAuditRefundBooking(t);i.done(function(e){return o.AuditRefundBookingCompleted(e)})},o.prototype.AuditRefundBookingCompleted=function(e){for(var o=e.auditRefundBookingDisplayList,t=[],i=0;i<o.length;i++)t[i]={bookingId:o[i].bookingId,userName:o[i].userName,propertyName:o[i].propertyName,oldValue:o[i].oldValue,newValue:o[i].newValue,actualModifiedDate:n.FormatDateString(o[i].actualModifiedDate),rowCounter:o[i].rowCounter};this.backboneCollection.reset(t)},o}(n.Controller);o.AuditRefundBookingCtrl=u});