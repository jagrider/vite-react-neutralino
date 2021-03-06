# vite-react-neutralino

A (slightly) opinionated Vite template project using React + NeutralinoJS. Inspired by [vitesse-neutralino](https://github.com/jaronwanderley/vitesse-neutralino).

## Features

- ⚡️ [React](https://github.com/facebook/react) + [Vite](https://github.com/vitejs/vite)

- 🔍 [ESLint](https://eslint.org) + [Prettier](https://prettier.io)

- 🗂 File based routing via [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) and React Router

- 💻 [Desktop Application](https://github.com/neutralinojs/neutralinojs)

- 🎨 [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)

#### Potential Addons (not included):

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by Vite
- VS Code Extensions
  - [TailwindCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Usage & Development

### Clone

You can [Create a repo from this template on GitHub](https://github.com/jagrider/vite-react-neutralino/generate). Alternatively, create a local copy (with cleaner git history):

```bash
# Create local project
npx degit jagrider/vite-react-neutralino my-app
cd my-app
```

### Setup

```bash
# install packages
npm i

# Grab NeutralinoJS libraries
neu update # If you don't have Neutralino CLI installed, run: npm i -g @neutralinojs/neu
```

## Running the App

### Initial Build

For your first use on the project, run

```bash
npm run build
```

### Running with Vite

To start the local Vite server, just use `npm start`. This will be accessible in the browser at [localhost:3000](http://localhost:3000).

### Running with Vite + NeutralinoJS

If you want to develop/test using the NeutralinoJS wrapper:

```bash
# Terminal 1: Start the Vite server
npm run start

# Terminal 2: Start Neutralino
npm run start:neu
```

The `start:neu` command starts our configuration of neu and tells it to use the frontend framework's HMR system within the Neutralino container. If you try to run `start:neu` before the web server is running, the window/HMR may not function correctly.

## Build

### NeutralinoJS

To build the Desktop Application

```bash
npm run build
```

## Making This Template Your Own

- [ ] Change the author name in `LICENSE`
- [ ] Change the manifest.name and manifest.short_name in `vite.config.js`
- [ ] Change the favicon.svg in `public`
- [ ] Change applicationId in `neutralino.config.json`
- [ ] Change modes.window.title in `neutralino.config.json`
- [ ] Change cli.binaryName in `neutralino.config.json`
- [ ] Clean up the READMEs and remove routes

## Why?

Inspired by [vitesse-neutralino](https://github.com/jaronwanderley/vitesse-neutralino), I created this template because I wanted a Vite + React + NeutralinoJS template with some basic configuration.
