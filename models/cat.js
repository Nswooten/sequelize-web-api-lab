'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    static associate(models) {
  
      // define association here
      Cat.hasMany(models.Feeding, {
        foreignKey: 'catId',
        as: 'feedings'
      })
  
    }
  }
  Cat.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};