// Var
const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');

// Playlist routes
router.post('/playlist', playlistController.create); // Create a new playlist
router.put('/playlist/:id', playlistController.updateplaylist); // Update Playlist by playlist id
router.get('/playlist/:id_user', playlistController.getPlaylist); // Call an specific playlist with the id-user
router.get('/playlist/:id_user/:id', playlistController.getOne); // Call an specific playlist with the id-user and the id
router.delete('/playlist/:id', playlistController.deletePlaylist); // Delete a song from a specific playlist
router.delete('/playlistsong/:id', playlistController.deletePlaylistSong); // Delete an specific playlist

// Export
module.exports = router;