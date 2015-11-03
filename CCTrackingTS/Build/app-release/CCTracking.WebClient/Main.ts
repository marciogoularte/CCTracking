﻿/// <reference path="../Scripts/typings/require/require.d.ts" />
// Set the require.js configuration
require.config({
    enforceDefine: false,
    //By default load  any module IDs from js/lib
    baseUrl: './',
    waitSeconds: 0,
    //urlArgs: "bust=" + "V3", 
    // If no baseUrl is explicitly set in the configuration, the default value
    // will be the location of the HTML page that loads require.js.
    // If a data-main attribute is used, that path will become the baseUrl.

    // Path mappings for module names not found directly under baseUrl.
    // The path settings are assumed to be relative to baseUrl, unless the paths
    // setting starts with a "/" or has a URL protocol in it ("like http:").
    // In those cases, the path is determined relative to baseUrl.
    paths: {
        // JavaScript folders

        // Libraries
        jquery: "Scripts/jquery-2.1.1.min",
        jqueryUI: "Scripts/jquery-ui.min",
        underscore: "Scripts/underscore-min",
        backbone: "Scripts/backbone.min",
        //router: "Vendor/gladstone/backbonerouter",
        marionette: "Scripts/backbone.marionette.min",
        bootstrap: "Scripts/bootstrap.min",
        bootstrapPopover: "Scripts/bootstrap-popover",
        bootstrapTooltip: "Scripts/bootstrap-tooltip",
        //datepicker: "Scripts/bootstrap-datepicker",

        knockout: "Scripts/knockout-3.1.0",
        //knockoutvalidation: "Scripts/knockout.validation",
        knockback: "Scripts/knockback.min",
        //bindings: "Vendor/Gladstone/KnockoutBindings",
        // Require plugins
        text: "Scripts/text",
        datatables: "Scripts/DataTables/jquery.dataTables.min",
        datatablesBootstrap: "Scripts/DataTables/dataTables.bootstrap",
        jqueryValidate: "Scripts/jquery.validate.min",
        jqueryUnobtrusive: "Scripts/jquery.validate.unobtrusive.min",
        jqueryUnobtrusiveAjax: "Scripts/jquery.unobtrusive-ajax.min",
        //knockoutJqueryuiUtils: 'Scripts/KnockoutJqueryUI/utils',
        //knockoutJqueryuiHandler: 'Scripts/KnockoutJqueryUI/bindingHandler',z
        knockoutJqueryuiDatepicker: 'Scripts/KnockoutJqueryUI/datepicker',
        highcharts: 'Scripts/HighCharts/highcharts',
        highcharts3d: 'Scripts/HighCharts/highcharts3d',
        highchartsExport: 'Scripts/HighCharts/highchartsExport',
        accounting: 'Scripts/AccountingJS/accounting.min',
        selectize: 'Scripts/Selectize/selectize.min',
        printArea: 'Scripts/PrintArea/jquery.PrintArea'

    },

    // Configure the dependencies and exports for older, traditional "browser globals"
    // scripts that do not use define() to declare the dependencies and set a module value.
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
        //"router": ["underscore", "jquery"],


        "bootstrap": ["jquery"],
        "bootstrapPopover": ["jquery", "bootstrap"],
        "bootstrapTooltip": ["jquery", "bootstrap"],
        //"datepicker": ["jquery", "bootstrap"],

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
        //"knockoutvalidation": {
        //    deps: ["knockout"]
        //},
        //"jquery-ui": ["jquery","bootstrap"],
        "jqueryUI": ["jquery"],
        "jqueryValidate": ["jquery"],
        "jqueryUnobtrusive": ["jquery", "jqueryValidate"],
        "jqueryUnobtrusiveAjax": ["jquery"],

        "knockoutJqueryuiDatepicker": {
            depts: ["jquery", "knockout", "jqueryUI"]
        },
        "highcharts": {
            deps: ["jquery"],
            exports: "Highcharts"
        },
        "highcharts3d": {
            deps: ["jquery", "highcharts"]
        },
        "highchartsExport": {
            deps: ["jquery", "highcharts"]
        },
        
        "accounting": {
            deps: ["jquery"]
        },
        "selectize": {
            deps: ["jquery"]
        },
        "printArea": {
            deps: ["jquery", "jqueryUI"]
        }

        //"bindings": {
        //    deps: ["bootstrap", "jquery", "knockout", "knockoutvalidation"]
        //},

    }
});

require([
    "jquery",
    "underscore",
    "backbone",
    "marionette",
    "bootstrap",
    "jqueryUI",
    "highcharts",
    "highcharts3d",
    "highchartsExport",
    "accounting",
    "selectize",
    "printArea",
//"bootstrapPopover",
//"bootstrapTooltip",
//"datepicker",
    "knockoutJqueryuiDatepicker",
    "knockback",
    "text",
    "CCTracking.WebClient/App"
],
    //function ($, Backbone, _, Marionette) {
    //    //console.log('ddddd');
    //}
    () => {

    }
    );
//aaa