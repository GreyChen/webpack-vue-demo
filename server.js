const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler, {
    log: false, 
    heartbeat: 2000,
}))

app.listen(3000, function () {
    console.log('example app listening on port 3000!\n')
})

// const webpackDevServer = require('webpack-dev-server');
// const webpack = require('webpack');

// const config = require('./webpack.config.js');
// const options = {
//     contentBase: './dist',
//     hot: true,
//     host: 'localhost'
// };

// webpackDevServer.addDevServerEntrypoints(config, options);
// const compiler = webpack(config);
// const server = new webpackDevServer(compiler, options);

// server.listen(5000, 'localhost', () => {
//     console.log('dev server listening on port 5000');
// });