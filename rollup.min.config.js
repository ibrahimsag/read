import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    terser(),
  ],
  output: {
    file: 'build/main.js',
    format: 'iife',
    sourcemap: false,
  }
},
{
  input: 'books.js',
  plugins: [
    commonjs(),
    string({
      include: 'prose/**/*'
    }),
    json(),
    terser()
  ],
  output: {
    file: 'build/books.js',
    format: 'iife',
    sourcemap: false,
  }
},
];
