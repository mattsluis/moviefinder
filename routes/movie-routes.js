// Import express
const express = require('express');
// Define the router using the express router
const movieRouter = express.Router();

// Import the moviesController
const movieController = require('../controllers/movie-controller');

// For each route access the correct controller method

// Request all movies, send it to the / route
movieRouter.get('/', movieController.findAll);

// Request single movie, send it to the /:id route
movieRouter.get('/:id', movieController.findById);

// Export the router
module.exports = movieRouter;
