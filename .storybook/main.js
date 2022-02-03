const { theme } = require("../theme.js");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(less)$/,
      use: [
        { loader: "css-loader", options: { url: false } },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              relativeUrls: false,
              javascriptEnabled: true,
              modifyVars: {
                ...theme,
              },
            },
          },
        },
      ],
    });

    return config;
  }
}