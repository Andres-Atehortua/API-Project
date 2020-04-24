const { createContainer, asValue, asClass, asFunction } = require("awilix");

//Config
const config = require("./../config");
const app = require(".");

//Services
const {
  HomeService,
  CommentService,
  IdeaService,
  UserService,
} = require("./../services");

//Controlers
const {
  HomeController,
  CommentController,
  IdeaController,
  UserController,
} = require("./../controllers");

//Routes
const {
  HomeRoutes,
  IdeaRoutes,
  CommentRoutes,
  UserRoutes,
} = require("./../routes/index.routes");
const Routes = require("./../routes");

//Models
const { Comment, Idea, User } = require("./../models");

//Repositories
const {
  CommentRepository,
  IdeaRepository,
  UserRepository,
} = require("./../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });
module.exports = container;
