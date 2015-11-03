var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../App","../Helper","./SearchView","CCTracking.WebClient/Dtos/SearchDto","../DAL/Search","marionette","jquery","knockout","text!./SearchTmpl.html"],function(e,t,n,r,i,s,o){var u=e("underscore"),a=e("knockout"),f=e("knockback"),l=function(e){function t(){e.call(this),this.app=n.Application.getInstance(),this.searchFromLayout=new i.SearchFormLayoutView,this.searchModel=new s.Models.SearchDto,this.searchFormView=new i.SearchFormItemView,this.searchViewModel=new i.SearchViewModel(this.backboneModel,this)}return __extends(t,e),t.prototype.Show=function(){this.Load()},t.prototype.Load=function(){var e=this,t=JSON.parse(localStorage.getItem("lookupResponse")),n=this.searchModel;n.set("graveyardList",t.graveyard),n.set("graveyardIdSelected",""),n.set("alkhidmatCentreList",t.alkhidmatCentre),n.set("alkhidmatCentreSelected",""),n.set("busList",t.bus),n.set("busSelected",""),n.set("genderId",""),n.set("contactInfo",""),n.set("deseasedInfo",""),n.set("paymentStatusId",""),n.set("bookingDate",""),this.searchFormView.listenTo(this.searchFormView,"SearchBooking",function(){return e.GetByCriteria(n)}),this.searchFormView.on("CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.searchFromLayout),this.searchFromLayout.SearchRegion.show(this.searchFormView),this.KOBinding(n)},t.prototype.GetByCriteria=function(e){var t=this;e.set("genderId",e.get("genderId").toString()),e.set("paymentStatusId",e.get("paymentStatusId").toString()),e.get("bookingDate").trim()!=""&&e.set("bookingDate",r.FormatDateString(e.get("bookingDate"))),e.get("graveyardIdSelected")!=undefined&&e.set("greveyardId",e.get("graveyardIdSelected").id),e.get("alkhidmatCentreSelected")!=undefined&&e.set("centreId",e.get("alkhidmatCentreSelected").id),e.get("busSelected")!=undefined&&e.set("busId",e.get("busSelected").id);var n=o.GetByCriteria(this.GetMinimalRequest(e));n.done(function(e){return t.GetByCriteriaCompleted(e)})},t.prototype.GetMinimalRequest=function(e){var t=new s.Models.SearchDto;return t.set("bookingDate",e.get("bookingDate")),t.set("busId",e.get("busId")),t.set("centreId",e.get("centreId")),t.set("contactInfo",e.get("contactInfo")),t.set("deseasedInfo",e.get("deseasedInfo")),t.set("genderId",e.get("genderId")),t.set("greveyardId",e.get("greveyardId")),t.set("paymentStatusId",e.get("paymentStatusId")),t},t.prototype.GetByCriteriaCompleted=function(e){var t=u.map(e.bookingList,function(e){return e.pickupDate!="0001-01-01T00:00:00"?e.pickupDate=r.FormatDateString(e.pickupDate):e.pickupDate="",e.status?e.status="Paid":e.status="Unpaid",e}),n=new Backbone.Collection(t),s=new i.SearchCollectionView({collection:n});this.searchFromLayout.ContentRegion.show(s)},t.prototype.KOBinding=function(e){var t=f.viewModel(e),n=this.searchFormView.$el,r=n.find("#ddlGraveyard")[0];a.cleanNode(r),a.applyBindings(t,r);var i=n.find("#ddlCentre")[0];a.cleanNode(i),a.applyBindings(t,i);var s=n.find("#ddlBusDetails")[0];a.cleanNode(s),a.applyBindings(t,s);var o=n.find("#txtContactInfo")[0];a.cleanNode(o),a.applyBindings(t,o);var u=n.find("#txtDeseasedInfo")[0];a.cleanNode(u),a.applyBindings(t,u);var l=n.find(".jsGender")[0];a.cleanNode(l),a.applyBindings(t,l),l=n.find(".jsGender")[1],a.cleanNode(l),a.applyBindings(t,l);var c=n.find(".jsPaymentStatus")[0];a.cleanNode(c),a.applyBindings(t,c),c=n.find(".jsPaymentStatus")[1],a.cleanNode(c),a.applyBindings(t,c);var h=n.find("#txtBookingDate")[0];a.cleanNode(h),a.applyBindings(t,h)},t.prototype.Cancel=function(){var e=this.searchModel;e.set("graveyardIdSelected",""),e.set("alkhidmatCentreSelected",""),e.set("busSelected",""),e.set("genderId",""),e.set("contactInfo",""),e.set("deseasedInfo",""),e.set("paymentStatusId",""),e.set("bookingDate","")},t}(r.Controller);t.SearchCtrl=l});