import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import {terser} from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

export default [
{
  input: 'src/main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    file: 'build/elements.js',
    format: 'iife',
    sourcemap: false,
  }
},
{
  input: 'src/content.js',
  plugins: [
    commonjs(),
    string({
      include: ['src/en/*/*', 'src/tr/*/*']
    }),
    terser()
  ],
  output: {
    file: 'build/elements-content.js',
    format: 'iife',
    sourcemap: false,
  }
},
];
