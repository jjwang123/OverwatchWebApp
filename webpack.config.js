// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })
//
// module.exports = {
//   entry: './client/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
//     ]
//   },
//   // add this line
//   plugins: [HtmlWebpackPluginConfig]
// }
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {

  entry: './client.js',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 7779,
    stats: {
      warnings: false
    }
  },

  stats: {
    warnings: false
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ use: 'css-loader!sass-loader' })
      },
      {
        test: /\.jsx?$/,

        loader: 'babel-loader',
        exclude: /node_modules/,

        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin({ filename: 'css/app.css', allChunks : true })
    ]
}

module.exports = config
