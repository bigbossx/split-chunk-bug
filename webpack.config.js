const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { commonSize } = require("./common");
const { DefinePlugin } = require("webpack");
/**
 * @type {import('webpack').Configuration}
 */
const config = {
  // Your webpack configuration here
  output: {
    path: path.resolve(__dirname, "dist/webpack"),
    filename: "[name].[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      ...commonSize,
    },
    moduleIds: "named",
    chunkIds: "named",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new DefinePlugin({ __BUNDLE__: JSON.stringify("webpack") }),
  ],
};

module.exports = config;
