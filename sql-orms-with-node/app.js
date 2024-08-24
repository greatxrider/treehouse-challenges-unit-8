const db = require('./db');
const { Movie, Person } = db.models;

// async IIFE
(async () => {
    // Sync all tables
    await db.sequelize.sync({ force: true });

    try {
        // Instance of the Movie class represents a database row
        // using Promise.all()
        const movieInstances = await Promise.all([
            Movie.create({
                title: 'Toy Story',
                runtime: 81,
                releaseDate: '1995-11-22',
                isAvailableOnVHS: true,
            }),
            Movie.create({
                title: 'The Incredibles',
                runtime: 115,
                releaseDate: '2008-12-22',
                isAvailableOnVHS: true,
            }),
        ]);

        // Instance of the Person class
        const personInstances = await Promise.all([
            Person.create({
                firstName: 'John',
                lastName: 'Lasseter'
            }),
            Person.create({
                firstName: 'Brad',
                lastName: 'Bird'
            })
        ]);

        const moviesJSON = movieInstances.map(movie => movie.toJSON());
        console.log(moviesJSON);

        await db.sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Error connecting to the database');
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
})();
