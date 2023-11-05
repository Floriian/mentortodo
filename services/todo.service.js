const Todo = require("../models/todo.model");

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
  return await Todo.findAll({ raw: true });
};

module.exports = {
  create,
};
