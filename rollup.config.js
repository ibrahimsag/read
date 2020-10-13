import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default [{
  input: 'main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    file: 'build/main.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'doc.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
  ],
  output: {
    file: 'build/doc.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'experiment.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
  ],
  output: {
    file: 'build/experiment.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'books.js',
  plugins: [
    json()
  ],
  output: {
    file: 'build/books.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'latest.js',
  plugins: [
    string({
      include: 'elements/*/*'
    }),
    json()
  ],
  output: {
    file: 'build/latest.js',
    format: 'iife',
    sourcemap: true,
  }
},
];
