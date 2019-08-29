// Import the Movie model.
const Movie =  require('../models/movie');

// Instantiate the controller object
const movieController = {};

// Controller method for handling a request for all movies
movieController.findAll = (req, res) => {
  // Uses the findAll method from Movie
  Movie.findAll()
  .then(movies => {
    // Sends the movies as a JSON object
    res.json({
      message: 'Success',
      data: movies
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single movie
movieController.findById = (req, res) => {
  // Movies method for finding by id, passes the id as an argument
  Movie.findById(req.params.id)
  .then(movie => {
    // Sends the movie as a JSON object
    res.json({
      message: "Success",
      data: movie
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = movieController;
