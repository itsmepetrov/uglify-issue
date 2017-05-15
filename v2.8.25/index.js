const uglify = require('uglify-js')
const source = require('../source')

const minifyResult = uglify.minify(source, {
  fromString: true,
  // inSourceMap: sourceMap,
  outSourceMap: true,
  output: {
    ascii_only: true,
    screw_ie8: true,
  },
});
