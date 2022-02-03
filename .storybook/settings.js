const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const theme = require("../theme.json");

/**
 * Webpack settings common for storybook and production build
 */
module.exports = {
  rules: [
    {
      test: /\.(less)$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: "css-loader", options: { url: false } },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              relativeUrls: false,
              modifyVars: {
                ...theme,
              },
            },
          },
        },
      ],
    },
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/index.css",
    }),
  ],
}