import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { string } from "rollup-plugin-string";

export default [
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
}
];
