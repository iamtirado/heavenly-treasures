import imba from 'imba/rollup.js';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass'

export default {
    input: './src/app.imba',
    output: {
        file: './public/bundle.js',
        format: 'esm',
        name: 'bundle',
        sourcemap: true
    },
    plugins: [
        imba({target: 'web'}),
        resolve({extensions: ['.imba2','.imba', '.mjs','.js','.json']}),
        commonjs(),
        sass()
    ]
}