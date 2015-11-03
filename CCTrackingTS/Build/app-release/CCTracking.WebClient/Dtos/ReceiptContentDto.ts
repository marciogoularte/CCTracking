﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>

export module Models {
    export class ReceiptContentDto extends Backbone.Model {
        default() {
            return {
                bookingId: "",
                centreDesc:"",
                contactName: "",
                bookingReceipt: "",
                bookingDate: "",
                bookingAmount: "",
                userName: "",
                printDateTime: ""

            };
        }
    }
    export class ReceiptContentCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = ReceiptContentDto;
            super(options);
        }
    }
}


