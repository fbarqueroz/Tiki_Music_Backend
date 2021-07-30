/* eslint-disable import/no-unresolved */
/*

Modules for this proyect:
npm i dotenv
npm i md5
npm i mongoose
npm i nodemon
npm i express
npm i express-validator

*/

// modules
require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');

// .env
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 8080;

// Collections routes
const userRoute = require('./routes/user.route');
const favoriteRoute = require('./routes/favorite.route');
const playlistRoute = require('./routes/playlistRoute');
const rPlayedRoute = require('./routes/rPlayed.route');


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', ()=> console.log('**** Connection to db established ****'));

app.use(express.json());
app.use(express.urlencoded({
  type: 'application/x-www-form-urlencoded',
  extended: true,
}));

// Routers
app.use('/', userRoute);
app.use('/', favoriteRoute);
app.use('./', playlistRoute);
app.use('/', rPlayedRoute);

app.use('*', (req, res) => {
  res.status(400);
  res.send("Path no found");
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server running on ${HOSTNAME}:${PORT}`);
});