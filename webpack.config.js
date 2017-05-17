// path - utitilies to work with file directory; comes with node
var path = require('path');
// creates index.html in dist folder for us and include index_bundle.js
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// NODE_ENV to production
// uglify - minify

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({ // set node environment inside code that  webpack would compile for us
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV) // strips out warnings
      }
    }),
    new webpack.optimize.UglifyJsPlugin() // minify all our code
  )
}

module.exports = config;
