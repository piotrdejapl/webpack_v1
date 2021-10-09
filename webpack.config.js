
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist', 'js'),
        clean: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader", 
            "css-loader", 
            "sass-loader"],
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "../img"
            }
          }
        }
      ],
    },
     // webpack-dev-server configuration
    devServer: {

      static: [
        {
          directory: path.resolve(__dirname, './dist')
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: '../index.html'
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
}