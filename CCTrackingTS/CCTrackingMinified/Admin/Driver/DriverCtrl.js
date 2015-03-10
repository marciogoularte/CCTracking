var __extends=this.__extends||function(e,t){function i(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);i.prototype=t.prototype,e.prototype=new i};define(["require","exports","../../App","../../Helper","./DriverView","../../Dtos/DriverDto","../../DAL/Driver","marionette","jquery","knockout","text!./DriverTmpl.html"],function(e,t,i,o,r,n,s){var d=e("underscore"),l=e("knockout"),a=e("knockback"),c=function(e){function t(){e.call(this),this.app=i.Application.getInstance(),this.backboneModel=new n.Models.DriverDto,this.driverViewModel=new r.DriverViewModel(this.backboneModel,this),this.driverView=new r.DriverView({viewModel:this.driverViewModel}),this.collection=new n.Models.DriverCollection({}),this.collectionView=new r.DriverCollectionView({collection:this.collection})}return __extends(t,e),t.prototype.Show=function(){var e=this,t=window.location.href;if(t.indexOf("id=")>-1){var i=t.substring(t.indexOf("id=")+3,t.length),o=s.GetById(i);o.done(function(t){return e.GetByIdCompleted(t)})}else this.Load()},t.prototype.Load=function(){var e=this,t=JSON.parse(localStorage.getItem("lookupResponse")),i=this.backboneModel;this.driverViewModel.bbModel=i,this.driverViewModel.model=a.viewModel(i),i.set("firstName",""),i.set("lastName",""),i.set("alkhidmatCentreList",t.alkhidmatCentre),i.set("alkhidmatCentreSelected",""),i.set("cnic",""),i.set("address",""),i.set("city",""),i.set("mobile",""),i.set("isActive",""),this.driverViewModel=new r.DriverViewModel(i,this),this.driverView=new r.DriverView({viewModel:this.driverViewModel}),this.driverView.on("SaveDriver",function(){return e.Save(e.driverViewModel.bbModel)}),this.driverView.on("CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.driverView)},t.prototype.GetAll=function(){var e=this,t=s.GetAll();t.done(function(t){return e.GetAllCompleted(t)})},t.prototype.GetByIdCompleted=function(e){var t=this;this.backboneModel=new Backbone.Model(e.driverModel);var i=this.backboneModel;this.UIBinding(i),this.driverView=new r.DriverView({viewModel:this.driverViewModel}),this.driverView.on("SaveDriver",function(){return t.Save(t.driverViewModel.bbModel)}),this.driverView.on("CancelForm",function(){return t.Cancel()}),this.app.MainRegion.show(this.driverView)},t.prototype.Save=function(e){var t=this,i=this.app.request("AppGlobalSetting");e.set("modifiedBy",i.get("Id")),e.set("centreId",e.get("alkhidmatCentreSelected").id),e.set("isActive","1"==e.get("isActive")?!0:!1);var o=s.Save(this.GetMinimalRequest(e));o.done(function(e){return t.SaveCompleted(e)})},t.prototype.GetMinimalRequest=function(e){var t=new n.Models.DriverDto;return t.set("id",e.get("id")),t.set("stationId",e.get("stationId")),t.set("firstName",e.get("firstName")),t.set("lastName",e.get("lastName")),t.set("cnic",e.get("cnic")),t.set("mobile",e.get("mobile")),t.set("address",e.get("address")),t.set("city",e.get("city")),t.set("isActive",e.get("isActive")),t.set("createdBy",e.get("createdBy")),t.set("createdDate",e.get("createdDate")),t.set("modifiedBy",e.get("modifiedBy")),t.set("modifiedDate",e.get("modifiedDate")),t},t.prototype.GetAllCompleted=function(e){var t=this;this.collection.reset(e.driverList),this.collectionView=new r.DriverCollectionView({collection:this.collection}),this.collectionView.on("itemview:ShowDetail",function(e){return t.GetByIdCompleted(e.model)}),this.app.MainRegion.show(this.collectionView)},t.prototype.SaveCompleted=function(e){var t=new Backbone.Model(e);void 0!=t.get("errorMessage")&&""!=t.get("errorMessage").trim()?o.ShowModalPopup("danger","Driver","Due to some technical reason Driver have not been saved successfully!<br> Pelase try later"):(o.ShowModalPopup("success","Driver","Record has been saved successfully with Driver ID : "+e.id),this.Cancel())},t.prototype.Cancel=function(){window.location.href="#viewDriver"},t.prototype.UIBinding=function(e){var t=JSON.parse(localStorage.getItem("lookupResponse"));e.set("alkhidmatCentreList",t.alkhidmatCentre);var i=d.filter(t.alkhidmatCentre,function(t){return t.id==e.get("centreId")});e.set("alkhidmatCentreSelected",i[0]),e.set("isActive",e.get("isActive")?"1":"0"),this.driverViewModel.bbModel=e,this.driverViewModel.model=a.viewModel(e),l.cleanNode($(this.driverView.el)[0]),l.applyBindings(this.driverViewModel,this.driverView.el)},t}(o.Controller);t.DriverCtrl=c});