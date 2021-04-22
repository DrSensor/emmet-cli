import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: '../emmet.js',
    format: 'es'
  },
  plugins: [nodeResolve()]
};

