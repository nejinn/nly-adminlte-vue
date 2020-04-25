module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/nly-adminlte-vue-demo" : "/",
  outputDir: "dist",
  pages: {
    index: {
      // page 的入口
      entry: "example/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html"
    }
  }
};
