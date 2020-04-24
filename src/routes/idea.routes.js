const { Router } = require("express");

module.exports = function ({ IdeaController }) {
  const router = Router();
  router.get("", IdeaController.getAll);
  router.get("/:ideaID", IdeaController.get);
  router.get("/:userID/all", IdeaController.getUserIdeas);
  router.post("", IdeaController.create);
  router.post("", IdeaController.create);
  router.patch("/:ideaID", IdeaController.update);
  router.delete("/:ideaID/upvote", IdeaController.upvoteIdea);
  router.delete("/:ideaID/downvote", IdeaController.downvoteIdea);

  return router;
};
