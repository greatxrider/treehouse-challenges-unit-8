const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Model { }
  Movie.init({
    title: Sequelize.STRING,
  }, { sequelize });
  return Movie;
};
