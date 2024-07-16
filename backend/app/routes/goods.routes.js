const { authJwt } = require("../middleware");
const controller = require("../controllers/goods.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/panels", controller.panelsList);

  // app.get(
  //   "/api/mod",
  //   [authJwt.verifyToken, authJwt.isSuper],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};
