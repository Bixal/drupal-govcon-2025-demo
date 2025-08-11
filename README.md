# Drupal GovCon 2025 Demo

This repository contains demo code and examples for the [Branching Out: Design Systems](http://github.com/bixal/drupal-govcon-2025) training, focused on frontend development workflows for design systems.

**What's included:**

- **Storybook**: UI component development and documentation, includes TwigJS for easier templating and integration into Drupal projects.
- **Starlight (AstroJS)**: Documentation site powered by AstroJS.

## Getting Started

### Prerequisites

- Node.js (v22+ recommended)
- npm (v10+ recommended)

### Installation

Clone the repository and install dependencies for each package:

1. **Clone the repo**

   ```sh
   git clone https://github.com/Bixal/drupal-govcon-2025-demo.git
   cd drupal-govcon-2025-demo
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **That's it!** Both project dependencies are installed.

## NPM Scripts

You can run individual workspace commands from root:

```sh
# Runs the build command for the component library.
npm run build:vite --workspace storybook
```

You can also run the short version of the command:

```sh
# Runs the build command for the component library.
npm run build:vite -w storybook
```

## Usage

### Storybook

Run Storybook to see and develop components:

```sh
npm run lib
```

Storybook will start on [http://localhost:6060](http://localhost:6060).

#### USWDS Assets

USWDS assets can be imported with `@uswds/uswds` package entrypoints.
You can see the available entrypoints in the `exports` field in `node_modules/@uswds/uswds/package.json`.

```jsonc
// @uswds/uswds/package.json
"exports": {
  "./core/*": "./packages/uswds-core/src/styles/*",
  "./uswds-core/*": "./packages/uswds-core/*",
  "./functions/*": "./packages/uswds-core/src/styles/functions/*",
  ".": {
    "import": "./dist/js/uswds.min.js",
    "default": "./dist/js/uswds.min.js"
  },
  "./components/*": "./dist/components/*.js.mjs",
  "./src/js/components": "./packages/uswds-core/src/js/index.js",
  "./src/img/*": "./dist/img/*",
  "./js": "./packages/uswds-core/src/js/index.js",
  "./js/*": "./packages/*/src/index.js",
  "./css/*": "./dist/css/*",
  "./scss/*": "./packages/*/_index.scss",
  "./img/*": "./dist/img/*",
  "./fonts/*": "./packages/uswds-core/src/assets/fonts/*"
},
```

[Source | GitHub](https://github.com/uswds/uswds/blob/ad9ffc19f2a2bb6bc0b16f74440a111107bfcdb9/package.json#L35-L52) →

Any path you want to import will be prefixed with `@uswds/uswds`. For example, if you need specific component JS and initialize manually, you'd do that like so:

```js
// your-component.js
import UsaBanner from "@uswds/uswds/js/usa-banner"; // You'll need to manually initialize it.
import InfoIcon from "@uswds/uswds/img/usa-icons/info_outline.svg";
```

### Starlight Docs

Run the documentation site locally:

```sh
npm run docs
```

The docs site will be available at [http://localhost:7070](http://localhost:7070).

## Project Structure

```sh
.
├── storybook     # Component library
└── starlight     # Documentation site
```

## License

MIT © Bixal
