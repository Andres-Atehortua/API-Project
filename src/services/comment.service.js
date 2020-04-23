const BaseService = require("./base.service");
const _commentRepository = null;
const _ideaRepository = null;

class CommentService extends BaseService {
  constructor(CommentRepository, IdeaRepository) {
    super(CommentRepository);
    _commentRepository = CommentRepository;
    _ideaRepository = IdeaRepository;
  }
  async getIdeaComments(ideaID) {
    if (!ideaID) {
      const error = new Error();
      error.status = 400;
      error.message = "Idea ID must be sent";
      throw error;
    }
    const idea = await _ideaRepository.get(ideaID);
    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }
    const { comments } = idea;
    return comments;
  }
  async createComment(comment, ideaID) {
    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }

    const idea = await _ideaRepository.get(ideaID);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = "Idea does not exist";
      throw error;
    }
    const createcComment = await _commentRepository.create(comment);
    idea.comments.push(createcComment);
    return await _ideaRepository.update(ideaID, { comments: idea.comments });
  }
}

module.exports = CommentService;
