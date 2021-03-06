const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');

const webpackConfig = require('../webpack.config.js');

const app = express();
const compiler = webpack(webpackConfig);

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
