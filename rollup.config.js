import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/recipe.js',
    format: 'cjs',
  },
  external: ['emotion', 'emotion-theming', 'polished', 'prop-types', 'react', 'react-emotion'],
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['stage-1', 'react', ['env', {modules: false}]],
      plugins: ['emotion'],
    }),
    resolve(),
    commonjs(),
    uglify(),
  ],
};
