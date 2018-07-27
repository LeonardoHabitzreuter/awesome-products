require('webpack')
const { join } = require('path')

const paths = {
  src: join(__dirname, 'src')
}

module.exports = {
  mode: process.env.NODE_ENV,
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
  },
  resolve: {
    alias: {
      components: join(paths.src, 'components')
    }
  }
}
