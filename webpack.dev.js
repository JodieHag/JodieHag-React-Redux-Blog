const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    quiet: false,
    contentBase: './dist',
    port: 8080,
    stats: {
      colors: true
    },
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
      API_URL: JSON.stringify('http://localhost:3000')
    })
  ]
});
