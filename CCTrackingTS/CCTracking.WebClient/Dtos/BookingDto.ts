﻿/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="backbone"/>

export module Models {
    export class BookingRequest extends Backbone.Model {    
        default() {
            return {
                id: "",
                contactName: "",
                contactMobile: "",
                contactNic: "",
                deseasedName: "",
                deseasedAge: "",
                deseasedGender: "",
                causeOfDeath: "",
                causeOfDeathSelected: "",
                address: "",
                alkhidmatCentreId: "",
                busPoint: "",
                unionCouncil: "",
                town: "",
                pickupDate: "",
                pickupTime: "",
                returnTime: "",
                graveyard: "",
                namazEJanazaHeldIn: "",
                namazEJanazaLocation: "",
                masjidName: "",
                otherDetail: "",
                isReferralBooking: "",
                referralName: "",
                referralDetail : ""

            }
        }
    }

    export class BookingResponse extends Backbone.Model {
        default() {
            return {
                id: "",
                contactName: "",
                contactMobile: "",
                contactNic: "",
                deseasedName: "",
                deseasedAge: "",
                deseasedGender: "",
                causeOfDeath: "",                
                address: "",                
                busPoint: "",
                landmarkId: "",
                receiptNo: "",

                unionCouncilId: "",
                
                townId: "",
                
                pickupDate: "",
                pickupTime: "",
                returnTime: "",
                graveyard: "",
                namazEJanazaHeldIn: "",
                namazEJanazaLocation: "",
                masjidName: "",
                otherDetail: "",
                isReferralBooking: "",
                referralName: "",
                referralDetail: ""

            }
        }
    }

    export class AuditBooking extends Backbone.Model {
        default() {
            return {
                id: "",
                bookingId: "",
                propertyName: "",
                oldValue: "",
                newValue: "",
                modifiedDate: "",
                createdDate: "",
                actualModifiedDate: "",
                userName: ""
            }

        }
    }

    export class BookingResponseCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = BookingResponse;
            super(options);
        }
    }
    export class AuditBookingResponseCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = AuditBooking;
            super(options);
        }
    }
}
