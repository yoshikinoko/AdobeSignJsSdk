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
    define(['ApiClient', 'model/agreements/FileUploadOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FileUploadOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerJsClient) {
      root.SwaggerJsClient = {};
    }
    root.SwaggerJsClient.ComposeViewConfiguration = factory(root.SwaggerJsClient.ApiClient, root.SwaggerJsClient.FileUploadOptions);
  }
}(this, function(ApiClient, FileUploadOptions) {
  'use strict';




  /**
   * The ComposeViewConfiguration model module.
   * @module model/agreements/ComposeViewConfiguration
   * @version 6.0.0
   */

  /**
   * Constructs a new <code>ComposeViewConfiguration</code>.
   * @alias module:model/agreements/ComposeViewConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ComposeViewConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/agreements/ComposeViewConfiguration} obj Optional instance to populate.
   * @return {module:model/agreements/ComposeViewConfiguration} The populated <code>ComposeViewConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fileUploadOptions')) {
        obj['fileUploadOptions'] = FileUploadOptions.constructFromObject(data['fileUploadOptions']);
      }
      if (data.hasOwnProperty('isPreviewSelected')) {
        obj['isPreviewSelected'] = ApiClient.convertToType(data['isPreviewSelected'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Controls various file upload options available on the compose page
   * @member {module:model/agreements/FileUploadOptions} fileUploadOptions
   */
  exports.prototype['fileUploadOptions'] = undefined;
  /**
   * Should the compose page be provided with authoring mode selected?
   * @member {Boolean} isPreviewSelected
   */
  exports.prototype['isPreviewSelected'] = undefined;



  return exports;
}));


