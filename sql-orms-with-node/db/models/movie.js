const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Movie model // Using Extends Method
    class Movie extends Model { }
    Movie.init(
        { title: DataTypes.STRING },
        { sequelize }
    );

    return Movie;
};
