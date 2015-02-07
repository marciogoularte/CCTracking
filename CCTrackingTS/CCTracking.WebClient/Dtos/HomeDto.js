var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "backbone"], function(require, exports) {
    (function (Models) {
        var HomeDto = (function (_super) {
            __extends(HomeDto, _super);
            function HomeDto() {
                _super.apply(this, arguments);
            }
            HomeDto.prototype.default = function () {
                return {
                    id: "",
                    bookingId: "",
                    centreId: "",
                    centreDesc: "",
                    bookingAmount: "",
                    bookingMilage: "",
                    receivable: "",
                    maintenance: "",
                    profit: "",
                    fromDate: "",
                    toDate: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return HomeDto;
        })(Backbone.Model);
        Models.HomeDto = HomeDto;
        var HomeCollection = (function (_super) {
            __extends(HomeCollection, _super);
            function HomeCollection(options) {
                this.model = HomeDto;
                _super.call(this, options);
            }
            return HomeCollection;
        })(Backbone.Collection);
        Models.HomeCollection = HomeCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
