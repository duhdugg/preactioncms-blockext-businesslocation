let path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/Component.jsx',
  },
  output: {
    path: path.resolve('dist'),
    filename: 'component.min.js',
    libraryTarget: 'umd',
    library: {
      root: 'BusinessLocationComponent',
      amd: 'business-location-component',
      commonjs: 'business-location-component',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|\.test\.js)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    axios: {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
}
