import { defineConfig } from "vite";
import yml from "@modyfi/vite-plugin-yaml";
import { join } from "node:path";
import twig from "vite-plugin-twig-drupal";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        // loadPaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
  plugins: [
    twig({
      /**
       * Lets you use short namespaces instead of long paths in twig templates.
       *
       * @example
       * {% include "@components/blurb/blurb.html.twig" %}
       *
       */
      namespaces: {
        uswds_base: join(__dirname, "./node_modules/@uswds/uswds/dist"),
        pages: join(__dirname, "./components/pages"),
      },
    }),
    // Allows Storybook to read data from YAML files.
    yml(),
  ],
  framework: "html",
});
