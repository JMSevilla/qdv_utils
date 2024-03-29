"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatQdvErrorMessage;

/**
 * WARNING: Don't import this directly.
 * @param {number} code
 */
function formatQdvErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = '' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Qodev-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}