const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Movie extends Model { }
    Movie.init({
        // Attributes object
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false, // disallow null
            validate: {
                notEmpty: {
                    // custom error message
                    notNull: {
                        msg: 'Please provide a value for "title"',
                    },
                    msg: 'Please provide a value for "title"',
                }
            }
        },
        runtime: {
            type: DataTypes.INTEGER,
            allowNull: false, // disallow null
            validate: {
                notNull: {
                    msg: 'Please provide a value for "runtime"',
                },
                min: {
                    args: 1,
                    msg: 'Please provide a value greater than "0" for "runtime"',
                },
            }
        },
        releaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false, // disallow null
            validate: {
                notNull: {
                    msg: 'Please provide a value for "releaseDate"',
                },
                isAfter: {
                    args: '1895-12-28',
                    msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"',
                },
            },
        },
        isAvailableOnVHS: {
            type: DataTypes.BOOLEAN,
            allowNull: false, // disallow null,
            defaultValue: false, // set default value
            validate: {
                notNull: {
                    msg: 'Please provide a value for "runtime"',
                }
            }
        },
    },
        // Model options object
        {
            modelName: 'movie',
            sequelize
        });
    return Movie;
};
