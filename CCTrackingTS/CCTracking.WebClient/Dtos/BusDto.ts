/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <amd-dependency path="backbone"/>

export module Models {
    export class BusRequest extends Backbone.Model {
        default() {
            return {
                id: '',
                name: ''
            };
        }
    }
    export class BusResponse extends Backbone.Model {
        default() {
            return {
                id: '',
                name: ''
            };
        }
    }
}


