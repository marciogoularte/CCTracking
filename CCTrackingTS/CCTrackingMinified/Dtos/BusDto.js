var __extends=this.__extends||function(e,t){function o(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);o.prototype=t.prototype,e.prototype=new o};define(["require","exports","backbone"],function(e,t){!function(e){var t=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype["default"]=function(){return{id:"",stationId:"",trackingDeviceId:"",vehicleNo:"",alkhidmatBusNo:"",no:"",modelNo:"",description:"",initialReading:"",isActive:"",createdBy:"",createdDate:"",modifiedBy:"",modifiedDate:""}},t}(Backbone.Model);e.BusDto=t;var o=function(e){function o(o){this.model=t,e.call(this,o)}return __extends(o,e),o}(Backbone.Collection);e.BusCollection=o}(t.Models||(t.Models={}));t.Models});