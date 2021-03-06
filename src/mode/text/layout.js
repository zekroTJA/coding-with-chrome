/**
 * @fileoverview Layout for the text modification.
 *
 * @license Copyright 2015 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */
goog.provide('cwc.mode.text.Layout');

goog.require('cwc.soy.mode.Text');


/**
 * @constructor
 * @param {!cwc.utils.Helper} helper
 */
cwc.mode.text.Layout = function(helper) {
  /** @type {!cwc.utils.Helper} */
  this.helper = helper;

  /** @type {string} */
  this.prefix = helper.getPrefix();
};


/**
 * Decorates the text layout.
 */
cwc.mode.text.Layout.prototype.decorate = function() {
  let layoutInstance = this.helper.getInstance('layout', true);
  layoutInstance.decorateSimpleSingleColumnLayout();

  goog.soy.renderElement(
      layoutInstance.getNode('content'),
      cwc.soy.mode.Text.editor,
      {'prefix': this.prefix}
  );
};
