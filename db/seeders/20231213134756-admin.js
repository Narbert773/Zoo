'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPasswords = await Promise.all([
      bcrypt.hash('123', 10), 
      bcrypt.hash('123', 10),
      bcrypt.hash('123', 10),
    ]);

    const adminsData = [
      {
        password: hashedPasswords[0],
        email: 'test1@mail.ru',
      },
      {
        password: hashedPasswords[1],
        email: 'test2@mail.ru',
      },
      {
        password: hashedPasswords[2],
        email: 'test3@mail.ru',
      },
    ];

    await queryInterface.bulkInsert('Admins', adminsData, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
