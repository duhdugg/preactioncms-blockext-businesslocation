import commonjs from '@rollup/plugin-commonjs'
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

const getEsmConfig = (inputFile, outputName) => {
  return {
    input: inputFile,
    external: ['prop-types'],
    output: [
      {
        file: `dist/${outputName}.esm.js`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: plugins.concat(
      visualizer({ filename: `stats/${outputName}.html` })
    ),
  }
}

const m = [
  getEsmConfig(
    'src/BusinessLocation.jsx',
    'preactioncms-blockext-businesslocation'
  ),
  getEsmConfig(
    'src/BusinessLocationSettings.jsx',
    'preactioncms-blockext-businesslocation-settings'
  ),
]

export default m
