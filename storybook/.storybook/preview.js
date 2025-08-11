import "@uswds/uswds"; // USWDS JS for components
import "../packages/index.scss"; // Our custom theme styles.

import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        language: "html",
        transform: (src) =>
          prettier.format(src, {
            parser: "html",
            plugins: [parserHtml],
            printWidth: 80,
            htmlWhitespaceSensitivity: "ignore",
          }),
      },
      canvas: {
        sourceState: "shown",
      },
    },
  },
};

export default preview;
