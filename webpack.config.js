const { resolve } = require('path');
const webpack = require('webpack');

const rootDir = resolve(__dirname);

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      `${rootDir}/src/main.js`
    ]
  },
  output: {
    filename: '[name].js',
    path: `${rootDir}/dist`,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]',
          camelCase: true
        }
      }]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
