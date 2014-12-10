var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../Helper", "marionette", "jquery", "jqueryUI", "knockout", "text!./Home.html"], function(require, exports, helper) {
    var _ = require('underscore');

    var templateView = require("text!./Home.html");

    var app;

    var HomeItemView = (function (_super) {
        __extends(HomeItemView, _super);
        function HomeItemView(options) {
            this.template = templateView;

            this.events = {
                "submit": "Save",
                "click .jsCancel": "Cancel"
            };
            _super.call(this, options);
        }
        return HomeItemView;
    })(helper.Views.ItemView);
    exports.HomeItemView = HomeItemView;
});
