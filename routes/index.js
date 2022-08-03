const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const articleRoutes = require("./articleRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/articles", articleRoutes);
  app.use("/admin", adminRoutes);
};
