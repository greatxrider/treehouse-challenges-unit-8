const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Person extends Sequelize.Model { }
    Person.init({
        id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV1,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false, // disallow null
            validate: {
                notEmpty: {
                    notNull: {
                        msg: 'Please provide a value for "firstName"',
                    },
                    notEmpty: {
                        msg: 'Please provide a value for "firstName"',
                    },
                    len: {
                        args: [2, 50],
                        msg: 'First name should be between 2 and 50 characters long'
                    },
                    isAlpha: {
                        msg: 'First name should only contain letters'
                    }
                }
            }
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false, // disallow null
            validate: {
                notEmpty: {
                    notNull: {
                        msg: 'Please provide a value for "lastName"',
                    },
                    notEmpty: {
                        msg: 'Please provide a value for "lastName"',
                    },
                    len: {
                        args: [2, 50],
                        msg: 'Last name should be between 2 and 50 characters long'
                    },
                    isAlpha: {
                        msg: 'Last name should only contain letters'
                    }
                }
            }
        }
    }, // Model options object
        {
            modelName: 'person',
            sequelize
        }
    );

    return Person;
}
