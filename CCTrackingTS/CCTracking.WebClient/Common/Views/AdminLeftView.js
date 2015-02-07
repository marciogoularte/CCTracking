var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "text!../Templates/AdminLeft.html", "marionette"], function(require, exports) {
    var templateView = require("text!../Templates/AdminLeft.html");
    var AdminLeftItemView = (function (_super) {
        __extends(AdminLeftItemView, _super);
        function AdminLeftItemView(options) {
            this.template = templateView;
            _super.call(this, options);
        }
        return AdminLeftItemView;
    })(Marionette.ItemView);
    exports.AdminLeftItemView = AdminLeftItemView;
});
