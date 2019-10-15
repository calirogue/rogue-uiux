const path = require("path");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./client/main.js")
      .end(),
      config.resolve.alias
        .set("@", path.join(__dirname, "./client"))
        .set("@components", path.join(__dirname, "client", "components"))
        .set("@assets", path.join(__dirname, "client", "assets"))
        .set("@layouts", path.join(__dirname, "client", "layouts"))
        .set("@scss", path.join(__dirname, "client", "scss"))
        .set("@views", path.join(__dirname, "client", "views"));
  }
};
