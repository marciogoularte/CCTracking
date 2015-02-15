require.config({
    enforceDefine: false,
    baseUrl: './',
    paths: {
        jquery: "Scripts/jquery-2.1.1.min",
        jqueryUI: "Scripts/jquery-ui",
        underscore: "Scripts/underscore-min",
        backbone: "Scripts/backbone.min",
        marionette: "Scripts/backbone.marionette.min",
        bootstrap: "Scripts/bootstrap.min",
        bootstrapPopover: "Scripts/bootstrap-popover",
        bootstrapTooltip: "Scripts/bootstrap-tooltip",
        knockout: "Scripts/knockout-3.1.0",
        knockback: "Scripts/knockback.min",
        text: "Scripts/text",
        datatables: "Scripts/DataTables/jquery.dataTables.min",
        datatablesBootstrap: "Scripts/DataTables/dataTables.bootstrap",
        jqueryValidate: "Scripts/jquery.validate.min",
        jqueryUnobtrusive: "Scripts/jquery.validate.unobtrusive.min",
        jqueryUnobtrusiveAjax: "Scripts/jquery.unobtrusive-ajax.min",
        knockoutJqueryuiDatepicker: 'Scripts/KnockoutJqueryUI/datepicker',
        highcharts: 'Scripts/HighCharts/highcharts',
        highcharts3d: 'Scripts/HighCharts/highcharts-3d',
        highchartsExport: 'Scripts/HighCharts/exporting',
        jsPDF: 'Scripts/JSPdf/jspdf.min',
        accounting: 'Scripts/AccountingJS/accounting.min',
        selectize: 'Scripts/Selectize/selectize.min'
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "marionette": {
            deps: ["underscore", "jquery", "backbone"],
            exports: "Marionette"
        },
        "bootstrap": ["jquery"],
        "bootstrapPopover": ["jquery", "bootstrap"],
        "bootstrapTooltip": ["jquery", "bootstrap"],
        "knockout": {
            exports: "ko"
        },
        "knockback": {
            deps: ["knockout"],
            exports: "kb"
        },
        "datatablesBootstrap": {
            deps: ["datatables"]
        },
        "jqueryUI": ["jquery"],
        "jqueryValidate": ["jquery"],
        "jqueryUnobtrusive": ["jquery", "jqueryValidate"],
        "jqueryUnobtrusiveAjax": ["jquery"],
        "knockoutJqueryuiDatepicker": {
            depts: ["jquery", "knockout", "jqueryUI"]
        },
        "highcharts": {
            deps: ["jquery"],
            exports: "highcharts"
        },
        "highcharts3d": {
            deps: ["jquery", "highcharts"]
        },
        "highchartsExport": {
            deps: ["jquery", "highcharts"]
        },
        "jsPDF": {
            deps: ["jquery"]
        },
        "accounting": {
            deps: ["jquery"]
        },
        "selectize": {
            deps: ["jquery"]
        }
    }
});

require([
    "jquery",
    "backbone",
    "underscore",
    "marionette",
    "bootstrap",
    "jqueryUI",
    "highcharts",
    "highcharts3d",
    "highchartsExport",
    "jsPDF",
    "accounting",
    "selectize",
    "knockoutJqueryuiDatepicker",
    "CCTracking.WebClient/App"
], function () {
});
