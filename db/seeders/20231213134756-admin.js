'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          password: '123',
          email: 'test1@mail.ru',
        },
        {
          password: '123',
          email: 'test2@mail.ru',
        },
        {
          password: '123',
          email: 'test3@mail.ru',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
