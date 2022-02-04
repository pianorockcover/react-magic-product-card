const { resolve } = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { rules, plugins } = require("./.storybook/settings.js");

const config = {
  mode: "production",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      ...rules,
    ],
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin(),
    ],
  },
  plugins,
};

module.exports = config;
