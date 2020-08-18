import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs()
  ],
  output: {
    file: 'build/bundle.js',
    format: 'cjs',
    sourcemap: true,
  }
};
