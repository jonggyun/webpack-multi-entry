const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin')
  .BabelMultiTargetPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/build'),
  },
  devServer: {
    contentBase: path.resolve('./build'),
    index: 'index.html',
    port: 3000,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: BabelMultiTargetPlugin.loader(),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CleanWebpackPlugin(),
    new BabelMultiTargetPlugin({
      normalizeModuleIds: true,
      exclude: [/node_modules/],
      babel: {
        presetOptions: {
          targets: {
            browsers: ['last 2 versions', 'ie >= 11'],
          },
          useBuiltIns: 'usage',
          corejs: 3,
          shippedProposals: true,
        },
      },
    }),
  ],
};
