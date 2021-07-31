const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

//actualizar datos
router.put('/favorite', favoriteController.upsert);
router.get('/favorite/:id_user', favoriteController.getFavoriteMusicByUser);
router.delete('/favorite/:id_user/song/:song', favoriteController.deleteFavoriteMusicByUserAndSong);

module.exports = router;
