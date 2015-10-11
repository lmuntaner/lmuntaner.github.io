/*jslint white: true */

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function verticalAlign() {
  }

  ready(verticalAlign);
})();
