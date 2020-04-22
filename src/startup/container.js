const { createContainer, asValue, asClass, asFunction } = require("awilix");

//Config
const config = require("./../config");
const app = require(".");

//Services
const { HomeService } = require("./../services");

//Controlers
const { HomeController } = require("./../controllers");

//Routes
const { HomeRoutes } = require("./../routes/index.routes");
const Routes = require("./../routes");

//Models
const { Comment, Idea, User } = require("./../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  });
module.exports = container;
