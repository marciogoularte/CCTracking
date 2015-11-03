var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../../App","../../../Helper","./BusVisitSummaryView","../../../Dtos/BusVisitDto","../../../DAL/BusVisit","marionette","jquery","knockout"],function(e,t,n,r,i,s,o){var u=e("underscore"),a=e("knockout"),f=e("knockback"),l=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.backboneModel=new s.Models.BusVisitSummaryDto,this.compositeModel=new Backbone.Model,this.backboneCollection=new Backbone.Collection([]),this.collectionView=new i.BusVisitSummaryCollectionView({collection:this.backboneCollection,model:new Backbone.Model({title1:""})}),this.backboneCollection.reset([])}return __extends(t,e),t.prototype.ShowVisit=function(){var e=this;this.isBusVisit=!0;var t=o.GetAllSummary();t.done(function(t){return e.GetBusVisitSummaryCompleted(t)}),this.collectionView.model=new Backbone.Model({title1:"Visit"}),this.app.MainRegion.show(this.collectionView),this.collectionView.listenTo(this.collectionView,"itemview:BusVisitSummaryDetail",function(t,n){return e.GetBusVisitDetial(n)})},t.prototype.ShowMilage=function(){var e=this;this.isBusVisit=!1;var t=o.GetAllMilageSummary();t.done(function(t){return e.GetBusVisitSummaryCompleted(t)}),this.collectionView.model=new Backbone.Model({title1:"Milage"}),this.app.MainRegion.show(this.collectionView),this.collectionView.listenTo(this.collectionView,"itemview:BusVisitSummaryDetail",function(t,n){return e.GetBusVisitMilageDetial(n)})},t.prototype.GetBusVisitDetial=function(e){var t=this,n=o.GetAllDetail(e);n.done(function(e){return t.GetBusVisitDetailCompleted(e)})},t.prototype.GetBusVisitMilageDetial=function(e){var t=this,n=o.GetAllMilageDetail(e);n.done(function(e){return t.GetBusVisitDetailCompleted(e)})},t.prototype.GetBusVisitDetailCompleted=function(e){var t=e.busVisitList,n=[];for(var s=0;s<t.length;s++)n[s]={driverDesc:t[s].driverDesc,centreDesc:t[s].centreDesc,vehicleNo:t[s].vehicleNo,visitDate:r.FormatDateString(t[s].visitDate),visitInterval:t[s].visitInterval,bookingId:t[s].bookingId,milage:t[s].milage};var o=new Backbone.Collection([]),u=new i.BusVisitDetailCollectionView({collection:o});this.app.MainRegion.show(u),o.reset(n),this.isBusVisit?location.href="#busVisitDetail":location.href="#busVisitMilageDetail"},t.prototype.GetBusVisitSummaryCompleted=function(e){var t=e.busVisitList,n=[];for(var r=0;r<t.length;r++)n[r]={busId:t[r].busId,driverDesc:t[r].driverDesc,milage:t[r].milage,visitCount:t[r].visitCount,vehicleNo:t[r].vehicleNo};this.backboneCollection.reset(n)},t.prototype.Cancel=function(){this.isBusVisit?location.href="#busVisitSummary":location.href="#busVisitMilageSummary"},t}(r.Controller);t.BusVisitSummaryCtrl=l});