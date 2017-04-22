const { resolve } = require('path');
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const webpackConfig = require("./webpack.config.js");

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(resolve('index.html'))
});

app.listen(8000, function () {
  console.log("Development server running at localhost:8000");
});
