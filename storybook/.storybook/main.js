// /** @type { import('@storybook/web-components-vite').StorybookConfig } */
/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../packages/**/*.mdx",
    "../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    // name: "@storybook/web-components-vite",
    name: "@storybook/html-vite",
    options: {},
  },
};
export default config;
