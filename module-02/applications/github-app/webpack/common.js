'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = validate({
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: {
    title: 'GitHub app',
    template: path.join(__dirname, 'src', 'html', 'template-dev.html'),
  },

  standardPreLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'semistandard-loader'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: ['style', 'css']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components')
    }
  }
});
