'use strict';

const { join } = require('path');

const paths = {
  root: join(__dirname, '..'),
  src: join(__dirname, '..', 'src'),
  dist: join(__dirname, '..', 'dist')
};

module.exports = {
  paths,

  entry: join(paths.src, 'index'),

  output: {
    path: paths.dist,
    filename: '[name]-[chunkhash].js'
  },

  htmlPluginConfig: {
    title: 'My app',
    template: join(paths.src, 'html', 'template.html')
  },

  standardPreLoader: {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    include: paths.src,
    use: {
      loader: 'semistandard-loader',
      options: {
        parser: 'babel-eslint'
      }
    }
  },

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: paths.src,
    use: 'babel-loader'
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: paths.src,
    use: ['style-loader', 'css-loader']
  },

  fileLoader: {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
    include: paths.src,
    use: {
      loader: 'file-loader',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  },

  urlLoader: {
     test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
     include: paths.src,
     use: {
       loader: 'url-loader',
       query: {
         limit: 10000,
         name: 'media/[name].[hash:8].[ext]'
       }
     },
  },

  resolve: {
    alias: {
      src: paths.src,
      components: join(paths.src, 'components'),
      utils: join(paths.src, 'utils')
    }
  }
};
