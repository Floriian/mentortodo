const db = require("../models/index");
const Todos = db.todos;

const create = async (dto) => {
  try {
    const todo = Todo.create({
      title: dto.title,
      description: dto.description,
    });

    if (todo) return true;
    if (!todo) return false;
  } catch (error) {
    console.error(error);
  }
};

const findAll = async () => {
  return await Todos.findAll();
};

module.exports = {
  create,
  findAll,
};
