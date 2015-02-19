/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "jquery", "backbone"], function(require, exports) {
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="backbone"/>
    (function (Models) {
        var SearchDto = (function (_super) {
            __extends(SearchDto, _super);
            function SearchDto() {
                _super.apply(this, arguments);
            }
            SearchDto.prototype.default = function () {
                return {
                    id: "",
                    name: "",
                    landmarkId: "",
                    address: "",
                    contactNo1: "",
                    contactNo2: "",
                    isCoPartner: "",
                    contactInfo: "",
                    deseasedInfo: "",
                    genderId: "",
                    paymentStatusId: "",
                    bookingDate: "",
                    greveyardId: "",
                    centreId: "",
                    busId: "",
                    isActive: "",
                    createdBy: "",
                    createdDate: "",
                    modifiedBy: "",
                    modifiedDate: ""
                };
            };
            return SearchDto;
        })(Backbone.Model);
        Models.SearchDto = SearchDto;
        var SearchDtoResponse = (function (_super) {
            __extends(SearchDtoResponse, _super);
            function SearchDtoResponse() {
                _super.apply(this, arguments);
            }
            SearchDtoResponse.prototype.default = function () {
                return {
                    id: "",
                    contactName: "",
                    contactMobile: "",
                    contactNic: "",
                    deseasedName: "",
                    deseasedAge: "",
                    status: "",
                    pickupDate: ""
                };
            };
            return SearchDtoResponse;
        })(Backbone.Model);
        Models.SearchDtoResponse = SearchDtoResponse;

        var SearchCollection = (function (_super) {
            __extends(SearchCollection, _super);
            function SearchCollection(options) {
                this.model = SearchDto;
                _super.call(this, options);
            }
            return SearchCollection;
        })(Backbone.Collection);
        Models.SearchCollection = SearchCollection;
        var SearchDtoResponseCollection = (function (_super) {
            __extends(SearchDtoResponseCollection, _super);
            function SearchDtoResponseCollection(options) {
                this.model = SearchDtoResponse;
                _super.call(this, options);
            }
            return SearchDtoResponseCollection;
        })(Backbone.Collection);
        Models.SearchDtoResponseCollection = SearchDtoResponseCollection;
    })(exports.Models || (exports.Models = {}));
    var Models = exports.Models;
});
//# sourceMappingURL=SearchDto.js.map
