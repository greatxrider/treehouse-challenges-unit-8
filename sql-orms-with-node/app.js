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

        const movie3 = await Movie.build({
            title: 'Toy Story 3',
            runtime: 103,
            releaseDate: '2010-06-18',
            isAvailableOnVHS: false,
        })

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

        movie3.title = 'Updated Title';
        await movie3.save();
        console.log(movie3.toJSON());

        //findByPk
        const movieById = await Movie.findByPk(1);
        console.log('findByPk: ', movieById.toJSON());

        //findOne
        const movieByRuntime = await Movie.findOne({ where: { releaseDate: '2008-12-22' } });
        console.log('findOne: ', movieByRuntime.toJSON());

        //findAll
        // SELECT * FROM People WHERE lastName = 'Hanks';
        const movies = await Movie.findAll({
            where: {
                title: 'The Incredibles'
            }
        });
        console.log('findAll: ', movies.map(movie => movie.toJSON()));

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
