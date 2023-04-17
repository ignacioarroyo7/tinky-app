// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://b77b-181-94-58-184.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};