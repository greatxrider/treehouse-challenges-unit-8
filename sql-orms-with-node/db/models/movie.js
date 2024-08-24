const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model { }
    Movie.init({
        id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV1,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false, // disallow null
        },
        runtime: {
            type: Sequelize.INTEGER,
            allowNull: false, // disallow null
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false, // disallow null
        },
        isAvailableOnVHS: {
            type: Sequelize.BOOLEAN,
            allowNull: false, // disallow null,
            defaultValue: false, // set default value
        },
    }, { sequelize });

    return Movie;
};
