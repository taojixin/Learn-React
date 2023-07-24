const {
  createProxyMiddleware
} = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware(
      "/api1", {
          target: "http://localhost:5000",
          changeOrigin: true,
          pathRewrite: {
              "^/api1": "" // 如果是/api开头的请求全部跳至target对应的地址
          }
      }
  ));
};
