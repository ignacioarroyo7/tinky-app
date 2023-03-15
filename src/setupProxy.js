// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://9783-181-94-58-254.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};