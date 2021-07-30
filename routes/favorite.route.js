const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

//actualizar datos
router.put('/favorite', favoriteController.upsert);
router.get('/favorite', favoriteController.getFavorite);
router.delete('/favorite', favoriteController.delete);

module.exports = router;
