var __extends=this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n};define(["require","exports","../Helper","marionette","jquery","jqueryUI","knockout","text!./SearchTmpl.html"],function(e,t,n){var o=(e("underscore"),e("text!./SearchTmpl.html")),r=function(e){function t(t,n){e.call(this,t,n)}return __extends(t,e),t}(n.ViewModel);t.SearchViewModel=r;var i=function(e){function t(t){t.itemView=a,t.template=o.getOuterHTML("#gridTemplate"),t.itemViewContainer="#tblSearch tbody",e.call(this,t)}return __extends(t,e),t.prototype.onShow=function(){this.dataTable=this.$el.find("#tblSearch").dataTable({autoWidth:!1,info:!0,processing:!0,lengthMenu:[[10,25,50,-1],[10,25,50,"All"]],language:{paginate:{next:"Next",previous:"Prev"},emptyTable:"",infoEmpty:"",zeroRecords:"No record found!"},pageLength:n.GetPageSize()})},t}(n.Views.CompositeView);t.SearchCollectionView=i;var a=function(t){function n(e){e||(e={}),e.template=o.getOuterHTML("#rowTemplate"),e.tagName="tr",e.className="jsRowClick",e.events={"click .jsShowDetail":"ShowDetail"},t.call(this,e)}return __extends(n,t),n.prototype.ShowDetail=function(){var t=this;window.location.href="#editBooking",e(["../Booking/BookingCtrl"],function(e){(new e.BookingCtrl).EditBooking(t.model.get("id"))})},n}(n.Views.ItemView);t.SearchItemView=a;var c=function(e){function t(t){this.template=o.getOuterHTML("#SearchFromLayout"),this.regions={SearchRegion:{selector:".rgnSearch"},ContentRegion:{selector:".rgnContent"}},e.call(this,t)}return __extends(t,e),t}(Marionette.Layout);t.SearchFormLayoutView=c;var l=function(e){function t(t){this.template=o.getOuterHTML("#searchForm"),this.events={"click .jsSearch":"Search","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.Search=function(e){e.preventDefault(),this.trigger("SearchBooking")},t.prototype.Cancel=function(e){e.preventDefault(),this.trigger("CancelForm")},t}(n.Views.ItemView);t.SearchFormItemView=l});