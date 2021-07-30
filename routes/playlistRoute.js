/* eslint-disable import/no-unresolved */
const express = require('express');

const router = express.Router();
const playlistController = require('../controllers/playlistController');

router.post('/playlist', playlistController.create);
router.get('/playlist', playlistController.getPlaylist);
router.get('/playlist/:id', playlistController.getPlaylist);
router.put('/playlist/:id',playlistController.updatePlaylist);
router.delete('/playlist-song/:id',playlistController.deletePlaylistBySong);
router.delete('/playlist/:id',playlistController.deletePlaylist);

module.exports = router;