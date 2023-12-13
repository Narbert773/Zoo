'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Image, { foreignKey: 'animalId' });
    }
  }
  Animal.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Animal',
    },
  );
  return Animal;
};
