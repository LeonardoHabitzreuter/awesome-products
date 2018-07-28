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
      exclude: '/node_modules/',
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.js/,
      exclude: '/node_modules/',
      use: ['babel-loader']
    }]
  },
  resolve: {
    alias: {
      components: join(paths.src, 'components')
    }
  },
  devServer: {
    contentBase: join(__dirname, 'public'),
    compress: true
  }
}
