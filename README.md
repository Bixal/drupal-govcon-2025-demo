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

2. **Install Storybook dependencies**

   ```sh
   cd ./storybook && npm install
   ```

3. **Install Starlight dependencies**

   ```sh
   cd ../starlight && npm install
   ```

## Usage

### Storybook

Run Storybook to see and develop components:

```sh
cd storybook
npm start
```

Storybook will start on [http://localhost:6060](http://localhost:6060).

### Starlight Docs

Run the documentation site locally:

```sh
cd starlight
npm run dev
```

The docs site will be available at [http://localhost:7070](http://localhost:7070).

## Project Structure

```sh
.
├── storybook     # UI components & code
└── starlight     # Documentation site
```

## License

MIT © Bixal
