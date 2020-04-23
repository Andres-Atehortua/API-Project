const BaseService = require("./base.service");
const _ideaRepository = null;

class IdeaService extends BaseService {
  constructor(IdeaRepository) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

  async getUserIdeas(author) {
    if (!author) {
      const error = new Error();
      error.status = 400;
      error.message = "User ID must be sent";
      throw error;
    }
    return await _ideaRepository.getUserIdeas(author);
  }

  async upVoteIdea(ideaID) {
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
    idea.upvotes.push(true);
    return await _ideaRepository.update(ideaID, { upvotes: idea.upvotes });
  }
  async downVoteIdea(ideaID) {
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
    idea.downvotes.push(true);
    return await _ideaRepository.update(ideaID, { upvotes: idea.downvotes });
  }
}

module.exports = IdeaService;
