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
      "@Assistants": path.resolve(__dirname, "../", "src/Shared/Assistants"),
      "@Components": path.resolve(__dirname, "../", "src/Shared/Components"),
      "@Configs": path.resolve(__dirname, "../", "src/Configs"),
      "@Context": path.resolve(__dirname, "../", "src/Context"),
      "@Hooks": path.resolve(__dirname, "../", "src/Shared/Hooks"),
      "@Interfaces": path.resolve(__dirname, "../", "src/Shared/Interfaces"),
      "@Queries": path.resolve(__dirname, "../", "src/Shared/Queries"),
      "@Styles": path.resolve(__dirname, "../", "src/Styles"),
      "@Utils": path.resolve(__dirname, "../", "src/Utils"),
    };
    return config;
  },
};
