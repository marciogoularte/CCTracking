var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","../../Helper","marionette","jquery","knockout","text!./TrackingDeviceTmpl.html","text!./TrackingDeviceGrid.html"],function(e,t,n){var r=e("underscore"),i=e("text!./TrackingDeviceTmpl.html"),s=e("text!./TrackingDeviceGrid.html"),o,u=function(e){function t(t,n){e.call(this,t,n)}return __extends(t,e),t}(n.ViewModel);t.TrackingDeviceViewModel=u;var a=function(e){function t(t){this.template=i,this.events={submit:"Save","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.close=function(){},t.prototype.Cancel=function(){this.trigger("CancelForm")},t.prototype.TestFunction=function(){alert("test function")},t.prototype.Save=function(e){e.preventDefault(),this.trigger("SaveTrackingDevice")},t}(n.Views.MvvmView);t.TrackingDeviceView=a;var f=function(e){function t(t){t.itemView=l,t.template=s.getOuterHTML("#gridTemplate"),t.itemViewContainer="tbody",e.call(this,t)}return __extends(t,e),t}(n.Views.CompositeView);t.TrackingDeviceCollectionView=f;var l=function(e){function t(t){t||(t={}),t.template=s.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className="jsRowClick",t.events={"click .jsShowDetail":"ShowDetail"},e.call(this,t)}return __extends(t,e),t.prototype.ShowDetail=function(){this.trigger("ShowDetail")},t}(n.Views.ItemView);t.TrackingDeviceItemView=l});