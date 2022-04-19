import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: 'inline',
  clean: true,
  legacyOutput: true,
  format: ['esm', 'cjs'],
  dts: true,
});
