({
    appDir: "CCTracking.WebClient",
    baseUrl: "./",

    dir: "CCTrackingMinified",
    //mainConfigFile: "CCTracking.WebClient/Main.js",

    paths: {
        jquery: "../Scripts/jquery-2.1.1.min",
        jqueryUI: "../Scripts/jquery-ui",
        underscore: "../Scripts/underscore-min",
        backbone: "../Scripts/backbone.min",
        //router: "Vendor/gladstone/backbonerouter",
        marionette: "../Scripts/backbone.marionette.min",
        bootstrap: "../Scripts/bootstrap.min",
        bootstrapPopover: "../Scripts/bootstrap-popover",
        bootstrapTooltip: "../Scripts/bootstrap-tooltip",
        //datepicker: "../Scripts/bootstrap-datepicker",

        knockout: "../Scripts/knockout-3.1.0",
        //knockoutvalidation: "../Scripts/knockout.validation",
        knockback: "../Scripts/knockback.min",
        //bindings: "Vendor/Gladstone/KnockoutBindings",
        // Require plugins
        text: "../Scripts/text",
        datatables: "../Scripts/DataTables/jquery.dataTables.min",
        datatablesBootstrap: "../Scripts/DataTables/dataTables.bootstrap",
        jqueryValidate: "../Scripts/jquery.validate.min",
        jqueryUnobtrusive: "../Scripts/jquery.validate.unobtrusive.min",
        jqueryUnobtrusiveAjax: "../Scripts/jquery.unobtrusive-ajax.min",
        //knockoutJqueryuiDatepicker: "../Scripts/KnockoutJqueryUI/datepicker",
        
        highcharts: "../Scripts/HighCharts/highcharts",
        highcharts3d: "../Scripts/HighCharts/highcharts-3d",
        highchartsExport: "../Scripts/HighCharts/exporting",
        jsPDF: "../Scripts/JSPdf/jspdf.min",
        accounting: "../Scripts/AccountingJS/accounting.min",
        selectize: "../Scripts/Selectize/selectize.min",
        printArea: "../Scripts/PrintArea/jquery.PrintArea",
        App: "CCTracking.WebClient/App"

        //new additions
        //jqueryUIWidget: "../Scripts/jquery-ui/widget",
    },

    modules: [
    {
        name: "MainOptimizeConfig",
        include: [
            "jquery",
            "jqueryUI",
            "underscore",
            "backbone",
            "marionette",
            "bootstrap",
            "bootstrapPopover",
            "bootstrapTooltip",
            "knockout",
            "knockback",
            "text",
            "datatables",
            "datatablesBootstrap",
            "jqueryValidate",
            "jqueryUnobtrusive",
            "jqueryUnobtrusiveAjax",
            //"knockoutJqueryuiDatepicker",
            "highcharts",
            "highcharts3d",
            "highchartsExport",
            "jsPDF",
            "accounting",
            "selectize",
            "printArea",

            //"jqueryUIWidget",



        ]
    }],
    preserveLicenseComments: false,
    optimize: "none",
    //closure: {
    //    CompilerOptions: {},
    //    CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
    //    loggingLevel: 'WARNING'
    //},

})