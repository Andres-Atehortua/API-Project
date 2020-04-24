const { Router } = require("express");
const { AuthMiddleWare } = require("./../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();
  router.get("/", [AuthMiddleWare], UserController.getAll);
  router.get("/:userID", UserController.get);
  router.patch("/:userID", UserController.update);
  router.delete("/:userID", UserController.delete);

  return router;
};
