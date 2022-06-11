import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'src/experiment.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    terser(),
  ],
  output: {
    file: 'build/experiment.js',
    format: 'iife',
    sourcemap: false,
  }
}
];
