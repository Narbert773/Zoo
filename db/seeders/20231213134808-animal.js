'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Animals',
      [
        {
          name: 'Снежный барс',
          description:
            'Ирбис отличается тонким, длинным, гибким телом, относительно короткими лапами, небольшой головой и очень длинным хвостом.',
          img: 'https://animalzoom.ru/sites/default/files/field/image/irbis-1.jpg',
        },
        {
          name: 'Ленивец',
          description:
            'Ленивец величиной со среднюю собаку. У него длинная жесткая шерсть, имеющая зеленоватый окрас. Такой оттенок шубе зверя придают сине-зелёные водоросли, которые поселяются в его влажной шерсти.',
          img: 'https://i.stena.ee/20/2020-06-27_102222.jpg',
        },
        {
          name: 'Королевская кобра',
          description:
            'это самая большая ядовитая змея в мире. Отдельные экземпляры могут достигать в длину до 5,5 м, средние размеры взрослой кобры 3—4 метра. Несмотря на название, королевская кобра не относится к роду настоящих кобр, она выделяется в самостоятельный род Ophiophagus.',
          img: 'https://simple-fauna.ru/wp-content/uploads/2014/01/korolevskaya-kobra-1.jpg',
        },
        {
          name: 'Белый носорог',
          description:
            'четвёртое по величине сухопутное животное на планете после представителей семейства слоновых: саванного слона, азиатского слона и лесного слона. Это огромное млекопитающее — масса старых самцов достигает 4—4,5 т, порой даже до 5 (обычно 2—2,5 т), а длина тела — 4,2 м. ',
          img: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Rhino_%28234581759%29.jpeg',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Animals', null, {});
  },
};
