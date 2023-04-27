// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: "https://ef25-181-110-77-61.sa.ngrok.io",
      target: "http://181.116.215.107:4000",
      changeOrigin: true,
    })
  );
};