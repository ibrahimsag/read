import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import json from '@rollup/plugin-json';

export default [{
  input: 'main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
  ],
  output: {
    file: 'build/main.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'books.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    string({
      include: 'prose/**/*'
    }),
    json()
  ],
  output: {
    file: 'build/books.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'prepare.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    string({
      include: 'prose/**/*'
    })
  ],
  output: {
    file: 'build/prepare.js',
    format: 'cjs',
    sourcemap: true,
  }
},
];
