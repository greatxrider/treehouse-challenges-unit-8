const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'movies.db'
});

// Movie model // Using Extends Method
class Movie extends Model { }

Movie.init(
    {
        title: DataTypes.STRING
    },
    { sequelize }
);

// async IIFE
(async () => {
    // Sync all tables
    await sequelize.sync({ force: true });

    try {
        // Instance of the Movie class represents a database row
        const movie = await Movie.create({
            title: 'Toy Story',
        });
        console.log(movie.toJSON());

        await sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
})();
