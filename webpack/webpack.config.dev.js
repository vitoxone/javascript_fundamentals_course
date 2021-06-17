const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  entry: {
    'index.bundle': ['@babel/polyfill', './src/scripts/index.js'],
},
  output:{
    filename: '[name].js',
    path: Path.resolve(__dirname, 'build/'),    
    chunkFilename: '[id].[chunkhash].js'
},
  devServer: {
    port: 8080,
    contentBase: Path.resolve(__dirname, 'build/'),
    inline: true,
    disableHostCheck: true,
    open: true
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StylelintPlugin({
      files: Path.join('src', '**/*.s?(a|c)ss'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        // test: /\.js$/,
        // include: Path.resolve(__dirname, '../src'),
        // loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
});
