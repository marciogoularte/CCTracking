/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="marionette"/>
/// <amd-dependency path="jquery"/>
/// <amd-dependency path="knockout"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "./PrintView", "marionette", "jquery", "knockout"], function(require, exports, helper, views) {
    var _ = require("underscore");

    var PrintCtrl = (function (_super) {
        __extends(PrintCtrl, _super);
        //printItemView: views.PrintItemView;
        //printCollectionView: views.PrintCollectionView;
        //collection:Backbone.Collection;
        function PrintCtrl() {
            _super.call(this);
            //this.printItemView = new views.PrintItemView();
            //this.collection = new Backbone.Collection([{ columnHeader: 'col1' }, { columnHeader: 'col2' }, { columnHeader: 'col3' }]);
        }
        PrintCtrl.prototype.getPrintReportView = function (itemList, headerList, reportTitle, reportName) {
            //var view = new views.PrintHeaderCollectionView({ collection: headerList });
            //["alkhidmatCentre", "alkhidmatCentreId", "bookingAmount", "maintenance", "bookingMilage", "bookings", "receivables"]
            var headerModel = new Backbone.Model({ headerList: headerList, reportTitle: reportTitle, reportName: reportName });
            var view = new views.PrintCollectionView({ collection: itemList, model: headerModel });
            return view;
        };
        return PrintCtrl;
    })(helper.Controller);
    exports.PrintCtrl = PrintCtrl;
});
//# sourceMappingURL=PrintCtrl.js.map
