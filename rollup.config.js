import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default [
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
  input: 'src/elements/latest.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    string({
      include: 'src/elements/*/*'
    }),
  ],
  output: {
    file: 'build/latest.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'src/elements/main.js',
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    file: 'build/elements.js',
    format: 'iife',
    sourcemap: true,
  }
},
{
  input: 'src/elements/content.js',
  plugins: [
    string({
      include: 'build/*.json'
    }),
  ],
  output: {
    file: 'build/elements-content.js',
    format: 'iife',
    sourcemap: true,
  }
}
];
