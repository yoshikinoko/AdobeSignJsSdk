/**
*  Copyright 2019 Adobe Systems Incorporated. All rights reserved.
*  This file is licensed to you under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License. You may obtain a copy
*  of the License at http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software distributed under
*  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
*  OF ANY KIND, either express or implied. See the License for the specific language
*  governing permissions and limitations under the License.
*
*
**/


/**
 * 
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 6.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/widgets/PhoneInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PhoneInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ParticipantSecurityOption = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.PhoneInfo);
  }
}(this, function(ApiClient, PhoneInfo) {
  'use strict';




  /**
   * The ParticipantSecurityOption model module.
   * @module model/widgets/ParticipantSecurityOption
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>ParticipantSecurityOption</code>.
   * @alias module:model/widgets/ParticipantSecurityOption
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ParticipantSecurityOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/widgets/ParticipantSecurityOption} obj Optional instance to populate.
   * @return {module:model/widgets/ParticipantSecurityOption} The populated <code>ParticipantSecurityOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = ApiClient.convertToType(data['authenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('phoneInfo')) {
        obj['phoneInfo'] = PhoneInfo.constructFromObject(data['phoneInfo']);
      }
    }
    return obj;
  }

  /**
   * The authentication method for the participants to have access to view and sign the document. When replacing a participant that has PASSWORD or PHONE authentication specified, you must supply a password or phone number for the new participant, and you cannot change the authentication method
   * @member {module:model/widgets/ParticipantSecurityOption.AuthenticationMethodEnum} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * The password required for the participant to view and sign the document. Note that AdobeSign will never show this password to anyone, so you will need to separately communicate it to any relevant parties. The password will not be returned in GET call. When replacing a participant that has PASSWORD authentication specified, you must supply a password for the new participant.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The phoneInfo required for the participant to view and sign the document
   * @member {module:model/widgets/PhoneInfo} phoneInfo
   */
  exports.prototype['phoneInfo'] = undefined;


  /**
   * Allowed values for the <code>authenticationMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthenticationMethodEnum = {
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "PASSWORD"
     * @const
     */
    "PASSWORD": "PASSWORD",
    /**
     * value: "PHONE"
     * @const
     */
    "PHONE": "PHONE",
    /**
     * value: "KBA"
     * @const
     */
    "KBA": "KBA",
    /**
     * value: "WEB_IDENTITY"
     * @const
     */
    "WEB_IDENTITY": "WEB_IDENTITY",
    /**
     * value: "ADOBE_SIGN"
     * @const
     */
    "ADOBE_SIGN": "ADOBE_SIGN",
    /**
     * value: "GOV_ID"
     * @const
     */
    "GOV_ID": "GOV_ID"  };


  return exports;
}));


