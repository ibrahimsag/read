import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";
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
  input: 'src/main.js',
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
  input: 'src/content.js',
  plugins: [
    string({
      include: 'src/en/*/*'
    }),
  ],
  output: {
    file: 'build/elements-content.js',
    format: 'iife',
    sourcemap: true,
  }
}
];
