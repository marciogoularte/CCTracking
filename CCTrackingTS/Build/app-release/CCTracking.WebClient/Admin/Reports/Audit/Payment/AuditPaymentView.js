var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../../../Helper","marionette","jquery","jqueryUI","knockout","text!./AuditPayment.html"],function(e,t,n){var r=e("underscore"),i=e("text!./AuditPayment.html"),s,o=function(e){function t(t){t.itemView=u,t.template=i.getOuterHTML("#gridTemplate"),t.itemViewContainer="#tblAuditPayment tbody",this.events={"click .jsSearchAuditPayment":"Search","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.Search=function(e){e.preventDefault(),this.trigger("Event:AuditPayment",{fromDate:this.model.get("fromDate"),toDate:this.model.get("toDate")})},t.prototype.Cancel=function(e){e.preventDefault(),this.model.set("fromDate",""),this.model.set("toDate","")},t}(n.Views.CompositeView);t.AuditPaymentCollectionView=o;var u=function(e){function t(t){t||(t={}),t.template=i.getOuterHTML("#rowTemplate"),t.tagName="tr",t.model.get("rowCounter")%2==0?t.className="info":t.className="warning",e.call(this,t)}return __extends(t,e),t.prototype.ShowDetail=function(e){},t}(n.Views.ItemView);t.AuditPaymentItemView=u});