'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Images',
      [
        {
          link: 'https://cdnn1.img.sputnik-ossetia.ru/img/945/93/9459311_0:160:3073:1888_1920x0_80_0_0_93dcc8a2c735006de92bc583cc06a0cc.jpg',
          animalId: 1,
        },
        {
          link: 'https://img.kanal-o.ru/img/2019-10-21/fmt_81_24_shutterstock_193480949.jpg',
          animalId: 1,
        },
        {
          link: 'https://cdnn1.img.sputnik.tj/img/103132/96/1031329647_124:0:1884:1936_1920x0_80_0_0_3eb47985c63a71cf67813ad6c792a174.jpg',
          animalId: 1,
        },
        {
          link: 'https://info.sibnet.ru/ni/600/600911x630x0_1634969077.jpg',
          animalId: 1,
        },
        {
          link: 'https://s9.travelask.ru/uploads/post/000/018/662/main_image/full-96660aea703c7815dc8bf475968a63b0.jpg',
          animalId: 2,
        },
        {
          link: 'https://avatars.dzeninfra.ru/get-zen_doc/2455156/pub_5f05c8b526213219538c1af6_5f05ca2d280723676e38531c/scale_1200',
          animalId: 2,
        },
        {
          link: 'https://avatars.dzeninfra.ru/get-zen_doc/96748/pub_6164591fbce47725ffe4fc82_61645b921ddb34771ad102a6/scale_1200',
          animalId: 2,
        },
        {
          link: 'https://avatars.dzeninfra.ru/get-zen_doc/230233/pub_5b3febe6489e8d00ac4e2df0_5b3fed9889690700ab23c5e1/scale_1200',
          animalId: 2,
        },
        {
          link: 'https://avatars.dzeninfra.ru/get-zen_doc/2442582/pub_5f0cc99753d9417999caaedb_5f0ccacdb156c6111e5e5fb4/scale_1200',
          animalId: 3,
        },
        {
          link: 'https://ianimal.ru/wp-content/uploads/2011/08/korolevskaya-kobra01.jpg',
          animalId: 3,
        },
        {
          link: 'https://trendymen.ru/images/article1/125388/prev1125388.jpg',
          animalId: 3,
        },
        {
          link: 'https://inaturalist-open-data.s3.amazonaws.com/photos/157899882/large.jpg',
          animalId: 3,
        },
        {
          link: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Pilanesberg_Rhino.JPG',
          animalId: 4,
        },
        {
          link: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/2015_05_22_Nargis_Fakhri_Ol_Pejeta_JPEG_RESIZED_0020.jpg',
          animalId: 4,
        },
        {
          link: 'https://vmrucdn.servicecdn.ru/2023.06/original/649308c682682c5730b43be8.jpg',
          animalId: 4,
        },
        {
          link: 'https://mf.b37mrtl.ru/russian/images/2018.07/article/5b3e4dda18356190038b45a4.jpg',
          animalId: 4,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  },
};
