import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default [{
  input: 'src/main.js',
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
  input: 'src/thex.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
  ],
  output: {
    name: 'thex',
    file: 'build/thex.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'src/doc.js',
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
  input: 'src/experiment.js',
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
  input: 'src/books.js',
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
  input: 'src/latest.js',
  plugins: [
    string({
      include: 'src/elements/*/*'
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
