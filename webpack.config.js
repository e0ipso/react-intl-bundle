const path = require('path');
const webpack = require('webpack');
/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */
const TerserPlugin = require('terser-webpack-plugin');
module.exports = ['source-map'].map(devtool => ({
    mode: 'production',
    plugins: [new webpack.ProgressPlugin()],
    module: {
      rules: []
    },
    devServer: {
      open: false
    },
    devtool,
    optimization: {
      minimizer: [new TerserPlugin()],
      splitChunks: false
    },
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'react-intl.production.min.js',
      library: 'ReactIntl',
      libraryTarget: 'var',
    },
    externals: {
      react: 'React',
    },
  }
));
