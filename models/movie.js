// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the movies-app database.
// Specifically, the movies table.
const Movie = {};

// Define methods for the movie object

// Returns all movies from the table
Movie.findAll = () => {
    return db.query(
        `SELECT * FROM movies`
    );
};

// Return one movie with the specific id
Movie.findById = (id) => {
    return db.oneOrNone(
        `
        SELECT * FROM movies
        WHERE id = $1
        `,
        [id]
    );
};

// Export the movie object
module.exports = Movie;
