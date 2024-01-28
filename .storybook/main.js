const { rules, plugins } = require("./settings");

module.exports = {
  stories: [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: [
    "../stories/assets",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.module.rules.push(...rules);
    config.plugins.push(...plugins);

    return config;
  }
}