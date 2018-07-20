const mode = require('./mode')
const target = require('./target')
const entry = require('./entry')
const output = require('./output')
const rules = require('./rules')
const resolve = require('./resolve')

const commonConfig = {
  mode,
  target,
  entry,
  output,
  module: {
    rules
  },
  resolve
}

module.exports = commonConfig
