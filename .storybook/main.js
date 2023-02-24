const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@Assets": path.resolve(__dirname, "../", "src/Assets"),
      "@Components": path.resolve(__dirname, "../", "src/Shared/Components"),
      "@Configs": path.resolve(__dirname, "../", "src/Configs"),
      "@Hooks": path.resolve(__dirname, "../", "src/Shared/Hooks"),
      "@Styles": path.resolve(__dirname, "../", "src/Styles"),
      "@Utils": path.resolve(__dirname, "../", "src/Utils"),
    };
    return config;
  },
};
