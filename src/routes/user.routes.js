const { Router } = require("express");
const {
  AuthMiddleWare,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("./../middlewares");
const { CACHE_TIME } = require("./../helpers");

module.exports = function ({ UserController }) {
  const router = Router();
  router.get(
    "/",
    [AuthMiddleWare, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    UserController.getAll
  );
  router.get("/:userID", UserController.get);
  router.patch("/:userID", UserController.update);
  router.delete("/:userID", UserController.delete);

  return router;
};
