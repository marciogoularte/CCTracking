var __extends=this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n};define(["require","exports","../../Helper","marionette","jquery","knockout","text!./LandmarkTmpl.html","text!./LandmarkGrid.html"],function(t,e,n){var i=(t("underscore"),t("text!./LandmarkTmpl.html")),r=t("text!./LandmarkGrid.html"),o=function(t){function e(e,n){t.call(this,e,n)}return __extends(e,t),e}(n.ViewModel);e.LandmarkViewModel=o;var a=function(t){function e(e){this.template=i,this.events={submit:"Save","click .jsCancel":"Cancel"},t.call(this,e)}return __extends(e,t),e.prototype.close=function(){},e.prototype.Cancel=function(){this.trigger("CancelForm")},e.prototype.TestFunction=function(){alert("test function")},e.prototype.Save=function(t){t.preventDefault(),this.trigger("SaveLandmark")},e}(n.Views.MvvmView);e.LandmarkView=a;var l=function(t){function e(e){e.itemView=c,e.template=r.getOuterHTML("#gridTemplate"),e.itemViewContainer="tbody",t.call(this,e)}return __extends(e,t),e}(n.Views.CompositeView);e.LandmarkCollectionView=l;var c=function(t){function e(e){e||(e={}),e.template=r.getOuterHTML("#rowTemplate"),e.tagName="tr",e.className="jsRowClick",e.events={"click .jsShowDetail":"ShowDetail"},t.call(this,e)}return __extends(e,t),e.prototype.ShowDetail=function(){this.trigger("ShowDetail")},e}(n.Views.ItemView);e.LandmarkItemView=c});