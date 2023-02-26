// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://d572-181-94-57-53.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};