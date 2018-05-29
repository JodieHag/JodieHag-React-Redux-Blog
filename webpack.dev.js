const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');

module.exports = Merge(CommonConfig, {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  output: {
    path: BUILD_DIR,
    filename: 'main.js',
    sourceMapFilename: 'main.map'
  }
});
