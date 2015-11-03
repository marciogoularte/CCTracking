var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../Helper","../App","marionette","jquery","knockout","text!./PaymentTmpl.html","text!./PaymentGrid.html"],function(e,t,n,r){var i=e("underscore"),s=e("knockout"),o=e("text!./PaymentTmpl.html"),u=e("text!./PaymentGrid.html"),a,f=function(e){function t(t,n){var r=this;e.call(this,t,n),this.model.paymentTypeSelected.subscribe(function(){r.model.paymentTypeSelected().id==1?r.model.isCash=!0:r.model.isCash=!1})}return __extends(t,e),t}(n.ViewModel);t.PaymentViewModel=f;var l=function(e){function t(t,n){a=r.Application.getInstance(),this.template=o,this.viewModel=new c(t,n),this.bbModel=new Backbone.Model,this.events={submit:"Save","click .jsCancel":"Cancel","click .jsAddMore":"AddMore","click .jsUpdateMore":"UpdateMore"},e.call(this,n)}return __extends(t,e),t.prototype.Cancel=function(){window.location.href="#viewBooking"},t.prototype.AddMore=function(){this.trigger("BusVisitAddItem",this.viewModel.bookingId(),this.viewModel.alkhidmatCentreSelected(),this.viewModel.driverSelected(),this.viewModel.busSelected(),this.viewModel.fuelAmount())},t.prototype.UpdateMore=function(){this.trigger("BusVisitUpdateItem",this.viewModel.bookingId(),this.viewModel.alkhidmatCentreSelected(),this.viewModel.driverSelected(),this.viewModel.busSelected(),this.viewModel.fuelAmount(),this.viewModel.busChangeReason())},t.prototype.Save=function(e){e.preventDefault(),this.bbModel.set("id",this.viewModel.Id()),this.bbModel.set("bookingId",this.viewModel.bookingId()),this.bbModel.set("paymentType",this.viewModel.paymentType()),this.bbModel.set("pricing",this.viewModel.pricing()),this.bbModel.set("amount",this.viewModel.amount()),this.bbModel.set("paymentLocation",this.viewModel.paymentLocation()),this.bbModel.set("officerId",this.viewModel.officerId()),this.bbModel.set("receiptNo",this.viewModel.receiptNo()),this.bbModel.set("extraAmountCharge",this.viewModel.extraAmountCharge()),this.bbModel.set("extraAmountReason",this.viewModel.extraAmountReason()),this.bbModel.set("extraAmountReceipt",this.viewModel.extraAmountReceipt()),this.bbModel.set("isReferralBooking",this.viewModel.isReferralBooking()=="1"?!0:!1),this.bbModel.set("isReferralBookingPaid",this.viewModel.isReferralBookingPaid()=="1"?!0:!1),this.bbModel.set("referralPaymentDate",this.viewModel.referralPaymentDate()),this.bbModel.set("easyPaisaTranNo",this.viewModel.easyPaisaTranNo()),this.bbModel.set("paymentLocation",this.viewModel.paymentLocationSelected().id),this.bbModel.set("officerId",this.viewModel.cashierSelected().id),this.bbModel.set("paymentType",this.viewModel.paymentTypeSelected().id),this.bbModel.set("fuelAmount",this.viewModel.fuelAmount()),this.bbModel.set("busChangeReason",this.viewModel.busChangeReason()),this.trigger("PaymentSave",this.bbModel)},t.prototype.onShow=function(){s.applyBindings(this.viewModel,this.el),this.$el.find("#lnkUpdate").hide()},t.prototype.onClose=function(){a.vent.off("Event:UpdateSummary")},t}(n.Views.ItemView);t.PaymentView=l;var c=function(){function e(e,t){var r=this;if(t==undefined){this.Id=s.observable(),this.bookingId=s.observable(),this.paymentType=s.observable(),this.pricing=s.observable(),this.amount=s.observable(),this.paymentLocation=s.observable(),this.officerId=s.observable(),this.receiptNo=s.observable(),this.extraAmountCharge=s.observable(),this.extraAmountReason=s.observable(),this.extraAmountReceipt=s.observable(),this.isReferralBooking=s.observable(),this.isReferralBookingPaid=s.observable(),this.referralPaymentDate=s.observable(),this.paymentStatus=s.observable(),this.isReferral=s.computed({owner:this,read:function(){return r.isReferralBooking()==1&&r.paymentStatus()!=1?!0:!1}}),this.easyPaisaTranNo=s.observable();var o=JSON.parse(localStorage.getItem("lookupResponse"));this.busList=s.observableArray(e),this.fuelAmount=s.observable(),this.busChangeReason=s.observable(),this.busSelected=s.observable(),this.driverList=s.observableArray(o.driver),this.driverSelected=s.observable(),this.alkhidmatCentreList=s.observableArray(o.alkhidmatCentre),this.alkhidmatCentreSelected=s.observable(),this.paymentLocationList=s.observableArray(o.alkhidmatCentre),this.paymentLocationSelected=s.observable(),this.cashierList=s.observableArray(o.cashier),this.cashierSelected=s.observable(),this.paymentTypeList=s.observableArray(o.paymentType),this.paymentTypeSelected=s.observable(),this.currentDisplay=s.observable(),this.isEasyPaisa=s.computed({owner:this,read:function(){return r.paymentTypeSelected()!=undefined&&r.paymentTypeSelected().id===2&&r.easyPaisaTranNo().trim()==""?!0:!1}}),this.isPaid=s.computed({owner:this,read:function(){return r.paymentStatus()=="1"?!0:!1}}),this.isCancel=s.computed({owner:this,read:function(){return r.paymentStatus()=="2"?!0:!1}}),this.paymentStatusDesc=s.computed({owner:this,read:function(){return r.paymentStatus()=="1"?(r.currentDisplay("panel panel-default"),"Paid"):r.paymentStatus()=="2"?(r.currentDisplay("panel panel-danger"),"Cancel"):(r.currentDisplay("panel panel-warning"),"Unpaid")}})}else{this.Id=s.observable(t.get("id")),this.bookingId=s.observable(t.get("bookingId")),this.paymentType=s.observable(),this.pricing=s.observable(),this.amount=s.observable(n.FormatMoney(t.get("amount"))),this.paymentLocation=s.observable(),this.officerId=s.observable(),this.receiptNo=s.observable(t.get("receiptNo")),this.extraAmountCharge=s.observable(t.get("extraAmountCharge")),this.extraAmountReason=s.observable(t.get("extraAmountReason")),this.extraAmountReceipt=s.observable(t.get("extraAmountReceipt")),this.isReferralBooking=s.observable(t.get("isReferralBooking")?"1":"0"),this.isReferralBookingPaid=s.observable(t.get("isReferralBookingPaid")?"1":"0"),t.get("referralPaymentDate")!="0001-01-01T00:00:00"?this.referralPaymentDate=s.observable(n.FormatDateString(t.get("referralPaymentDate"))):this.referralPaymentDate=s.observable(""),this.paymentStatus=s.observable(t.get("paymentStatus")),this.isReferral=s.computed({owner:this,read:function(){return r.isReferralBooking()==1&&r.paymentStatus()!=1?!0:!1}}),this.easyPaisaTranNo=s.observable(t.get("easyPaisaTranNo"));var o=JSON.parse(localStorage.getItem("lookupResponse"));this.busList=s.observableArray(e),this.fuelAmount=s.observable(t.get("fuelAmoun")),this.busChangeReason=s.observable(t.get("busChangeReason")),this.busSelected=s.observable(),this.driverList=s.observableArray(o.driver),this.driverSelected=s.observable(),this.alkhidmatCentreList=s.observableArray(o.alkhidmatCentre),this.alkhidmatCentreSelected=s.observable(),this.paymentLocationList=s.observableArray(o.alkhidmatCentre);var u=i.filter(o.alkhidmatCentre,function(e){return e.id==t.get("paymentLocation")}),a=i.filter(o.paymentType,function(e){return e.id==t.get("paymentType")}),f=i.filter(o.cashier,function(e){return e.id==t.get("officerId")});this.paymentLocationSelected=s.observable(u[0]),this.cashierList=s.observableArray(o.cashier),this.cashierSelected=s.observable(f[0]),this.paymentTypeList=s.observableArray(o.paymentType),this.paymentTypeSelected=s.observable(a[0]),this.currentDisplay=s.observable(),this.isEasyPaisa=s.computed({owner:this,read:function(){return r.paymentTypeSelected()!=undefined&&r.paymentTypeSelected().id===2&&r.easyPaisaTranNo().trim()==""?!0:!1}}),this.isPaid=s.computed({owner:this,read:function(){return r.paymentStatus()=="1"?!0:!1}}),this.isCancel=s.computed({owner:this,read:function(){return r.paymentStatus()=="2"?!0:!1}}),this.paymentStatusDesc=s.computed({owner:this,read:function(){return r.paymentStatus()=="1"?(r.currentDisplay("panel panel-default"),"Paid"):r.paymentStatus()=="2"?(r.currentDisplay("panel panel-danger"),"Cancel"):(r.currentDisplay("panel panel-warning"),"Unpaid")}}),this.alkhidmatCentreSelected.subscribe(function(){var t=i.filter(e,function(e){return e.centreId==r.alkhidmatCentreSelected().id});r.busList(t)})}}return e.prototype.FormatMoneyValue=function(e){e()!=undefined&&e()!=""&&e(n.FormatMoney(e()))},e.prototype.setOptionDisable=function(e,t){var n=t.description;if(t.description.indexOf("Booked - Paid")>=0||t.description.indexOf("Booked - Unpaid")>=0)n=t.description,s.applyBindingsToNode(e,{disable:!0,text:n},t);t.isOnMaintainance&&(n=t.description+" - Maintenance",s.applyBindingsToNode(e,{disable:!0,text:n},t))},e}();t.ViewModel=c;var h=function(e){function t(t){a=r.Application.getInstance(),t.itemView=p,t.template=u.getOuterHTML("#gridTemplate"),t.itemViewContainer="tbody",e.call(this,t)}return __extends(t,e),t}(n.Views.CompositeView);t.BusVisitCollectionView=h;var p=function(e){function t(t){var n=this;t||(t={}),t.template=u.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className="jsRowClick",t.events={"mouseover .jsShowDetail":"ShowDetail","click .jsShowDetail":"ShowDetail","click .jsRemoveItem":function(){return n.RemoveItem()},"click .jsUpdateItem":function(){return n.UpdateItem()}},e.call(this,t)}return __extends(t,e),t.prototype.RemoveItem=function(){this.trigger("BusVisitRemoveItem",this.model.get("busId"),this.model.get("centreId"),this.model.get("driverId"))},t.prototype.UpdateItem=function(){this.trigger("UpdateBusVisitItem",this.model)},t.prototype.ShowDetail=function(){},t}(n.Views.ItemView);t.BusVisitItemView=p});