var __extends=this.__extends||function(e,o){function t(){this.constructor=e}for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n]);t.prototype=o.prototype,e.prototype=new t};define(["require","exports","../../App","../../Helper","./TownView","../../Dtos/TownDto","../../DAL/Town","marionette","jquery","knockout","text!./TownTmpl.html"],function(e,o,t,n,i,w,l){var s=(e("underscore"),e("knockout")),c=e("knockback"),r=function(e){function o(){e.call(this),this.app=t.Application.getInstance(),this.backboneModel=new w.Models.TownDto,this.townViewModel=new i.TownViewModel(this.backboneModel,this),this.townView=new i.TownView({viewModel:this.townViewModel}),this.collection=new w.Models.TownCollection({}),this.collectionView=new i.TownCollectionView({collection:this.collection})}return __extends(o,e),o.prototype.Show=function(){var e=this,o=window.location.href;if(o.indexOf("id=")>-1){var t=o.substring(o.indexOf("id=")+3,o.length),n=l.GetById(t);n.done(function(o){return e.GetByIdCompleted(o)})}else this.Load()},o.prototype.Load=function(){var e=this,o=this.backboneModel;this.townViewModel.bbModel=o,this.townViewModel.model=c.viewModel(o),o.set("name",""),o.set("isActive",""),this.townViewModel=new i.TownViewModel(o,this),this.townView=new i.TownView({viewModel:this.townViewModel}),this.townView.on("SaveTown",function(){return e.Save(e.townViewModel.bbModel)}),this.townView.on("CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.townView)},o.prototype.GetAll=function(){var e=this,o=l.GetAll();o.done(function(o){return e.GetAllCompleted(o)})},o.prototype.GetByIdCompleted=function(e){var o=this;this.backboneModel=new Backbone.Model(e.townModel);var t=this.backboneModel;this.UIBinding(t),this.townView=new i.TownView({viewModel:this.townViewModel}),this.townView.on("SaveTown",function(){return o.Save(o.townViewModel.bbModel)}),this.townView.on("CancelForm",function(){return o.Cancel()}),this.app.MainRegion.show(this.townView)},o.prototype.Save=function(e){var o=this,t=this.app.request("AppGlobalSetting");e.set("modifiedBy",t.get("Id")),e.set("isActive","1"==e.get("isActive")?!0:!1);var n=l.Save(e);n.done(function(e){return o.SaveCompleted(e)})},o.prototype.GetAllCompleted=function(e){var o=this;this.collection.reset(e.townList),this.collectionView=new i.TownCollectionView({collection:this.collection}),this.collectionView.on("itemview:ShowDetail",function(e){return o.GetByIdCompleted(e.model)}),this.app.MainRegion.show(this.collectionView)},o.prototype.SaveCompleted=function(e){var o=new Backbone.Model(e);void 0!=o.get("errorMessage")&&""!=o.get("errorMessage").trim()?n.ShowModalPopup("danger","Town","Due to some technical reason Town have not been saved successfully!<br> Pelase try later"):(n.ShowModalPopup("success","Town","Record has been saved successfully with Town ID : "+e.id),this.Cancel())},o.prototype.Cancel=function(){window.location.href="#viewTown"},o.prototype.UIBinding=function(e){e.set("isActive",e.get("isActive")?"1":"0"),this.townViewModel.bbModel=e,this.townViewModel.model=c.viewModel(e),s.cleanNode($(this.townView.el)[0]),s.applyBindings(this.townViewModel,this.townView.el)},o}(n.Controller);o.TownCtrl=r});