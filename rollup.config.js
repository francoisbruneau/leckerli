import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';

export default [
  { file: './src/index.tsx', name: 'leckerli' },
  { file: './src/gtm.ts', name: 'leckerli-gtm' },
].map(({ file, name }) => ({
  input: file,
  output: {
    compact: true,
    sourcemap: false,
    format: 'iife',
    dir: './dist/assets',
    entryFileNames: name + '.min.js',
    inlineDynamicImports: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser(),
    nodeResolve({ preferBuiltins: true }),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    typescript(),
  ],
}));
