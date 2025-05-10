// product.routes.js

const { verifyToken } = require("../middlewares/authJwt");
const controller = require("../controllers/products.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/products", [verifyToken], controller.create);
  app.get("/api/products", [verifyToken], controller.findAll);
  app.get("/api/products/:id", [verifyToken], controller.findOne);
  app.put("/api/products/:id", [verifyToken], controller.update);
  app.delete("/api/products/:id", [verifyToken], controller.delete);
};