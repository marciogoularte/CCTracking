var __extends=this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);o.prototype=t.prototype,e.prototype=new o};define(["require","exports","../../../../Helper","marionette","jquery","jqueryUI","knockout","text!./AuditBooking.html"],function(e,t,o){var n=(e("underscore"),e("text!./AuditBooking.html")),i=function(e){function t(t){t.itemView=r,t.template=n.getOuterHTML("#gridTemplate"),t.itemViewContainer="#tblAuditBooking tbody",this.events={"click .jsSearchAuditBooking":"Search","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.Search=function(e){e.preventDefault(),this.trigger("Event:AuditBooking",{fromDate:this.model.get("fromDate"),toDate:this.model.get("toDate")})},t.prototype.Cancel=function(e){e.preventDefault(),this.model.set("fromDate",""),this.model.set("toDate","")},t.prototype.onShow=function(){this.dataTable=this.$el.find("#tblBooking").dataTable({autoWidth:!1,info:!0,processing:!0,lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],language:{paginate:{next:"Next",previous:"Prev"},emptyTable:"No record found!",infoEmpty:"No record found!",zeroRecords:"No record found!"},pageLength:o.GetPageSize()})},t}(o.Views.CompositeView);t.AuditBookingCollectionView=i;var r=function(e){function t(t){t||(t={}),t.template=n.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className=t.model.get("rowCounter")%2==0?"info":"warning",e.call(this,t)}return __extends(t,e),t.prototype.ShowDetail=function(){},t}(o.Views.ItemView);t.AuditBookingItemView=r});