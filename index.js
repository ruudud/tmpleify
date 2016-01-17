var path = require('path');
var through = require('through2');

var defaultExts = ['.tjs'];

module.exports = function tjsify(file, options) {
  var extensions = defaultExts.concat(options.ext &&
                                      options.ext.split(',') || []);

  if (extensions.indexOf(path.extname(file)) === -1) {
      return through();
  }

  return through(function(buf, enc, next) {
    var compiled = "var t = require('tmpl');\n";
    compiled += "module.exports = new t(";
    compiled += JSON.stringify(buf.toString('utf-8'));
    compiled += ");";
    this.push(compiled);
    next();
  });
};
