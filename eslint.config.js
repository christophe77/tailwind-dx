import tailwindDxPlugin from './eslint-rules/index.js';

export default [
  {
    plugins: {
      'tailwind-dx': tailwindDxPlugin
    },
    rules: {
      'tailwind-dx/layers': 'error'
    }
  }
]; 