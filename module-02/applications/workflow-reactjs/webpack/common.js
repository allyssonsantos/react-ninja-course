'use strict';

const { join } = require('path');

module.exports = {
  entry: join(__dirname, '..', 'src', 'index'),

  output: {
    path: join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: (template) => ({
    title: 'GitHub app',
    template: join(__dirname, '..', 'src', 'html', template),
  }),

  standardPreLoader: {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'semistandard-loader'
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: join(__dirname, '..', 'src'),
    use: ['style-loader', 'css-loader']
  },

  resolve: {
    alias: {
      src: join(__dirname, '..', 'src'),
      components: join(__dirname, '..', 'src', 'components'),
      utils: join(__dirname, '..', 'src', 'utils')
    }
  }
};
