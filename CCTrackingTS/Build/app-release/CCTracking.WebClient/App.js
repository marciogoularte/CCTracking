var __extends=this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);r.prototype=t.prototype,e.prototype=new r};define(["require","exports","./ModalHelper","marionette","datatablesBootstrap"],function(e,t,n){var r=e("datatablesBootstrap"),i=function(t){function n(){t.call(this);if(n._instance)throw new Error("Error: Creating Application object.");n._instance=this,this.on("initialize:after",this.initializeAfter),this.addRegions({ContainerRegion:"#ContainerRegion",ModalRegion:"#ModalPopup",ModalAlertRegion:"#ModalAlertPopup"});var e=Marionette.Layout.extend({template:"#AppLayout",regions:{LoginRegion:"#LoginRegion",HeaderRegion:"#HeaderRegion",LeftRegion:"#LeftRegion",AdminLeftRegion:"#AdminLeftRegion",RightRegion:"#RightRegion",MainRegion:"#MainRegion",DetailRegion:"#DetailRegion",SubRegion:"#SubRegion",BusAvailabilityRegion:"#BusAvailabilityRegion"}});this.AppLayout=new e,this.LoginRegion=this.AppLayout.LoginRegion,this.HeaderRegion=this.AppLayout.HeaderRegion,this.LeftRegion=this.AppLayout.LeftRegion,this.AdminLeftRegion=this.AppLayout.AdminLeftRegion,this.RightRegion=this.AppLayout.RightRegion,this.MainRegion=this.AppLayout.MainRegion,this.DetailRegion=this.AppLayout.DetailRegion,this.SubRegion=this.AppLayout.SubRegion,this.BusAvailabilityRegion=this.AppLayout.BusAvailabilityRegion,Backbone.history&&Backbone.history.start()}return __extends(n,t),n.prototype.initializeAfter=function(){this.ContainerRegion.reset();var e=this.AppLayout;this.ContainerRegion.show(e),this.initalizeLocalStorage()},n.prototype.applyRouting=function(t,r){var i=Backbone.Router.extend({routes:{user:"goUser",viewUser:"goViewUser",bus:"goBus",addBooking:"goAddBooking",editBooking:"goEditBooking",viewHome:"goViewHome",viewBooking:"goViewBooking",editPayment:"goPayment",alkhidmatCentre:"goStation",viewAlkhidmatCentre:"goViewStation",editRefund:"goCancel",busVisit:"gobusVisit",editBusVisit:"goEditBusVisit",viewBusVisit:"goViewBusVisit",busMilageReport:"goBusMilageReport",adminBus:"goAdminBus",viewAdminBus:"goViewAdminBus",searchBooking:"goSearchBooking",adminSearchBooking:"goAdminSearchBooking",driver:"goDriver",viewDriver:"goViewDriver",graveyard:"goGraveyard",viewGraveyard:"goViewGraveyard",town:"goTown",viewTown:"goViewTown",unionCouncil:"goUnionCouncil",viewUnionCouncil:"goViewUnionCouncil",landmark:"goLandmark",viewLandmark:"goViewLandmark",paymentType:"goPaymentType",viewPaymentType:"goViewPaymentType",refundType:"goRefundType",viewRefundType:"goViewRefundType",visitType:"goVisitType",viewVisitType:"goViewVisitType",causeOfDeath:"goCauseOfDeath",viewCauseOfDeath:"goViewCauseOfDeath",viewTest:"goViewTest",trackingDevice:"goTrackingDevice",viewTrackingDevice:"goViewTrackingDevice",nearestCentreSetup:"goNearestCentreSetup",viewNearestCentreSetup:"goViewNearestCentreSetup",driverSummary:"goDriverSummary",busVisitSummary:"goBusVisitSummary",busVisitMilageSummary:"goBusVisitMilageSummary",driverDetail:"",busVisitDetail:"",busVisitMilageDetail:"",changePassword:"goChangePassword",editExtraCharge:"goExtraCharge",auditBooking:"goAuditBooking",auditBusVisit:"goAuditBusVisit",auditPayment:"goAuditPayment",auditRefundBooking:"goAuditRefundBooking",busCentreReport:"goBusCentreReport",busFuelingReport:"goBusFuelingReport",login:"defaultRoute",logout:"goLogout","*other":"defaultRoute"},goUser:function(){e(["./User/UserCtrl"],function(e){(new e.UserCtrl).Show()})},goViewUser:function(){e(["./User/UserCtrl"],function(e){(new e.UserCtrl).GetAll()})},goBus:function(){e(["./Bus/BusCtrl"],function(e){(new e.BusCtrl).Show()})},goAddBooking:function(){e(["./Booking/BookingCtrl"],function(e){(new e.BookingCtrl).Show()})},goEditBooking:function(){},goViewHome:function(){e(["./Home/HomeCtrl"],function(e){(new e.HomeCtrl).Show()})},goViewBooking:function(){e(["./Booking/BookingCtrl"],function(e){(new e.BookingCtrl).GetAll(1)})},goPayment:function(){},goStation:function(){e(["./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl"],function(e){(new e.StationCtrl).Show()})},goViewStation:function(){e(["./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl"],function(e){(new e.StationCtrl).GetAll()})},goCancel:function(){},goViewBusVisit:function(){e(["./Bus/BusVisit/BusVisitCtrl"],function(e){(new e.BusVisitCtrl).SimpleLoad()})},gobusVisit:function(){e(["./Bus/BusVisit/BusVisitCtrl"],function(e){(new e.BusVisitCtrl).Load()})},goEditBusVisit:function(){},goAdminBus:function(){e(["./Admin/Bus/BusCtrl"],function(e){(new e.BusCtrl).Show()})},goViewAdminBus:function(){e(["./Admin/Bus/BusCtrl"],function(e){(new e.BusCtrl).GetAll()})},goSearchBooking:function(){e(["./Search/SearchCtrl"],function(e){(new e.SearchCtrl).Show()})},goAdminSearchBooking:function(){e(["./Admin/AdminSearchBooking/AdminSearchBookingCtrl"],function(e){(new e.AdminSearchBookingCtrl).Show()})},goDriver:function(){e(["./Admin/Driver/DriverCtrl"],function(e){(new e.DriverCtrl).Show()})},goViewDriver:function(){e(["./Admin/Driver/DriverCtrl"],function(e){(new e.DriverCtrl).GetAll()})},goGraveyard:function(){e(["./Admin/Graveyard/GraveyardCtrl"],function(e){(new e.GraveyardCtrl).Show()})},goViewGraveyard:function(){e(["./Admin/Graveyard/GraveyardCtrl"],function(e){(new e.GraveyardCtrl).GetAll()})},goTown:function(){e(["./Admin/Town/TownCtrl"],function(e){(new e.TownCtrl).Show()})},goViewTown:function(){e(["./Admin/Town/TownCtrl"],function(e){(new e.TownCtrl).GetAll()})},goUnionCouncil:function(){e(["./Admin/UnionCouncil/UnionCouncilCtrl"],function(e){(new e.UnionCouncilCtrl).Show()})},goViewUnionCouncil:function(){e(["./Admin/UnionCouncil/UnionCouncilCtrl"],function(e){(new e.UnionCouncilCtrl).GetAll()})},goLandmark:function(){e(["./Admin/Landmark/LandmarkCtrl"],function(e){(new e.LandmarkCtrl).Show()})},goViewLandmark:function(){e(["./Admin/Landmark/LandmarkCtrl"],function(e){(new e.LandmarkCtrl).GetAll()})},goPaymentType:function(){e(["./Admin/PaymentType/PaymentTypeCtrl"],function(e){(new e.PaymentTypeCtrl).Show()})},goViewPaymentType:function(){e(["./Admin/PaymentType/PaymentTypeCtrl"],function(e){(new e.PaymentTypeCtrl).GetAll()})},goRefundType:function(){e(["./Admin/RefundType/RefundTypeCtrl"],function(e){(new e.RefundTypeCtrl).Show()})},goViewRefundType:function(){e(["./Admin/RefundType/RefundTypeCtrl"],function(e){(new e.RefundTypeCtrl).GetAll()})},goVisitType:function(){e(["./Admin/VisitType/VisitTypeCtrl"],function(e){(new e.VisitTypeCtrl).Show()})},goViewVisitType:function(){e(["./Admin/VisitType/VisitTypeCtrl"],function(e){(new e.VisitTypeCtrl).GetAll()})},goCauseOfDeath:function(){e(["./Admin/CauseOfDeath/CauseOfDeathCtrl"],function(e){(new e.CauseOfDeathCtrl).Show()})},goViewCauseOfDeath:function(){e(["./Admin/CauseOfDeath/CauseOfDeathCtrl"],function(e){(new e.CauseOfDeathCtrl).GetAll()})},goViewTest:function(){},goTrackingDevice:function(){e(["./Admin/TrackingDevice/TrackingDeviceCtrl"],function(e){(new e.TrackingDeviceCtrl).Show()})},goViewTrackingDevice:function(){e(["./Admin/TrackingDevice/TrackingDeviceCtrl"],function(e){(new e.TrackingDeviceCtrl).GetAll()})},goNearestCentreSetup:function(){e(["./Admin/NearestCentreSetup/NearestCentreSetupCtrl"],function(e){(new e.NearestCentreSetupCtrl).Show()})},goViewNearestCentreSetup:function(){e(["./Admin/NearestCentreSetup/NearestCentreSetupCtrl"],function(e){(new e.NearestCentreSetupCtrl).GetAll()})},goChangePassword:function(){e(["./ChangePassword/ChangePasswordCtrl"],function(e){(new e.ChangePasswordCtrl).Load()})},goExtraCharge:function(){},goDriverSummary:function(){e(["./Admin/Reports/Driver/DriverSummaryCtrl"],function(e){(new e.DriverSummaryCtrl).Show()})},goBusVisitSummary:function(){e(["./Admin/Reports/BusVisit/BusVisitSummaryCtrl"],function(e){(new e.BusVisitSummaryCtrl).ShowVisit()})},goBusVisitMilageSummary:function(){e(["./Admin/Reports/BusVisit/BusVisitSummaryCtrl"],function(e){(new e.BusVisitSummaryCtrl).ShowMilage()})},goAuditBooking:function(){e(["./Admin/Reports/Audit/Booking/AuditBookingCtrl"],function(e){(new e.AuditBookingCtrl).Show()})},goAuditBusVisit:function(){e(["./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl"],function(e){(new e.AuditBusVisitCtrl).Show()})},goAuditPayment:function(){e(["./Admin/Reports/Audit/Payment/AuditPaymentCtrl"],function(e){(new e.AuditPaymentCtrl).Show()})},goAuditRefundBooking:function(){e(["./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl"],function(e){(new e.AuditRefundBookingCtrl).Show()})},goBusCentreReport:function(){e(["./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl"],function(e){(new e.BusCentreReportCtrl).Show()})},goBusMilageReport:function(){e(["./Admin/Reports/Bus/BusMilage/BusMilageCtrl"],function(e){(new e.BusMilageCtrl).Show()})},goBusFuelingReport:function(){e(["./Admin/Reports/BusFueling/BusFuelingReportCtrl"],function(e){(new e.BusFuelingReportCtrl).Show()})},goLogout:function(){var e=n.getInstance();e.vent.trigger("Event-BackToLogin",!1)},defaultRoute:function(){t.ContainerRegion.reset(),t.ContainerRegion.show(r),e(["./Login/LoginCtrl"],function(e){(new e.LoginCtrl).Load()})}});this.AppRoutes=new i},n.prototype.applyRoutingForOperator=function(t,r){var i=Backbone.Router.extend({routes:{addBooking:"goAddBooking",editBooking:"goEditBooking",viewBooking:"goViewBooking",editPayment:"goPayment",alkhidmatCentre:"goStation",editRefund:"goCancel",busVisit:"gobusVisit",editBusVisit:"goEditBusVisit",viewBusVisit:"goViewBusVisit",searchBooking:"goSearchBooking",changePassword:"goChangePassword",editExtraCharge:"goExtraCharge",login:"defaultRoute",logout:"goLogout","*other":"defaultRoute"},goUser:function(){e(["./User/UserCtrl"],function(e){(new e.UserCtrl).Show()})},goViewUser:function(){e(["./User/UserCtrl"],function(e){(new e.UserCtrl).GetAll()})},goBus:function(){e(["./Bus/BusCtrl"],function(e){(new e.BusCtrl).Show()})},goAddBooking:function(){e(["./Booking/BookingCtrl"],function(e){(new e.BookingCtrl).Show()})},goEditBooking:function(){},goViewHome:function(){e(["./Home/HomeCtrl"],function(e){(new e.HomeCtrl).Show()})},goViewBooking:function(){e(["./Booking/BookingCtrl"],function(e){(new e.BookingCtrl).GetAll(1)})},goPayment:function(){},goStation:function(){e(["./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl"],function(e){(new e.StationCtrl).Show()})},goViewStation:function(){e(["./Admin/AlkhidmatCentre/AlkhidmatCentreCtrl"],function(e){(new e.StationCtrl).GetAll()})},goCancel:function(){},goViewBusVisit:function(){e(["./Bus/BusVisit/BusVisitCtrl"],function(e){(new e.BusVisitCtrl).SimpleLoad()})},gobusVisit:function(){e(["./Bus/BusVisit/BusVisitCtrl"],function(e){(new e.BusVisitCtrl).Load()})},goEditBusVisit:function(){},goAdminBus:function(){e(["./Admin/Bus/BusCtrl"],function(e){(new e.BusCtrl).Show()})},goViewAdminBus:function(){e(["./Admin/Bus/BusCtrl"],function(e){(new e.BusCtrl).GetAll()})},goSearchBooking:function(){e(["./Search/SearchCtrl"],function(e){(new e.SearchCtrl).Show()})},goAdminSearchBooking:function(){e(["./Admin/AdminSearchBooking/AdminSearchBookingCtrl"],function(e){(new e.AdminSearchBookingCtrl).Show()})},goDriver:function(){e(["./Admin/Driver/DriverCtrl"],function(e){(new e.DriverCtrl).Show()})},goViewDriver:function(){e(["./Admin/Driver/DriverCtrl"],function(e){(new e.DriverCtrl).GetAll()})},goGraveyard:function(){e(["./Admin/Graveyard/GraveyardCtrl"],function(e){(new e.GraveyardCtrl).Show()})},goViewGraveyard:function(){e(["./Admin/Graveyard/GraveyardCtrl"],function(e){(new e.GraveyardCtrl).GetAll()})},goTown:function(){e(["./Admin/Town/TownCtrl"],function(e){(new e.TownCtrl).Show()})},goViewTown:function(){e(["./Admin/Town/TownCtrl"],function(e){(new e.TownCtrl).GetAll()})},goUnionCouncil:function(){e(["./Admin/UnionCouncil/UnionCouncilCtrl"],function(e){(new e.UnionCouncilCtrl).Show()})},goViewUnionCouncil:function(){e(["./Admin/UnionCouncil/UnionCouncilCtrl"],function(e){(new e.UnionCouncilCtrl).GetAll()})},goLandmark:function(){e(["./Admin/Landmark/LandmarkCtrl"],function(e){(new e.LandmarkCtrl).Show()})},goViewLandmark:function(){e(["./Admin/Landmark/LandmarkCtrl"],function(e){(new e.LandmarkCtrl).GetAll()})},goPaymentType:function(){e(["./Admin/PaymentType/PaymentTypeCtrl"],function(e){(new e.PaymentTypeCtrl).Show()})},goViewPaymentType:function(){e(["./Admin/PaymentType/PaymentTypeCtrl"],function(e){(new e.PaymentTypeCtrl).GetAll()})},goRefundType:function(){e(["./Admin/RefundType/RefundTypeCtrl"],function(e){(new e.RefundTypeCtrl).Show()})},goViewRefundType:function(){e(["./Admin/RefundType/RefundTypeCtrl"],function(e){(new e.RefundTypeCtrl).GetAll()})},goVisitType:function(){e(["./Admin/VisitType/VisitTypeCtrl"],function(e){(new e.VisitTypeCtrl).Show()})},goViewVisitType:function(){e(["./Admin/VisitType/VisitTypeCtrl"],function(e){(new e.VisitTypeCtrl).GetAll()})},goCauseOfDeath:function(){e(["./Admin/CauseOfDeath/CauseOfDeathCtrl"],function(e){(new e.CauseOfDeathCtrl).Show()})},goViewCauseOfDeath:function(){e(["./Admin/CauseOfDeath/CauseOfDeathCtrl"],function(e){(new e.CauseOfDeathCtrl).GetAll()})},goViewTest:function(){},goTrackingDevice:function(){e(["./Admin/TrackingDevice/TrackingDeviceCtrl"],function(e){(new e.TrackingDeviceCtrl).Show()})},goViewTrackingDevice:function(){e(["./Admin/TrackingDevice/TrackingDeviceCtrl"],function(e){(new e.TrackingDeviceCtrl).GetAll()})},goNearestCentreSetup:function(){e(["./Admin/NearestCentreSetup/NearestCentreSetupCtrl"],function(e){(new e.NearestCentreSetupCtrl).Show()})},goViewNearestCentreSetup:function(){e(["./Admin/NearestCentreSetup/NearestCentreSetupCtrl"],function(e){(new e.NearestCentreSetupCtrl).GetAll()})},goChangePassword:function(){e(["./ChangePassword/ChangePasswordCtrl"],function(e){(new e.ChangePasswordCtrl).Load()})},goExtraCharge:function(){},goDriverSummary:function(){e(["./Admin/Reports/Driver/DriverSummaryCtrl"],function(e){(new e.DriverSummaryCtrl).Show()})},goBusVisitSummary:function(){e(["./Admin/Reports/BusVisit/BusVisitSummaryCtrl"],function(e){(new e.BusVisitSummaryCtrl).ShowVisit()})},goBusVisitMilageSummary:function(){e(["./Admin/Reports/BusVisit/BusVisitSummaryCtrl"],function(e){(new e.BusVisitSummaryCtrl).ShowMilage()})},goAuditBooking:function(){e(["./Admin/Reports/Audit/Booking/AuditBookingCtrl"],function(e){(new e.AuditBookingCtrl).Show()})},goAuditBusVisit:function(){e(["./Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl"],function(e){(new e.AuditBusVisitCtrl).Show()})},goAuditPayment:function(){e(["./Admin/Reports/Audit/Payment/AuditPaymentCtrl"],function(e){(new e.AuditPaymentCtrl).Show()})},goAuditRefundBooking:function(){e(["./Admin/Reports/Audit/Refund/AuditRefundBookingCtrl"],function(e){(new e.AuditRefundBookingCtrl).Show()})},goBusCentreReport:function(){e(["./Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl"],function(e){(new e.BusCentreReportCtrl).Show()})},goBusMilageReport:function(){e(["./Admin/Reports/Bus/BusMilage/BusMilageCtrl"],function(e){(new e.BusMilageCtrl).Show()})},goBusFuelingReport:function(){e(["./Admin/Reports/BusFueling/BusFuelingReportCtrl"],function(e){(new e.BusFuelingReportCtrl).Show()})},goLogout:function(){var e=n.getInstance();e.vent.trigger("Event-BackToLogin",!1)},defaultRoute:function(){t.ContainerRegion.reset(),t.ContainerRegion.show(r),e(["./Login/LoginCtrl"],function(e){(new e.LoginCtrl).Load()})}});this.AppRoutes=new i},n.prototype.goViewBooking=function(){e(["./Booking/BookingCtrl"],function(e){(new e.BookingCtrl).GetAll(1)}),this.AppRoutes.navigate("viewBooking")},n.prototype.initalizeLocalStorage=function(){var t=$.Deferred();localStorage.getItem("lookupResponse")==null||localStorage.getItem("lookupResponse")=="undefined"?e(["./DAL/Lookup"],function(n){return t=n.Load(),t.done(function(t){localStorage.setItem("lookupResponse",JSON.stringify(t)),e(["./Login/LoginCtrl"],function(e){(new e.LoginCtrl).Load()})}),t}):e(["./Login/LoginCtrl"],function(e){(new e.LoginCtrl).Load()})},n.prototype.initalizeLocalStorage1=function(){localStorage.getItem("lookupResponse")!=null&&localStorage.removeItem("lookupResponse"),e(["./DAL/Lookup"],function(e){var t=e.Load();t.done(function(e){localStorage.setItem("lookupResponse",JSON.stringify(e))})})},n.getInstance=function(){return n._instance===null&&(n._instance=new n),n._instance},n._instance=null,n}(Marionette.Application);t.Application=i,$(function(){var e=i.getInstance();e.start();var t=new n.ModalRegion({el:"#ModalPopup"}),r=new n.ModalRegion({el:"#ModalAlertPopup"});e.ModalRegion=t,e.ModalAlertRegion=r})});