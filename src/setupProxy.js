// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://4bc3-181-110-77-83.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};