const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const path = require('path');

// Static files
app.use(express.static('build'));
// API Routes
app.use('/api/movies', require('./routes/movie-routes'));
//Root Route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
