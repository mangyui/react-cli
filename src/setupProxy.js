// 跨域
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
      proxy.createProxyMiddleware('/other', {  //`api`是需要转发的请求 
        target: 'http://music.163.com',  // 这里是接口服务器地址
        changeOrigin: true,
        pathRewrite: {'^/other': ''}
      })
    )
};