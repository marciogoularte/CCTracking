var __extends=this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n};define(["require","exports","backbone"],function(e,t){!function(e){var t=function(e){function t(){e.apply(this,arguments)}return __extends(t,e),t.prototype["default"]=function(){return{id:"",UcId:"",name:"",isActive:"",createdBy:"",createdDate:"",modifiedBy:"",modifiedDate:""}},t}(Backbone.Model);e.LandmarkDto=t;var n=function(e){function n(n){this.model=t,e.call(this,n)}return __extends(n,e),n}(Backbone.Collection);e.LandmarkCollection=n}(t.Models||(t.Models={}));t.Models});