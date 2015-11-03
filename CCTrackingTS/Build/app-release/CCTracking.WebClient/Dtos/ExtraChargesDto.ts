/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>

export module Models {
    export class ExtraChargesDto {
        default() {
            return {
                id: "",
                bookingId: "",
                actualBookingAmount: "",
                extraAmountCharge: "",
                extraAmountReason: "",
                extraAmountReceipt: "",
                isActive: "",
                createdBy: "",
                createdDate: "",
                modifiedBy: "",
                modifiedDate: ""
            }

        }
    }
    export class ExtraChargesCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = ExtraChargesDto;
            super(options);
        }
    }

}
