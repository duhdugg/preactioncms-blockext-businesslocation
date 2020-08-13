import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import sucrase from '@rollup/plugin-sucrase'
import external from 'rollup-plugin-peer-deps-external'
import pkg from './package.json'
import visualizer from 'rollup-plugin-visualizer'

const plugins = [
  external(),
  nodeResolve(),
  postcss({}),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['jsx'],
  }),
  commonjs(),
]

const cjsConfig = {
  input: 'src/BusinessLocation.jsx',
  external: ['prop-types'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      plugins: [
        getBabelOutputPlugin({
          compact: true,
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'cjs',
                targets: 'maintained node versions',
              },
            ],
          ],
        }),
      ],
    },
  ],
  plugins: plugins.concat(visualizer({ filename: 'stats/cjs.html' })),
}

const esmConfig = {
  input: 'src/BusinessLocation.jsx',
  external: ['prop-types'],
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: plugins.concat(visualizer({ filename: 'stats/esm.html' })),
}

export default [esmConfig, cjsConfig]
