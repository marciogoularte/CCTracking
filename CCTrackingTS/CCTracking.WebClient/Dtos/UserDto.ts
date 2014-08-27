/// <reference path="../../Scripts/typings/require/require.d.ts" />
/// <reference path="../../Scripts/typings/marionette/marionette.d.ts" />
/// <reference path="../../Scripts/typings/backbone/backbone.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="backbone"/>
export module Models {
    export class UserRequest extends Backbone.Model {
        //default() {
        //    return {
        //        userName: "",
        //        password: ""
        //    };
        //}
        default() {
            return {
                Id: "",
                FirstName: "",
                LastName: "",
                Email: "",
                Mobile: "",
                Nic: "",
                UserName: "",
                Password: "",
                IsAdmin: false,
                AuthenticationToken: "",
                AuthenticationErrorMessage: ""

            }
        }
    }
    export class UserResponse extends Backbone.Model {
        default() {
            return {
                Id: "",
                FirstName: "",
                LastName: "",
                Email: "",
                Mobile: "",
                Nic: "",
                UserName: "",
                Password: "",
                IsAdmin: false,
                AuthenticationToken: "",
                AuthenticationErrorMessage: ""

            }
        }
    }
    export class UserResponseCollection extends Backbone.Collection {
        constructor(options?: any) {
            this.model = UserResponse;
            super(options);
        }
    }
}
//aaa