// Var
const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

// Favorites songs routes
router.put('/favorite', favoriteController.upsert); // Add new favorites songs
router.get('/favorite/:id_user', favoriteController.getFavoriteMusicByUser); // Call existing favorite songs
router.delete('/favorite/:id_user/song/:song', favoriteController.deleteFavoriteMusicByUserAndSong); // Delete an specific favorite song

// Export
module.exports = router;
