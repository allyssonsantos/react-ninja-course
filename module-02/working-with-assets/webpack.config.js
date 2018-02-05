'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = validate({
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin(),
  ],

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'semistandard-loader'
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loaders: ['style', 'raw']
    }],
  }
});
