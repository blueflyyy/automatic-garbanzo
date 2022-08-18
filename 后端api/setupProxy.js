const proxy = require("http-proxy-middleware");

module.export = function (app) {
  app.use(
    proxy("/juejin", {
      //遇见/api前缀的请求，就会触发该代理配置
      target: "http://localhost:5000", //请求转发给谁
      changeOrigin: true, //控制服务器中相应请求头Host的值
      pathRewrite: { "^/juejin": "" }, //重写请求路径
    })
  );
};
//this is a example to get data

/*
  notice: don't change this file's name
          this file must be located in the same folder with index.js(x)
*/

/*
  const searchToBackEnd = () => {
    axios.get("/juejin/list").then(   //the api in back-end is /list
      (res) => {
        console.log("success", res);
      },
      (err) => {
        console.log("error", err.mes);
      }
    );
  };
*/
