const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      title: 'JodieHag - FrontEnd Engineer',
      template: `${APP_DIR}/index.html`,
      hash: true,
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: `${APP_DIR}/static/img`,
        to: `${BUILD_DIR}/img`
      }, {
        from: `${APP_DIR}/static/scss/utils/fonts`,
        to: `${BUILD_DIR}/fonts`
      },
      {
        from: `${APP_DIR}/static/google*.html`,
        to: `${BUILD_DIR}/`
      },
      {
        from: `${APP_DIR}/static/sitemap.xml`,
        to: `${BUILD_DIR}/`
      }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
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
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot)$/,
        loader: 'base64-inline-loader?limit=1000&name=[name].[ext]'
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
