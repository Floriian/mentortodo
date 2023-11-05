const Router = require("express").Router;
const IndexController = require("../controllers/index.controller");

const indexRouter = new Router();

indexRouter.get("/", IndexController.get);

module.exports = indexRouter;
