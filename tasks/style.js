'use strict';

/**
 * This file/module contains helpful style/linting tasks.
 */

module.exports = function(common) {

  /*
   * Linting and code standards
   */
  return {
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: common.files.js
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: common.files.js
    }
  };

};