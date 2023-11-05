"use strict";
const { faker } = require("@faker-js/faker");
const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */

    const todos = new Array(6).fill({
      title: faker.lorem.words(),
      description: faker.lorem.lines(1),
      completed: false,
    });

    await queryInterface.bulkInsert("todos", todos);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
