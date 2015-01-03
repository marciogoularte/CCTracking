/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="jsPDF"/>
/// <amd-dependency path="text!./Home.html"/>

var _ = require('underscore');
var jsPDF = require('jsPDF');
import helper = require("../Helper");
import homeCtrl = require("./HomeCtrl");
var templateView = require("text!./Home.html");
import application = require("../App");
var app;

export class HomeItemView extends helper.Views.ItemView {
    //viewModel: ViewModel;
    //bbModel: Backbone.Model;
    constructor(options?) {
        this.template = templateView;
        //this.viewModel = new ViewModel(options);
        //this.bbModel = new Backbone.Model();
        this.events = {
            "submit": "Save",
            "click .jsCancel": "Cancel",
            "click .jsExportPdf": () => {
                 //alert('print');
                this.ExportToPdf();
            }
        }
        super(options);
    }

    ExportToPdf() {
        var pdf = new jsPDF('p', 'pt', 'letter');
        var source = this.$el.find('#receiptLayout')[0];


        //, specialElementHandlers = {

        //    '#bypassme': function (element, renderer) {
        //        return true;
        //    }
        //}

        var margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };
        pdf.fromHTML(
            source // HTML string or DOM elem ref.
            , margins.left // x coord
            , margins.top // y coord
            , {
                'width': margins.width // max width of content on PDF
                //, 'elementHandlers': specialElementHandlers
            },
            function(dispose) {
                // dispose: object with X, Y of the last line add to the PDF 
                //          this allow the insertion of new lines after html
                pdf.save('Test.pdf');
            },
            margins
        );
    }
}