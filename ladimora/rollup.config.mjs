import scss from 'rollup-plugin-scss';
import terser from '@rollup/plugin-terser';
import path from 'path';
import { fileURLToPath } from 'url';
import * as sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  input: 'index.js',
  output: {
    file: 'dist/ladimora.min.js',
    format: 'iife',
    name: 'LaDimoraUI'
  },
  plugins: [
    scss({
      output: path.resolve(__dirname, 'dist/ladimora.min.css'),
      sass,
      outputStyle: 'compressed'
    }),
    terser()
  ]
};
