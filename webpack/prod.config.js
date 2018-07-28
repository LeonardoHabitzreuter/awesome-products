const webpack = require('webpack')
const common = require('./common')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = {
  entry: common.entry,

  output: common.output,

  plugins: [
    extractLess,

    new CleanPlugin(['dist'], {
      root: common.paths.root
    }),

    new ExtractTextPlugin({
      filename: '[name]-[hash].css'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'react-build',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules\/(react(-dom)?|fbjs)\//.test(resource) ||
        /node_modules\/preact(-compat)?\//.test(resource)
      )
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['main'],
      minChunks: ({ resource }) => (
        /node_modules/.test(resource)
      )
    }),

    new HtmlPlugin(Object.assign({}, common.htmlPluginConfig, {
      minify: { collapseWhitespace: true },

      chunksSortMode: (chunk1, chunk2) => {
        const order = ['react-build', 'vendor', 'main']
        const left = order.indexOf(chunk1.names[0])
        const right = order.indexOf(chunk2.names[0])
        return left - right
      }
    })),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ].concat(
    process.env.ANALYZER ? new BundleAnalyzerPlugin() : []
  ),

  module: {
    rules: [
      common.jsLoader,
      common.fileLoader,
      common.urlLoader, {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }],
          fallback: 'style-loader'
        })
      },
      Object.assign({}, common.stylusLoader, {
        use: ExtractTextPlugin.extract({
          fallback: common.stylusLoader.use[0],
          use: common.stylusLoader.use.slice(1)
        })
      })
    ]
  },

  resolve: common.resolve
}
