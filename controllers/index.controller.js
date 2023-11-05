const TodoService = require("../services/todo.service");

class IndexController {
  static async get(req, res) {
    return res.render("index");
  }
}

module.exports = IndexController;
