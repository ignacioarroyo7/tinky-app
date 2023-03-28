// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://e1dd-181-110-77-61.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};