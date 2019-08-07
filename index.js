const { send } = require('micro')
const UglifyJS = require('uglify-js')

module.exports = (req, res) => {
  const code = 'function add(first, second) { return first + second; }'
  const result = UglifyJS.minify(code)

  return send(res, 200, result)
}