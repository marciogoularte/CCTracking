/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="jqueryUI"/>
/// <amd-dependency path="knockout"/>
/// <amd-dependency path="jsPDF"/>
/// <amd-dependency path="text!./Home.html"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "jsPDF", "text!./Home.html"], function(require, exports, helper) {
    var _ = require('underscore');
    var jsPDF = require('jsPDF');

    var templateView = require("text!./Home.html");

    var app;

    var HomeItemView = (function (_super) {
        __extends(HomeItemView, _super);
        //viewModel: ViewModel;
        //bbModel: Backbone.Model;
        function HomeItemView(options) {
            var _this = this;
            this.template = templateView;

            //this.viewModel = new ViewModel(options);
            //this.bbModel = new Backbone.Model();
            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel",
                "click .jsExportPdf": function () {
                    //alert('print');
                    _this.ExportToPdf();
                }
            };
            _super.call(this, options);
        }
        HomeItemView.prototype.ExportToPdf = function () {
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
            pdf.fromHTML(source, margins.left, margins.top, {
                'width': margins.width
            }, function (dispose) {
                // dispose: object with X, Y of the last line add to the PDF
                //          this allow the insertion of new lines after html
                pdf.save('Test.pdf');
            }, margins);
        };
        return HomeItemView;
    })(helper.Views.ItemView);
    exports.HomeItemView = HomeItemView;
});
//# sourceMappingURL=HomeView.js.map
