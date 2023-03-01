// import { enviroment } from './enviroment';

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://475a-2803-9800-9441-4c22-fc09-5841-d6b0-7030.sa.ngrok.io",
      changeOrigin: true,
    })
  );
};