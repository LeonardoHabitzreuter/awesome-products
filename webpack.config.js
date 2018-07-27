require('webpack')
const mode = process.env.NODE_ENV

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public/dist`
  }
}
