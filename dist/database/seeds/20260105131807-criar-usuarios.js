"use strict";const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Maria',
          email: 'maria@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Mario',
          email: 'mario@gmail.com',
          password_hash: await bcrypt.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          nome: 'Marcus',
          email: 'marcus@gmail.com',
          password_hash: await bcrypt.hash('987654', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
