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
            type: Sequelize.INTEGER,
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
            type: Sequelize.DATEONLY,
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
            type: Sequelize.BOOLEAN,
            allowNull: false, // disallow null,
            defaultValue: false, // set default value
            validate: {
                notNull: {
                    msg: 'Please provide a value for "runtime"',
                }
            }
        },
    }, { sequelize });

    return Movie;
};
