'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tarifs',
      [
        {
          name: 'Будние дни для взрослых',
          description: 'Выгодный тариф для взрослых с пн-пт',
          price: '800₽',
        },
        {
          name: 'Будние дни для детей',
          description: 'Выгодный тариф для взрослых с пн-пт',
          price: '500₽',
        },
        {
          name: 'Выходные дни для взрослых',
          description: 'Выгодный тариф для взрослых на выходные дни',
          price: '700₽',
        },
        {
          name: 'Выходные дни для детей',
          description: 'Выгодный тариф для детей на выходные дни',
          price: '350₽',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tarifs', null, {});
  },
};
