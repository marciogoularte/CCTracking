var __extends=this.__extends||function(e,t){function i(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);i.prototype=t.prototype,e.prototype=new i};define(["require","exports","../../Helper","marionette","jquery","knockout","text!./DriverTmpl.html","text!./DriverGrid.html"],function(e,t,i){var r=(e("underscore"),e("text!./DriverTmpl.html")),n=e("text!./DriverGrid.html"),o=function(e){function t(t,i){e.call(this,t,i)}return __extends(t,e),t}(i.ViewModel);t.DriverViewModel=o;var l=function(e){function t(t){this.template=r,this.events={submit:"Save","click .jsCancel":"Cancel"},e.call(this,t)}return __extends(t,e),t.prototype.close=function(){},t.prototype.Cancel=function(){this.trigger("CancelForm")},t.prototype.TestFunction=function(){alert("test function")},t.prototype.Save=function(e){e.preventDefault(),this.trigger("SaveDriver")},t}(i.Views.MvvmView);t.DriverView=l;var c=function(e){function t(t){t.itemView=s,t.template=n.getOuterHTML("#gridTemplate"),t.itemViewContainer="tbody",e.call(this,t)}return __extends(t,e),t}(i.Views.CompositeView);t.DriverCollectionView=c;var s=function(e){function t(t){t||(t={}),t.template=n.getOuterHTML("#rowTemplate"),t.tagName="tr",t.className="jsRowClick",t.events={"click .jsShowDetail":"ShowDetail"},e.call(this,t)}return __extends(t,e),t.prototype.ShowDetail=function(){this.trigger("ShowDetail")},t}(i.Views.ItemView);t.DriverItemView=s});