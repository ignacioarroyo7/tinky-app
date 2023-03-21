// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://ebef-181-94-56-194.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};