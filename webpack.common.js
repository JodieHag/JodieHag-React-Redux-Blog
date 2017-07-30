const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  plugins: [new CopyWebpackPlugin([

    {
      from: `${APP_DIR}/index.html`
    }, {
      from: `${APP_DIR}/front/js`,
      to: `${BUILD_DIR}/js`
    }, {
      from: `${APP_DIR}/front/img`,
      to: `${BUILD_DIR}/img`
    }, {
      from: `${APP_DIR}/front/vendors`,
      to: `${BUILD_DIR}/vendors`
    }, {
      from: `${APP_DIR}/front/scss/utils/fonts`,
      to: `${BUILD_DIR}/fonts`
    }
  ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.sass/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      }, {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
      }, {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }, {
        test: /\.json$/,
        include: /node_modules/,
        loader: 'json-loader'
      }, {
        test: /\.md/,
        loader: 'markdown-it-loader'
      }, {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports-loader?define=>false&this=>window'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
