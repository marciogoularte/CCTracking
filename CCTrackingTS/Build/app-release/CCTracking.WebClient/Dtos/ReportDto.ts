/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>
export module Models {
    export class ReportDto extends Backbone.Model {
        default() {
            return {
                fromDate: "",
                toDate: "",
                centreId: "",
                busId: ""
            }
        }
    }
} 