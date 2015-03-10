/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>

export module Models {
    export class HomeDto extends Backbone.Model {
        default() {
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
                toDate:"",
                isActive: "",
                createdBy: "",
                createdDate: "",
                modifiedBy: "",
                modifiedDate: ""
            };
        }
    }
    export class HomeCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = HomeDto;
            super(options);
        }
    }
}


