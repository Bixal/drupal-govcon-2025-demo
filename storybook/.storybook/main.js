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
  // ! Refer to the official USWDS documentation.
  // ! Demo: embedding one Storybook in another.
  refs: {
    "uswds-clone": {
      title: "USWDS Clone",
      url: "https://6897cd2bcc83ef9c6701e275-lthpyxdfdd.chromatic.com",
    },
  },
};
export default config;
