// modules
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// .env
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 8080;

// Collections routes
const userRoute = require('./routes/user.route');
const favoriteRoute = require('./routes/favorite.route');
const playlistRoute = require('./routes/playlistRoute');
const recentlyPlayedRoute = require('./routes/recentlyPlayed.route');

// Successful connection notification
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', ()=> console.log('**** Connection to db established ****'));

app.use(express.json());
app.use(express.urlencoded({
  type: 'application/x-www-form-urlencoded',
  extended: true,
}));

// Routers
app.use(cors())
app.use('/', userRoute);
app.use('/', favoriteRoute);
app.use('/', playlistRoute);
app.use('/', recentlyPlayedRoute);

// Information request error
app.use('*', (req, res) => {
  res.status(400);
  res.send("Path cannot found");
});

// Localhost
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});