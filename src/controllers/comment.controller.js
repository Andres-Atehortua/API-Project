let _commentService = null;
class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async get(req, res) {
    const { commentID } = req.params;
    const comment = await _commentService.get(commentID);
    return res.send(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentID } = req.params;
    const updatedComment = await _commentService.update(commentID, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentID } = req.params;
    const deletedComment = await _commentService.delete(commentID);
    return res.send(deletedComment);
  }

  async getIdeaComments(req, res) {
    const { ideaID } = req.params;
    const comments = await _commentService.getIdeaComments(ideaID);
    return res.send(comments);
  }

  async createComment(req, res) {
    const { body } = req;
    const { ideaID } = req.params;
    const { id: userID } = req.user;
    const createdComment = await _commentService.createComment(
      body,
      ideaID,
      userID
    );
    return res.status(201).send(createdComment);
  }
}

module.exports = CommentController;
