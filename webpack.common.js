const CopyWebpackPlugin = require('copy-webpack-plugin');
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
    }])
  ],
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
        test: /\.(jpe?g|png|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?limit=10000&name=[name].[ext]'
      }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }, {
        type: 'javascript/auto',
        test: /\.json$/,
        exclude: /node_modules/,
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
    extensions: ['.js', '.jsx'],
    descriptionFiles: ['package.json']
  }
};

module.exports = config;
