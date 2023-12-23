const db = require("../models/index");
const Todos = db.todos;
class IndexController {
  static async get(req, res) {
    const todos = await Todos.findAll({ raw: true, order: [["id", "DESC"]] });
    return res.render("index", {
      todos,
    });
  }

  static async create(req, res) {
    const { title, description } = req.body;
    await Todos.create({ title, description });
    res.redirect("/");
  }

  static async delete(req, res) {
    await Todos.destroy({
      raw: true,
      where: { id: +req.params.id },
    });
    res.redirect("/");
  }

  static async updateState(req, res) {
    try {
      const { id } = req.params;
      const findTodo = await Todos.findOne({ where: { id: +id } });
      if (!findTodo) return;

      const updatedTodo = await Todos.update(
        { completed: !findTodo.completed },
        { where: { id: +id } }
      );
      return res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = IndexController;
