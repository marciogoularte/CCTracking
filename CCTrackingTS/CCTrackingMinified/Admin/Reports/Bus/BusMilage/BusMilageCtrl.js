var __extends=this.__extends||function(e,t){function o(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);o.prototype=t.prototype,e.prototype=new o};define(["require","exports","../../../../App","../../../../Helper","./BusMilageView","../../../../Dtos/BookingSummaryDto","../../../../DAL/BusMilage","marionette","jquery","knockout"],function(e,t,o,i,n,s,a){var l=e("underscore"),r=e("knockout"),d=e("knockback"),c=function(e){function t(){e.call(this),this.app=o.Application.getInstance(),this.backboneModel=new s.Models.BookingSummaryDto,this.searchViewModel=new n.BusMilageViewModel(this.backboneModel,this),this.compositeModel=new Backbone.Model,this.backboneCollection=new Backbone.Collection([]),this.collectionView=new n.BusMilageCollectionView({collection:this.backboneCollection,model:this.compositeModel}),this.backboneCollection.reset([])}return __extends(t,e),t.prototype.Show=function(){var e,t=this,o=JSON.parse(localStorage.getItem("lookupResponse")),n=this.backboneModel,a=this.app.request("ReportFilterSetting");if(n.set("busList",o.bus),void 0!=a){n.set("fromBookingDate",a.get("fromDate")),n.set("toBookingDate",a.get("toDate"));var c=l.filter(o.bus,function(e){return e.id==a.get("busId")});n.set("busSelected",c[0]),e=new s.Models.BookingSummaryDto,e.set("busSelected",c[0]),e.set("fromBookingDate",a.get("fromDate")),e.set("toBookingDate",a.get("toDate"))}else n.set("fromBookingDate",i.FormatDateString(Date.now())),n.set("toBookingDate",i.FormatDateString(Date.now())),n.set("busSelected","");this.compositeModel=n,this.collectionView.model=this.compositeModel,this.collectionView.listenTo(this.collectionView,"BusMilage",function(){return t.BusMilage(n)}),this.app.MainRegion.show(this.collectionView);var u=this.collectionView.$el,g=d.viewModel(this.compositeModel),p=u.find("#txtFromBookingDate")[0];r.cleanNode(p),r.applyBindings(g,p);var m=u.find("#txtToBookingDate")[0];r.cleanNode(m),r.applyBindings(g,m);var k=u.find("#ddlBusDetails")[0];r.cleanNode(k),r.applyBindings(g,k),void 0!=e&&this.BusMilage(e)},t.prototype.BusMilage=function(e){var t=this;void 0!=e.get("busSelected")&&void 0!=e.get("busSelected").id?e.set("busId",e.get("busSelected").id):void 0!=e.get("busSelected")&&e.set("busId",e.get("busSelected")),this.app.request("ReportFilterSetting","");var o=a.GetByCriteria(this.GetMinimalRequest(e));o.done(function(e){return t.GetByCriteriaCompleted(e)})},t.prototype.GetMinimalRequest=function(e){var t=new s.Models.BookingSummaryDto;return t.set("fromBookingDate",e.get("fromBookingDate")),t.set("toBookingDate",e.get("toBookingDate")),t.set("busSelected",e.get("busSelected")),t.set("busId",e.get("busId")),t},t.prototype.GetByCriteriaCompleted=function(e){for(var t=e.bookingSummaryList,o=[],n=0;n<t.length;n++)o[n]={alkhidmatCentre:t[n].alkhidmatCentre,alkhidmatCentreId:t[n].alkhidmatCentreId,bookingAmount:t[n].bookingAmount,bookingMilage:t[n].bookingMilage,busNo:t[n].busNo,busId:t[n].busId,visitType:t[n].visitType,visitDate:i.FormatDateString(t[n].visitDate),outTime:t[n].outTime,inTime:t[n].inTime,timeTaken:t[n].timeTaken,driver:t[n].driver};this.backboneCollection.reset(o)},t.prototype.Cancel=function(){window.location.href="#busMilageReport"},t.prototype.UIBinding=function(e){var t=JSON.parse(localStorage.getItem("lookupResponse"));e.set("landmarkList",t.landmark);var o=l.filter(t.landmark,function(t){return t.id==e.get("landmarkId")});e.set("landmarkIdSelected",o[0])},t}(i.Controller);t.BusMilageCtrl=c});