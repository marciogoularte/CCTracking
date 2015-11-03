//confiugration-1 single file for 3rd parties
//({
    
//    baseUrl: "./",
//    mainConfigFile: "CCTracking.WebClient/Main.js",
//    name: "CCTracking.WebClient/Main",
//    out: "Build/app.min.js",
//    preserveLicenseComments: false,
//    //optimize: "none",
//    wrapShim: true,
//    paths: {
//        requireLib: "Scripts/require"
//    },
//    include: "requireLib"

//})


//confiugration-2 multiple modules

({

    baseUrl: "./",
    mainConfigFile: "CCTracking.WebClient/Main.js",
    //name: "CCTracking.WebClient/Main",
    dir: "Build/app-release",
    preserveLicenseComments: false,
    //optimize: "none",
    wrapShim: true,
    //paths: {
    //    requireLib: "Scripts/require"
    //},
    //include: "requireLib"
    modules: [
        {
            name: "CCTracking.WebClient/Main",
            include: [
                "Scripts/require",
                //"Scripts/HighCharts/highcharts",
                //"Scripts/HighCharts/highcharts-3d",
                //"Scripts/HighCharts/exporting",
                "CCTracking.WebClient/App",
                "CCTracking.WebClient/Helper",
                "CCTracking.WebClient/Login/LoginCtrl"
            ]
            
        },
        {
            name: "CCTracking.WebClient/appMain",
            include: [
                "CCTracking.WebClient/Home/HomeCtrl",
                "CCTracking.WebClient/Booking/BookingCtrl",
                "CCTracking.WebClient/Common/Views/HeaderView",
                "CCTracking.WebClient/Bus/BusAvailabilityCtrl",
                "CCTracking.WebClient/DAL/AdminSearch",
                "CCTracking.WebClient/Booking/BookingLeft/BookingLeftCtrl",
                "CCTracking.WebClient/Bus/BusVisit/BusVisitCtrl",
                "CCTracking.WebClient/Search/SearchCtrl",
                "CCTracking.WebClient/Payment/PaymentCtrl",
                "CCTracking.WebClient/RefundBooking/RefundBookingCtrl",
                "CCTracking.WebClient/ExtraCharge/ExtraChargeCtrl",
                "CCTracking.WebClient/User/UserCtrl",
                "CCTracking.WebClient/ChangePassword/ChangePasswordCtrl",

            ],
            exclude: [
                "CCTracking.WebClient/Main"
            ]

        },
        {
            name: "CCTracking.WebClient/appAdmin",
            include: [
              "CCTracking.WebClient/Admin/AlkhidmatCentre/AlkhidmatCentreCtrl",
              "CCTracking.WebClient/Admin/Bus/BusCtrl",
              "CCTracking.WebClient/Admin/CauseOfDeath/CauseOfDeathCtrl",
              "CCTracking.WebClient/Admin/Driver/DriverCtrl",
              "CCTracking.WebClient/Admin/Graveyard/GraveyardCtrl",
              "CCTracking.WebClient/Admin/Landmark/LandmarkCtrl",
              "CCTracking.WebClient/Admin/PaymentType/PaymentTypeCtrl",
              "CCTracking.WebClient/Admin/RefundType/RefundTypeCtrl",
              "CCTracking.WebClient/Admin/TrackingDevice/TrackingDeviceCtrl",
              "CCTracking.WebClient/Admin/VisitType/VisitTypeCtrl",
              "CCTracking.WebClient/Admin/NearestCentreSetup/NearestCentreSetupCtrl",
              "CCTracking.WebClient/Admin/AdminSearchBooking/AdminSearchBookingCtrl",
              "CCTracking.WebClient/Admin/Reports/Centre/BusCentreReport/BusCentreReportCtrl",
              "CCTracking.WebClient/Admin/Reports/Bus/BusMilage/BusMilageCtrl",
              "CCTracking.WebClient/Admin/Reports/BusFueling/BusFuelingReportCtrl",
              "CCTracking.WebClient/Admin/Reports/Driver/DriverSummaryCtrl",
              "CCTracking.WebClient/Admin/Reports/Audit/Booking/AuditBookingCtrl",
              "CCTracking.WebClient/Admin/Reports/Audit/BusVisit/AuditBusVisitCtrl",
              "CCTracking.WebClient/Admin/Reports/Audit/Payment/AuditPaymentCtrl",
              "CCTracking.WebClient/Admin/Reports/Audit/Refund/AuditRefundBookingCtrl"
            ],
            exclude: [
                "CCTracking.WebClient/Main",
            ]

        }
    ]
    

})

