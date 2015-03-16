var __extends=this.__extends||function(e,t){function i(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);i.prototype=t.prototype,e.prototype=new i};define(["require","exports","../../App","../../Helper","./AlkhidmatCentreView","../../Dtos/AlkhidmatCentreDto","../../DAL/AlkhidmatCentre","marionette","jquery","knockout","text!./AlkhidmatCentreTmpl.html"],function(e,t,i,o,n,a,s){var l=e("underscore"),r=e("knockout"),d=e("knockback"),c=function(e){function t(){e.call(this),this.app=i.Application.getInstance(),this.backboneModel=new a.Models.StationDto,this.stationViewModel=new n.StationViewModel(this.backboneModel,this),this.stationView=new n.StationView({viewModel:this.stationViewModel}),this.collection=new a.Models.StationCollection({}),this.collectionView=new n.StationCollectionView({collection:this.collection})}return __extends(t,e),t.prototype.Show=function(){var e=this,t=window.location.href;if(t.indexOf("id=")>-1){var i=t.substring(t.indexOf("id=")+3,t.length),o=s.GetById(i);o.done(function(t){return e.GetByIdCompleted(t)})}else this.Load()},t.prototype.Load=function(){var e=this,t=JSON.parse(localStorage.getItem("lookupResponse")),i=this.backboneModel;this.stationViewModel.bbModel=i,this.stationViewModel.model=d.viewModel(i),i.set("name",""),i.set("address",""),i.set("landmarkIdSelected",""),i.set("landmarkList",t.landmark),i.set("contactNo1",""),i.set("contactNo2",""),i.set("isCoPartner",""),i.set("isActive",""),this.stationViewModel=new n.StationViewModel(i,this),this.stationView=new n.StationView({viewModel:this.stationViewModel}),this.stationView.on("SaveAlkhidmatCentre",function(){return e.Save(e.stationViewModel.bbModel)}),this.stationView.on("CancelForm",function(){return e.Cancel()}),this.app.MainRegion.show(this.stationView)},t.prototype.GetAll=function(){var e=this,t=s.GetAll();t.done(function(t){return e.GetAllCompleted(t)})},t.prototype.GetByIdCompleted=function(e){var t=this;this.backboneModel=new Backbone.Model(e.centreModel);var i=this.backboneModel;this.UIBinding(i),this.stationView=new n.StationView({viewModel:this.stationViewModel}),this.stationView.on("SaveAlkhidmatCentre",function(){return t.Save(t.stationViewModel.bbModel)}),this.stationView.on("CancelForm",function(){return t.Cancel()}),this.app.MainRegion.show(this.stationView)},t.prototype.Save=function(e){var t=this,i=this.app.request("AppGlobalSetting");e.set("modifiedBy",i.get("Id")),e.set("landmarkId",e.get("landmarkIdSelected").id),e.set("isActive","1"==e.get("isActive")?!0:!1),e.set("isCoPartner","1"==e.get("isCoPartner")?!0:!1);var o=s.Save(this.GetMinimalRequest(e));o.done(function(e){return t.SaveCompleted(e)})},t.prototype.GetMinimalRequest=function(e){var t=new a.Models.StationDto;return t.set("id",e.get("id")),t.set("name",e.get("name")),t.set("landmarkId",e.get("landmarkId")),t.set("address",e.get("address")),t.set("contactNo1",e.get("contactNo1")),t.set("contactNo2",e.get("contactNo2")),t.set("isCoPartner",e.get("isCoPartner")),t.set("isActive",e.get("isActive")),t.set("createdBy",e.get("createdBy")),t.set("createdDate",e.get("createdDate")),t.set("modifiedBy",e.get("modifiedBy")),t.set("modifiedDate",e.get("modifiedDate")),t},t.prototype.GetAllCompleted=function(e){var t=this;this.collection.reset(e.centreList),this.collectionView=new n.StationCollectionView({collection:this.collection}),this.collectionView.on("itemview:ShowDetail",function(e){return t.GetByIdCompleted(e.model)}),this.app.MainRegion.show(this.collectionView)},t.prototype.SaveCompleted=function(e){var t=new Backbone.Model(e);void 0!=t.get("errorMessage")&&""!=t.get("errorMessage").trim()?o.ShowModalPopup("danger","Alkhidmat Centre","Due to some technical reason Alkhidmat Centre have not been saved successfully!<br> Pelase try later"):(o.ShowModalPopup("success","Alkhidmat Centre","Record has been saved successfully with Alkhidmat Centre ID : "+e.id),this.Cancel())},t.prototype.Cancel=function(){window.location.href="#viewAlkhidmatCentre"},t.prototype.UIBinding=function(e){var t=JSON.parse(localStorage.getItem("lookupResponse"));e.set("landmarkList",t.landmark);var i=l.filter(t.landmark,function(t){return t.id==e.get("landmarkId")});e.set("landmarkIdSelected",i[0]),e.set("isActive",e.get("isActive")?"1":"0"),e.set("isCoPartner",e.get("isCoPartner")?"1":"0"),this.stationViewModel.bbModel=e,this.stationViewModel.model=d.viewModel(e),r.cleanNode($(this.stationView.el)[0]),r.applyBindings(this.stationViewModel,this.stationView.el)},t}(o.Controller);t.StationCtrl=c});