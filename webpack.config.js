require('webpack')
const mode = process.env.NODE_ENV

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public/dist`
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.js/,
      use: ['babel-loader']
    }]
  }
}
