import { defineConfig, transformWithOxc } from 'vite';

// The app keeps JSX in .js files, as Next allows; Vite only parses JSX in .jsx.
const jsxInJs = {
  name: 'jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!/\/(src|pages)\/.*\.js$/.test(id)) return null;
    return transformWithOxc(code, `${id}x`, { jsx: { runtime: 'automatic' } });
  },
};

export default defineConfig({
  plugins: [jsxInJs],
  test: { environment: 'jsdom' },
});
