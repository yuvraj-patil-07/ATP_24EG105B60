# Vite React Starter

This boilerplate delivers a lightweight foundation for launching React on Vite, featuring fast Hot Module Replacement (HMR) and baseline ESLint rules.

At present, two official compiler plugins are supported:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) powered by [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) powered by [SWC](https://swc.rs/)

## React Compiler Integration

The experimental React Compiler remains disabled by default due to potential performance overhead during local builds. To configure it, refer to [this guide](https://react.dev/learn/react-compiler/installation).

## Advanced ESLint Customization

For enterprise or production-grade applications, transitioning to TypeScript with type-aware linting is highly recommended. Consult the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to learn how to incorporate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) into your workspace.
