const db = require("../models/index");
const Todos = db.todos;
class IndexController {
  static async get(req, res) {
    const todos = await Todos.findAll({ raw: true });
    return res.render("index", {
      todos,
    });
  }
}

module.exports = IndexController;
