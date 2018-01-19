const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      exclude: /(node_modules)/,
      uglifyOptions: { ecma: 5 }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      API_URL: JSON.stringify('')
    })
  ]
});
