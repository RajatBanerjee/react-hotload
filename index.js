import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';
import App from "./client/index.js";
import { renderToString } from "react-dom/server";
import React from "react";
let app = express();

app.use(bodyParser.json());


const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <head>
    <title>Universal Reacl</title>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/bundle.js" defer></script>
  </head>
  <body>
    <div id="root">${renderToString(<App />)}</div>
  </body>
</html>
`);
});

app.listen(3000, () => console.log('Running on localhost:3000'));
