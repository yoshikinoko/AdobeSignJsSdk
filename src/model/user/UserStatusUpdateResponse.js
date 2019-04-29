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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.UserStatusUpdateResponse = factory(root.SwaggerJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserStatusUpdateResponse model module.
   * @module model/user/UserStatusUpdateResponse
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>UserStatusUpdateResponse</code>.
   * @alias module:model/user/UserStatusUpdateResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserStatusUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/user/UserStatusUpdateResponse} obj Optional instance to populate.
   * @return {module:model/user/UserStatusUpdateResponse} The populated <code>UserStatusUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * The result of the attempt to activate or deactivate the user
   * @member {module:model/user/UserStatusUpdateResponse.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * String result message if there was no error
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * A status value showing the result of this operation
   * @member {module:model/user/UserStatusUpdateResponse.StateEnum} state
   */
  exports.prototype['state'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "ALREADY_ACTIVE"
     * @const
     */
    "ALREADY_ACTIVE": "ALREADY_ACTIVE",
    /**
     * value: "ALREADY_INACTIVE"
     * @const
     */
    "ALREADY_INACTIVE": "ALREADY_INACTIVE",
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "RESET_PASSWORD_WORKFLOW_INITIATED"
     * @const
     */
    "RESET_PASSWORD_WORKFLOW_INITIATED": "RESET_PASSWORD_WORKFLOW_INITIATED",
    /**
     * value: "SET_PASSWORD_WORKFLOW_INITIATED"
     * @const
     */
    "SET_PASSWORD_WORKFLOW_INITIATED": "SET_PASSWORD_WORKFLOW_INITIATED"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",
    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "UNVERIFIED"
     * @const
     */
    "UNVERIFIED": "UNVERIFIED"  };


  return exports;
}));

