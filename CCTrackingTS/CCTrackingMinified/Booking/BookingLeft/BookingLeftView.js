var __extends=this.__extends||function(t,e){function i(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);i.prototype=e.prototype,t.prototype=new i};define(["require","exports","../../App","../../Helper","text!CCTracking.WebClient/Booking/BookingLeft/BookingLeftTmpl.html","text!CCTracking.WebClient/Common/Templates/ModalPopup.html","text!CCTracking.WebClient/Common/Templates/Progressbar.html","text!CCTracking.WebClient/Common/Templates/BusDetailModalPopup.html","text!CCTracking.WebClient/Common/Templates/ReceiptLayout.html","marionette","jsPDF"],function(t,e,i,o){var n,a=(t("underscore"),t("text!CCTracking.WebClient/Booking/BookingLeft/BookingLeftTmpl.html")),r=t("text!CCTracking.WebClient/Common/Templates/ModalPopup.html"),l=t("text!CCTracking.WebClient/Common/Templates/Progressbar.html"),s=t("text!CCTracking.WebClient/Common/Templates/BusDetailModalPopup.html"),c=t("text!CCTracking.WebClient/Common/Templates/ReceiptLayout.html"),p=(t("jsPDF"),function(t){function e(e,i){t.call(this,e,i)}return __extends(e,t),e}(o.ViewModel));e.BookingLeftViewModel=p;var u=function(t){function e(e){this.template=a,n=i.Application.getInstance(),this.events={"click .jsTodayBooking":"ShowTodayBooking","click .jsTotalBooking":"ShowTotalBooking","click .jsPaidBooking":"ShowPaidBooking","click .jsUnpaidBooking":"ShowUnpaidBooking"},t.call(this,e)}return __extends(e,t),e.prototype.ShowTotalBooking=function(t){t.preventDefault(),this.trigger("ShowTotalBooking")},e.prototype.ShowPaidBooking=function(t){t.preventDefault(),this.trigger("ShowPaidBooking")},e.prototype.ShowUnpaidBooking=function(t){t.preventDefault(),this.trigger("ShowUnpaidBooking")},e.prototype.ShowTodayBooking=function(t){t.preventDefault(),this.trigger("ShowTodayBooking")},e}(o.Views.MvvmView);e.BookingLeftView=u;var m=function(t){function e(e){this.template=r.getOuterHTML("#Modal"),t.call(this,e)}return __extends(e,t),e}(o.Views.ItemView);e.ModalPopupView=m;var g=function(t){function e(e){this.template=l.getOuterHTML("#Progressbar"),t.call(this,e)}return __extends(e,t),e}(o.Views.ItemView);e.ProgressbarView=g;var h=function(t){function e(e){this.itemView=C,this.template=s.getOuterHTML("#ModalGrid"),this.itemViewContainer="#ItemContainer",t.call(this,e)}return __extends(e,t),e}(o.Views.CompositeView);e.BusDetailModalPopupCollectionView=h;var C=function(t){function e(e){this.template=s.getOuterHTML("#Modal"),this.tagName="div",t.call(this,e)}return __extends(e,t),e}(o.Views.ItemView);e.BusDetailModalPopupView=C;var w=function(t){function e(e){var i=this;this.itemView=k,this.template=c.getOuterHTML("#ReceiptTemplate"),this.itemViewContainer="#ItemContainer",this.events={"click .jsPrintDocument":function(){o.PrintDocument(),i.close()},"click .jsPDFReceipt":function(){i.trigger("Event-PrintPDFReceipt")}},t.call(this,e)}return __extends(e,t),e}(o.Views.CompositeView);e.ReceiptLayoutCollectionView=w;var k=function(t){function e(e){this.template=c.getOuterHTML("#ReceiptContainer"),t.call(this,e)}return __extends(e,t),e}(o.Views.ItemView);e.ReceiptLayoutItemView=k});