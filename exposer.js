
/**
 * Module dependencies
 */

var path = require('path');
var fs = require('fs');

/**
 * Exposer
 */

module.exports = exposer;

/**
 * Exposer
 */

function exposer (filename) {
  var all = {};
  var self = path.basename(filename);
  var dir = path.dirname(filename);

  fs.readdirSync(dir).forEach(function (file) {
    if (file !== self)
      all[file.split('.')[0]] = require(path.join(dir, file));
  });

  return all;
}
