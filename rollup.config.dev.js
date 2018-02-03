import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/game.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // Only transpile source code.
    })
  ]
};
