module.exports = {
  stories: [
    "./index.stories.js",
    "./button.stories.js",
    "./withConsole.stories.js",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-storysource",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds",
  ],
  framework: {
    options: {},
    name: "@storybook/react-webpack5",
  },
  async webpackFinal(config) {
    return config;
  },
};
