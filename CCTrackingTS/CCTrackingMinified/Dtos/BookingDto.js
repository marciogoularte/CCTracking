var __extends=this.__extends||function(e,n){function t(){this.constructor=e}for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a]);t.prototype=n.prototype,e.prototype=new t};define(["require","exports","jquery","backbone"],function(e,n){!function(e){var n=function(e){function n(){e.apply(this,arguments)}return __extends(n,e),n.prototype["default"]=function(){return{id:"",contactName:"",contactMobile:"",contactNic:"",deseasedName:"",deseasedAge:"",deseasedGender:"",causeOfDeath:"",causeOfDeathSelected:"",address:"",alkhidmatCentreId:"",busPoint:"",unionCouncil:"",town:"",pickupDate:"",pickupTime:"",returnTime:"",graveyard:"",namazEJanazaHeldIn:"",namazEJanazaLocation:"",masjidName:"",otherDetail:"",isReferralBooking:"",referralName:"",referralDetail:""}},n}(Backbone.Model);e.BookingRequest=n;var t=function(e){function n(){e.apply(this,arguments)}return __extends(n,e),n.prototype["default"]=function(){return{id:"",contactName:"",contactMobile:"",contactNic:"",deseasedName:"",deseasedAge:"",deseasedGender:"",causeOfDeath:"",address:"",busPoint:"",landmarkId:"",unionCouncilId:"",townId:"",pickupDate:"",pickupTime:"",returnTime:"",graveyard:"",namazEJanazaHeldIn:"",namazEJanazaLocation:"",masjidName:"",otherDetail:"",isReferralBooking:"",referralName:"",referralDetail:""}},n}(Backbone.Model);e.BookingResponse=t;var a=function(e){function n(){e.apply(this,arguments)}return __extends(n,e),n.prototype["default"]=function(){return{id:"",bookingId:"",propertyName:"",oldValue:"",newValue:"",modifiedDate:"",createdDate:"",actualModifiedDate:"",userName:""}},n}(Backbone.Model);e.AuditBooking=a;var o=function(e){function n(n){this.model=t,e.call(this,n)}return __extends(n,e),n}(Backbone.Collection);e.BookingResponseCollection=o;var i=function(e){function n(n){this.model=a,e.call(this,n)}return __extends(n,e),n}(Backbone.Collection);e.AuditBookingResponseCollection=i}(n.Models||(n.Models={}));n.Models});