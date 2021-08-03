// Var
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

// Playlist routes
router.post('/playlist', playlistController.create); // Create a new playlist
router.get('/playlist', playlistController.getPlaylist); // Call all playlist
router.get('/playlist/:id', playlistController.getPlaylist); // Call an specific playlist with the id
router.put('/playlist/:id',playlistController.updatePlaylist); // Add song into an specific playlist
router.delete('/playlist-song/:id',playlistController.deletePlaylistBySong); // Delete a song from a specific playlist
router.delete('/playlist/:id',playlistController.deletePlaylist); // Delete an specific playlist

// Export
module.exports = router;