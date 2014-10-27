/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="backbone"/>

export module Models {
    export class BookingSummaryDto extends Backbone.Model {
        default() {
            return {
                alkhidmatentre: "",
                todaysBooking: "",
                userTotalBooking: "",
                userPiadBooking: "",
                userUnpaidBooking: ""
            }
        }
    }

    export class SearchCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = BookingSummaryDto;
            super(options);
        }
    }
}
