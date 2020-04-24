const { Router } = require("express");

module.exports = function ({ CommentController }) {
  const router = Router();
  router.get("/:commentID/unique", CommentController.get);
  router.get("/ideaID", CommentController.getIdeaComments);
  router.post("/ideaID", CommentController.createComment);
  router.patch("/:commentID", CommentController.update);
  router.delete("/:commentID", CommentController.delete);

  return router;
};
