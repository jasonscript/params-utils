const base = require('./config/webpack.base.config')
const merge = require('webpack-merge')

let config = {}
if (process.env.NODE_ENV === 'production') {
  config = require('./config/webpack.prod.config')
}

module.exports = merge(base, config)
