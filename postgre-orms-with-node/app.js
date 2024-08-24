const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('TestDB', 'postgres', 'daligdig', {
    host: 'localhost',
    dialect: 'postgres'
});

// async IIFE
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();
