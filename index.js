/* jshint node: true */
'use strict';

module.exports = {
  name: 'ms-ember-normalize',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/normalize.css');
    app.import('vendor/app.css');
    app.import('vendor/fastclick.js');
  },
  isDevelopingAddon: function() {
    return true;
  }
};
