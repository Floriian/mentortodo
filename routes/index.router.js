const Router = require("express").Router;
const IndexController = require("../controllers/index.controller");

const indexRouter = new Router();

indexRouter.get("/", IndexController.get);
indexRouter.post("/", IndexController.create);
indexRouter.get("/delete/:id", IndexController.delete);
indexRouter.get("/updateState/:id", IndexController.updateState);
module.exports = indexRouter;
