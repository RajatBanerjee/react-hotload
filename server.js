'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('./webpack.config.dev');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _index = require('./client/index.js');

var _index2 = _interopRequireDefault(_index);

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader/patch').enterModule;

  enterModule && enterModule(module);
})();

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

var compiler = (0, _webpack2.default)(_webpackConfig2.default);

app.use((0, _webpackDevMiddleware2.default)(compiler, {
  hot: true,
  publicPath: _webpackConfig2.default.output.publicPath,
  noInfo: true
}));
app.use((0, _webpackHotMiddleware2.default)(compiler));

app.get('/*', function (req, res) {
  res.send('\n  <!DOCTYPE html>\n  <head>\n    <title>Universal Reacl</title>\n    <link rel="stylesheet" href="/css/main.css">\n    <script src="/bundle.js" defer></script>\n  </head>\n  <body>\n    <div id="root">' + (0, _server.renderToString)(_react2.default.createElement(_index2.default, null)) + '</div>\n  </body>\n</html>\n');
});

app.listen(3000, function () {
  return console.log('Running on localhost:3000');
});
;

(function () {
  var reactHotLoader = require('react-hot-loader/patch').default;

  var leaveModule = require('react-hot-loader/patch').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, 'app', 'index.js');
  reactHotLoader.register(compiler, 'compiler', 'index.js');
  leaveModule(module);
})();

;
